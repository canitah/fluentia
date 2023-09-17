
    // Form validation for the search form
    const searchForm = document.querySelector('#search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function (event) {
            const searchInput = document.querySelector('#search');
            if (searchInput.value.trim() === '') {
                event.preventDefault(); // Prevent form submission
                alert('Please enter a search query.');
            }
        });
    }

    // Form validation for the sign-up form (check for a valid email address)
    const signUpForm = document.querySelector('#sign-up-form');
    if (signUpForm) {
        signUpForm.addEventListener('submit', function (event) {
            const emailInput = document.querySelector('#email');
            const email = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                event.preventDefault(); // Prevent form submission
                alert('Please enter a valid email address.');
            }
        });
    }

     // Smooth scrolling for anchor links
     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight the current section in the navigation menu
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navigationLinks = document.querySelectorAll('.navbar ul.leftnav li a');

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom < window.innerHeight) {
                navigationLinks.forEach(link => link.classList.remove('active'));
                const sectionId = section.getAttribute('id');
                const correspondingLink = document.querySelector(`.navbar ul.leftnav li a[href="#${sectionId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });

    // Toggle mobile menu
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNav = document.querySelector('.navbar ul.leftnav');

    menuIcon.addEventListener('click', () => {
        mobileNav.classList.toggle('show');
    });

