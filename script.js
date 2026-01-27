document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MODAL
    const modal = document.getElementById('custom-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalMsg = document.getElementById('modal-message');
    const modalClose = document.getElementById('modal-close');

    function openModal(title, msg) {
        modalTitle.innerText = title;
        modalMsg.innerText = msg;
        modal.classList.remove('hidden');
    }

    if(modalClose) {
        modalClose.addEventListener('click', () => modal.classList.add('hidden'));
    }

    // 2. FORMULARIO
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.btn-submit');
            btn.innerText = "SELLANDO...";
            btn.disabled = true;

            setTimeout(() => {
                openModal("¡SELLADO EXITOSO!", "Tu pergamino ha sido enviado. Solo Studio responderá pronto.");
                contactForm.reset();
                btn.innerText = "Sellar y Enviar";
                btn.disabled = false;
            }, 1500);
        });
    }

    // 3. REVEAL (SCROLL)
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
});