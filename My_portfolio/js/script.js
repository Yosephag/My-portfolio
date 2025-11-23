
        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        // Toggle Navbar on Menu Click (Mobile Menu)
        menuIcon.onclick = () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

        // Handle Active Link Highlighting on Scroll
        window.onscroll = () => {
            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if(top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                    });
                }
            });

            // Sticky Header
            let header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 100);

            // Remove toggle icon and navbar when clicking navbar link (scroll)
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        };

        // ==================== SCROLL REVEAL INITIALIZATION (FIXED) ====================
        
        // General configuration for all elements
        ScrollReveal({ 
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        // Apply animations
        // Elements coming from the top (Home content and section headings)
        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        
        // Elements coming from the bottom (Home image, services, portfolio, contact form)
        ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
        
        // Elements coming from the left (Main titles and About image)
        ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
        
        // Elements coming from the right (About content)
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

        // Add a slight delay and different origin for social media icons for a staggered effect
        ScrollReveal().reveal('.social-media a, .home-content h3', { origin: 'left', interval: 100 });
           const typed = new Typed('.multiple-text', {
            strings: [
                  'Fullstack Web Developer', 
                'Frontend Developer', 
                'Backend Engineer', 
                'UI/UX Enthusiast'
            ],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });

