(function() {
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
        'B. Bị phạt hành chính từ 10 - 15 triệu đồng (Nghị định 174/2026/NĐ-CP) hoặc bị truy cứu trách nhiệm hình sự (Điều 155, 156 BLHS).',
        'C. Chỉ cần xóa bài viết là hoàn toàn miễn trừ mọi trách nhiệm pháp lý.'
      ],
      a: 1,
      e: 'Không gian mạng không phải là vùng vô luật. Mọi hành vi làm nhục, vu khống đều có chế tài xử phạt hành chính và hình sự nghiêm minh.'
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
    if (rq) rq.style.display = 'none';
    box.innerHTML = '';

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
              const pass = pts >= 7;
              sc.innerHTML = `
                <div style="background:var(--sf);border:2px solid ${pass ? '#10B981' : '#F59E0B'};border-radius:14px;padding:16px;margin-top:14px">
                  <strong style="color:${pass ? '#059669' : '#B45309'};font-size:1.15rem">Kết quả: Đạt ${pts} / ${Q.length} câu đúng!</strong>
                  <p style="margin:6px 0 0;font-size:.9rem;color:var(--ink)">${pass ? 'Xuất sắc! Bạn nắm rất vững kiến thức và kỹ năng tự vệ số của sinh viên.' : 'Khá tốt! Hãy đọc kỹ lại phần cẩm nang ứng phó để rèn luyện thêm kỹ năng số.'}</p>
                </div>
              `;
            }
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
  if (rqBtn) rqBtn.onclick = buildQ;
  buildQ();
})();
