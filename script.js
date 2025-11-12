// WhatsApp número
const whatsappNumber = "258851947269";

// Anúncios premium com imagens reais
const popupMessages = [
    { 
        type: "student",
        icon: "fas fa-graduation-cap",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "🎓 DESCONTO ESTUDANTIL", 
        message: "25% OFF em todas as formações para estudantes universitários!",
        benefits: [
            "Material didático completo gratuito",
            "Suporte personalizado 30 dias",
            "Acesso às gravações das aulas",
            "Horários flexíveis"
        ],
        timer: "Oferta por 24h"
    },
    { 
        type: "excel",
        icon: "fas fa-file-excel",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "🚀 EXCEL PRO", 
        message: "Domine análise de dados e automação como um especialista!",
        benefits: [
            "Power Query & DAX avançado",
            "Dashboard profissional completo",
            "Projetos do mundo real",
            "Acesso vitalício ao conteúdo"
        ],
        timer: "Vagas limitadas"
    },
    { 
        type: "business",
        icon: "fas fa-building",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "💼 PACOTE CORPORATIVO", 
        message: "Transforme sua equipe com formação + consultoria especializada!",
        benefits: [
            "Descontos progressivos",
            "Relatórios de progresso",
            "Consultoria personalizada",
            "Conteúdo customizado"
        ],
        timer: "Oferta da semana"
    },
    { 
        type: "career",
        icon: "fas fa-user-graduate",
        image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        title: "🌟 CARREIRA ACELERADA", 
        message: "Desenvolva habilidades que as empresas realmente procuram!",
        benefits: [
            "Foco em empregabilidade",
            "Projetos para portfolio",
            "Preparação para entrevistas",
            "Mentoria profissional"
        ],
        timer: "Turma com vagas limitadas"
    }
];

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar popup após 3 segundos
    setTimeout(showRandomPopup, 3000);

    // Configurar botões de serviço
    document.querySelectorAll('.service-cta').forEach(button => {
        button.addEventListener('click', function() {
            const service = this.getAttribute('data-service');
            openWhatsApp(`Olá! Gostaria de saber mais sobre o serviço: ${service}`);
        });
    });

    // Fechar popup
    document.getElementById('closePopup').addEventListener('click', closePopup);

    // Menu mobile
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Formulário de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coletar dados do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Criar mensagem para WhatsApp
            const whatsappMessage = `Olá! Sou ${name}. Gostaria de informações sobre: ${service}. Meu email: ${email}, telefone: ${phone}. Mensagem: ${message}`;
            
            // Abrir WhatsApp
            openWhatsApp(whatsappMessage);
            
            // Resetar formulário
            contactForm.reset();
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
});

function showRandomPopup() {
    const randomIndex = Math.floor(Math.random() * popupMessages.length);
    const offer = popupMessages[randomIndex];
    
    // Configurar popup
    document.getElementById('popupImg').src = offer.image;
    document.getElementById('popupIcon').innerHTML = `<i class="${offer.icon}"></i>`;
    document.getElementById('popupTitle').textContent = offer.title;
    document.getElementById('popupMessage').textContent = offer.message;
    
    // Configurar benefícios
    const benefitsContainer = document.getElementById('popupBenefits');
    benefitsContainer.innerHTML = '';
    
    offer.benefits.forEach(benefit => {
        const benefitItem = document.createElement('div');
        benefitItem.className = 'benefit-item';
        benefitItem.innerHTML = `
            <i class="fas fa-check"></i>
            <span>${benefit}</span>
        `;
        benefitsContainer.appendChild(benefitItem);
    });
    
    // Configurar timer
    document.querySelector('.popup-timer span').textContent = offer.timer;
    
    // Configurar WhatsApp
    const whatsappBtn = document.getElementById('popupWhatsApp');
    const message = `Olá! Vi a oferta "${offer.title}" no site e gostaria de saber mais detalhes!`;
    whatsappBtn.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Mostrar popup
    document.getElementById('popup').style.display = 'flex';
    
    // Impedir scroll do body quando o popup estiver aberto
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openWhatsApp(message) {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
}

// Fechar popup clicando fora
document.getElementById('popup').addEventListener('click', function(e) {
    if (e.target === this) {
        closePopup();
    }
});

// Fechar popup com a tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePopup();
    }
});
