(function() {

  function drawNhanDienCertificate(canvas, name, id, department) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    const w = canvas.width;
    const h = canvas.height;

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, w, h);

    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#FAFCFF');
    grad.addColorStop(1, '#F0F7FD');
    ctx.fillStyle = grad;
    ctx.fillRect(16, 16, w - 32, h - 32);

    ctx.strokeStyle = '#075A94';
    ctx.lineWidth = 4;
    ctx.strokeRect(20, 20, w - 40, h - 40);

    ctx.strokeStyle = '#D97706';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(26, 26, w - 52, h - 52);

    ctx.fillStyle = '#075A94';
    ctx.font = 'bold 13px "Be Vietnam Pro", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('ỦY BAN HỘI LIÊN HIỆP THANH NIÊN VIỆT NAM - ĐẠI HỌC THỦ DẦU MỘT', w / 2, 60);

    ctx.font = 'bold 12px "Be Vietnam Pro", sans-serif';
    ctx.fillStyle = '#B45309';
    ctx.fillText('ĐOÀN THANH NIÊN - HỘI SINH VIÊN TRƯỜNG ĐẠI HỌC THỦ DẦU MỘT', w / 2, 78);

    ctx.fillStyle = '#0B2540';
    ctx.font = 'bold 28px Lora, Georgia, serif';
    ctx.fillText('GIẤY CHỨNG NHẬN', w / 2, 120);

    ctx.fillStyle = '#0B7BC4';
    ctx.font = 'bold 15px "Be Vietnam Pro", sans-serif';
    ctx.fillText('ĐẠI SỨ VĂN HÓA MẠNG – PHÒNG CHỐNG BẠO LỰC MẠNG TDMU 2026', w / 2, 146);

    ctx.strokeStyle = '#CBD5E1';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 160, 158);
    ctx.lineTo(w / 2 + 160, 158);
    ctx.stroke();

    ctx.fillStyle = '#4A6580';
    ctx.font = 'normal 14px "Be Vietnam Pro", sans-serif';
    ctx.fillText('Chứng nhận Sinh viên:', w / 2, 192);

    ctx.fillStyle = '#075A94';
    ctx.font = 'bold 26px Lora, Georgia, serif';
    ctx.fillText((name || 'SINH VIÊN TDMU').toUpperCase(), w / 2, 230);

    ctx.fillStyle = '#0B2540';
    ctx.font = '600 14px "Be Vietnam Pro", sans-serif';
    ctx.fillText('Mã số SV: ' + (id || '..........') + '   |   Đơn vị: ' + (department || 'Trường Đại học Thủ Dầu Một'), w / 2, 262);

    ctx.fillStyle = '#334155';
    ctx.font = 'normal 13.5px "Be Vietnam Pro", sans-serif';
    ctx.fillText('Đã hoàn thành xuất sắc chuyên đề trắc nghiệm nhận diện và kỹ năng ứng xử văn minh số,', w / 2, 296);
    ctx.fillText('chủ động bảo vệ bản thân và cam kết không tham gia, không tiếp tay cho bạo lực mạng.', w / 2, 318);

    ctx.fillStyle = '#92400E';
    ctx.font = 'bold 13px "Be Vietnam Pro", sans-serif';
    ctx.fillText('★ ĐỦ ĐIỀU KIỆN CỘNG 05 ĐIỂM RÈN LUYỆN (TIÊU CHÍ 3: ĐẠO ĐỨC LỐI SỐNG HỌC KỲ I) ★', w / 2, 345);

    const today = new Date();
    const dateStr = 'Thủ Dầu Một, ngày ' + today.getDate() + ' tháng ' + (today.getMonth() + 1) + ' năm ' + today.getFullYear();
    ctx.fillStyle = '#4A6580';
    ctx.font = 'italic 12.5px "Be Vietnam Pro", sans-serif';
    ctx.fillText(dateStr, w - 180, 395);

    ctx.fillStyle = '#0B2540';
    ctx.font = 'bold 13.5px "Be Vietnam Pro", sans-serif';
    ctx.fillText('TM. BAN PHỤ TRÁCH ĐỀ TÀI', w - 180, 418);
    ctx.font = '600 13px "Be Vietnam Pro", sans-serif';
    ctx.fillStyle = '#075A94';
    ctx.fillText('Võ Tấn Bản & Nhóm 17', w - 180, 455);

    ctx.fillStyle = '#DC2626';
    ctx.beginPath();
    ctx.arc(155, 420, 38, 0, Math.PI * 2);
    ctx.strokeStyle = '#DC2626';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(155, 420, 33, 0, Math.PI * 2);
    ctx.stroke();

    ctx.font = 'bold 9px "Be Vietnam Pro", sans-serif';
    ctx.fillText('ĐẠI HỌC THỦ DẦU MỘT', 155, 415);
    ctx.font = 'bold 8px "Be Vietnam Pro", sans-serif';
    ctx.fillText('CHỨNG THỰC ĐRL 2026', 155, 430);

    ctx.fillStyle = '#0F172A';
    ctx.font = 'normal 11px monospace';
    const serial = 'ID: TDMU-DR26-' + (id ? id.slice(-4) : '2026');
    ctx.fillText(serial, 155, 475);
  }
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const F = [
    {
      t: '1. Nhắn tin lăng mạ & Quấy rối',
      d: 'Hành vi liên tục gửi tin nhắn thô tục, xúc phạm hoặc đe dọa qua hộp thư Messenger, Zalo cá nhân hoặc spam trong nhóm học tập.',
      s: 'Tin nhắn gửi dồn dập vào đêm muộn, dùng từ ngữ hạ thấp nhân phẩm, đe dọa chặn đường, đe dọa bạo lực thân thể.',
      i: 'Nạn nhân rơi vào trạng thái hoảng loạn, sợ cầm điện thoại, mất ngủ triền miên và sa sút kết quả học tập nghiêm trọng.',
      a: 'Tuyệt đối không chửi bới lại. Chụp ảnh màn hình làm chứng cứ, kích hoạt tính năng Chặn tài khoản và báo cho Cố vấn học tập.'
    },
    {
      t: '2. Bêu xấu & Bóc phốt công khai',
      d: 'Đăng tải các bài viết, hình ảnh cắt xén ngữ cảnh lên trang Confession, diễn đàn trường hoặc nhóm Facebook để kích động đám đông công kích.',
      s: 'Bài viết ẩn danh chỉ đích danh họ tên, MSSV, khoa đào tạo kèm theo những cáo buộc chưa kiểm chứng và kêu gọi tẩy chay.',
      i: 'Hủy hoại danh dự cá nhân, gây áp lực dư luận nặng nề, khiến nạn nhân cảm thấy xấu hổ và sợ hãi khi đến giảng đường.',
      a: 'Lưu ngay đường link URL bài viết. Yêu cầu Quản trị viên Fanpage gỡ bài vi phạm và làm đơn đề nghị Nhà trường can thiệp xác minh.'
    },
    {
      t: '3. Mạo danh tài khoản sinh viên',
      d: 'Tạo tài khoản mạng xã hội giả mạo, sử dụng hình ảnh đại diện, thông tin cá nhân và thẻ sinh viên của người khác để thực hiện hành vi xấu.',
      s: 'Xuất hiện tài khoản giống hệt nhắn tin mượn tiền bạn bè trong lớp, phát ngôn bừa bãi hoặc bình luận tục tĩu trên diễn đàn.',
      i: 'Làm mất uy tín của nạn nhân, gây hiểu lầm trong tập thể lớp và tiềm ẩn rủi ro lừa đảo chiếm đoạt tài sản.',
      a: 'Đăng bài đính chính trên trang cá nhân chính chủ, nhờ bạn bè báo cáo (Report) tài khoản giả mạo và trình báo Phòng Công tác sinh viên.'
    },
    {
      t: '4. Phát tán thông tin riêng tư (Doxing)',
      d: 'Công khai số điện thoại, địa chỉ nhà trọ, hình ảnh riêng tư, tài khoản ngân hàng hoặc tin nhắn bí mật của sinh viên khi chưa được cho phép.',
      s: 'Thông tin cá nhân bị rêu rao trên các hội nhóm kèm lời khiêu khích, nạn nhân liên tục nhận cuộc gọi rác và tin nhắn đe dọa.',
      i: 'Đe dọa trực tiếp đến an toàn thể chất, sự riêng tư cá nhân bị xâm phạm nghiêm trọng, gây chấn thương tâm lý sâu sắc.',
      a: 'Yêu cầu gỡ bỏ ngay lập tức. Báo cáo cơ quan Công an qua Hotline 113 nếu có dấu hiệu bị theo dõi, đe dọa hoặc tống tiền.'
    },
    {
      t: '5. Loại trừ & Tẩy chay hội đồng',
      d: 'Cố ý cô lập, đuổi bạn học ra khỏi nhóm học tập môn học, phớt lờ và kêu gọi các thành viên khác không tiếp xúc, không hợp tác.',
      s: 'Tự ý xóa tên bạn khỏi nhóm Zalo làm bài tiểu luận, không phân chia công việc, lập nhóm chat kín riêng để bàn tán sau lưng.',
      i: 'Sinh viên bị cô lập cảm thấy bất lực, tự ti, cô đơn cùng cực và có nguy cơ rớt học phần do không thể hoàn thành bài tập nhóm.',
      a: 'Chủ động lưu lại lịch sử làm việc nhóm. Trao đổi thẳng thắn với Giảng viên phụ trách môn học để được phân công lại nhóm công bằng.'
    },
    {
      t: '6. Chế ảnh & Miệt thị ngoại hình (Body Shaming)',
      d: 'Sử dụng hình ảnh chụp lén tại giảng đường, căn-tin trường rồi cắt ghép chế giễu vóc dáng, gương mặt, giọng nói hoặc dùng công nghệ AI ghép mặt nhạy cảm.',
      s: 'Hình ảnh meme chế nhạo bị lan truyền trong các group chat, kèm theo bình luận so sánh ngoại hình khiếm nhã và xúc phạm.',
      i: 'Hình thành mặc cảm ngoại hình trầm cảm, sợ xuất hiện trước đám đông, rụt rè trong giao tiếp và các hoạt động phong trào.',
      a: 'Không chia sẻ, không tương tác thả cảm xúc. Báo cáo nội dung vi phạm và lên tiếng nhắc nhở bạn bè tôn trọng sự khác biệt của nhau.'
    }
  ];

  function showF(i) {
    const f = F[i];
    const tt = document.getElementById('tt');
    const td = document.getElementById('td');
    const ts = document.getElementById('ts');
    const ti = document.getElementById('ti');
    const ta = document.getElementById('ta');
    if (!tt || !td || !ts || !ti || !ta) return;

    tt.textContent = f.t;
    td.textContent = f.d;
    ts.textContent = f.s;
    ti.textContent = f.i;
    ta.textContent = f.a;

    document.querySelectorAll('#tabs button').forEach((b, j) => b.setAttribute('aria-selected', j === i));
  }

  const tabsBox = document.getElementById('tabs');
  if (tabsBox) {
    tabsBox.innerHTML = '';
    F.forEach((f, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.role = 'tab';
      b.textContent = f.t.split('.')[1].trim();
      b.onclick = () => showF(i);
      tabsBox.appendChild(b);
    });
    showF(0);
  }

  const Q = [
    {
      q: 'Câu 1: Nhóm Zalo lớp lan truyền ảnh chụp lén một bạn học kèm những bình luận chế giễu ngoại hình. Hành động đúng đắn nhất của bạn là gì?',
      o: [
        'A. Thả cảm xúc haha hùa theo để không bị xem là người lạc lõng.',
        'B. Không tham gia tương tác, nhắn tin riêng động viên bạn và báo cho Ban cán sự lớp / Cố vấn học tập can thiệp.',
        'C. Chụp màn hình rồi gửi tiếp cho nhóm bạn khác xem cùng để bàn tán.'
      ],
      a: 1,
      e: 'Sự im lặng hay hùa theo của người chứng kiến sẽ tiếp tay cho bắt nạt. Lên tiếng bảo vệ và báo cáo là giải pháp văn minh nhất.'
    },
    {
      q: 'Câu 2: Bạn nhận được tin nhắn từ tài khoản ẩn danh đe dọa sẽ bóc phốt bạn lên diễn đàn trường nếu không chuyển tiền. Bạn nên xử lý thế nào?',
      o: [
        'A. Hoảng sợ chuyển tiền ngay với hy vọng đối phương sẽ buông tha.',
        'B. Nổi nóng nhắn tin chửi bới và đe dọa trả thù lại đối phương.',
        'C. Tuyệt đối không chuyển tiền, chụp lại toàn bộ màn hình tin nhắn làm bằng chứng và liên hệ ngay Hotline 113 hoặc Phòng CTSV.'
      ],
      a: 2,
      e: 'Hành vi tống tiền là vi phạm pháp luật hình sự. Chuyển tiền sẽ khiến đối tượng tiếp tục vòi vĩnh. Phải báo cáo cơ quan chức năng ngay.'
    },
    {
      q: 'Câu 3: Một người bạn thân nhờ bạn chụp gửi hình ảnh riêng tư nhạy cảm để "chứng minh tình cảm và lòng tin tưởng". Bạn sẽ chọn phương án nào?',
      o: [
        'A. Kiên quyết từ chối, vì hình ảnh số khi gửi qua mạng có nguy cơ bị rò rỉ, đánh cắp hoặc dùng làm công cụ tống tiền sau này.',
        'B. Gửi ảnh nhưng dùng app che một phần khuôn mặt lại.',
        'C. Tin tưởng bạn thân tuyệt đối nên đồng ý gửi ngay.'
      ],
      a: 0,
      e: 'Hình ảnh nhạy cảm khi đã phát tán trên mạng là không thể thu hồi hoàn toàn. Từ chối gửi ảnh riêng tư là nguyên tắc tự vệ số căn bản.'
    },
    {
      q: 'Câu 4: Khi làm bài tập nhóm, bạn lỡ lời đăng bình luận chỉ trích gay gắt xúc phạm một thành viên. Khi nhận ra mình sai, bạn nên làm gì?',
      o: [
        'A. Âm thầm xóa tin nhắn đi và coi như không có chuyện gì xảy ra.',
        'B. Chủ động gỡ bỏ bình luận, gửi lời xin lỗi chân thành trực tiếp và rút kinh nghiệm sâu sắc về văn hóa giao tiếp.',
        'C. Cố chấp biện minh rằng "mình chỉ nói thật và đùa chút thôi".'
      ],
      a: 1,
      e: 'Dũng cảm nhận trách nhiệm và xin lỗi chân thành là cách nhanh nhất để hàn gắn mối quan hệ và ngăn ngừa xung đột leo thang.'
    },
    {
      q: 'Câu 5: Phát hiện có tài khoản mạng xã hội giả mạo thông tin, hình ảnh thẻ sinh viên của bạn để đi nhắn tin lừa đảo. Bạn cần làm gì?',
      o: [
        'A. Đăng bài đính chính cảnh báo bạn bè, lưu chứng cứ và báo cáo tài khoản vi phạm cho nền tảng & Đoàn trường.',
        'B. Mặc kệ vì nghĩ mọi người sẽ tự nhận ra đó không phải là mình.',
        'C. Nhắn tin năn nỉ kẻ mạo danh xóa tài khoản.'
      ],
      a: 0,
      e: 'Hành động nhanh chóng cảnh báo cộng đồng và phối hợp báo cáo giúp ngăn chặn kịp thời các vụ việc lừa đảo mang tên bạn.'
    },
    {
      q: 'Câu 6: Theo quy định pháp luật Việt Nam hiện hành, hành vi đăng tin bịa đặt, xúc phạm nghiêm trọng nhân phẩm người khác trên mạng xã hội có thể bị phạt như thế nào?',
      o: [
        'A. Chỉ bị nhắc nhở nội bộ và không có chế tài xử phạt tiền.',
        'B. Bị phạt hành chính từ 5 - 10 triệu đồng (Nghị định 15/2020/NĐ-CP sửa đổi bởi NĐ 14/2022/NĐ-CP) hoặc bị truy cứu trách nhiệm hình sự (Điều 155, 156 BLHS).',
        'C. Chỉ cần xóa bài viết là hoàn toàn miễn trừ mọi trách nhiệm pháp lý.'
      ],
      a: 1,
      e: 'Không gian mạng không phải là vùng vô luật. Mọi hành vi làm nhục, vu khống đều có chế tài xử phạt hành chính theo Nghị định 15/2020/NĐ-CP và trách nhiệm hình sự nghiêm minh.'
    },
    {
      q: 'Câu 7: Tài khoản cá nhân của bạn liên tục bị một nhóm tài khoản ảo spam bình luận chửi bới, xúc phạm danh dự dưới mỗi bài đăng. Cách xử lý an toàn nhất là gì?',
      o: [
        'A. Đáp trả gay gắt bằng ngôn từ tương tự dưới từng bình luận.',
        'B. Chụp màn hình bằng chứng, bật tính năng giới hạn bình luận / lọc từ khóa phản cảm và chặn các tài khoản vi phạm.',
        'C. Tự ý xóa tài khoản chính mà không lưu lại bất kỳ chứng cứ nào.'
      ],
      a: 1,
      e: 'Bảo lưu bằng chứng số và kích hoạt bộ lọc bảo vệ kỹ thuật là bước đi đúng đắn nhất để chấm dứt sự phiền nhiễu.'
    },
    {
      q: 'Câu 8: Một trang confession trường đăng bài viết ẩn danh bêu riếu đời tư một bạn học cùng khóa với nhiều từ ngữ ác ý. Một số bạn bè rủ bạn vào thả phẫn nộ và chửi bới theo. Bạn sẽ làm gì?',
      o: [
        'A. Hùa theo số đông bình luận vì cho rằng tài khoản mình là vô hại trong đám đông.',
        'B. Không tương tác hùa theo, khuyên bạn bè dừng lại và báo cáo bài viết vi phạm cho ban quản trị hoặc Đoàn trường.',
        'C. Chia sẻ bài viết về trang cá nhân của mình để kéo thêm nhiều người vào bàn tán.'
      ],
      a: 1,
      e: 'Lan truyền hoặc hùa theo tin đồn thất thiệt chính là hành vi tiếp tay cho bạo lực mạng. Hãy từ chối tham gia công kích hội đồng.'
    },
    {
      q: 'Câu 9: Bạn phát hiện bạn cùng phòng có dấu hiệu lo âu tột độ, mất ngủ, bỏ ăn và sợ đến giảng đường vì đang bị đe dọa tung tin nhắn riêng tư lên mạng. Bạn nên giúp bạn thế nào?',
      o: [
        'A. Khuyên bạn nên âm thầm chịu đựng hoặc bỏ học về quê một thời gian.',
        'B. Trách móc bạn vì sao lại bất cẩn để lộ tin nhắn riêng tư.',
        'C. Ở bên cạnh lắng nghe, trấn an tâm lý và đồng hành cùng bạn tới Phòng CTSV / Phòng Y tế - Tư vấn TDMU để được bảo vệ kịp thời.'
      ],
      a: 2,
      e: 'Sự đồng hành và hỗ trợ tâm lý kịp thời của bạn bè là chiếc phao cứu sinh giúp nạn nhân vượt qua khủng hoảng an toàn.'
    },
    {
      q: 'Câu 10: Hành vi cắt ghép khuôn mặt của bạn học vào các hình ảnh, video clip phản cảm (sử dụng công nghệ Deepfake AI) rồi đăng lên mạng bị pháp luật và Nhà trường xử lý ra sao?',
      o: [
        'A. Chỉ là trò đùa vô hại của sinh viên nên không bị kỷ luật.',
        'B. Vi phạm nghiêm trọng Luật An ninh mạng, Điều 155 Bộ luật Hình sự (Tội làm nhục người khác) và có thể bị đình chỉ hoặc buộc thôi học theo Quy chế CTSV.',
        'C. Nhà trường chỉ nhắc nhở qua loa trong buổi sinh hoạt lớp.'
      ],
      a: 1,
      e: 'Cắt ghép hình ảnh nhạy cảm bằng công nghệ là hành vi vi phạm pháp luật hình sự nghiêm trọng và phải chịu chế tài kỷ luật nghiêm khắc nhất.'
    }
  ];

  let pts = 0, done = 0;

  function buildQ() {
    pts = 0;
    done = 0;
    const sc = document.getElementById('sc');
    const rq = document.getElementById('rq');
    const box = document.getElementById('qz');
    if (!box) return;

    if (sc) sc.textContent = '';
    if (rq) rq.style.display = 'inline-flex';
    box.innerHTML = '';

    if (window.TDMU_AUTH && !window.TDMU_AUTH.getCurrentUser()) {
      const authBanner = document.createElement('div');
      authBanner.style.cssText = 'background:#FFFBEB;border:1.5px solid #F59E0B;border-radius:14px;padding:14px 18px;margin-bottom:18px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px';
      authBanner.innerHTML = `
        <div style="display:flex;align-items:center;gap:10px">
          <span style="font-size:1.4rem">🔒</span>
          <div>
            <strong style="color:#B45309;font-size:.92rem;display:block">Yêu cầu Đăng nhập để làm bài trắc nghiệm</strong>
            <span style="font-size:.82rem;color:#92400E">Đăng nhập tài khoản sinh viên TDMU để mở khóa làm bài, tự động ghi nhận MSSV và nhận Giấy chứng nhận (+5 ĐRL).</span>
          </div>
        </div>
        <a href="dang-nhap.html?redirect=nhan-dien.html" class="btn" style="background:#D97706;border-color:#D97706;color:#fff;font-size:.85rem;padding:7px 16px">
          🔑 Đăng nhập ngay
        </a>
      `;
      box.appendChild(authBanner);
    }

    Q.forEach((x, qi) => {
      const d = document.createElement('div');
      d.className = 'q';
      d.innerHTML = `<h3 style="font-size:1.02rem;color:var(--ink);line-height:1.4">${esc(x.q)}</h3>`;

      const fb = document.createElement('div');
      fb.className = 'fb';

      x.o.forEach((t, oi) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'op';
        b.textContent = t;
        b.onclick = () => {
          if (window.TDMU_AUTH && !window.TDMU_AUTH.requireLogin('Bài trắc nghiệm nhận diện & Cấp giấy chứng nhận (+5 ĐRL)')) {
            return;
          }
          d.querySelectorAll('.op').forEach((e, k) => {
            e.disabled = true;
            if (k === x.a) e.classList.add('ok');
          });
          if (oi === x.a) {
            pts++;
            fb.innerHTML = `<span style="color:#059669;font-weight:600">✓ Chính xác!</span> ${x.e}`;
          } else {
            b.classList.add('no');
            fb.innerHTML = `<span style="color:#DC2626;font-weight:600">✕ Chưa đúng.</span> ${x.e}`;
          }
          done++;
          if (done === Q.length) {
            if (sc) {
              const pass = pts >= 8;
              const currentUser = (window.TDMU_AUTH && window.TDMU_AUTH.getCurrentUser) ? window.TDMU_AUTH.getCurrentUser() : null;
              let currentStudentName = currentUser ? currentUser.name : 'Sinh viên TDMU';
              let currentStudentId = currentUser ? currentUser.id : '2026';
              let currentStudentDept = currentUser ? (currentUser.dept || 'Trường Đại học Thủ Dầu Một') : 'Trường Đại học Thủ Dầu Một';
              let currentStudentEmail = currentUser ? currentUser.email : '';

              if (pass) {
                sc.innerHTML = `
                  <div style="background:#FFFFFF;border:2px solid #10B981;border-radius:18px;padding:26px 20px;margin-top:16px;box-shadow:0 12px 32px -6px rgba(16,185,129,.2)">
                    <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
                      <div style="width:50px;height:50px;border-radius:50%;background:#D1FAE5;color:#059669;display:grid;place-items:center;font-size:1.5rem">🎓</div>
                      <div>
                        <strong style="color:#059669;font-size:1.28rem;display:block">Kết quả: Đạt ${pts} / 10 câu đúng (Xuất sắc)!</strong>
                        <span style="font-size:.86rem;color:#047857">Chúc mừng bạn đã hoàn thành bài kiểm tra và ĐƯỢC CẤP GIẤY CHỨNG NHẬN TRỰC TIẾP (+5 ĐRL).</span>
                      </div>
                    </div>

                    <div style="position:relative;margin:16px 0;text-align:center">
                      <canvas id="certCanvas" width="800" height="560" style="width:100%;max-width:760px;height:auto;border-radius:14px;border:1.5px solid var(--ln);box-shadow:0 8px 24px -4px rgba(11,37,64,.12);display:block;margin:0 auto"></canvas>
                    </div>

                    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:18px">
                      <button type="button" class="btn" id="downloadDirectCertBtn" style="padding:9px 18px;font-size:.88rem">
                        📥 Tải Giấy chứng nhận (PNG)
                      </button>
                      <button type="button" class="btn o" id="printDirectCertBtn" style="padding:9px 18px;font-size:.88rem">
                        🖨️ In Giấy chứng nhận
                      </button>
                      <button type="button" class="btn o" id="btnRetryQuizFromPass" style="padding:9px 18px;font-size:.88rem">
                        ↺ Làm lại bài trắc nghiệm
                      </button>
                    </div>

                    ${currentUser ? `
                      <div style="background:#F0FDF4;border:1.5px solid #10B981;border-radius:12px;padding:16px;text-align:center">
                        <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:6px">
                          <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#10B981;box-shadow:0 0 0 3px rgba(16,185,129,0.25)"></span>
                          <b style="color:#065F46;font-size:1rem">Đã tự động gửi Giấy chứng nhận về Gmail của bạn!</b>
                        </div>
                        <p style="margin:0 0 12px;font-size:.88rem;color:#047857">Bản điện tử chính thức kèm mã xác thực <b>#TDMU-DR26-${currentStudentId.slice(-4)}</b> đã được chuyển phát tức thì tới hộp thư: <b>${currentStudentEmail}</b></p>
                        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
                          <button type="button" class="btn o btn-sm" id="sendDirectGmailBtn" style="padding:7px 18px;font-size:.82rem">
                            ✉️ Gửi về Gmail
                          </button>
                        </div>
                        <div id="gmailDispatchNotice" style="display:none;margin-top:12px;padding:10px 14px;background:#ECFDF5;border:1px solid #10B981;border-radius:10px;font-size:.86rem;color:#065F46;font-weight:600"></div>
                      </div>
                    ` : `
                      <div style="background:#F8FAFC;border:1px solid var(--ln);border-radius:14px;padding:16px;margin-top:10px">
                        <b style="color:var(--ink);font-size:.92rem;display:block;margin-bottom:6px">Điền thông tin nhận Giấy chứng nhận gửi về Gmail của bạn:</b>
                        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:10px;margin-bottom:12px">
                          <div>
                            <label style="display:block;font-size:.76rem;color:var(--mu);margin-bottom:3px;font-weight:600">Họ và tên sinh viên</label>
                            <input type="text" id="inputCertName" class="auth-input" placeholder="Ví dụ: Nguyễn Văn An" style="padding:8px 12px;font-size:.86rem" />
                          </div>
                          <div>
                            <label style="display:block;font-size:.76rem;color:var(--mu);margin-bottom:3px;font-weight:600">Mã số sinh viên (MSSV)</label>
                            <input type="text" id="inputCertId" class="auth-input" placeholder="Ví dụ: 2328501010012" style="padding:8px 12px;font-size:.86rem" />
                          </div>
                          <div>
                            <label style="display:block;font-size:.76rem;color:var(--mu);margin-bottom:3px;font-weight:600">Gmail sinh viên (@gmail.com)</label>
                            <input type="email" id="inputCertEmail" class="auth-input" placeholder="Ví dụ: an.nv@gmail.com" style="padding:8px 12px;font-size:.86rem" />
                          </div>
                        </div>
                        <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
                          <button type="button" class="btn" id="updateAndSendGmailBtn" style="padding:9px 20px;font-size:.88rem">
                            ✉️ Gửi về Gmail
                          </button>
                          <a href="dang-nhap.html" class="btn o" style="padding:9px 16px;font-size:.88rem">
                            🔑 Đăng nhập để lưu hồ sơ
                          </a>
                        </div>
                        <div id="gmailDispatchNotice" style="display:none;margin-top:12px;padding:10px 14px;background:#ECFDF5;border:1px solid #10B981;border-radius:10px;font-size:.86rem;color:#065F46;font-weight:600"></div>
                      </div>
                    `}
                    <div style="margin-top:16px;text-align:center">
                      <button type="button" class="btn o" id="btnRetryQuizFromPassBottom" style="padding:9px 20px;font-size:.88rem">
                        ↺ Thử thách làm lại bài trắc nghiệm từ đầu
                      </button>
                    </div>
                  </div>
                `;

                const cCanvas = document.getElementById('certCanvas');
                drawNhanDienCertificate(cCanvas, currentStudentName, currentStudentId, currentStudentDept);
                if (sc) sc.scrollIntoView({ behavior: 'smooth', block: 'start' });

                if (currentUser && currentStudentEmail) {
                  sendCertViaEmailJS(currentStudentName, currentStudentId, currentStudentEmail, currentStudentDept, pts, cCanvas);
                }

                const retryPassBtn = document.getElementById('btnRetryQuizFromPass');
                if (retryPassBtn) {
                  retryPassBtn.onclick = () => {
                    buildQ();
                    const qz = document.getElementById('qz');
                    if (qz) qz.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  };
                }

                const retryPassBottom = document.getElementById('btnRetryQuizFromPassBottom');
                if (retryPassBottom) {
                  retryPassBottom.onclick = () => {
                    buildQ();
                    const qz = document.getElementById('qz');
                    if (qz) qz.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  };
                }

                const downloadBtn = document.getElementById('downloadDirectCertBtn');
                if (downloadBtn && cCanvas) {
                  downloadBtn.onclick = () => {
                    const fileName = 'giay-chung-nhan-tdmu-' + (currentStudentId || '2026') + '.png';
                    if (cCanvas.toBlob) {
                      cCanvas.toBlob((blob) => {
                        if (!blob) {
                          const link = document.createElement('a');
                          link.download = fileName;
                          link.href = cCanvas.toDataURL('image/png');
                          link.click();
                          return;
                        }
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.download = fileName;
                        link.href = url;
                        document.body.appendChild(link);
                        link.click();
                        setTimeout(() => {
                          if (link.parentNode) document.body.removeChild(link);
                          URL.revokeObjectURL(url);
                        }, 1500);
                      }, 'image/png');
                    } else {
                      const link = document.createElement('a');
                      link.download = fileName;
                      link.href = cCanvas.toDataURL('image/png');
                      link.click();
                    }
                  };
                }

                const printBtn = document.getElementById('printDirectCertBtn');
                if (printBtn && cCanvas) {
                  printBtn.onclick = () => {
                    const win = window.open('', '_blank');
                    win.document.write('<!DOCTYPE html><html><head><title>In Giấy Chứng Nhận TDMU</title><style>body{margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;}img{max-width:100%;height:auto;}</style></head><body><img src="' + cCanvas.toDataURL('image/png') + '" onload="window.print();window.close();"/></body></html>');
                    win.document.close();
                  };
                }

                function openGmailModal(name, id, email, dept, score, certImg) {
                  let modal = document.getElementById('tdmuGmailModal');
                  if (!modal) {
                    modal = document.createElement('div');
                    modal.id = 'tdmuGmailModal';
                    document.body.appendChild(modal);
                  }
                  const cleanId = id ? id.slice(-4) : '2026';
                  const initial = (name || 'SV').split(' ').filter(Boolean).pop()[0].toUpperCase();
                  const timeStr = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });

                  modal.className = 'modal-overlay open';
                  modal.style.display = 'flex';
                  modal.style.zIndex = '100000';
                  modal.innerHTML = `
                    <div style="background:#F6F8FC;width:95%;max-width:1020px;height:92vh;border-radius:18px;display:flex;flex-direction:column;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,0.3);border:1px solid #CBD5E1">
                      <div style="background:#F6F8FC;padding:12px 18px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #E2E8F0;flex-wrap:wrap;gap:8px">
                        <div style="display:flex;align-items:center;gap:10px">
                          <svg width="28" height="22" viewBox="0 0 24 24"><path fill="#EA4335" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                          <span style="font-size:1.25rem;font-weight:600;color:#444746;font-family:'Google Sans',sans-serif">Gmail</span>
                        </div>
                        <div style="flex:1;max-width:480px;margin:0 14px;background:#EAF1FB;border-radius:99px;padding:8px 16px;display:flex;align-items:center;gap:8px;font-size:.86rem;color:#444746">
                          <span>🔍</span>
                          <span style="opacity:.8">Tìm kiếm trong thư...</span>
                        </div>
                        <div style="display:flex;align-items:center;gap:12px">
                          <div style="display:flex;align-items:center;gap:6px">
                            <div style="width:32px;height:32px;border-radius:50%;background:#075A94;color:#fff;display:grid;place-items:center;font-weight:700;font-size:.85rem">${initial}</div>
                            <span style="font-size:.8rem;color:#1E293B;font-weight:600">${email}</span>
                          </div>
                          <button type="button" id="closeGmailModalBtn" style="background:#E2E8F0;border:none;border-radius:50%;width:32px;height:32px;cursor:pointer;display:grid;place-items:center;font-size:1.1rem;color:#334155" title="Đóng">✕</button>
                        </div>
                      </div>

                      <div style="display:flex;flex:1;overflow:hidden">
                        <div style="width:190px;background:#F6F8FC;padding:12px 10px;border-right:1px solid #E2E8F0;display:flex;flex-direction:column;gap:6px">
                          <div style="background:#C2E7FF;color:#001D35;border-radius:14px;padding:10px 14px;font-size:.85rem;font-weight:700;display:flex;align-items:center;gap:10px;cursor:pointer">
                            <span>📥</span>
                            <span>Hộp thư đến</span>
                            <span style="margin-left:auto;background:#001D35;color:#fff;border-radius:99px;padding:1px 7px;font-size:.72rem">1</span>
                          </div>
                          <div style="color:#444746;border-radius:14px;padding:8px 14px;font-size:.85rem;display:flex;align-items:center;gap:10px;cursor:pointer">
                            <span>⭐</span>
                            <span>Có gắn dấu sao</span>
                          </div>
                          <div style="color:#444746;border-radius:14px;padding:8px 14px;font-size:.85rem;display:flex;align-items:center;gap:10px;cursor:pointer">
                            <span>📤</span>
                            <span>Đã gửi</span>
                          </div>
                          <div style="color:#444746;border-radius:14px;padding:8px 14px;font-size:.85rem;display:flex;align-items:center;gap:10px;cursor:pointer">
                            <span>📝</span>
                            <span>Bản nháp</span>
                          </div>
                        </div>

                        <div style="flex:1;background:#FFFFFF;overflow-y:auto;padding:24px 28px;display:flex;flex-direction:column">
                          <div style="margin-bottom:16px">
                            <h2 style="font-size:1.22rem;color:#1F1F1F;margin:0 0 12px;font-weight:600">[TDMU] Cấp Giấy chứng nhận Đại sứ Văn hóa mạng 2026 & Xác thực +5 ĐRL (#TDMU-DR26-${cleanId})</h2>
                            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
                              <div style="display:flex;align-items:center;gap:10px">
                                <div style="width:40px;height:40px;border-radius:50%;background:#075A94;color:#fff;display:grid;place-items:center;font-weight:800;font-size:.95rem">TDMU</div>
                                <div>
                                  <b style="font-size:.9rem;color:#1F1F1F;display:block">Phòng Công tác Sinh viên – Đại học Thủ Dầu Một</b>
                                  <span style="font-size:.78rem;color:#5E5E5E">&lt;noreply.digitalrespect@tdmu.edu.vn&gt; đến tôi &lt;${email}&gt;</span>
                                </div>
                              </div>
                              <span style="font-size:.78rem;color:#5E5E5E">${timeStr} (Vừa xong)</span>
                            </div>
                          </div>

                          <div style="font-size:.92rem;line-height:1.65;color:#1F1F1F;border-top:1px solid #E2E8F0;padding-top:16px">
                            <p>Kính gửi sinh viên: <b>${name}</b> (MSSV: <b>${id || '2026'}</b>) – <b>${dept || 'Trường Đại học Thủ Dầu Một'}</b>,</p>
                            <p>Hội đồng xác thực đề tài <i>"TDMU Digital Respect – Website phòng chống bạo lực mạng sinh viên Thủ Dầu Một"</i> xin chúc mừng bạn đã xuất sắc hoàn thành chuyên đề khảo sát và xử lý tình huống văn hóa số với kết quả <b>${score}/10 câu đúng</b>.</p>
                            <p>Căn cứ Quy chế rèn luyện sinh viên Đại học Thủ Dầu Một, bạn chính thức được công nhận danh hiệu <b>Đại sứ Văn hóa mạng TDMU 2026</b> và đủ điều kiện cộng <b>+05 Điểm rèn luyện</b> (Tiêu chí 3: Đạo đức lối sống - Học kỳ I).</p>
                            
                            <div style="background:#F8FAFC;border:1.5px solid #CBD5E1;border-radius:14px;padding:20px;margin:20px 0;text-align:center">
                              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;padding-bottom:10px;border-bottom:1px solid #E2E8F0;flex-wrap:wrap;gap:6px">
                                <span style="font-weight:700;color:#0F172A;font-size:.95rem">📜 BẢN CHỨNG NHẬN ĐIỆN TỬ ĐÍNH KÈM CHÍNH THỨC CỦA BẠN:</span>
                                <span style="font-size:.8rem;background:#ECFDF5;color:#059669;padding:3px 12px;border-radius:99px;font-weight:700">Mã xác thực: #TDMU-DR26-${cleanId}</span>
                              </div>
                              <img src="${certImg}" alt="Giấy chứng nhận ${name}" style="width:100%;max-width:760px;height:auto;border-radius:12px;border:1.5px solid #CBD5E1;box-shadow:0 8px 24px -4px rgba(0,0,0,0.14);display:block;margin:0 auto" />
                              <div style="margin-top:16px;display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
                                <a href="${certImg}" download="giay-chung-nhan-tdmu-${id || '2026'}.png" class="btn" style="background:#059669;border-color:#059669;padding:9px 20px;font-size:.88rem">
                                  📥 Tải Giấy chứng nhận (PNG)
                                </a>
                              </div>
                            </div>

                            <p style="margin-top:16px">Giấy chứng nhận bản mềm (kèm mã tra cứu) đã được lưu trữ vĩnh viễn trên hệ thống. Sinh viên có thể nộp file này cho Cố vấn học tập hoặc Ban cán sự lớp khi xét điểm rèn luyện.</p>
                            <p style="margin-bottom:0">Trân trọng,<br><b>TM. BAN PHỤ TRÁCH ĐỀ TÀI & PHÒNG CÔNG TÁC SINH VIÊN</b><br><span style="color:#075A94">GVHD: Võ Tấn Bản & Nhóm 17 Sinh viên TDMU</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  `;

                  const closeBtn = document.getElementById('closeGmailModalBtn');
                  if (closeBtn) {
                    closeBtn.onclick = () => {
                      modal.className = 'modal-overlay';
                      modal.style.display = 'none';
                    };
                  }
                  modal.onclick = e => {
                    if (e.target === modal) {
                      modal.className = 'modal-overlay';
                      modal.style.display = 'none';
                    }
                  };
                }

                function buildGmailCard(name, id, email, dept, score, certImg) {
                  const cleanId = id ? id.slice(-4) : '2026';
                  return `
                    <div style="background:#ECFDF5;border:1.5px solid #10B981;border-radius:12px;padding:16px;text-align:left;color:#065F46">
                      <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px">
                        <div style="width:36px;height:36px;border-radius:50%;background:#D1FAE5;display:grid;place-items:center;font-size:1.2rem">✓</div>
                        <div>
                          <b style="font-size:.95rem;color:#065F46;display:block">Đã gửi Thư điện tử Xác thực & Giấy chứng nhận TDMU thành công!</b>
                          <span style="font-size:.82rem;color:#047857">Mã số điện tử: <b>#TDMU-DR26-${cleanId}</b> • Hộp thư người nhận: <b>${email}</b></span>
                        </div>
                      </div>

                      <div style="background:#FFFFFF;border:1px solid #CBD5E1;border-radius:10px;padding:14px;margin:12px 0 0;font-size:.86rem;line-height:1.6;color:#1E293B">
                        <div style="border-bottom:1px dashed #E2E8F0;padding-bottom:8px;margin-bottom:8px;font-size:.8rem;color:#64748B">
                          <div><b>Người gửi:</b> Trường Đại học Thủ Dầu Một &lt;noreply.digitalrespect@tdmu.edu.vn&gt;</div>
                          <div><b>Người nhận:</b> ${name} &lt;${email}&gt;</div>
                          <div><b>Tiêu đề:</b> [TDMU] Cấp Giấy chứng nhận Đại sứ Văn hóa mạng 2026 & Xác thực +5 ĐRL (#TDMU-DR26-${cleanId})</div>
                        </div>
                        <p style="margin:0 0 6px">Kính gửi bạn <b>${name}</b> (MSSV: <b>${id || '2026'}</b>),</p>
                        <p style="margin:0 0 8px">Hội đồng xác thực dự án Phòng chống Bạo lực mạng Trường Đại học Thủ Dầu Một chứng nhận bạn đã hoàn thành xuất sắc chuyên đề với số điểm <b>${score}/10 câu</b> và được công nhận là <b>Đại sứ Văn hóa mạng TDMU 2026</b> (+5 ĐRL).</p>
                        
                        <div style="margin:14px 0 0;background:#F8FAFC;border:1.5px solid #CBD5E1;border-radius:12px;padding:16px;text-align:center">
                          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid #E2E8F0">
                            <b style="font-size:.88rem;color:#0F172A">📎 Giấy chứng nhận điện tử đính kèm:</b>
                            <span style="font-size:.78rem;background:#ECFDF5;color:#059669;padding:2px 10px;border-radius:99px;font-weight:700">Đã ký số điện tử ✓</span>
                          </div>
                          <img src="${certImg}" alt="Giấy chứng nhận ${name}" style="width:100%;max-width:620px;height:auto;border-radius:10px;border:1px solid #CBD5E1;box-shadow:0 6px 20px -4px rgba(0,0,0,0.12);display:block;margin:0 auto" />
                          <div style="margin-top:12px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
                            <a href="${certImg}" download="giay-chung-nhan-tdmu-${id || '2026'}.png" class="btn" style="font-size:.84rem;padding:8px 18px">
                              📥 Tải Giấy chứng nhận (PNG chất lượng cao)
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  `;
                }

                function sendCertViaEmailJS(name, id, email, dept, score, canvas, onDone) {
                  const cleanId = id ? id.slice(-4) : '2026';
                  const certCode = 'TDMU-DR26-' + cleanId;
                  const now = new Date();
                  const certDate = now.getDate() + ' tháng ' + (now.getMonth() + 1) + ' năm ' + now.getFullYear();
                  const certDept = dept || 'Khoa Khoa học Xã hội & NV';
                  
                  if (!canvas) {
                    if (onDone) onDone('');
                    return;
                  }

                  const certData = canvas.toDataURL('image/png');
                  if (onDone) onDone(certData);

                  fetch('https://api.emailjs.com/api/v1.0/email/send', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      service_id: 'service_hadhdli',
                      template_id: 'template_nynn7c4',
                      user_id: '3V7u4TX9YAczGxyP4',
                      template_params: {
                        to_email: email,
                        student_name: (name || 'SINH VIÊN TDMU').toUpperCase(),
                        STUDENT_NAME: (name || 'SINH VIÊN TDMU').toUpperCase(),
                        student_id: id || '2026',
                        STUDENT_ID: id || '2026',
                        student_dept: certDept,
                        STUDENT_DEPT: certDept,
                        score: String(score),
                        SCORE: String(score),
                        cert_code: certCode,
                        CERT_CODE: certCode,
                        cert_date: certDate,
                        CERT_DATE: certDate
                      }
                    })
                  }).catch(function() {});
                }

                const dispatchNotice = document.getElementById('gmailDispatchNotice');
                const sendDirectBtn = document.getElementById('sendDirectGmailBtn');
                if (sendDirectBtn && dispatchNotice) {
                  sendDirectBtn.onclick = () => {
                    sendDirectBtn.disabled = true;
                    sendDirectBtn.textContent = '⏳ Đang gửi về Gmail...';
                    sendCertViaEmailJS(currentStudentName, currentStudentId, currentStudentEmail, currentStudentDept, pts, cCanvas, function(certData) {
                      sendDirectBtn.textContent = '✓ Đã gửi về Gmail thành công!';
                    });
                  };
                }

                const updateAndSendBtn = document.getElementById('updateAndSendGmailBtn');
                if (updateAndSendBtn && dispatchNotice) {
                  updateAndSendBtn.onclick = () => {
                    const inName = document.getElementById('inputCertName');
                    const inId = document.getElementById('inputCertId');
                    const inEmail = document.getElementById('inputCertEmail');
                    const vName = inName ? inName.value.trim() : '';
                    const vId = inId ? inId.value.trim() : '';
                    const vEmail = inEmail ? inEmail.value.trim().toLowerCase() : '';

                    if (!vName) {
                      alert('Vui lòng nhập Họ và tên sinh viên!');
                      return;
                    }
                    if (!vEmail) {
                      alert('Vui lòng nhập địa chỉ Gmail!');
                      return;
                    }
                    if (!vEmail.includes('@gmail.com') && !vEmail.includes('@student.tdmu.edu.vn')) {
                      alert('Hệ thống chỉ chấp nhận địa chỉ Gmail (@gmail.com hoặc @student.tdmu.edu.vn)!');
                      return;
                    }

                    currentStudentName = vName;
                    currentStudentId = vId || '2026';
                    currentStudentEmail = vEmail;
                    drawNhanDienCertificate(cCanvas, currentStudentName, currentStudentId, currentStudentDept);

                    updateAndSendBtn.disabled = true;
                    updateAndSendBtn.textContent = '⏳ Đang gửi về Gmail...';
                    setTimeout(() => {
                      updateAndSendBtn.style.display = 'none';
                      dispatchNotice.style.display = 'block';
                      sendCertViaEmailJS(currentStudentName, currentStudentId, currentStudentEmail, currentStudentDept, pts, cCanvas, function(certData) {
                        dispatchNotice.innerHTML = buildGmailCard(currentStudentName, currentStudentId, currentStudentEmail, currentStudentDept, pts, certData);
                      });
                    }, 250);
                  };
                }
              } else {
                sc.innerHTML = `
                  <div style="background:#FFFBEB;border:2px solid #F59E0B;border-radius:16px;padding:22px;margin-top:14px;box-shadow:0 6px 20px -4px rgba(245,158,11,.15)">
                    <div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">
                      <div style="width:44px;height:44px;border-radius:50%;background:#FEF3C7;color:#D97706;display:grid;place-items:center;font-size:1.4rem">⚠️</div>
                      <div>
                        <strong style="color:#B45309;font-size:1.25rem;display:block">Kết quả: Bạn đã trả lời đúng ${pts} / ${Q.length} câu</strong>
                        <span style="font-size:.86rem;color:#92400E">Cần đạt tối thiểu 8 / 10 câu đúng để được cấp Giấy chứng nhận (+5 ĐRL).</span>
                      </div>
                    </div>
                    <p style="margin:0 0 16px;font-size:.9rem;color:#78350F;line-height:1.6">
                      Rất tiếc bạn chưa đạt đủ điểm điều kiện để được cấp Giấy chứng nhận Đại sứ Văn hóa mạng TDMU. Bạn hãy bấm nút bên dưới để làm lại bài trắc nghiệm ngay nhé!
                    </p>
                    <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap">
                      <button type="button" class="btn" id="btnRetryQuizFromSc" style="background:#D97706;border-color:#D97706;color:#fff;padding:10px 22px;font-size:.92rem;font-weight:600">
                        ↺ Làm lại bài trắc nghiệm ngay
                      </button>
                      <a href="#nhandien" class="btn o" style="padding:10px 18px;font-size:.92rem">
                        📖 Ôn lại 6 hình thức bạo lực mạng ↑
                      </a>
                    </div>
                  </div>
                `;
                const retryBtn = document.getElementById('btnRetryQuizFromSc');
                if (retryBtn) {
                  retryBtn.onclick = () => {
                    buildQ();
                    const qz = document.getElementById('qz');
                    if (qz) qz.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  };
                }
              }
            }
            if (sc) sc.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (rq) rq.style.display = 'inline-flex';
          }
        };
        d.appendChild(b);
      });
      d.appendChild(fb);
      box.appendChild(d);
    });
  }

  const rqBtn = document.getElementById('rq');
  if (rqBtn) {
    rqBtn.onclick = () => {
      buildQ();
      const qz = document.getElementById('qz');
      if (qz) qz.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }
  buildQ();
})();
