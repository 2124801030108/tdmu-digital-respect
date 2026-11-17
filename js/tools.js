(function() {
  const $ = s => document.querySelector(s);
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const mkBtn = $('#mk');
  if (mkBtn) {
    mkBtn.onclick = () => {
      const v = id => ($(id) && $(id).value.trim()) || '(chưa điền)';
      const now = new Date();
      const f2El = $('#f2');
      const timeVal = (f2El && f2El.value.trim()) || now.toLocaleString('vi-VN');
      if (f2El && !f2El.value.trim()) f2El.value = timeVal;

      const f1Val = ($('#f1') && $('#f1').value) || 'Facebook';
      const evEl = $('#ev');
      if (evEl) {
        evEl.value = 'BẢN GHI NHẬN SỰ VIỆC BẠO LỰC MẠNG\n' +
          'ĐẠI HỌC THỦ DẦU MỘT – DỰ ÁN TDMU DIGITAL RESPECT\n' +
          '==================================================\n' +
          'Nền tảng xảy ra: ' + f1Val + '\n' +
          'Thời điểm ghi nhận: ' + timeVal + '\n' +
          'Tài khoản/Đối tượng gây hại: ' + v('#f3') + '\n' +
          'Mô tả hành vi & Ảnh hưởng: ' + v('#f4') + '\n' +
          'Đường dẫn liên kết (Link): ' + v('#f5') + '\n' +
          'Biện pháp kỹ thuật đã làm: Đã chụp màn hình, lưu URL, báo cáo vi phạm lên nền tảng và tạm thời chặn tương tác.\n' +
          'Đề nghị hỗ trợ: Kính nhờ Ban Cố vấn học tập / Phòng Công tác sinh viên can thiệp xác minh để bảo vệ sinh viên.\n' +
          '==================================================\n' +
          'Thời gian lập văn bản: ' + now.toLocaleString('vi-VN');
      }
    };
  }

  async function copyText(el, btn) {
    if (!el || !el.value) return;
    try {
      await navigator.clipboard.writeText(el.value);
      btn.textContent = 'Đã sao chép vào bộ nhớ';
    } catch (e) {
      el.select();
      btn.textContent = 'Nhấn Ctrl+C để chép';
    }
    setTimeout(() => { if (btn) btn.textContent = 'Sao chép văn bản'; }, 2000);
  }

  const cpBtn = $('#cp');
  if (cpBtn) {
    cpBtn.onclick = () => copyText($('#ev'), $('#cp'));
  }

  const dlReportBtn = $('#dlReport');
  if (dlReportBtn) {
    dlReportBtn.onclick = () => {
      const ev = $('#ev');
      if (!ev || !ev.value.trim()) {
        if (mkBtn) mkBtn.click();
      }
      const val = ($('#ev') && $('#ev').value) || '';
      const blob = new Blob([val], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'Bien-ban-bang-chung-TDMU.txt';
      link.click();
    };
  }

  const TB = (id, data, fn) => {
    const bar = $('#' + id + 'b'), out = $('#' + id + 'o');
    if (!bar || !out) return;
    bar.innerHTML = '';
    data.forEach((d, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.role = 'tab';
      b.textContent = d.t;
      b.onclick = () => {
        bar.querySelectorAll('button').forEach((e, j) => e.setAttribute('aria-selected', j === i));
        out.innerHTML = fn(d);
      };
      bar.appendChild(b);
    });
    if (bar.firstChild) bar.firstChild.click();
  };

  TB('rl', [
    {
      t: 'Người bị nhắm đến (Nạn nhân)',
      a: 'Giữ bình tĩnh, tuyệt đối không đáp trả trong tức giận; chụp lại toàn bộ tin nhắn/bình luận kèm thời gian; chặn tài khoản gây hại và báo ngay cho Cố vấn học tập.',
      b: 'Nhắn tin chửi bới lại, tự xóa hết tin nhắn khiến mất bằng chứng, tự giam mình trong phòng và chịu đựng một mình.',
      c: '"Mình đang bị quấy rối và bêu xấu trên mạng. Mình đã lưu bằng chứng và cần sự đồng hành hỗ trợ từ bạn/thầy cô."'
    },
    {
      t: 'Người chứng kiến (Bạn học)',
      a: 'Không thả cảm xúc haha, không chia sẻ hay bình luận hùa theo; nhắn tin riêng động viên nạn nhân và báo cho Ban cán sự lớp.',
      b: 'Đứng ngoài cổ vũ, chụp màn hình gửi đi phát tán thêm, thờ ơ xem như không phải chuyện của mình.',
      c: '"Mình thấy hành động đó là bắt nạt và xúc phạm bạn. Mình đứng về phía bạn và sẽ cùng bạn báo cáo vụ việc."'
    },
    {
      t: 'Người vô tình/cố ý gây ra',
      a: 'Ngay lập tức xóa bỏ bài đăng/bình luận; gửi lời xin lỗi trực tiếp, chân thành đến người bị tổn thương; tự kiểm điểm thái độ ứng xử.',
      b: 'Biện minh "chỉ đùa cho vui", kéo bè phái tiếp tục công kích nạn nhân, thách thức dư luận.',
      c: '"Mình nhận thức được lời nói của mình đã làm tổn thương bạn. Mình thành thật xin lỗi và đã gỡ toàn bộ bài đăng."'
    },
    {
      t: 'Ban cán sự lớp & Quản trị nhóm',
      a: 'Ban hành quy chế ứng xử văn minh trong nhóm lớp; xóa ngay nội dung quấy rối; đứng ra hòa giải văn minh và báo cáo Giảng viên khi cần.',
      b: 'Bỏ mặc nhóm chat để tranh cãi tự do, thiên vị bạn thân, công khai bêu tên thành viên trước tập thể.',
      c: '"Nhóm học tập lớp tôn trọng sự văn minh và đoàn kết. Mọi hành vi công kích cá nhân sẽ bị xóa và xem xét kỷ luật."'
    }
  ], d => "<div class='cols'><div><h3>Hành động nên làm</h3><p>" + d.a + "</p></div><div><h3>Hành động nên tránh</h3><p>" + d.b + "</p></div><div><h3>Lời nói mẫu gợi ý</h3><p>" + d.c + '</p></div></div>');

  TB('pl', [
    {
      t: 'Facebook',
      s: [
        'Chụp màn hình bài viết/bình luận vi phạm có hiển thị rõ tên tài khoản và mốc thời gian.',
        'Nhấp vào biểu tượng 3 chấm ở góc phải bài đăng/bình luận, chọn "Báo cáo" -> "Quấy rối hoặc bắt nạt".',
        'Vào trang cá nhân của đối tượng, chọn "Chặn" để ngăn chặn tương tác và tìm kiếm.',
        'Bật tính năng "Xét duyệt bài viết được gắn thẻ" và giới hạn đối tượng xem danh sách bạn bè.'
      ]
    },
    {
      t: 'Zalo',
      s: [
        'Lưu ảnh chụp tin nhắn trong cuộc trò chuyện nhóm hoặc cá nhân.',
        'Bấm vào menu góc trên bên phải màn hình chat, chọn "Báo xấu" -> chọn lý do "Quấy rối / Đe dọa".',
        'Chọn "Chặn tin nhắn và cuộc gọi" từ số tài khoản này.',
        'Vào Cài đặt quyền riêng tư, tắt tính năng "Cho phép người lạ tìm thấy qua số điện thoại".'
      ]
    },
    {
      t: 'TikTok',
      s: [
        'Nhấn giữ trực tiếp vào bình luận toxic hoặc bấm nút Chia sẻ tại video, chọn "Báo cáo".',
        'Chọn danh mục "Quấy rối và bắt nạt" hoặc "Ngôn từ thù địch".',
        'Truy cập trang cá nhân của người vi phạm, nhấn vào biểu tượng 3 chấm ở góc trên và chọn "Chặn".',
        'Cài đặt chế độ tài khoản riêng tư và bật bộ lọc tự động ẩn bình luận chứa từ khóa phản cảm.'
      ]
    },
    {
      t: 'Instagram',
      s: [
        'Nhấn vào biểu tượng 3 chấm trên bài viết hoặc tin nhắn Direct, chọn "Báo cáo".',
        'Chọn "Báo cáo tài khoản" -> "Đăng nội dung không phù hợp" -> "Bắt nạt hoặc quấy rối".',
        'Sử dụng tính năng "Hạn chế" (Restrict) để ẩn bình luận của đối tượng mà họ không hề hay biết.',
        'Kích hoạt bộ lọc từ ngữ ẩn trong cài đặt Quyền riêng tư.'
      ]
    }
  ], d => "<ol class='ol'>" + d.s.map(x => '<li>' + x + '</li>').join('') + '</ol>');

  const SG = [
    'Bị gửi tin nhắn hoặc bình luận công kích, bêu xấu nhiều lần trong nhóm lớp/mạng xã hội',
    'Bị người khác đăng tải hình ảnh, video cá nhân hoặc thông tin riêng tư khi chưa được đồng ý',
    'Cảm thấy lo lắng, bất an hoặc sợ hãi mỗi khi mở điện thoại và nhận thông báo mạng',
    'Có xu hướng muốn nghỉ học, tránh mặt bạn bè hoặc không dám đến giảng đường vì áp lực dư luận',
    'Bị tài khoản lạ mạo danh để đi nhắn tin lừa đảo hoặc nói xấu bạn bè xung quanh',
    'Bị đe dọa tung hình ảnh nhạy cảm, đe dọa bạo lực hoặc tống tiền qua mạng'
  ];

  const skBox = $('#sk');
  if (skBox) {
    skBox.innerHTML = '';
    SG.forEach(t => {
      const l = document.createElement('label');
      l.className = 'ck';
      l.innerHTML = "<input type='checkbox'><span>" + t + '</span>';
      skBox.appendChild(l);
    });
  }

  const skBtn = $('#skb');
  if (skBtn) {
    skBtn.onclick = () => {
      const c = [...document.querySelectorAll('#sk input')].map(x => x.checked);
      const n = c.filter(Boolean).length;
      const pct = Math.round((n / SG.length) * 100);

      let m = n === 0
        ? 'Bạn đang có môi trường số an toàn. Hãy tiếp tục duy trì thói quen ứng xử văn minh và chủ động bảo vệ bạn bè.'
        : n <= 2
        ? 'Mức độ cảnh báo nhẹ: Bạn đang đối mặt với những dấu hiệu bạo lực mạng ban đầu. Hãy lưu bằng chứng ngay, chặn tài khoản quấy rối và tâm sự với người bạn tin tưởng.'
        : n <= 4
        ? 'Mức độ nguy cơ cao: Bạn đang bị quấy rối tâm lý nghiêm trọng. Hãy liên hệ Cố vấn học tập hoặc Phòng Công tác sinh viên TDMU để được bảo vệ kịp thời.'
        : 'Tình trạng đặc biệt khẩn cấp: Hành vi này có thể xâm phạm nghiêm trọng đến sức khỏe tinh thần và quyền nhân thân. Cần báo cáo ngay cho Nhà trường và cơ quan chức năng.';

      if (c[5]) {
        m += '<br><b style="color:#EF4444">[CẢNH BÁO KHẨN]: Có dấu hiệu tống tiền hoặc đe dọa hình sự. Tuyệt đối không chuyển tiền và liên hệ ngay Hotline 113.</b>';
      }

      const barColor = n === 0 ? '#10B981' : n <= 2 ? '#F59E0B' : '#EF4444';

      const skr = $('#skr');
      if (skr) {
        skr.innerHTML = `
          <div style="background:var(--sf);border-radius:14px;padding:20px;border:1.5px solid var(--ln);margin-top:16px;box-shadow:var(--shadow-sm)">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
              <strong style="color:${barColor};font-size:1.05rem">Chỉ số rủi ro tâm lý: ${pct}%</strong>
              <span style="font-size:.85rem;color:var(--mu)">Ghi nhận ${n} / ${SG.length} dấu hiệu</span>
            </div>
            <div class="mt" style="margin:8px 0 12px"><div style="width:${pct}%;background:${barColor}"></div></div>
            <p style="margin:0;font-size:.9rem;line-height:1.6;color:var(--ink)">${m}</p>
          </div>
        `;
      }
    };
  }

  const WZ = {
    s: {
      q: 'Bạn hoặc bạn bè đang gặp phải trường hợp nào?',
      o: [
        ['Bị tống tiền hoặc đe dọa tính mạng / bạo lực thân thể', 'a'],
        ['Ảnh chụp hoặc chuyện riêng tư bị phát tán lên nhóm lớp / cfs', 'n2'],
        ['Bị bình luận chửi bới, miệt thị ngoại hình, cô lập nhóm', 'n3'],
        ['Là người chứng kiến bạn bè trong lớp bị bắt nạt', 'd']
      ]
    },
    n2: {
      q: 'Nội dung riêng tư đó đang bị phát tán ở đâu?',
      o: [
        ['Công khai trên mạng xã hội hoặc diễn đàn sinh viên', 'b'],
        ['Trong nhóm chat riêng hoặc tin nhắn kín giữa các cá nhân', 'c']
      ]
    },
    n3: {
      q: 'Đối tượng có hành vi quấy rối là ai?',
      o: [
        ['Là bạn học cùng lớp hoặc người quen trong trường', 'e'],
        ['Là tài khoản ẩn danh, nick ảo không rõ danh tính', 'f']
      ]
    },
    a: {
      t: 'Xử lý Khẩn cấp (Nguy cơ hình sự)',
      u: 1,
      s: [
        'Tuyệt đối không chuyển tiền và không làm theo bất kỳ yêu cầu nào của đối phương.',
        'Chụp lại toàn bộ màn hình tin nhắn, số tài khoản nhận tiền và đường link trang cá nhân đối tượng.',
        'Bấm nút "SOS Khẩn cấp" trên thanh tiêu đề để gọi ngay Công an 113 hoặc trình báo Phòng CTSV TDMU.'
      ]
    },
    b: {
      t: 'Ngăn chặn lan truyền diện rộng',
      u: 1,
      s: [
        'Lưu đường link bài đăng và chụp lại toàn bộ bằng chứng trước khi bài viết bị gỡ.',
        'Gửi báo cáo vi phạm quyền riêng tư lên nền tảng mạng xã hội.',
        'Liên hệ Quản trị viên nhóm/Fanpage yêu cầu xóa bài ngay lập tức, đồng thời báo cho Cố vấn học tập.'
      ]
    },
    c: {
      t: 'Kiểm soát trong phạm vi nhóm',
      u: 0,
      s: [
        'Yêu cầu người đăng gỡ bỏ nội dung và nhắc nhở không sao chép chia sẻ ra ngoài.',
        'Nhờ Ban cán sự lớp can thiệp nhắc nhở quy chế văn hóa lớp học.',
        'Nếu tiếp tục tái diễn, lập biên bản ghi nhận bằng chứng gửi lên Khoa / Nhà trường.'
      ]
    },
    d: {
      t: 'Hành động của người bạn tử tế',
      u: 0,
      s: [
        'Tuyệt đối không thả cảm xúc haha hay bình luận hùa theo nội dung chế giễu.',
        'Nhắn tin riêng hỏi thăm và khẳng định bạn luôn sẵn sàng đồng hành cùng người bị hại.',
        'Chủ động đứng ra bảo vệ bạn hoặc cùng bạn báo cáo với Giảng viên phụ trách.'
      ]
    },
    e: {
      t: 'Giải quyết nội bộ sinh viên',
      u: 0,
      s: [
        'Nói chuyện thẳng thắn và lịch sự rằng lời nói đó đang làm bạn tổn thương.',
        'Đề nghị Cố vấn học tập làm cầu nối hòa giải nếu mâu thuẫn không tự giải quyết được.',
        'Tạm thời hạn chế tương tác trên mạng xã hội để tránh leo thang căng thẳng.'
      ]
    },
    f: {
      t: 'Xử lý với đối tượng ẩn danh',
      u: 0,
      s: [
        'Không tốn thời gian tranh cãi qua lại với các tài khoản ảo.',
        'Lưu bằng chứng vi phạm rồi bấm Chặn và Báo cáo tài khoản cho nền tảng.',
        'Cài đặt tài khoản về chế độ riêng tư và chỉ nhận tin nhắn từ bạn bè.'
      ]
    }
  };

  function wz(k) {
    const n = WZ[k], b = $('#wz');
    if (!b) return;
    if (n.q) {
      b.innerHTML = '<h3 style="margin-bottom:14px;font-size:1.1rem">' + n.q + '</h3>' +
        n.o.map(o => "<button type='button' class='op' data-k='" + o[1] + "'>" + o[0] + '</button>').join('');
      b.querySelectorAll('.op').forEach(x => x.onclick = () => wz(x.dataset.k));
    } else {
      b.innerHTML = "<h3 style='color:" + (n.u ? 'var(--rs)' : 'var(--tld)') + ";margin-bottom:12px'>" + n.t + '</h3>' +
        "<ol class='ol'>" + n.s.map(x => '<li>' + x + '</li>').join('') + '</ol>' +
        "<div class='acts' style='margin-top:20px'><button type='button' class='btn o' id='wr'>Thử tình huống khác</button>" +
        "<a class='btn' href='#ungpho'>Mở Mẫu ghi nhận bằng chứng</a></div>";
      const wr = $('#wr');
      if (wr) wr.onclick = () => wz('s');
    }
  }
  wz('s');

  const runAuditBtn = document.getElementById('runAuditBtn');
  const auditScoreBox = document.getElementById('auditScoreBox');
  const auditScoreTitle = document.getElementById('auditScoreTitle');
  const auditScoreDesc = document.getElementById('auditScoreDesc');
  const auditBadge = document.getElementById('auditBadge');
  const auditMeterBar = document.getElementById('auditMeterBar');
  const auditAdviceList = document.getElementById('auditAdviceList');

  if (runAuditBtn && auditScoreBox) {
    runAuditBtn.addEventListener('click', () => {
      let safeCount = 0;
      const advice = [];

      const a1 = document.querySelector('input[name="aud1"]:checked');
      if (a1 && a1.value === 'safe') {
        safeCount++;
      } else {
        advice.push('• <b>Lớp 1:</b> Ẩn ngay MSSV, số điện thoại và ngày sinh trên trang cá nhân để tránh kẻ xấu mạo danh hoặc tìm kiếm thông tin đào tạo của bạn.');
      }

      const a2 = document.querySelector('input[name="aud2"]:checked');
      if (a2 && a2.value === 'safe') {
        safeCount++;
      } else {
        advice.push('• <b>Lớp 2:</b> Bật chế độ lọc tin nhắn từ người lạ trên Messenger / Instagram / Zalo để chặn đứng tin nhắn spam, gạ gẫm và đe dọa nặc danh.');
      }

      const a3 = document.querySelector('input[name="aud3"]:checked');
      if (a3 && a3.value === 'safe') {
        safeCount++;
      } else {
        advice.push('• <b>Lớp 3:</b> Bật tính năng "Xét duyệt bài viết được gắn thẻ" để ngăn chặn người khác tự ý tag bạn vào các bài đăng drama hoặc hình ảnh chế giễu.');
      }

      const a4 = document.querySelector('input[name="aud4"]:checked');
      if (a4 && a4.value === 'safe') {
        safeCount++;
      } else {
        advice.push('• <b>Lớp 4:</b> Đổi mật khẩu tài khoản cổng thông tin sinh viên TDMU sang chuỗi ký tự mạnh (có chữ hoa, số, ký tự đặc biệt) và kích hoạt 2FA.');
      }

      const pct = Math.round((safeCount / 4) * 100);
      auditScoreBox.style.display = 'block';
      auditScoreTitle.textContent = 'Chỉ số An toàn Số: ' + pct + '% (' + safeCount + '/4 lớp bảo vệ)';
      auditMeterBar.style.width = pct + '%';

      if (pct === 100) {
        auditMeterBar.style.background = 'linear-gradient(90deg, #10B981, #059669)';
        auditBadge.textContent = 'An toàn tối ưu';
        auditBadge.style.color = '#059669';
        auditBadge.style.background = '#ECFDF5';
        auditBadge.style.borderColor = '#A7F3D0';
        auditScoreDesc.textContent = 'Chúc mừng! Tài khoản của bạn đạt mức độ an toàn cao nhất, phòng vệ vững chắc trước bạo lực mạng.';
        auditAdviceList.innerHTML = '<div style="color:#059669;font-weight:600">✓ Bạn đang tuân thủ xuất sắc các nguyên tắc an toàn số của sinh viên Đại học Thủ Dầu Một. Hãy duy trì thói quen bảo mật này!</div>';
      } else if (pct >= 50) {
        auditMeterBar.style.background = 'linear-gradient(90deg, #F59E0B, #D97706)';
        auditBadge.textContent = 'Mức rủi ro trung bình';
        auditBadge.style.color = '#B45309';
        auditBadge.style.background = '#FFFBEB';
        auditBadge.style.borderColor = '#FDE68A';
        auditScoreDesc.textContent = 'Tài khoản có một số lỗ hổng bảo mật có thể bị kẻ xấu lợi dụng để quấy rối hoặc bôi nhọ.';
        auditAdviceList.innerHTML = '<b style="color:var(--rs);display:block;margin-bottom:6px">Các hành động khắc phục ngay:</b>' + advice.join('<br>');
      } else {
        auditMeterBar.style.background = 'linear-gradient(90deg, #EF4444, #DC2626)';
        auditBadge.textContent = 'Mức cảnh báo cao';
        auditBadge.style.color = '#DC2626';
        auditBadge.style.background = '#FEF2F2';
        auditBadge.style.borderColor = '#FECACA';
        auditScoreDesc.textContent = 'Cảnh báo! Bạn đang để lộ nhiều thông tin nhạy cảm và chưa kích hoạt các lớp bảo vệ cơ bản.';
        auditAdviceList.innerHTML = '<b style="color:var(--rs);display:block;margin-bottom:6px">Khuyến nghị cấp thiết:</b>' + advice.join('<br>');
      }

      auditScoreBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
})();
