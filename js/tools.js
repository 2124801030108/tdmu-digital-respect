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

  function buildEvidencePdfHtml(f1, f2, f3, f4, f5) {
    const now = new Date();
    const dateStr = 'Bình Dương, ngày ' + now.getDate() + ' tháng ' + (now.getMonth() + 1) + ' năm ' + now.getFullYear();
    const timeStr = f2 || now.toLocaleString('vi-VN');
    const platStr = f1 || 'Facebook';

    const accStr = f3 || '(Chưa xác định danh tính / Tài khoản ẩn danh)';
    const descStr = f4 || '(Chưa điền mô tả chi tiết)';
    const linkStr = f5 || '(Chưa đính kèm đường dẫn)';

    return '<!DOCTYPE html>' +
      '<html lang="vi">' +
      '<head>' +
      '<meta charset="utf-8">' +
      '<title>Biên Bản Ghi Nhận Bằng Chứng Bạo Lực Mạng – TDMU</title>' +
      '<style>' +
      '@page { size: A4 portrait; margin: 12mm 18mm 12mm 18mm; }' +
      'body { font-family: "Times New Roman", Times, serif; font-size: 13pt; line-height: 1.45; color: #000; margin: 0; padding: 0; background: #fff; }' +
      '.header-table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }' +
      '.header-table td { vertical-align: top; text-align: center; }' +
      '.divider { width: 130px; height: 1.2px; background: #000; margin: 4px auto 0; }' +
      '.main-title { text-align: center; font-size: 15pt; font-weight: bold; text-transform: uppercase; margin: 14px 0 4px; }' +
      '.doc-sub { text-align: center; font-style: italic; font-size: 11pt; margin-bottom: 14px; color: #333; }' +
      '.content-table { width: 100%; border-collapse: collapse; margin-top: 8px; margin-bottom: 12px; }' +
      '.content-table td { padding: 7px 10px; vertical-align: top; border: 1px solid #333; font-size: 12pt; }' +
      '.content-table td.lbl { width: 33%; font-weight: bold; background: #f8f9fa; }' +
      '.signature-table { width: 100%; border-collapse: collapse; margin-top: 20px; page-break-inside: avoid; }' +
      '.signature-table td { width: 50%; text-align: center; vertical-align: top; font-size: 12pt; }' +
      '.signature-space { height: 75px; }' +
      '.note-box { font-size: 10.5pt; font-style: italic; margin-top: 10px; border-top: 1px dashed #666; padding-top: 6px; color: #222; }' +
      '</style>' +
      '</head>' +
      '<body>' +
      '<table class="header-table">' +
      '<tr>' +
      '<td style="width:48%">' +
      'TRƯỜNG ĐẠI HỌC THỦ DẦU MỘT<br>' +
      '<b>DỰ ÁN TDMU DIGITAL RESPECT</b><br>' +
      '<div class="divider"></div>' +
      '<div style="font-size:10pt;margin-top:4px;font-style:italic">Số: ' + Math.floor(1000 + Math.random() * 9000) + '/BB-TDMUDR</div>' +
      '</td>' +
      '<td style="width:52%">' +
      '<b>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</b><br>' +
      '<b>Độc lập – Tự do – Hạnh phúc</b><br>' +
      '<div class="divider"></div>' +
      '<div style="font-size:10pt;margin-top:4px;font-style:italic">' + dateStr + '</div>' +
      '</td>' +
      '</tr>' +
      '</table>' +
      '<div class="main-title">BIÊN BẢN GHI NHẬN SỰ VIỆC VÀ BẰNG CHỨNG BẠO LỰC MẠNG</div>' +
      '<div class="doc-sub">(Hồ sơ minh chứng gửi Cố vấn học tập & Phòng Công tác Sinh viên Đại học Thủ Dầu Một)</div>' +
      '<table class="content-table">' +
      '<tr><td class="lbl">1. Nền tảng xảy ra sự việc:</td><td><strong>' + esc(platStr) + '</strong></td></tr>' +
      '<tr><td class="lbl">2. Thời điểm xảy ra / phát hiện:</td><td>' + esc(timeStr) + '</td></tr>' +
      '<tr><td class="lbl">3. Tài khoản / Đối tượng gây hại:</td><td><strong>' + esc(accStr) + '</strong></td></tr>' +
      '<tr><td class="lbl">4. Đường dẫn liên kết (Link bài viết / bình luận):</td><td style="word-break:break-all;color:#075A94">' + esc(linkStr) + '</td></tr>' +
      '<tr><td class="lbl">5. Mô tả hành vi & mức độ ảnh hưởng:</td><td style="white-space:pre-wrap;line-height:1.5">' + esc(descStr) + '</td></tr>' +
      '<tr><td class="lbl">6. Biện pháp kỹ thuật người lập đã làm:</td><td>' +
      '- Đã chụp ảnh màn hình lưu giữ nguyên trạng ngày giờ hệ thống máy tính/điện thoại.<br>' +
      '- Đã sao lưu đường dẫn liên kết URL cố định (permalink).<br>' +
      '- Đã thực hiện Báo cáo vi phạm (Report) lên nền tảng mạng xã hội và tạm khóa tương tác chặn leo thang.' +
      '</td></tr>' +
      '<tr><td class="lbl">7. Đề nghị hỗ trợ / Ý kiến:</td><td>' +
      'Kính nhờ Cố vấn học tập, Ban chủ nhiệm Khoa và Phòng Công tác Sinh viên (CTSV TDMU - Phòng B.102) tiếp nhận, bảo mật thông tin cá nhân và phối hợp can thiệp bảo vệ an toàn cho sinh viên theo đúng Quy chế ứng xử học đường.' +
      '</td></tr>' +
      '</table>' +
      '<div class="note-box">* Biên bản này được tạo tự động từ Cổng hỗ trợ sinh viên TDMU Digital Respect, là tài liệu minh chứng cơ sở ban đầu để Nhà trường xác minh và hỗ trợ xử lý vi phạm.</div>' +
      '<table class="signature-table">' +
      '<tr>' +
      '<td>' +
      '<b>ĐẠI DIỆN TIẾP NHẬN</b><br>' +
      '<i>(Phòng CTSV / Cố vấn học tập)</i><br>' +
      '<div class="signature-space"></div>' +
      '<i>(Ký và ghi rõ họ tên)</i>' +
      '</td>' +
      '<td>' +
      '<b>NGƯỜI LẬP BIÊN BẢN</b><br>' +
      '<i>(Ký xác nhận)</i><br>' +
      '<div class="signature-space"></div>' +
      '<i>(Ký và ghi rõ họ tên)</i>' +
      '</td>' +
      '</tr>' +
      '</table>' +
      '</body>' +
      '</html>';
  }

  function handlePrintPdf() {
    const v = id => ($(id) && $(id).value.trim()) || '';
    const now = new Date();
    const f2El = $('#f2');
    const timeVal = (f2El && f2El.value.trim()) || now.toLocaleString('vi-VN');
    if (f2El && !f2El.value.trim()) f2El.value = timeVal;

    const f1Val = ($('#f1') && $('#f1').value) || 'Facebook';
    const f3Val = v('#f3');
    const f4Val = v('#f4');
    const f5Val = v('#f5');

    const mk = $('#mk');
    if (mk) mk.click();

    const docHtml = buildEvidencePdfHtml(f1Val, timeVal, f3Val, f4Val, f5Val);

    const printFrame = document.createElement('iframe');
    printFrame.style.position = 'fixed';
    printFrame.style.right = '0';
    printFrame.style.bottom = '0';
    printFrame.style.width = '0';
    printFrame.style.height = '0';
    printFrame.style.border = '0';
    document.body.appendChild(printFrame);

    const frameDoc = printFrame.contentWindow.document;
    frameDoc.open();
    frameDoc.write(docHtml);
    frameDoc.close();

    setTimeout(() => {
      printFrame.contentWindow.focus();
      printFrame.contentWindow.print();
      setTimeout(() => {
        if (printFrame.parentNode) {
          printFrame.parentNode.removeChild(printFrame);
        }
      }, 3000);
    }, 400);
  }

  
  const printPdfBtn = $('#btnPrintPdf');
  if (printPdfBtn) {
    printPdfBtn.onclick = handlePrintPdf;
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


  const passInput = document.getElementById('generatedPass');
  const passGenBtn = document.getElementById('generatePassBtn');
  const passCopyBtn = document.getElementById('copyPassBtn');
  const passEyeBtn = document.getElementById('togglePassEye');
  const passEyeIcon = document.getElementById('eyeIcon');
  const passToast = document.getElementById('pwdCopyToast');
  const passScoreBadge = document.getElementById('pwdStrScore');
  const passScoreBar = document.getElementById('pwdStrBar');
  const passScoreMsg = document.getElementById('pwdStrMsg');

  const btnSampleWeak = document.getElementById('pwdSampleWeak');
  const btnSampleMed = document.getElementById('pwdSampleMed');
  const btnSampleStrong = document.getElementById('pwdSampleStrong');
  const btnSampleClear = document.getElementById('pwdSampleClear');

  const cLen = document.getElementById('critLen');
  const cLenIcon = document.getElementById('critLenIcon');
  const cCase = document.getElementById('critCase');
  const cCaseIcon = document.getElementById('critCaseIcon');
  const cNum = document.getElementById('critNum');
  const cNumIcon = document.getElementById('critNumIcon');
  const cSym = document.getElementById('critSym');
  const cSymIcon = document.getElementById('critSymIcon');

  function updateCriteria(elem, iconElem, passed) {
    if (!elem || !iconElem) return;
    if (passed) {
      elem.style.color = '#059669';
      iconElem.textContent = '✓';
    } else {
      elem.style.color = '#94A3B8';
      iconElem.textContent = '✕';
    }
  }

  function evaluatePasswordStr(val) {
    if (!val || val.length === 0) {
      if (passScoreBadge) {
        passScoreBadge.textContent = 'CHƯA NHẬP (0%)';
        passScoreBadge.style.color = '#64748B';
        passScoreBadge.style.background = '#F1F5F9';
      }
      if (passScoreBar) {
        passScoreBar.style.width = '0%';
        passScoreBar.style.background = '#94A3B8';
      }
      if (passScoreMsg) {
        passScoreMsg.textContent = 'Hãy nhập hoặc bấm Tạo mật khẩu mới để đo độ an toàn.';
        passScoreMsg.style.color = 'var(--mu)';
      }
      updateCriteria(cLen, cLenIcon, false);
      updateCriteria(cCase, cCaseIcon, false);
      updateCriteria(cNum, cNumIcon, false);
      updateCriteria(cSym, cSymIcon, false);
      return;
    }

    const hasUpper = /[A-Z]/.test(val);
    const hasLower = /[a-z]/.test(val);
    const hasNum = /[0-9]/.test(val);
    const hasSym = /[^A-Za-z0-9]/.test(val);
    const len12 = val.length >= 12;
    const caseMix = hasUpper && hasLower;

    updateCriteria(cLen, cLenIcon, len12);
    updateCriteria(cCase, cCaseIcon, caseMix);
    updateCriteria(cNum, cNumIcon, hasNum);
    updateCriteria(cSym, cSymIcon, hasSym);

    const weakDict = ['123456', '12345678', 'password', 'qwerty', '111111', 'admin', 'tdmu', 'sinhvien', 'tdmu123', 'iloveyou'];
    const isKnownWeak = weakDict.some(w => val.toLowerCase() === w || (val.toLowerCase().includes(w) && val.length < 9));

    let score = 0;
    if (val.length >= 6) score += 15;
    if (val.length >= 8) score += 15;
    if (val.length >= 12) score += 15;
    if (val.length >= 14) score += 10;
    if (caseMix) score += 20;
    else if (hasUpper || hasLower) score += 10;
    if (hasNum) score += 15;
    if (hasSym) score += 15;

    if (isKnownWeak) score = Math.min(score, 18);

    score = Math.min(100, Math.max(10, score));

    let label = 'RẤT YẾU';
    let color = '#DC2626';
    let bg = '#FEE2E2';
    let barColor = '#EF4444';
    let msg = 'Cảnh báo nguy hiểm! Mật khẩu quá ngắn hoặc nằm trong từ điển phổ biến. Tin tặc dùng phần mềm tự động có thể bẻ khóa trong vòng 0.01 giây!';

    if (score >= 90) {
      label = 'CỰC MẠNH (' + score + '%)';
      color = '#059669';
      bg = '#ECFDF5';
      barColor = '#10B981';
      msg = 'Mật khẩu đạt chuẩn an ninh mạng tối đa! Kháng tấn công dò quét brute-force, bảo vệ an toàn tuyệt đối cho Portal TDMU và Email sinh viên.';
    } else if (score >= 70) {
      label = 'MẠNH (' + score + '%)';
      color = '#059669';
      bg = '#ECFDF5';
      barColor = '#10B981';
      msg = 'Mật khẩu an toàn tốt, cấu trúc phức tạp đạt tiêu chuẩn bảo vệ tài khoản sinh viên.';
    } else if (score >= 45) {
      label = 'TRUNG BÌNH (' + score + '%)';
      color = '#D97706';
      bg = '#FEF3C7';
      barColor = '#F59E0B';
      msg = 'Độ bảo mật trung bình. Khuyến nghị tăng độ dài lên trên 12 ký tự và thêm ký tự đặc biệt (!@#$) để an toàn hơn.';
    } else if (score >= 25) {
      label = 'YẾU (' + score + '%)';
      color = '#EA580C';
      bg = '#FFEDD5';
      barColor = '#F97316';
      msg = 'Mật khẩu còn yếu, thiếu độ phức tạp. Các công cụ dò quét có thể tìm ra trong vòng vài phút!';
    }

    if (passScoreBadge) {
      passScoreBadge.textContent = label;
      passScoreBadge.style.color = color;
      passScoreBadge.style.background = bg;
    }
    if (passScoreBar) {
      passScoreBar.style.width = score + '%';
      passScoreBar.style.background = barColor;
    }
    if (passScoreMsg) {
      passScoreMsg.textContent = msg;
      passScoreMsg.style.color = color;
    }
  }

  function makeRandomPassword() {
    const uppers = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const lowers = 'abcdefghijkmnpqrstuvwxyz';
    const numbers = '23456789';
    const symbols = '!@#$%^&*~';
    const pool = uppers + lowers + numbers + symbols;

    let res = 'TDMU@';
    res += uppers.charAt(Math.floor(Math.random() * uppers.length));
    res += lowers.charAt(Math.floor(Math.random() * lowers.length));
    res += numbers.charAt(Math.floor(Math.random() * numbers.length));
    res += symbols.charAt(Math.floor(Math.random() * symbols.length));

    for (let i = 0; i < 7; i++) {
      res += pool.charAt(Math.floor(Math.random() * pool.length));
    }
    return res;
  }

  if (passInput) {
    passInput.addEventListener('input', function() {
      evaluatePasswordStr(passInput.value.trim());
    });
  }

  if (passGenBtn) {
    passGenBtn.addEventListener('click', function() {
      const newPwd = makeRandomPassword();
      passInput.value = newPwd;
      passInput.type = 'text';
      evaluatePasswordStr(newPwd);
    });
  }

  if (passEyeBtn) {
    passEyeBtn.addEventListener('click', function() {
      if (passInput.type === 'password') {
        passInput.type = 'text';
        passEyeIcon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
      } else {
        passInput.type = 'password';
        passEyeIcon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>';
      }
    });
  }

  if (passCopyBtn) {
    passCopyBtn.addEventListener('click', function() {
      const val = passInput.value.trim();
      if (!val) return;
      navigator.clipboard.writeText(val).then(function() {
        if (passToast) {
          passToast.style.display = 'block';
          setTimeout(function() {
            passToast.style.display = 'none';
          }, 3000);
        }
      });
    });
  }

  if (btnSampleWeak) {
    btnSampleWeak.addEventListener('click', function() {
      passInput.value = '123456';
      passInput.type = 'text';
      evaluatePasswordStr('123456');
    });
  }

  if (btnSampleMed) {
    btnSampleMed.addEventListener('click', function() {
      passInput.value = 'Tdmu@2026';
      passInput.type = 'text';
      evaluatePasswordStr('Tdmu@2026');
    });
  }

  if (btnSampleStrong) {
    btnSampleStrong.addEventListener('click', function() {
      const s = makeRandomPassword();
      passInput.value = s;
      passInput.type = 'text';
      evaluatePasswordStr(s);
    });
  }

  if (btnSampleClear) {
    btnSampleClear.addEventListener('click', function() {
      passInput.value = '';
      passInput.focus();
      evaluatePasswordStr('');
    });
  }

  if (passInput && passInput.value) {
    evaluatePasswordStr(passInput.value.trim());
  }

})();