// Função para controlar a alternância de abas/páginas no Site
function switchTab(tabId) {
    // 1. Esconder todos os blocos de conteúdo das abas
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // 2. Remover o estado ativo de todos os botões do menu
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // 3. Ativar o bloco correspondente e o botão que foi clicado
    document.getElementById(tabId).classList.add('active');
    
    // Encontra o botão correto com base na chamada da função e adiciona a classe active
    const eventTarget = window.event ? window.event.target : null;
    if (eventTarget && eventTarget.tagName === 'BUTTON') {
        eventTarget.classList.add('active');
    } else {
        // Fallback caso a ativação ocorra por outra lógica
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('onclick').includes(tabId)) {
                link.classList.add('active');
            }
        });
    }
}

// Lógica de áudio simulado (Play/Pause)
let isPlaying = false;
function toggleAudio() {
    const btn = document.getElementById('playBtn');
    isPlaying = !isPlaying;
    
    if (isPlaying) {
        btn.innerHTML = '<i class="fa-solid fa-pause"></i> Pausar Rádio';
        btn.style.backgroundColor = '#e74c3c';
        alert('Conectando ao servidor de streaming de áudio... (Insira o link real de transmissão para tocar de verdade)');
    } else {
        btn.innerHTML = '<i class="fa-solid fa-play"></i> Ouvir Agora';
        btn.style.backgroundColor = 'var(--accent)';
    }
}

// Lógica para cadastrar novos pedidos de oração no Mural dinamicamente
function handlePrayerSubmit(event) {
    event.preventDefault(); // Impede a página de recarregar
    
    const nameInput = document.getElementById('userName').value.trim() || "Anônimo";
    const prayerInput = document.getElementById('prayerText').value.trim();
    const prayerWall = document.getElementById('prayerWall');

    // Monta a estrutura HTML do novo box de pedido
    const newBox = document.createElement('div');
    newBox.className = 'prayer-box';
    newBox.innerHTML = `<strong>${nameInput}</strong><p style="margin-top: 5px; font-size: 0.95rem;">${prayerInput}</p>`;

    // Adiciona o pedido no topo do mural
    prayerWall.insertBefore(newBox, prayerWall.firstChild);

    // Limpa os campos digitados e agradece
    document.getElementById('prayerForm').reset();
    alert('Pedido registrado com sucesso! Estaremos intercedendo por você.');
}