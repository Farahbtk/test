// JS for Cantine DRÄXLMAIER

document.addEventListener('DOMContentLoaded', function() {
  // Highlight active nav link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (window.location.pathname.includes(link.getAttribute('href'))) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });

  // Order confirmation (commande.html)
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
      e.preventDefault();
      document.getElementById('orderConfirmation').style.display = 'block';
      orderForm.style.display = 'none';
    });
  }

  // Simple login simulation (compte.html)
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Connexion réussie ! (Simulation)');
    });
  }

  // Modify/cancel order simulation (compte.html)
  const modifyForm = document.getElementById('modifyForm');
  if (modifyForm) {
    modifyForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Modification de commande (Simulation)');
    });
    const cancelBtn = modifyForm.querySelector('.danger');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', function() {
        alert('Commande annulée (Simulation)');
      });
    }
  }

  // Pizza types toggle (menu.html)
  const pizzaBtn = document.querySelector('.show-pizza-types');
  const pizzaList = document.querySelector('.pizza-types-list');
  if (pizzaBtn && pizzaList) {
    pizzaBtn.addEventListener('click', function() {
      pizzaList.style.display = pizzaList.style.display === 'none' ? 'flex' : 'none';
    });
  }

  // Couscous types toggle (menu.html)
  const couscousBtn = document.querySelector('.show-couscous-types');
  const couscousList = document.querySelector('.couscous-types-list');
  if (couscousBtn && couscousList) {
    couscousBtn.addEventListener('click', function() {
      couscousList.style.display = couscousList.style.display === 'none' ? 'flex' : 'none';
    });
  }

  // Burger types toggle (menu.html)
  const burgerBtn = document.querySelector('.show-burger-types');
  const burgerList = document.querySelector('.burger-types-list');
  if (burgerBtn && burgerList) {
    burgerBtn.addEventListener('click', function() {
      burgerList.style.display = burgerList.style.display === 'none' ? 'flex' : 'none';
    });
  }

  // Pâtes types toggle (menu.html)
  const pateBtn = document.querySelector('.show-pate-types');
  const pateList = document.querySelector('.pate-types-list');
  if (pateBtn && pateList) {
    pateBtn.addEventListener('click', function() {
      pateList.style.display = pateList.style.display === 'none' ? 'flex' : 'none';
    });
  }

  // Salade types toggle (menu.html)
  const saladeBtn = document.querySelector('.show-salade-types');
  const saladeList = document.querySelector('.salade-types-list');
  if (saladeBtn && saladeList) {
    saladeBtn.addEventListener('click', function() {
      saladeList.style.display = saladeList.style.display === 'none' ? 'flex' : 'none';
    });
  }

  // Mlewi types toggle (menu.html)
  const mlewiBtn = document.querySelector('.show-mlewi-types');
  const mlewiList = document.querySelector('.mlewi-types-list');
  if (mlewiBtn && mlewiList) {
    mlewiBtn.addEventListener('click', function() {
      mlewiList.style.display = mlewiList.style.display === 'none' ? 'flex' : 'none';
    });
  }

  // Dynamic type select for commande.html
  const platSelect = document.getElementById('plat');
  const platTypeGroup = document.getElementById('plat-type-group');
  const platTypeSelect = document.getElementById('plat-type');
  if (platSelect && platTypeGroup && platTypeSelect) {
    const typeOptions = {
      pizza: [
        { value: '', label: '--Choisir le type--' },
        { value: 'napolitaine', label: 'Napolitaine (10 DT)' },
        { value: 'margherita', label: 'Margherita (11 DT)' },
        { value: 'thon', label: 'Thon (12 DT)' },
        { value: 'jambon', label: 'Jambon (13 DT)' },
        { value: '4saisons', label: '4 Saisons (14 DT)' }
      ],
      burger: [
        { value: '', label: '--Choisir le type--' },
        { value: 'meat', label: 'Meat (22 DT)' },
        { value: 'chicken', label: 'Chicken (20 DT)' }
      ],
      couscous: [
        { value: '', label: '--Choisir le type--' },
        { value: 'poulet', label: 'Poulet (12 DT)' },
        { value: 'poisson', label: 'Poisson (15 DT)' },
        { value: 'viande', label: 'Viande (14 DT)' }
      ],
      pate: [
        { value: '', label: '--Choisir le type--' },
        { value: 'meat', label: 'Meat (25 DT)' },
        { value: 'chicken', label: 'Chicken (17 DT)' },
        { value: 'poulpe', label: 'Poulpe (22 DT)' }
      ],
      salade: [
        { value: '', label: '--Choisir le type--' },
        { value: 'mechwia', label: 'Mechwia (5 DT)' },
        { value: 'cesar', label: 'César (16 DT)' },
        { value: 'tunisienne', label: 'Tunisienne (7 DT)' }
      ],
      mlewi: [
        { value: '', label: '--Choisir le type--' },
        { value: 'escalope', label: 'Escalope (7 DT)' },
        { value: 'chawarma', label: 'Chawarma (8 DT)' }
      ]
    };
    platSelect.addEventListener('change', function() {
      const value = platSelect.value;
      if (typeOptions[value]) {
        platTypeSelect.innerHTML = '';
        typeOptions[value].forEach(opt => {
          const option = document.createElement('option');
          option.value = opt.value;
          option.textContent = opt.label;
          platTypeSelect.appendChild(option);
        });
        platTypeGroup.style.display = 'block';
      } else {
        platTypeGroup.style.display = 'none';
        platTypeSelect.innerHTML = '';
      }
    });
  }
}); 