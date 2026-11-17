(function() {
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = t => t.normalize('NFC').split('').map(c =>
    c.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, 'd').toLowerCase()
  ).join('');

  const DICT = {
    'Xúc phạm': { w: 1, k: ['ngu', 'đần', 'óc chó', 'vô dụng', 'rác rưởi', 'đồ bỏ đi', 'thiểu năng', 'não phẳng', 'ngu như bò', 'đồ ngu', 'phế vật', 'hãm'] },
    'Đe dọa': { w: 3, k: ['giết mày', 'đập mày', 'cho mày biết tay', 'xử mày', 'đánh mày', 'tao sẽ tìm mày', 'hẹn mày', 'chặn đường', 'tế mày'] },
    'Công kích ngoại hình': { w: 2, k: ['béo như', 'mập như', 'xấu như', 'lùn như', 'đồ béo', 'đồ xấu', 'mặt mụn', 'xấu ma chê'] },
    'Loại trừ, tẩy chay': { w: 2, k: ['cút đi', 'tẩy chay', 'không ai chơi với', 'biến đi', 'đừng bao giờ xuất hiện', 'cút khỏi', 'cô lập'] },
    'Bêu riêng, bôi nhọ': { w: 2, k: ['bóc phốt', 'lộ ảnh', 'tung clip', 'tung ảnh', 'lộ clip', 'chụp lén', 'phốt mày', 'bêu rếu'] }
  };

  const RX = [];
  for (const [cat, o] of Object.entries(DICT)) {
    for (const k of o.k) {
      RX.push({ cat, w: o.w, re: new RegExp('(?<![a-z0-9])' + norm(k) + '(?![a-z0-9])', 'g') });
    }
  }

  const LV = [
    { n: 'Nội dung An toàn', c: '#10B981', p: 8, m: 'Chưa phát hiện từ ngữ độc hại. Lời nói văn minh giúp xây dựng văn hóa giao tiếp tích cực tại Đại học Thủ Dầu Một.' },
    { n: 'Cần lưu ý thận trọng', c: '#F59E0B', p: 40, m: 'Phát hiện một số từ ngữ có thể gây khó chịu hoặc hiểu lầm. Cân nhắc dùng từ nhã nhặn hơn hoặc trao đổi trực tiếp riêng tư.' },
    { n: 'Có dấu hiệu bạo lực mạng', c: '#F97316', p: 70, m: 'Nội dung có nhiều từ ngữ mang tính xúc phạm, loại trừ hoặc bêu xấu. Đề nghị bạn dừng lại, không đăng tải để tránh vi phạm quy chế.' },
    { n: 'Nguy cơ bạo lực mức độ cao', c: '#EF4444', p: 100, m: 'CẢNH BÁO: Phát hiện từ ngữ đe dọa, xúc phạm nghiêm trọng nhân phẩm! Hành vi này có thể bị xử lý kỷ luật sinh viên hoặc xử lý pháp luật.' }
  ];

  function scan() {
    const tx = document.getElementById('tx');
    const res = document.getElementById('res');
    const bar = document.getElementById('bar');
    if (!tx || !res || !bar) return;

    const raw = tx.value;
    if (!raw.trim()) {
      res.innerHTML = '<span style="color:var(--mu)">Hãy dán hoặc gõ nội dung bạn cần kiểm tra vào khung trên.</span>';
      bar.style.width = '0';
      return;
    }

    const u = raw.normalize('NFC').split(''), n = norm(raw), hits = [];
    for (const r of RX) {
      r.re.lastIndex = 0;
      let m;
      while ((m = r.re.exec(n))) {
        hits.push({ s: m.index, e: m.index + m[0].length, cat: r.cat, w: r.w });
      }
    }

    hits.sort((a, b) => a.s - b.s || b.e - a.e);
    const use = [];
    let end = -1;
    for (const h of hits) {
      if (h.s >= end) {
        use.push(h);
        end = h.e;
      }
    }

    let html = '', pos = 0, score = 0;
    const cats = new Set();
    for (const h of use) {
      html += esc(u.slice(pos, h.s).join('')) + '<mark>' + esc(u.slice(h.s, h.e).join('')) + '</mark>';
      pos = h.e;
      score += h.w;
      cats.add(h.cat);
    }
    html += esc(u.slice(pos).join(''));

    const l = score === 0 ? LV[0] : score <= 2 ? LV[1] : score <= 5 ? LV[2] : LV[3];
    bar.style.width = l.p + '%';
    bar.style.background = l.c;

    res.innerHTML = `
      <div style="background:var(--sf);border:1.5px solid var(--ln);border-radius:14px;padding:16px;margin-top:10px">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:8px">
          <strong style="color:${l.c};font-size:1.05rem">${l.n}</strong>
          <span style="font-size:.8rem;background:var(--so);padding:3px 10px;border-radius:99px;font-weight:600">${use.length} cụm từ vi phạm</span>
        </div>
        <div style="margin:10px 0;white-space:pre-wrap;line-height:1.6;font-size:.95rem;background:var(--bg);padding:12px;border-radius:10px">${html}</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:10px">
          ${[...cats].map(c => `<span class="tg" style="border-color:${l.c}">${c}</span>`).join('')}
        </div>
        <p style="margin:0;font-size:.88rem;color:var(--mu);line-height:1.5">${l.m}</p>
      </div>
    `;
  }

  const goBtn = document.getElementById('go');
  if (goBtn) goBtn.onclick = scan;

  const exBtn = document.getElementById('ex');
  if (exBtn) {
    exBtn.onclick = () => {
      const tx = document.getElementById('tx');
      if (tx) {
        tx.value = 'Cái đồ vô dụng, làm slide thì xấu như ma mà còn cãi. Cút khỏi nhóm làm bài đi, tao sẽ bóc phốt mày lên confession trường cho mày biết tay!';
        scan();
      }
    };
  }

  const clearBtn = document.getElementById('clearTx');
  if (clearBtn) {
    clearBtn.onclick = () => {
      const tx = document.getElementById('tx');
      const res = document.getElementById('res');
      const bar = document.getElementById('bar');
      if (tx) tx.value = '';
      if (res) res.innerHTML = '<span style="color:var(--mu)">Kết quả phân tích sẽ hiển thị tại đây.</span>';
      if (bar) bar.style.width = '0';
    };
  }

  const txEl = document.getElementById('tx');
  if (txEl) {
    txEl.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        scan();
      }
    });
  }
})();
