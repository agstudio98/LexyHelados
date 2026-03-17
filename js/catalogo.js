const PRODUCTS = [
  {
    id: 1, cat: 'helados', name: 'Copa Rosada',
    desc: 'Helado artesanal de frutilla y frambuesa con crema chantilly montada a mano y virutas de chocolate blanco. Un clasico de la casa que conquista desde el primer bocado.',
    image: 'https://images.unsplash.com/photo-1571182696546-afa2019fdbe3?w=500&fit=crop', price: 2800,
    ingr: ['Frutilla','Frambuesa','Crema','Chocolate Blanco','Azucar Impalpable'],
    bg: 'linear-gradient(135deg,#fce4ec,#f8bbd0)'
  },
  {
    id: 2, cat: 'helados', name: 'Parfait Celeste',
    desc: 'Capas de helado de vainilla premium, merengue italiano artesanal y frutos del bosque frescos. Presentacion elegante en copa de cristal.',
    image: 'https://images.unsplash.com/photo-1541636122427-b2d9a2657f44?w=500&fit=crop', price: 3200,
    ingr: ['Vainilla','Merengue Italiano','Frutos del Bosque','Crema'],
    bg: 'linear-gradient(135deg,#dff1f9,#b3e5fc)'
  },
  {
    id: 3, cat: 'postres', name: 'Panna Cotta Lila',
    desc: 'Panna cotta de elaboracion artesanal con coulis de lavanda y mora silvestre. Una propuesta de autor que fusiona delicadeza y sabor.',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&fit=crop', price: 2500,
    ingr: ['Crema','Lavanda','Mora','Gelificante Natural','Azucar'],
    bg: 'linear-gradient(135deg,#ede0f5,#e1bee7)'
  },
  {
    id: 4, cat: 'tartas', name: 'Tarta Violeta',
    desc: 'Tarta fria de moras y mascarpone italiano, base de galletitas artesanales y glasee violeta. Un postre visualmente irresistible.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&fit=crop', price: 3800,
    ingr: ['Mascarpone','Mora','Galletitas Artesanales','Glasee','Manteca'],
    bg: 'linear-gradient(135deg,#f3e5f5,#ce93d8)'
  },
  {
    id: 5, cat: 'helados', name: 'Sorbete de Limon',
    desc: 'Sorbete artesanal de limon con ralladura de lima y toque de menta fresca. Ligero, refrescante y sofisticado.',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&fit=crop', price: 1900,
    ingr: ['Limon','Lima','Menta','Azucar','Agua Mineral'],
    bg: 'linear-gradient(135deg,#fffde7,#fff9c4)'
  },
  {
    id: 6, cat: 'postres', name: 'Mousse de Maracuya',
    desc: 'Mousse aireada de maracuya con base de bizcochuelo de vainilla y decoracion de coulis tropical. Un viaje de sabores en cada capa.',
    image: 'https://images.unsplash.com/photo-1600715623634-5f281b52b76a?w=500&fit=crop', price: 2700,
    ingr: ['Maracuya','Crema','Bizcochuelo','Vainilla','Azucar Impalpable'],
    bg: 'linear-gradient(135deg,#fff8e1,#ffe0b2)'
  },
  {
    id: 7, cat: 'bebidas', name: 'Milkshake Rosa',
    desc: 'Batido cremoso de frutilla, frambuesa y helado artesanal. Coronado con crema batida y una cucharada de dulce de leche.',
    image: 'https://images.unsplash.com/photo-1622296117554-f1c8a2223624?w=500&fit=crop', price: 2200,
    ingr: ['Frutilla','Frambuesa','Helado Artesanal','Leche','Dulce de Leche'],
    bg: 'linear-gradient(135deg,#fce4ec,#f48fb1)'
  },
  {
    id: 8, cat: 'tartas', name: 'Cheesecake Celeste',
    desc: 'Cheesecake frio de arandanos y crema con base de galletitas de avena. Glasee de arandano y decoracion de flores comestibles.',
    image: 'https://images.unsplash.com/photo-1565168417677-0f9a52ef4c9d?w=500&fit=crop', price: 4100,
    ingr: ['Queso Crema','Arandanos','Avena','Crema','Flores Comestibles'],
    bg: 'linear-gradient(135deg,#e3f2fd,#bbdefb)'
  },
  {
    id: 9, cat: 'helados', name: 'Copa Dulce de Leche',
    desc: 'La copa emblema cordobesa. Helado artesanal de dulce de leche granizado con nueces tostadas y salsa de caramelo casero.',
    image: 'https://images.unsplash.com/photo-1578943890576-12d595a4b2e8?w=500&fit=crop', price: 2600,
    ingr: ['Dulce de Leche','Nueces','Caramelo','Crema','Vainilla'],
    bg: 'linear-gradient(135deg,#fbe9e7,#ffccbc)'
  },
  {
    id: 10, cat: 'postres', name: 'Crepe Suzette',
    desc: 'Crepes artesanales con crema de naranja, manteca de avellana y glasee de citricos. Una clasica elegancia francesa reinventada por Lexi.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&fit=crop', price: 3100,
    ingr: ['Harina','Naranja','Avellanas','Manteca','Glasee de Citricos'],
    bg: 'linear-gradient(135deg,#f9fbe7,#dcedc8)'
  },
  {
    id: 11, cat: 'bebidas', name: 'Limonada Violeta',
    desc: 'Limonada artesanal con infusion de violetas y hielo molido. Una bebida floral y refrescante, firma de la casa.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500&fit=crop', price: 1600,
    ingr: ['Limon','Violeta','Hielo','Azucar de Cana','Agua Mineral'],
    bg: 'linear-gradient(135deg,#ede0f5,#d1c4e9)'
  },
  {
    id: 12, cat: 'tartas', name: 'Tarta de Manzana Rosa',
    desc: 'Tarta tibia de manzana caramelizada con crema pastelera de vainilla y glasee rosado. Servida con helado artesanal.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&fit=crop', price: 3600,
    ingr: ['Manzana','Caramelo','Crema Pastelera','Glasee','Canela'],
    bg: 'linear-gradient(135deg,#fce4ec,#f8bbd0)'
  }
];

let activeFilter = 'todos';
let searchTerm = '';

const grid = document.getElementById('productsGrid');
const noRes = document.getElementById('noResults');

function getBg(p) { return p.bg; }

function renderCards() {
  let filtered = PRODUCTS.filter(p => {
    const matchCat = activeFilter === 'todos' || p.cat === activeFilter;
    const matchSearch = p.name.toLowerCase().includes(searchTerm) || p.desc.toLowerCase().includes(searchTerm);
    return matchCat && matchSearch;
  });

  grid.innerHTML = '';
  if (filtered.length === 0) {
    noRes.style.display = 'block';
    return;
  }
  noRes.style.display = 'none';

  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${i * 60}ms`;
    card.innerHTML = `
      <div class="product-img" style="background:${getBg(p)}">
        <img src="${p.image}" alt="${p.name}" class="product-img-icon" style="filter:drop-shadow(0 4px 12px rgba(224,122,154,.3))">
        <div class="cat-tag-badge">${p.cat.charAt(0).toUpperCase()+p.cat.slice(1)}</div>
      </div>
      <div class="product-body">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc.slice(0,80)}...</div>
        <div class="product-footer">
          <div class="product-price">$ ${p.price.toLocaleString('es-AR')}</div>
          <button class="product-add" data-id="${p.id}" title="Ver detalle">
            <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(p));
    grid.appendChild(card);
  });
}

// Filters
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.cat;
    renderCards();
  });
});

document.getElementById('searchInput').addEventListener('input', e => {
  searchTerm = e.target.value.toLowerCase().trim();
  renderCards();
});

// Modal
function openModal(p) {
  document.getElementById('modalImg').style.background = getBg(p);
  document.getElementById('modalImg').innerHTML = `<img src="${p.image}" alt="${p.name}" class="modal-img-icon">`;
  document.getElementById('modalCat').textContent = p.cat.charAt(0).toUpperCase()+p.cat.slice(1);
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalPrice').textContent = `$ ${p.price.toLocaleString('es-AR')}`;
  const ingrEl = document.getElementById('modalIngr');
  ingrEl.innerHTML = p.ingr.map(i => `<span class="ingr-tag">${i}</span>`).join('');
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  document.getElementById('modalBuy').onclick = () => {
    showToast(`"${p.name}" agregado al pedido`);
  };
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

// Toast
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// Initial render
renderCards();
