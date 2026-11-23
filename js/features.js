(function() {
  const sosModal = document.getElementById('sosModal');
  const openSosBtns = document.querySelectorAll('.open-sos');
  const closeSosBtns = document.querySelectorAll('.close-sos');

  openSosBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      if (sosModal) sosModal.classList.add('active');
    });
  });

  closeSosBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (sosModal) sosModal.classList.remove('active');
    });
  });

  if (sosModal) {
    sosModal.addEventListener('click', e => {
      if (e.target === sosModal) sosModal.classList.remove('active');
    });
  }

  const posterModal = document.getElementById('posterModal');
  const posterModalImg = document.getElementById('posterModalImg');
  const posterModalTitle = document.getElementById('posterModalTitle');
  const posterDownloadBtn = document.getElementById('posterDownloadBtn');
  const closePosterBtns = document.querySelectorAll('.close-poster');

  document.querySelectorAll('.view-poster-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const src = btn.getAttribute('data-src');
      const title = btn.getAttribute('data-title');
      if (posterModal && posterModalImg && posterModalTitle) {
        posterModalImg.src = src;
        posterModalTitle.textContent = title;
        if (posterDownloadBtn) {
          posterDownloadBtn.href = src;
          posterDownloadBtn.download = title.replace(/\s+/g, '-').toLowerCase() + '.svg';
        }
        posterModal.classList.add('active');
      }
    });
  });

  closePosterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (posterModal) posterModal.classList.remove('active');
    });
  });

  if (posterModal) {
    posterModal.addEventListener('click', e => {
      if (e.target === posterModal) posterModal.classList.remove('active');
    });
  }

  const SIM_DATA = [
    {
      channel: 'Tình huống 1: Zalo Nhóm Bài Tập Lớn - Lớp D23CNTT02 TDMU',
      sender: 'Thành viên nhóm (Ẩn danh)',
      time: '22:15 hôm qua',
      initialMsg: 'Ê, phần slide mày làm nhìn phèn với rác quá. Đổi người khác làm đi, không tao cap màn hình quăng lên TDMU Confessions cho cả trường tế mày giờ!',
      choices: [
        {
          text: 'Nổi nóng nhắn chửi lại: "Mày ngon thì phốt đi xem ai sợ ai!"',
          reply: 'Nó đã cap màn hình câu chửi của bạn và đăng bài ẩn danh lên diễn đàn với lời dẫn: "Sinh viên thái độ lồi lõm khi làm bài nhóm".',
          danger: true,
          badge: 'Nguy cơ cao (Bị gài bẫy)',
          badgeClass: 'danger',
          lesson: 'Khi bạn đáp trả bằng lời lẽ xúc phạm, đối phương sẽ cắt xén ngữ cảnh và chỉ đăng phần bạn chửi bới để biến bạn thành người sai trước tập thể.'
        },
        {
          text: 'Sợ hãi tự động rời nhóm Zalo và im lặng chịu trận',
          reply: 'Nhóm tự ý gạch tên bạn khỏi danh sách nộp bài giảng viên. Bạn có nguy cơ bị rớt học phần.',
          danger: true,
          badge: 'Chưa phù hợp (Mất quyền lợi)',
          badgeClass: 'danger',
          lesson: 'Tự ý im lặng bỏ cuộc khiến bạn vừa chịu tổn thương tâm lý, vừa bị tước đoạt điểm số học phần. Bạn cần giữ bằng chứng để bảo vệ quyền lợi sinh viên.'
        },
        {
          text: 'Bình tĩnh chụp full màn hình kèm giờ, nhắn lịch sự và báo Cố vấn học tập',
          reply: 'Cố vấn học tập đã tiếp nhận ảnh chụp bằng chứng, yêu cầu nhóm họp hòa giải và xử phạt hành vi đe dọa bôi nhọ.',
          danger: false,
          badge: 'Xử lý chuẩn xác (+100 điểm)',
          badgeClass: 'safe',
          lesson: 'Rất chính xác! Bình tĩnh ghi lại mốc thời gian, không để cảm xúc dẫn dắt và đưa bằng chứng cho Giảng viên/Nhà trường giải quyết.'
        }
      ]
    },
    {
      channel: 'Tình huống 2: Tin nhắn Messenger Facebook',
      sender: 'Tài khoản mạo danh Avatar & Thẻ SV của bạn',
      time: '14:30 chiều nay',
      initialMsg: 'Chào bạn, mình dùng nick phụ nhắn. Mình đang kẹt tiền đóng học phí học phần gấp tại cổng TDMU, bạn cho mình mượn 1 triệu chiều mình trả nhé?',
      choices: [
        {
          text: 'Không kiểm tra, tin tưởng chuyển tiền ngay qua số tài khoản lạ',
          reply: 'Kẻ mạo danh chặn tin nhắn ngay lập tức. Sau đó nhiều bạn bè khác trong lớp cũng nhận được tin nhắn lừa đảo tương tự.',
          danger: true,
          badge: 'Bị lừa đảo chiếm đoạt',
          badgeClass: 'danger',
          lesson: 'Kẻ xấu thường mạo danh tài khoản sinh viên uy tín trong trường để lừa tiền bạn bè. Luôn phải gọi điện thoại xác nhận trực tiếp trước khi giao dịch tiền bạc.'
        },
        {
          text: 'Chụp màn hình tài khoản giả mạo, đăng bài đính chính trên trang cá nhân và báo Đoàn trường',
          reply: 'Bạn bè trong khoa đã kịp thời cảnh giác. Tài khoản giả mạo bị báo cáo hàng loạt và bị Facebook khóa trong 2 giờ.',
          danger: false,
          badge: 'Kỹ năng số xuất sắc',
          badgeClass: 'safe',
          lesson: 'Hành động nhanh chóng cảnh báo cộng đồng sinh viên giúp ngăn chặn kẻ xấu lợi dụng hình ảnh của bạn để trục lợi trái phép.'
        }
      ]
    },
    {
      channel: 'Tình huống 3: Bình luận bài viết công khai Fanpage',
      sender: 'Nick ảo trên bài viết trường TDMU',
      time: '08:45 sáng nay',
      initialMsg: 'Nhìn mặt với dáng bạn này chụp ở Căn-tin khu B trông xấu xí ghê, đi học mà ăn mặc như thế cũng dám khoe lên mạng.',
      choices: [
        {
          text: 'Lập tức đôi co, chê bai ngoại hình lại đối phương dưới bình luận',
          reply: 'Cuộc tranh cãi nổ ra với hàng chục bình luận tiêu cực khác hùa vào, khiến bài đăng lan truyền mạnh hơn.',
          danger: true,
          badge: 'Tiếp tay cho bạo lực',
          badgeClass: 'danger',
          lesson: 'Bình luận tranh cãi với nick ảo chỉ làm thuật toán mạng xã hội đẩy bài viết lên cao (tăng tương tác), khiến nhiều người thấy hơn.'
        },
        {
          text: 'Bấm Báo cáo bình luận quấy rối, chặn nick và không để lời ác ý ảnh hưởng',
          reply: 'Bình luận đã bị thuật toán tự động ẩn đi. Bạn giữ tâm thế tự tin và không tốn năng lượng cho những lời miệt thị vô danh.',
          danger: false,
          badge: 'Tâm lý số vững vàng',
          badgeClass: 'safe',
          lesson: 'Tấn công ngoại hình (Body shaming) là hành vi vi phạm chuẩn mực văn hóa. Không phản hồi và kích hoạt bộ lọc báo cáo là giải pháp văn minh nhất.'
        }
      ]
    },
    {
      channel: 'Tình huống 4: Hộp thư riêng Telegram / Zalo',
      sender: 'Kẻ tống tiền ẩn danh',
      time: '23:50 đêm muộn',
      initialMsg: 'Tao đang giữ hình ảnh nhạy cảm trong chuyến đi chơi của mày. Chuyển ngay 3 triệu vào STK này trong 30 phút, nếu không ảnh sẽ được gửi cho toàn bộ danh bạ lớp!',
      choices: [
        {
          text: 'Hoảng sợ vay mượn tiền để chuyển ngay cho đối phương',
          reply: 'Kẻ tống tiền yêu cầu chuyển tiếp 5 triệu nữa và tiếp tục đe dọa không hồi kết.',
          danger: true,
          badge: 'Đặc biệt nguy hiểm',
          badgeClass: 'danger',
          lesson: 'Tuyệt đối không chuyển tiền! Thỏa hiệp với kẻ tống tiền sẽ biến bạn thành con mồi lâu dài.'
        },
        {
          text: 'Lưu toàn bộ ảnh tin nhắn, số tài khoản, ngắt kết nối và gọi Hotline 113',
          reply: 'Công an tiếp nhận thụ lý hồ sơ truy tìm dòng tiền ngân hàng và đối tượng bị xử lý hình sự.',
          danger: false,
          badge: 'Xử lý chuẩn pháp luật',
          badgeClass: 'safe',
          lesson: 'Tống tiền qua mạng là tội phạm hình sự nguy hiểm. Cơ quan chức năng có đủ biện pháp công nghệ để truy vết thủ phạm.'
        }
      ]
    },
    {
      channel: 'Tình huống 5: Nhóm chat kín lớp môn học chung',
      sender: 'Nhóm bạn cùng bàn',
      time: '11:15 trưa',
      initialMsg: 'Tụi mình lập nhóm kín mới không cho bạn A vào nhé, nhìn nó khó ưa quá, từ giờ cả nhóm đừng ai thèm bắt chuyện với nó!',
      choices: [
        {
          text: 'Hùa theo, thả tim và cô lập bạn A theo số đông',
          reply: 'Bạn A bị cô lập hoàn toàn, rơi vào khủng hoảng tâm lý và có ý định bỏ học.',
          danger: true,
          badge: 'Hành vi bạo lực lạnh',
          badgeClass: 'danger',
          lesson: 'Cô lập tập thể (Exclusion) là hình thức bạo lực học đường để lại vết thương tâm lý nặng nề nhất.'
        },
        {
          text: 'Lên tiếng phản đối việc cô lập và chủ động rủ bạn A cùng học nhóm',
          reply: 'Bầu không khí lớp học đoàn kết trở lại. Bạn A tìm lại được niềm tin và động lực đến trường.',
          danger: false,
          badge: 'Lan tỏa sự tử tế',
          badgeClass: 'safe',
          lesson: 'Một tiếng nói chính trực của người trong cuộc có thể giải cứu một người bạn khỏi sự tuyệt vọng.'
        }
      ]
    },
    {
      channel: 'Tình huống 6: Bài đăng diễn đàn sinh viên',
      sender: 'Tài khoản nặc danh',
      time: '19:20 tối',
      initialMsg: 'Cảnh báo: Đây là số điện thoại và địa chỉ phòng trọ của bạn X (SV K22). Ai muốn tìm hiểu thì cứ gọi vào số này làm phiền nó nhé!',
      choices: [
        {
          text: 'Liên hệ Admin diễn đàn yêu cầu gỡ bài vi phạm quyền riêng tư và trình báo Công an',
          reply: 'Admin đã xóa bài trong 15 phút và cung cấp thông tin tài khoản vi phạm cho cơ quan chức năng.',
          danger: false,
          badge: 'Bảo vệ an toàn số',
          badgeClass: 'safe',
          lesson: 'Phát tán thông tin cá nhân (Doxing) vi phạm nghiêm trọng Luật An ninh mạng và Nghị định 15/2020/NĐ-CP & Nghị định 13/2023/NĐ-CP.'
        },
        {
          text: 'Tức giận đăng số điện thoại của đối phương lên mạng để trả đũa',
          reply: 'Cả hai bên đều vi phạm pháp luật và cùng bị xử lý kỷ luật trước Hội đồng khen thưởng kỷ luật trường.',
          danger: true,
          badge: 'Vi phạm pháp luật',
          badgeClass: 'danger',
          lesson: 'Dùng sai trái để đáp lại sai trái sẽ biến bạn từ nạn nhân thành người đồng vi phạm trước pháp luật.'
        }
      ]
    },
    {
      channel: 'Tình huống 7: Tranh luận trong nhóm Zalo lớp',
      sender: 'Bạn cùng lớp',
      time: '16:00 chiều',
      initialMsg: 'Quan điểm của mày ngu xuẩn như thế mà cũng đòi phát biểu trước giảng đường à? Não phẳng vừa thôi!',
      choices: [
        {
          text: 'Nhắn lại xúc phạm gia đình và quê quán của đối phương',
          reply: 'Xung đột chuyển thành ẩu đả trực tiếp tại sân trường, cả hai bị đình chỉ học tập 1 học kỳ.',
          danger: true,
          badge: 'Hậu quả nghiêm trọng',
          badgeClass: 'danger',
          lesson: 'Công kích cá nhân (Flaming) trên mạng rất dễ biến thành bạo lực ngoài đời thực nếu không biết kiềm chế.'
        },
        {
          text: 'Nhắn bình tĩnh: "Mình đang tranh luận về nội dung học tập, bạn hãy giữ lịch sự và tôn trọng người khác"',
          reply: 'Đối phương xấu hổ trước thái độ văn minh của bạn và tự động rút lại lời nói khiếm nhã.',
          danger: false,
          badge: 'Bản lĩnh ứng xử',
          badgeClass: 'safe',
          lesson: 'Giữ thái độ điềm tĩnh, chuẩn mực là vũ khí tốt nhất để vô hiệu hóa những lời nói thô lỗ.'
        }
      ]
    },
    {
      channel: 'Tình huống 8: Tin nhắn Messenger tự xưng Ban Cán sự',
      sender: 'Nick ảo mạo danh Lớp trưởng',
      time: '07:30 sáng',
      initialMsg: 'Thầy yêu cầu đóng thêm 500k tiền quỹ thực hành gấp sáng nay. Mọi người chuyển gấp vào STK cá nhân này nha!',
      choices: [
        {
          text: 'Vội vã chuyển tiền ngay vì sợ bị ảnh hưởng điểm rèn luyện',
          reply: 'Bạn đã bị kẻ gian mạo danh lừa đảo tiền bạc trước giờ lên lớp.',
          danger: true,
          badge: 'Mất cảnh giác',
          badgeClass: 'danger',
          lesson: 'Mọi khoản thu của trường đều có thông báo văn bản chính thức và số tài khoản của Trường ĐH Thủ Dầu Một.'
        },
        {
          text: 'Gọi điện thoại trực tiếp cho Lớp trưởng thật để xác minh',
          reply: 'Lớp trưởng xác nhận đó là nick giả và kịp thời cảnh báo toàn thể lớp học.',
          danger: false,
          badge: 'Cảnh giác thông minh',
          badgeClass: 'safe',
          lesson: 'Xác minh đa kênh là nguyên tắc vàng để phòng ngừa lừa đảo qua mạng xã hội.'
        }
      ]
    },
    {
      channel: 'Tình huống 9: Diễn đàn mạng xã hội trường',
      sender: 'Bài đăng bôi nhọ ẩn danh',
      time: '21:00 tối',
      initialMsg: 'Có người đăng tin bịa đặt vu khống bạn có quan hệ bất chính với giảng viên để xin điểm học phần.',
      choices: [
        {
          text: 'Uất ức tự nhốt mình trong phòng, khóc lóc và suy nghĩ tiêu cực',
          reply: 'Sức khỏe tinh thần suy sụp nghiêm trọng trong khi kẻ vu khống vẫn nhởn nhơ.',
          danger: true,
          badge: 'Tổn hại sức khỏe',
          badgeClass: 'danger',
          lesson: 'Bạn là nạn nhân và không làm gì sai. Hãy tìm sự hỗ trợ tâm lý từ thầy cô, gia đình và bạn bè thân thiết.'
        },
        {
          text: 'Lập Biên bản chứng cứ bằng công cụ của trang web, gửi Phòng CTSV yêu cầu xác minh minh bạch',
          reply: 'Nhà trường phối hợp trích xuất dữ liệu, kẻ vu khống bị buộc xin lỗi công khai và bị kỷ luật cảnh cáo.',
          danger: false,
          badge: 'Hành động đúng đắn',
          badgeClass: 'safe',
          lesson: 'Nhà trường luôn có quy trình bảo vệ danh dự, nhân phẩm chính đáng cho sinh viên.'
        }
      ]
    },
    {
      channel: 'Tình huống 10: Người chứng kiến bạo lực mạng',
      sender: 'Nhóm chat chung khóa',
      time: '15:20 chiều',
      initialMsg: 'Bạn thấy một bạn học đang bị nhiều nick ảo cùng vào trang cá nhân bêu rếu, chế ảnh nhạo báng.',
      choices: [
        {
          text: 'Nghĩ rằng "không phải chuyện của mình" nên lướt qua xem như không thấy',
          reply: 'Nạn nhân cảm thấy bị cả thế giới bỏ rơi và rơi vào trầm cảm nặng.',
          danger: true,
          badge: 'Thờ ơ vô cảm',
          badgeClass: 'danger',
          lesson: 'Sự im lặng của người tốt là môi trường thuận lợi nhất cho cái ác và bạo lực sinh sôi.'
        },
        {
          text: 'Nhắn tin riêng hỏi han, cùng bạn chụp chứng cứ và đồng hành báo cáo Cố vấn học tập',
          reply: 'Nạn nhân được tiếp thêm sức mạnh tinh thần to lớn và vụ việc được ngăn chặn kịp thời.',
          danger: false,
          badge: 'Đại sứ Văn hóa Số',
          badgeClass: 'safe',
          lesson: 'Bạn đã thực hiện xuất sắc cam kết của sinh viên TDMU: Luôn lên tiếng và đồng hành bảo vệ bạn bè.'
        }
      ]
    }
  ];

  let curSimIdx = 0;
  let simTimer = null;
  let simResults = {};

  function renderSim() {
    if (simTimer) {
      clearInterval(simTimer);
      simTimer = null;
    }
    const data = SIM_DATA[curSimIdx];
    const senderEl = document.getElementById('simSender');
    const msgsEl = document.getElementById('simMsgs');
    const choicesEl = document.getElementById('simChoices');
    const feedbackEl = document.getElementById('simFeedback');
    const channelEl = document.getElementById('simChannel');

    if (!senderEl || !msgsEl || !choicesEl || !feedbackEl) return;

    senderEl.textContent = `[Tình huống ${curSimIdx + 1}/10] ${data.sender}`;
    if (channelEl) channelEl.textContent = data.channel;
    feedbackEl.style.display = 'none';

    msgsEl.innerHTML = `
      <div style="text-align:center;margin-bottom:8px">
        <span style="font-size:.72rem;background:#E2E8F0;color:#64748B;padding:3px 10px;border-radius:99px">${data.time}</span>
      </div>
      <div class="msg-bubble msg-incoming">
        ${data.initialMsg}
      </div>
    `;

    choicesEl.innerHTML = '';
    data.choices.forEach((c, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'sim-choice-btn';
      const letter = String.fromCharCode(65 + idx);
      btn.innerHTML = `
        <span class="sim-badge" style="background:#F1F5F9;color:#334155;border:1px solid #CBD5E1;font-weight:700">Phương án ${letter}</span>
        <span style="flex:1;text-align:left;line-height:1.5">${c.text}</span>
      `;
      btn.onclick = () => chooseSimOption(idx);
      choicesEl.appendChild(btn);
    });
  }

  function chooseSimOption(idx) {
    if (simTimer) {
      clearInterval(simTimer);
      simTimer = null;
    }
    const data = SIM_DATA[curSimIdx];
    const choice = data.choices[idx];
    const msgsEl = document.getElementById('simMsgs');
    const choicesEl = document.getElementById('simChoices');
    const feedbackEl = document.getElementById('simFeedback');

    if (!msgsEl || !choicesEl || !feedbackEl) return;

    choicesEl.querySelectorAll('button').forEach((b, k) => {
      b.disabled = true;
      const opt = data.choices[k];
      if (k === idx) {
        b.style.borderColor = opt.danger ? '#EF4444' : '#10B981';
        b.style.background = opt.danger ? '#FEF2F2' : '#ECFDF5';
        b.innerHTML = `
          <span class="sim-badge ${opt.badgeClass}">${opt.badge}</span>
          <span style="flex:1;text-align:left;line-height:1.5;font-weight:600">${opt.text}</span>
        `;
      } else {
        b.style.opacity = '0.6';
      }
    });

    msgsEl.innerHTML += `
      <div class="msg-bubble msg-outgoing">
        ${choice.text}
      </div>
    `;
    msgsEl.scrollTop = msgsEl.scrollHeight;

    setTimeout(() => {
      msgsEl.innerHTML += `
        <div class="msg-bubble msg-incoming" style="border-left: 3px solid ${choice.danger ? '#EF4444' : '#10B981'}">
          <b>Kết quả thực tế:</b> ${choice.reply}
        </div>
      `;
      msgsEl.scrollTop = msgsEl.scrollHeight;

      simResults[curSimIdx] = !choice.danger;
      const correctCount = Object.values(simResults).filter(Boolean).length;
      const isPass = correctCount >= 8;

      const isLastSituation = (curSimIdx === SIM_DATA.length - 1);
      const nextIdx = (curSimIdx + 1) % SIM_DATA.length;
      feedbackEl.style.display = 'block';

      if (isLastSituation) {
        feedbackEl.innerHTML = `
          <div style="background: ${choice.danger ? 'var(--hl)' : 'rgba(16, 185, 129, 0.1)'}; border: 1.5px solid ${choice.danger ? 'var(--rs)' : '#10B981'}; border-radius: 14px; padding: 16px; margin-bottom: 14px">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px;margin-bottom:6px">
              <h4 style="margin: 0; color: ${choice.danger ? 'var(--rs)' : '#059669'}; font-family: 'Be Vietnam Pro', sans-serif; display:flex; align-items:center; gap:6px;">
                ${choice.danger ? '✕' : '✓'} ${choice.badge} ${choice.danger ? '(Lựa chọn Chưa an toàn)' : '(Lựa chọn Chuẩn mực)'}
              </h4>
              <span style="font-size:.78rem;background:${choice.danger ? '#FEE2E2' : '#ECFDF5'};color:${choice.danger ? '#DC2626' : '#059669'};padding:3px 12px;border-radius:99px;font-weight:700">
                Xử lý đúng: ${correctCount}/10 tình huống
              </span>
            </div>
            <p style="margin: 0 0 12px; font-size: .9rem; color: var(--ink); line-height: 1.6;">
              ${choice.lesson}
            </p>
          </div>
          ${isPass ? `
            <div style="background:#FFFFFF;border:2px solid #10B981;border-radius:16px;padding:24px 20px;text-align:center;box-shadow:0 8px 24px -4px rgba(16,185,129,.2)">
              <div style="width:54px;height:54px;background:#D1FAE5;color:#059669;border-radius:50%;display:grid;place-items:center;margin:0 auto 12px;font-size:1.6rem">✓</div>
              <h3 style="margin:0 0 8px;font-size:1.25rem;color:#065F46">Xuất Sắc! Bạn Đã Xử Lý Đúng ${correctCount}/10 Tình Huống Thực Tế</h3>
              <p style="margin:0 0 18px;font-size:.9rem;color:#047857;line-height:1.6">
                Bạn đã nắm vững các phản xạ an toàn số, biết cách tự bảo vệ bản thân và đồng hành cùng bạn bè xây dựng môi trường mạng văn minh tại Đại học Thủ Dầu Một.
              </p>
              <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
                <a href="index.html" class="btn" style="padding:9px 20px;font-size:.9rem">
                  ← Về Trang Chủ Đề Tài
                </a>
                <a href="nhan-dien.html" class="btn" style="background:#075A94;border-color:#075A94;color:#fff;padding:9px 20px;font-size:.9rem">
                  Làm Bài Trắc Nghiệm Cấp Chứng Nhận →
                </a>
                <button type="button" class="btn o" id="simRestartBtn" style="padding:9px 18px;font-size:.9rem">
                  ↺ Luyện tập lại từ Tình huống 1
                </button>
              </div>
            </div>
          ` : `
            <div style="background:#FFFBEB;border:2px solid #F59E0B;border-radius:16px;padding:24px 20px;text-align:center;box-shadow:0 8px 24px -4px rgba(245,158,11,.18)">
              <div style="width:54px;height:54px;background:#FEF3C7;color:#D97706;border-radius:50%;display:grid;place-items:center;margin:0 auto 12px;font-size:1.6rem">⚠️</div>
              <h3 style="margin:0 0 8px;font-size:1.25rem;color:#B45309">Chưa Đạt Yêu Cầu! Bạn Chỉ Xử Lý Đúng ${correctCount}/10 Tình Huống</h3>
              <p style="margin:0 0 18px;font-size:.9rem;color:#92400E;line-height:1.6">
                Bạn đã chọn một số phương án đối đầu tiêu cực hoặc thờ ơ vi phạm quy tắc ứng xử an toàn mạng. Cần đạt tối thiểu <b>8/10 tình huống đúng</b> để nắm vững kỹ năng.
              </p>
              <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
                <button type="button" class="btn" id="simRestartBtn" style="background:#D97706;border-color:#D97706;color:#fff;padding:9px 22px;font-size:.9rem;font-weight:600">
                  ↺ Rèn luyện lại từ Tình huống 1 (Cần ≥ 8/10)
                </button>
                <a href="index.html" class="btn o" style="padding:9px 20px;font-size:.9rem">
                  ← Về Trang Chủ Đề Tài
                </a>
              </div>
            </div>
          `}
        `;

        const restartBtn = document.getElementById('simRestartBtn');
        if (restartBtn) {
          restartBtn.onclick = () => {
            curSimIdx = 0;
            simResults = {};
            renderSim();
          };
        }
      } else {
        feedbackEl.innerHTML = `
          <div style="background: ${choice.danger ? 'var(--hl)' : 'rgba(16, 185, 129, 0.1)'}; border: 1.5px solid ${choice.danger ? 'var(--rs)' : '#10B981'}; border-radius: 14px; padding: 16px;">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px;margin-bottom:6px">
              <h4 style="margin: 0; color: ${choice.danger ? 'var(--rs)' : '#059669'}; font-family: 'Be Vietnam Pro', sans-serif; display:flex; align-items:center; gap:6px;">
                ${choice.danger ? '✕' : '✓'} ${choice.badge} ${choice.danger ? '(Chưa an toàn)' : '(Chuẩn mực)'}
              </h4>
            </div>
            <p style="margin: 0 0 12px; font-size: .9rem; color: var(--ink); line-height: 1.6;">
              ${choice.lesson}
            </p>
            <div style="display:flex;gap:10px;flex-wrap:wrap">
              <button type="button" class="btn btn-sm" id="simNextInlineBtn" style="font-size:.85rem;padding:7px 16px">
                Chuyển sang tình huống tiếp theo (${nextIdx + 1}/10) →
              </button>
              <button type="button" class="btn o btn-sm" id="simRetryInlineBtn" style="font-size:.85rem;padding:7px 14px">
                ↺ Thử lại tình huống này
              </button>
            </div>
          </div>
        `;

        const nextInlineBtn = document.getElementById('simNextInlineBtn');
        if (nextInlineBtn) {
          nextInlineBtn.onclick = () => {
            curSimIdx = nextIdx;
            renderSim();
          };
        }

        const retryInlineBtn = document.getElementById('simRetryInlineBtn');
        if (retryInlineBtn) {
          retryInlineBtn.onclick = () => {
            delete simResults[curSimIdx];
            renderSim();
          };
        }
      }
    }, 250);
  }

  const nextSimBtn = document.getElementById('nextSimBtn');
  if (nextSimBtn) {
    nextSimBtn.addEventListener('click', () => {
      if (simTimer) {
        clearInterval(simTimer);
        simTimer = null;
      }
      curSimIdx = (curSimIdx + 1) % SIM_DATA.length;
      if (curSimIdx === 0) simResults = {};
      renderSim();
    });
  }

  const resetSimBtn = document.getElementById('resetSimBtn');
  if (resetSimBtn) {
    resetSimBtn.addEventListener('click', () => {
      if (simTimer) {
        clearInterval(simTimer);
        simTimer = null;
      }
      renderSim();
    });
  }

  renderSim();

  function drawCertificate(name, id, department) {
    const canvas = document.getElementById('certCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
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
    ctx.fillText(name.toUpperCase(), w / 2, 230);

    ctx.fillStyle = '#0B2540';
    ctx.font = '600 14px "Be Vietnam Pro", sans-serif';
    ctx.fillText(`Mã số SV: ${id || '..........'}   |   Đơn vị: ${department || 'Trường Đại học Thủ Dầu Một'}`, w / 2, 262);

    ctx.fillStyle = '#334155';
    ctx.font = 'normal 13.5px "Be Vietnam Pro", sans-serif';
    ctx.fillText('Đã hoàn thành xuất sắc chuyên đề rèn luyện kỹ năng ứng xử văn minh trên không gian số,', w / 2, 296);
    ctx.fillText('chủ động bảo vệ bản thân và cam kết không tham gia, không tiếp tay cho bạo lực mạng.', w / 2, 318);

    ctx.fillStyle = '#92400E';
    ctx.font = 'bold 13px "Be Vietnam Pro", sans-serif';
    ctx.fillText('★ ĐỦ ĐIỀU KIỆN CỘNG 05 ĐIỂM RÈN LUYỆN (TIÊU CHÍ 3: ĐẠO ĐỨC LỐI SỐNG HỌC KỲ I) ★', w / 2, 345);

    const today = new Date();
    const dateStr = `Thủ Dầu Một, ngày ${today.getDate()} tháng ${today.getMonth() + 1} năm ${today.getFullYear()}`;
    ctx.fillStyle = '#4A6580';
    ctx.font = 'italic 13px "Be Vietnam Pro", sans-serif';
    ctx.fillText(dateStr, w - 160, 395);

    ctx.fillStyle = '#0B2540';
    ctx.font = 'bold 13.5px "Be Vietnam Pro", sans-serif';
    ctx.fillText('TM. BAN PHỤ TRÁCH ĐỀ TÀI', w - 160, 418);
    ctx.font = '600 13px "Be Vietnam Pro", sans-serif';
    ctx.fillStyle = '#075A94';
    ctx.fillText('Võ Tấn Bản & Nhóm 17', w - 160, 455);

    ctx.fillStyle = '#DC2626';
    ctx.beginPath();
    ctx.arc(140, 420, 38, 0, Math.PI * 2);
    ctx.strokeStyle = '#DC2626';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(140, 420, 33, 0, Math.PI * 2);
    ctx.stroke();

    ctx.font = 'bold 9px "Be Vietnam Pro", sans-serif';
    ctx.fillText('ĐẠI HỌC THỦ DẦU MỘT', 140, 415);
    ctx.font = 'bold 8px "Be Vietnam Pro", sans-serif';
    ctx.fillText('CHỨNG THỰC ĐRL 2026', 140, 430);

    ctx.fillStyle = '#0F172A';
    ctx.font = 'normal 11px monospace';
    const serial = 'ID: TDMU-DR26-' + (id ? id.slice(-4) : '8942');
    ctx.fillText(serial, 140, 475);
  }

  const certNameInput = document.getElementById('certName');
  const certIdInput = document.getElementById('certId');
  const certDeptInput = document.getElementById('certDept');
  const genCertBtn = document.getElementById('genCertBtn');
  const downloadCertBtn = document.getElementById('downloadCertBtn');
  const printCertBtn = document.getElementById('printCertBtn');

  function updateCert() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const pName = urlParams.get('name');
      const pId = urlParams.get('id');
      const pDept = urlParams.get('dept');
      const currentUser = (window.TDMU_AUTH && window.TDMU_AUTH.getCurrentUser) ? window.TDMU_AUTH.getCurrentUser() : null;

      if (pName && certNameInput && !certNameInput.value) {
        certNameInput.value = pName;
        if (pId && certIdInput && !certIdInput.value) certIdInput.value = pId;
        if (pDept && certDeptInput && !certDeptInput.value) certDeptInput.value = pDept;
      } else if (currentUser && certNameInput && !certNameInput.value) {
        certNameInput.value = currentUser.name;
        if (certIdInput && !certIdInput.value) certIdInput.value = currentUser.id;
        if (certDeptInput && !certDeptInput.value) certDeptInput.value = currentUser.dept || 'Trường Đại học Thủ Dầu Một';
      }
    } catch (e) {}

    const rawName = certNameInput ? certNameInput.value.trim() : '';
    const rawId = certIdInput ? certIdInput.value.trim() : '';
    const rawDept = certDeptInput ? certDeptInput.value.trim() : '';

    const name = rawName || '[HỌ VÀ TÊN SINH VIÊN]';
    const id = rawId || '..........';
    const dept = rawDept || 'Trường Đại học Thủ Dầu Một';
    drawCertificate(name, id, dept);
  }

  if (genCertBtn) {
    genCertBtn.addEventListener('click', () => {
      updateCert();
      const canvas = document.getElementById('certCanvas');
      if (canvas) canvas.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  const presetSv1 = document.getElementById('presetSv1');
  const presetSv2 = document.getElementById('presetSv2');
  const presetClear = document.getElementById('presetClear');

  if (presetSv1) {
    presetSv1.onclick = () => {
      if (certNameInput) certNameInput.value = 'PHẠM MINH HIẾU';
      if (certIdInput) certIdInput.value = '2128501010055';
      if (certDeptInput) certDeptInput.value = 'Khoa Công nghệ Thông tin - TDMU';
      updateCert();
    };
  }
  if (presetSv2) {
    presetSv2.onclick = () => {
      if (certNameInput) certNameInput.value = 'NGUYỄN NHỰT ANH HÀO';
      if (certIdInput) certIdInput.value = '2222401220235';
      if (certDeptInput) certDeptInput.value = 'Khoa Kinh tế & Quản lý - TDMU';
      updateCert();
    };
  }
  if (presetClear) {
    presetClear.onclick = () => {
      if (certNameInput) certNameInput.value = '';
      if (certIdInput) certIdInput.value = '';
      if (certDeptInput) certDeptInput.value = '';
      updateCert();
      if (certNameInput) certNameInput.focus();
    };
  }

  ['input', 'keyup', 'change'].forEach(evt => {
    if (certNameInput) certNameInput.addEventListener(evt, updateCert);
    if (certIdInput) certIdInput.addEventListener(evt, updateCert);
    if (certDeptInput) certDeptInput.addEventListener(evt, updateCert);
  });

  if (downloadCertBtn) {
    downloadCertBtn.addEventListener('click', () => {
      const canvas = document.getElementById('certCanvas');
      if (!canvas) return;
      const link = document.createElement('a');
      link.download = 'Chung-Nhan-Dai-Su-So-TDMU.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }

  if (printCertBtn) {
    printCertBtn.addEventListener('click', () => {
      const canvas = document.getElementById('certCanvas');
      if (!canvas) return;
      const dataUrl = canvas.toDataURL('image/png');
      const win = window.open('', '_blank');
      if (!win) {
        window.print();
        return;
      }
      win.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>In Giấy Chứng Nhận TDMU Digital Respect</title>
          <style>
            @page { size: landscape; margin: 0; }
            body { margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh; background: #fff; }
            img { max-width: 98%; max-height: 98%; object-fit: contain; }
          </style>
        </head>
        <body>
          <img src="${dataUrl}">
          <script>
            window.onload = function() {
              window.print();
              window.close();
            };
          </script>
        </body>
        </html>
      `);
      win.document.close();
    });
  }

  const campaignModal = document.getElementById('campaignModal');
  const openCampaignBtns = document.querySelectorAll('.open-campaign');
  const closeCampaignBtns = document.querySelectorAll('.close-campaign');

  openCampaignBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      if (campaignModal) campaignModal.classList.add('active');
    });
  });

  closeCampaignBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (campaignModal) campaignModal.classList.remove('active');
    });
  });

  if (campaignModal) {
    campaignModal.addEventListener('click', e => {
      if (e.target === campaignModal) campaignModal.classList.remove('active');
    });
  }

  const pledgeBtn = document.getElementById('pledgeBtn');
  const pledgeName = document.getElementById('pledgeName');
  const pledgeId = document.getElementById('pledgeId');
  const pledgeResult = document.getElementById('pledgeResult');

  if (pledgeBtn && pledgeResult) {
    pledgeBtn.addEventListener('click', () => {
      const name = (pledgeName && pledgeName.value.trim()) || 'Sinh viên TDMU';
      const mssv = (pledgeId && pledgeId.value.trim()) || '2200' + Math.floor(1000 + Math.random() * 9000);
      const code = 'TDMU-VH2026-' + Math.floor(100000 + Math.random() * 900000);
      const timeStr = new Date().toLocaleString('vi-VN');
      
      pledgeResult.style.display = 'block';
      pledgeResult.innerHTML = `
        <div style="font-weight:700;margin-bottom:4px">✓ Chúc mừng bạn đã ký cam kết trực tuyến thành công!</div>
        <div style="font-size:.82rem;line-height:1.5">
          Sinh viên: <b>${name}</b> (MSSV: <b>${mssv}</b>)<br>
          Mã số cam kết số: <code style="background:#D1FAE5;padding:2px 6px;border-radius:4px;font-weight:700;color:#065F46">${code}</code><br>
          Thời gian ghi nhận: ${timeStr} • Đã tích lũy điểm rèn luyện số văn minh TDMU.
        </div>
      `;
      pledgeBtn.textContent = 'Đã ký cam kết';
      pledgeBtn.disabled = true;
    });
  }

  setTimeout(updateCert, 200);
})();
