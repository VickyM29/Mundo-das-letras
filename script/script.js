const toggleBtn = document.getElementById('toggle-dark');
const body = document.body;

if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
        const isDark = body.classList.contains('dark-mode');
        setDarkMode(!isDark);
    });
}

function setDarkMode(enabled) {
    if (enabled) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    }
}

function atualizarContadorCarrinho() {
    try {
        const carrinho = JSON.parse(localStorage.getItem("cart")) || [];
        const totalItens = carrinho.reduce((acc, p) => acc + (p.quantidade || 0), 0);
        const contador = document.getElementById("contador-carrinho");
        if (contador) {
            contador.innerText = totalItens;
            contador.style.display = totalItens > 0 ? "inline" : "none";
        }
    } catch (e) {
        console.error("Erro ao atualizar o contador do carrinho:", e);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    atualizarContadorCarrinho();
    renderCartDropdown();

    const toggle = document.getElementById('cartDropdownToggle');
    if (toggle) {
        toggle.addEventListener('click', renderCartDropdown);
    }
});

window.addEventListener('storage', () => {
    atualizarContadorCarrinho();
    renderCartDropdown();
});

function renderCartDropdown() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsList = document.getElementById('cart-items-list');
    if (!cartItemsList) return;

    if (cart.length === 0) {
        cartItemsList.innerHTML = 'Seu carrinho está vazio.';
    } else {
        cartItemsList.innerHTML = cart.map(item => `
            <div class="mb-2">
                <strong>${item.nome || item.name || 'Produto'}</strong><br>
                <small>Qtd: ${item.quantidade || item.qtd || 1}</small>
            </div>
        `).join('');
    }
}


        
function renderCartDropdown() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const cartItemsList = document.getElementById('cart-items-list');
            if (cart.length === 0) {
                cartItemsList.innerHTML = 'Seu carrinho está vazio.';
            } else {
                cartItemsList.innerHTML = cart.map(item => `
      <div class="mb-2">
      <strong>${item.nome || item.name || 'Produto'}</strong><br>
      <small>Qtd: ${item.quantidade || item.qtd || 1}</small>
      </div>
      `).join('');
            }
        }
        document.addEventListener('DOMContentLoaded', function () {
            renderCartDropdown();
            document.getElementById('cartDropdownToggle').addEventListener('click', renderCartDropdown);
        });
        window.addEventListener('storage', renderCartDropdown);
        setInterval(renderCartDropdown, 500);

        function updateCartCount() {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            let count = Array.isArray(cart) ? cart.length : 0;
            const cartCount = document.getElementById('cart-count');
            if (count > 0) {
                cartCount.textContent = count;
                cartCount.style.display = 'inline-block';
            } else {
                cartCount.style.display = 'none';
            }
        }
        document.addEventListener('DOMContentLoaded', updateCartCount);


        window.addEventListener('storage', updateCartCount);


        setInterval(updateCartCount, 500);
