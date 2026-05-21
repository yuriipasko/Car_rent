
const CARS = [
  { id:'CAR-001', make:'BMW', model:'M5 Competition', category:'premium', transmission:'auto', power:'625 к.с.', fuel:'Бензин', seats:5, price:4200, tag:'premium', popular:true, popularRank:1, desc:'Легендарний M5 у найгострішому виконанні. Форсований V8, активний диференціал M та спортивний пакет для максимальних відчуттів.', img:'https://www.bmw-m.com/content/dam/bmw/marketBMW_M/www_bmw-m_com/all-models/m-automobile/m5-limousine/2024/bmw-m5-sedan-teaser-01.jpg' },
  { id:'CAR-002', make:'Tesla', model:'Model S Plaid', category:'electric', transmission:'auto', power:'1020 к.с.', fuel:'Електро', seats:5, price:3500, tag:'electric', popular:true, popularRank:2, desc:'Найшвидший серійний седан у світі. 0–100 за 2.1 секунди, запас ходу 640 км, автопілот нового покоління.', img:'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=600&q=80' },
  { id:'CAR-003', make:'Porsche', model:'Cayenne GTS', category:'suv', transmission:'auto', power:'460 к.с.', fuel:'Бензин', seats:5, price:3800, tag:'suv', popular:true, popularRank:3, desc:'Спортивний кросовер без компромісів. Пневматична підвіска, 21" колеса та характерний звук двигуна V8.', img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80' },
  { id:'CAR-004', make:'Mercedes', model:'AMG GT 63', category:'sport', transmission:'auto', power:'639 к.с.', fuel:'Бензин', seats:4, price:4900, tag:'sport', popular:true, popularRank:4, desc:'Чотиридверне купе для справжніх цінителів. Biturbo V8, задньоколісне кермування та ексклюзивний дизайн AMG.', img:'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80' },
  { id:'CAR-005', make:'Audi', model:'RS6 Avant', category:'premium', transmission:'auto', power:'600 к.с.', fuel:'Бензин', seats:5, price:3600, tag:'premium', popular:true, popularRank:5, desc:'Суперкомбі для сімейних гонщиків. Quattro AWD, адаптивна підвіска та вантажний відсік для практичності.', img:'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=600&q=80' },
  { id:'CAR-006', make:'Toyota', model:'GR Supra', category:'sport', transmission:'auto', power:'387 к.с.', fuel:'Бензин', seats:2, price:2400, tag:'sport', popular:true, popularRank:6, desc:'Легендарне купе повернулося. Спільна розробка з BMW, рядна «шістка» та ідеальний баланс ваги 50:50.', img:'https://gagadget.com/media/uploads/fe-001-1200.jpg' },
  { id:'CAR-007', make:'Volkswagen', model:'Golf GTI', category:'economy', transmission:'manual', power:'245 к.с.', fuel:'Бензин', seats:5, price:1200, tag:'economy', popular:false, desc:'Доступний хот-хетч для щоденного задоволення від їзди. Практичний, економний та динамічний.', img:'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=600&q=80' },
  { id:'CAR-008', make:'Hyundai', model:'Tucson PHEV', category:'suv', transmission:'auto', power:'265 к.с.', fuel:'Гібрид', seats:5, price:1800, tag:'suv', popular:false, desc:'Сучасний кросовер з плагін-гібридною установкою. Їзда в електрорежимі до 62 км та повний привід.', img:'https://upload.wikimedia.org/wikipedia/commons/5/56/Hyundai_Tucson_%28NX4%2C_SWB%29_Facelift_IMG_2344.jpg' },
  { id:'CAR-009', make:'Kia', model:'EV6 GT', category:'electric', transmission:'auto', power:'585 к.с.', fuel:'Електро', seats:5, price:2900, tag:'electric', popular:false, desc:'Перший електричний GT від Kia. 0-100 за 3.5 сек, зарядка 10-80% за 18 хвилин та спортивне шасі.', img:'https://thedriven.io/wp-content/uploads/2024/03/Kia-EV6-feature-image.jpg' },
  { id:'CAR-010', make:'Ford', model:'Mustang GT', category:'sport', transmission:'manual', power:'450 к.с.', fuel:'Бензин', seats:4, price:2100, tag:'sport', popular:false, desc:'Американська легенда з V8 5.0 Coyote. Незабутній звук, класичний стиль та задньоприводна пристрасть.', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2024_Ford_Mustang_GT_Las_Vegas_2025_%28cropped%29.jpg/250px-2024_Ford_Mustang_GT_Las_Vegas_2025_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail' },
  { id:'CAR-011', make:'Renault', model:'Clio RS', category:'economy', transmission:'auto', power:'220 к.с.', fuel:'Бензин', seats:5, price:950, tag:'economy', popular:false, desc:'Найдоступніший спортивний хетч на ринку. Ідеальний для міста та гострих відчуттів без великих витрат.', img:'https://ireland.apollo.olxcdn.com/v1/files/5b93tjwvs5yw2-UA/image;s=933x700' },
  { id:'CAR-012', make:'Range Rover', model:'Sport SVR', category:'suv', transmission:'auto', power:'575 к.с.', fuel:'Бензин', seats:5, price:5500, tag:'suv', popular:false, desc:'Найшвидший та найпотужніший позашляховик Range Rover. Supercharged V8 у поєднанні з легендарним позашляховим потенціалом.', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLcXjq_HUwzKEKtgBZj5Yet4AYWvuuFdRePA&s' }
];

function updateDateTime() {
  const el = document.getElementById('navDatetime');
  if (!el) return;
  const now = new Date();
  const dateStr = now.toLocaleDateString('uk-UA', { day:'2-digit', month:'short' });
  const timeStr = now.toLocaleTimeString('uk-UA', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
  el.innerHTML = `<span class="nav-date">${dateStr}</span><span class="nav-time">${timeStr}</span>`;
}
updateDateTime();
setInterval(updateDateTime, 1000); 
let currentSection = 'home';
function showSection(name) {
  document.querySelectorAll('.page-section').forEach(s => {
    s.classList.remove('active');
  });
  const target = document.getElementById('section-' + name);
  if (target) target.classList.add('active');
  currentSection = name;
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('nav-active'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'about') renderBrowserInfo();
  if (name === 'catalog') renderCatalogStats();
}

function renderBrowserInfo() {
  const el = document.getElementById('browserInfo');
  if (!el || el.innerHTML) return;
  const nav = navigator;
  const items = [
    { label: 'Браузер', value: getBrowserName(nav.userAgent) },
    { label: 'Платформа', value: nav.platform || 'Невідомо' },
    { label: 'Мова', value: nav.language || 'Невідомо' },
    { label: 'Онлайн', value: nav.onLine ? '✅ Так' : '❌ Ні' },
    { label: 'CPU потоки', value: nav.hardwareConcurrency ? nav.hardwareConcurrency + ' ядер' : 'Невідомо' },
    { label: 'Торкання', value: navigator.maxTouchPoints > 0 ? '✅ Підтримується' : '❌ Ні' },
    { label: 'Cookie', value: nav.cookieEnabled ? '✅ Увімкнено' : '❌ Вимкнено' },
    { label: 'Роздільність', value: screen.width + '×' + screen.height }
  ];
  el.innerHTML = items.map(i =>
    `<div class="browser-row"><span class="browser-key">${i.label}</span><span class="browser-val">${i.value}</span></div>`
  ).join('');
}

function getBrowserName(ua) {
  if (ua.includes('Firefox')) return '🦊 Firefox';
  if (ua.includes('Edg')) return '🌀 Edge';
  if (ua.includes('Chrome')) return '🌐 Chrome';
  if (ua.includes('Safari')) return '🧭 Safari';
  return '🖥️ Інший';
}



let activeTagCat = null;
let activeTagPrice = null;

function renderPopular() {
  const grid = document.getElementById('popularGrid');
  const popular = CARS.filter(c => c.popular).sort((a,b) => a.popularRank - b.popularRank);
  const badges = ['hot','new','hot','sale','new','sale'];
  const badgeLabels = ['Хіт','Новинка','Хіт','Знижка','Новинка','Знижка'];
  grid.innerHTML = '';
  popular.forEach((car, i) => {
    const html = `
      <div class="popular-card" onclick="openCarModal('${car.id}')">
        <div class="popular-rank ${i < 3 ? 'top' : ''}">${String(car.popularRank).padStart(2,'0')}</div>
        <div class="popular-img"><img src="${car.img}" alt="${car.make} ${car.model}" style="width:100%;height:100%;object-fit:cover;"></div>
        <div class="popular-info">
          <div class="popular-make">${car.make}</div>
          <div class="popular-model">${car.model}</div>
          <div class="popular-price">${car.price.toLocaleString('uk-UA')} ₴/доба</div>
        </div>
        <div class="popular-badge ${badges[i]}">${badgeLabels[i]}</div>
      </div>`;
    grid.insertAdjacentHTML('beforeend', html); 
  });
}

function renderCars(list) {
  const grid = document.getElementById('carsGrid');
  document.getElementById('resultsCount').textContent = list.length;
  if (!list.length) {
    grid.innerHTML = `<div class="no-results"><h3>Нічого не знайдено</h3><p>Спробуйте змінити параметри пошуку</p></div>`;
    return;
  }
  grid.innerHTML = '';
  list.forEach(car => {
    const inCart = cart.some(c => c.id === car.id);
    const el = document.createElement('div');
    el.className = 'car-card card-enter';
    el.id = 'card-' + car.id;
    el.setAttribute('data-car-id', car.id);
    el.innerHTML = `
      <div class="car-id-badge">${car.id}</div>
      <div class="car-tag ${car.tag}">${tagLabel(car.tag)}</div>
      <div class="car-img-wrap" onclick="openCarModal('${car.id}')">
        <img src="${car.img}" alt="${car.make} ${car.model}" loading="lazy">
        <div class="car-shadow"></div>
      </div>
      <div class="car-body">
        <div class="car-make">${car.make}</div>
        <div class="car-name">${car.model}</div>
        <div class="car-specs">
          <div class="car-spec"><svg width="14" height="14"><use href="#icon-speed"/></svg>${car.power}</div>
          <div class="car-spec"><svg width="14" height="14"><use href="#icon-fuel"/></svg>${car.fuel}</div>
          <div class="car-spec"><svg width="14" height="14"><use href="#icon-seat"/></svg>${car.seats} місць</div>
          <div class="car-spec">⚙ ${car.transmission === 'auto' ? 'Автомат' : 'Механіка'}</div>
        </div>
        <div class="car-desc">${car.desc}</div>
        <div class="car-footer">
          <div>
            <div class="car-price-label">Ціна за добу</div>
            <div class="car-price">${car.price.toLocaleString('uk-UA')} <span>₴</span></div>
          </div>
          <button class="car-btn cart-add-btn ${inCart ? 'in-cart' : ''}" data-id="${car.id}">
            ${inCart ? '✓ У кошику' : 'Орендувати'}
          </button>
        </div>
      </div>`;
    grid.appendChild(el);
  });
}

function applyFilters() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const cat = document.getElementById('categorySelect').value;
  const trans = document.getElementById('transSelect').value;
  const sort = document.getElementById('sortSelect').value;

  let filtered = CARS.filter(car => {
    const matchSearch = !query ||
      car.id.toLowerCase().includes(query) ||
      car.make.toLowerCase().includes(query) ||
      car.model.toLowerCase().includes(query);
    const activeCat = activeTagCat || cat;
    const matchCat = !activeCat || car.category === activeCat;
    let matchPrice = true;
    if (activeTagPrice === 'low') matchPrice = car.price < 1500;
    else if (activeTagPrice === 'mid') matchPrice = car.price >= 1500 && car.price <= 3000;
    else if (activeTagPrice === 'high') matchPrice = car.price > 3000;
    const matchTrans = !trans || car.transmission === trans;
    return matchSearch && matchCat && matchPrice && matchTrans;
  });

  if (sort === 'price-asc') filtered.sort((a,b) => a.price - b.price);
  else if (sort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
  else if (sort === 'name') filtered.sort((a,b) => a.model.localeCompare(b.model));
  else filtered.sort((a,b) => a.id.localeCompare(b.id));

  renderCars(filtered);
}

function resetFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('categorySelect').value = '';
  document.getElementById('transSelect').value = '';
  document.getElementById('sortSelect').value = 'id';
  activeTagCat = null;
  activeTagPrice = null;
  document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
  renderCars(CARS);
}

function renderCatalogStats() {
  const el = document.getElementById('catalogStatsBar');
  if (!el) return;
  const totalValue = CARS.reduce((sum, car) => sum + car.price, 0);
  const avgPrice = Math.round(totalValue / CARS.length);
  const categories = [...new Set(CARS.map(c => c.category))];
  const byCategory = CARS.reduce((acc, car) => {
    acc[car.category] = (acc[car.category] || 0) + 1;
    return acc;
  }, {});
  const cheapest = CARS.reduce((min, c) => c.price < min.price ? c : min, CARS[0]);
  el.innerHTML = `
    <div class="stat-chips">
      <div class="stat-chip">📊 Авто: <strong>${CARS.length}</strong></div>
      <div class="stat-chip">💰 Ср. ціна: <strong>${avgPrice.toLocaleString('uk-UA')} ₴</strong></div>
      <div class="stat-chip">🏷️ Від: <strong>${cheapest.price.toLocaleString('uk-UA')} ₴/доба</strong></div>
      ${categories.map(c => `<div class="stat-chip">${tagLabel(c)}: <strong>${byCategory[c]}</strong></div>`).join('')}
    </div>`;
}

function tagLabel(t) {
  const map = {premium:'Premium', sport:'Sport', suv:'SUV', electric:'Electric', economy:'Economy'};
  return map[t] || t;
}

function toggleSpoiler() {
  const header = document.getElementById('spoilerHeader');
  const body = document.getElementById('spoilerBody');
  const isOpen = body.classList.contains('open');
  header.classList.toggle('open', !isOpen);
  body.classList.toggle('open', !isOpen);
}


function openCarModal(carId) {
  const car = CARS.find(c => c.id === carId);
  if (!car) return;
  const inCart = cart.some(c => c.id === car.id);
  document.getElementById('carModalContent').innerHTML = `
    <div class="modal-img-wrap"><img src="${car.img}" alt="${car.make} ${car.model}"></div>
    <div class="modal-body">
      <div style="display:flex;gap:8px;margin-bottom:12px;">
        <span class="car-id-badge" style="position:static">${car.id}</span>
        <span class="car-tag ${car.tag}" style="position:static">${tagLabel(car.tag)}</span>
      </div>
      <div class="modal-make">${car.make}</div>
      <h2 class="modal-model">${car.model}</h2>
      <p class="modal-desc">${car.desc}</p>
      <div class="modal-specs">
        <div class="modal-spec"><span>⚡</span><div><div class="ms-label">Потужність</div><div class="ms-val">${car.power}</div></div></div>
        <div class="modal-spec"><span>⛽</span><div><div class="ms-label">Паливо</div><div class="ms-val">${car.fuel}</div></div></div>
        <div class="modal-spec"><span>💺</span><div><div class="ms-label">Місць</div><div class="ms-val">${car.seats}</div></div></div>
        <div class="modal-spec"><span>⚙️</span><div><div class="ms-label">Коробка</div><div class="ms-val">${car.transmission === 'auto' ? 'Автомат' : 'Механіка'}</div></div></div>
      </div>
      <div class="modal-footer">
        <div>
          <div class="car-price-label">Ціна за добу</div>
          <div class="car-price">${car.price.toLocaleString('uk-UA')} <span>₴</span></div>
        </div>
        <div style="display:flex;gap:10px;">
          <button class="car-btn ${inCart ? 'in-cart' : ''}" onclick="toggleCartItem('${car.id}');closeCarModal()"
            style="padding:12px 24px">
            ${inCart ? '✓ У кошику' : '+ Орендувати'}
          </button>
          <button class="filter-btn" onclick="closeCarModal();showSection('contact')" style="padding:12px 24px">Замовити дзвінок</button>
        </div>
      </div>
    </div>`;
  document.getElementById('carModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCarModal() {
  document.getElementById('carModal').classList.remove('open');
  document.body.style.overflow = '';
}
function closeModal(e) {
  if (e.target === document.getElementById('carModal')) closeCarModal();
}

function submitForm(e) {
  e.preventDefault();
  let valid = true;
  const name = document.getElementById('fName').value.trim();
  const phone = document.getElementById('fPhone').value.trim();
  const email = document.getElementById('fEmail').value.trim();
  // Скидаємо помилки
  ['fNameErr','fPhoneErr','fEmailErr'].forEach(id => document.getElementById(id).textContent = '');
  ['fName','fPhone','fEmail'].forEach(id => document.getElementById(id).classList.remove('error'));
  // Валідація імені
  if (!name || name.length < 2) {
    document.getElementById('fNameErr').textContent = "Введіть ім'я (мінімум 2 символи)";
    document.getElementById('fName').classList.add('error');
    valid = false;
  }
  const phoneRe = /^\+?380\d{9}$|^\+?38\s?\(?\d{3}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/;
  const phoneClear = phone.replace(/[\s\-\(\)]/g,'');
  if (!phone || !phoneRe.test(phoneClear)) {
    document.getElementById('fPhoneErr').textContent = 'Формат: +380XXXXXXXXX';
    document.getElementById('fPhone').classList.add('error');
    valid = false;
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('fEmailErr').textContent = 'Невірний формат email';
    document.getElementById('fEmail').classList.add('error');
    valid = false;
  }
  if (!valid) return;
  document.getElementById('formSuccess').style.display = 'block';
  document.getElementById('contactForm').reset();
  setTimeout(() => { document.getElementById('formSuccess').style.display = 'none'; }, 4000);
}

document.addEventListener('click', function(e) {
  const addBtn = e.target.closest('.cart-add-btn');
  if (addBtn) {
    const carId = addBtn.getAttribute('data-id');
    toggleCartItem(carId);
    return;
  }
  const removeBtn = e.target.closest('.cart-remove-btn');
  if (removeBtn) {
    const carId = removeBtn.getAttribute('data-id');
    removeFromCart(carId);
    return;
  }
});

document.getElementById('searchInput').addEventListener('input', applyFilters);

document.getElementById('filterTags').addEventListener('click', e => {
  const tag = e.target.closest('.filter-tag');
  if (!tag) return;
  if (tag.dataset.cat) {
    const isActive = tag.classList.contains('active');
    document.querySelectorAll('.filter-tag[data-cat]').forEach(t => t.classList.remove('active'));
    activeTagCat = isActive ? null : tag.dataset.cat;
    if (!isActive) tag.classList.add('active');
  } else if (tag.dataset.price) {
    const isActive = tag.classList.contains('active');
    document.querySelectorAll('.filter-tag[data-price]').forEach(t => t.classList.remove('active'));
    activeTagPrice = isActive ? null : tag.dataset.price;
    if (!isActive) tag.classList.add('active');
  }
  applyFilters();
});

document.addEventListener('mouseover', function(e) {
  const card = e.target.closest('.car-card');
  if (card) card.setAttribute('data-hovered', 'true');
});


let cart = JSON.parse(localStorage.getItem('driveclub_cart') || '[]');

function saveCart() {
  localStorage.setItem('driveclub_cart', JSON.stringify(cart));
}

function toggleCartItem(carId) {
  const idx = cart.findIndex(c => c.id === carId);
  if (idx === -1) {
    const car = CARS.find(c => c.id === carId);
    if (car) cart.push({ id: car.id, name: `${car.make} ${car.model}`, price: car.price, img: car.img });
  } else {
    cart.splice(idx, 1);
  }
  saveCart();
  updateCartUI();
  applyFilters();
}

function removeFromCart(carId) {
  cart = cart.filter(c => c.id !== carId);
  saveCart();
  updateCartUI();
  applyFilters();
}

function updateCartUI() {
  // Лічильник
  document.getElementById('cartCount').textContent = cart.length;
  // Кошик sidebar
  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  if (!cart.length) {
    itemsEl.innerHTML = '<div class="cart-empty">Кошик порожній</div>';
    footerEl.innerHTML = '';
    return;
  }
  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" alt="${item.name}" class="cart-item-img">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${item.price.toLocaleString('uk-UA')} ₴/доба</div>
      </div>
      <button class="cart-remove-btn" data-id="${item.id}" title="Видалити">✕</button>
    </div>`).join('');
  // Статистика кошика через reduce()
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  footerEl.innerHTML = `
    <div class="cart-total">Разом: <strong>${total.toLocaleString('uk-UA')} ₴/доба</strong></div>
    <button class="filter-btn" style="width:100%;margin-top:12px;" onclick="checkoutCart()">Оформити замовлення</button>
    <button class="filter-reset" style="width:100%;margin-top:8px;" onclick="clearCart()">Очистити кошик</button>`;
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  applyFilters();
}

function checkoutCart() {
  toggleCart();
  showSection('contact');
}

function toggleCart() {
  document.getElementById('cartOverlay').classList.toggle('open');
  document.body.style.overflow = document.getElementById('cartOverlay').classList.contains('open') ? 'hidden' : '';
}
function closeCartOverlay(e) {
  if (e.target === document.getElementById('cartOverlay')) toggleCart();
}


/* ════════════════════════════════════════════════════════
   AI АГЕНТ
   ════════════════════════════════════════════════════════ */

let aiHistory = [];

function toggleAI() {
  const panel = document.getElementById('aiPanel');
  const bubble = document.getElementById('aiBubble');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  bubble.classList.toggle('hidden', !isOpen);
}

function addAIMessage(text, role) {
  const container = document.getElementById('aiMessages');
  const div = document.createElement('div');
  div.className = `ai-msg ${role}`;
  div.innerHTML = `<div class="ai-msg-bubble">${text}</div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function addAITyping() {
  const container = document.getElementById('aiMessages');
  const div = document.createElement('div');
  div.className = 'ai-msg bot ai-typing-row';
  div.id = 'aiTyping';
  div.innerHTML = `<div class="ai-msg-bubble"><span class="ai-typing"><span></span><span></span><span></span></span></div>`;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function removeAITyping() {
  const el = document.getElementById('aiTyping');
  if (el) el.remove();
}

async function sendAI() {
  const input = document.getElementById('aiInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  addAIMessage(text, 'user');
  aiHistory.push({ role: 'user', content: text });
  addAITyping();

  // Контекст про автопарк для AI
  const carsContext = CARS.map(c =>
    `${c.id}: ${c.make} ${c.model} | ${c.category} | ${c.power} | ${c.fuel} | ${c.seats} місць | ${c.transmission === 'auto' ? 'автомат' : 'механіка'} | ${c.price} ₴/доба`
  ).join('\n');

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: `Ти — AI-консультант сервісу оренди автомобілів "DriveClub". Відповідай ВИКЛЮЧНО українською мовою. Будь дружнім, лаконічним та корисним.

Наш автопарк:
${carsContext}

Твої завдання:
- Допомагати підбирати авто під потреби клієнта (бюджет, мета, переваги)
- Розповідати про характеристики конкретних автомобілів
- Пояснювати умови оренди (потрібні документи: паспорт + права; вік від 21 року; застава залежить від авто)
- Відповідати на питання про компанію (адреса: вул. Хрещатик 22, Київ; телефон: +380 44 123 45 67; графік: 08:00-22:00 щодня)
- Якщо клієнт хоче орендувати авто — запропонуй натиснути "Орендувати" на картці або перейти до розділу "Контакти"

Відповідай коротко (2-4 речення), якщо питання просте. Використовуй емодзі для живості. Не вигадуй інформацію поза межами наданого контексту.`,
        messages: aiHistory
      })
    });
    const data = await response.json();
    removeAITyping();
    const reply = data.content?.map(b => b.text || '').join('') || 'Вибачте, не вдалося отримати відповідь. Спробуйте ще раз.';
    aiHistory.push({ role: 'assistant', content: reply });
    addAIMessage(reply, 'bot');
  } catch (err) {
    removeAITyping();
    addAIMessage('⚠️ Помилка з\'єднання з AI. Перевірте інтернет та спробуйте ще раз.', 'bot');
  }
}


/* ════ ІНІЦІАЛІЗАЦІЯ ════ */
renderPopular();
renderCars(CARS);
updateCartUI();
