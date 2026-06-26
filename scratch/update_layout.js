const fs = require('fs');
const path = require('path');

const targetFiles = [
    'index.html',
    'about.html',
    'program.html',
    'montessori-learning.html',
    'gallery.html',
    'admissions.html',
    'contact.html',
    'privacy-policy.html',
    'terms-conditions.html'
];

const newOffcanvas = `<!-- Offcanvas Area Start -->
        <div class="fix-area">
            <div class="offcanvas__info">
                <div class="offcanvas__wrapper">
                    <div class="offcanvas__content">
                        <div class="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                            <div class="offcanvas__logo">
                                <a href="index.html">
                                    <img src="assets/img/logo/logo.png" alt="logo-img" style="max-height: 80px;">
                                </a>
                            </div>
                            <div class="offcanvas__close">
                                <button>
                                <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <p class="text d-none d-xl-block">
                            Nurturing the Tree of Wisdom, Lighting the Spark of Knowledge. Nature-inspired learning based on Tagore's philosophy.
                        </p>
                        <div class="mobile-menu fix mb-3"></div>
                        <div class="offcanvas__contact">
                            <h4>Contact Info</h4>
                            <ul>
                                <li class="d-flex align-items-center">
                                    <div class="offcanvas__contact-icon">
                                        <i class="fal fa-map-marker-alt"></i>
                                    </div>
                                    <div class="offcanvas__contact-text">
                                        <a target="_blank" href="contact.html">Mind Growers Kiddoria Campus</a>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="offcanvas__contact-icon mr-15">
                                        <i class="fal fa-envelope"></i>
                                    </div>
                                    <div class="offcanvas__contact-text">
                                        <a href="mailto:admissions@mindgrowerskiddoria.com">admissions@mindgrowerskiddoria.com</a>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="offcanvas__contact-icon mr-15">
                                        <i class="fal fa-clock"></i>
                                    </div>
                                    <div class="offcanvas__contact-text">
                                        <a target="_blank" href="#">Mon - Fri: 08:30 AM - 04:30 PM</a>
                                    </div>
                                </li>
                                <li class="d-flex align-items-center">
                                    <div class="offcanvas__contact-icon mr-15">
                                        <i class="far fa-phone"></i>
                                    </div>
                                    <div class="offcanvas__contact-text">
                                        <a href="tel:+919876543210">+91 98765 43210</a>
                                    </div>
                                </li>
                            </ul>
                            <div class="header-button mt-4">
                                <a href="contact.html" class="theme-btn text-center">
                                    <span>Enroll Now <i class="fa-solid fa-arrow-right-long"></i></span>
                                </a>
                            </div>
                            <div class="social-icon d-flex align-items-center">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offcanvas__overlay"></div>

        `;

const newHeaderTop = `<!-- Header Top Section Start -->
        <div class="header-top-section">
            <div class="header-top-shape">
                <img src="assets/img/header-top-shape.png" alt="shape-img">
            </div>
            <div class="container-fluid">
                <div class="header-top-wrapper">
                    <ul class="contact-list">
                        <li>
                            <i class="fal fa-map-marker-alt"></i>
                            Mind Growers Kiddoria Campus
                        </li>
                        <li>
                            <i class="far fa-envelope"></i>
                            <a href="mailto:admissions@mindgrowerskiddoria.com" class="link">admissions@mindgrowerskiddoria.com</a>
                        </li>
                    </ul>
                    <div class="social-icon d-flex align-items-center">
                        <span>Follow Us On:</span>
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>

        `;

const newHeaderSection = `<!-- Header Section Start -->
        <header id="header-sticky" class="header-1">
            <div class="container-fluid">
                <div class="mega-menu-wrapper">
                    <div class="header-main style-2">
                        <div class="header-left">
                            <div class="logo">
                                <a href="index.html" class="header-logo">
                                    <img src="assets/img/logo/logo.png" alt="logo-img" style="max-height: 70px;">
                                </a>
                            </div>
                        </div>
                        <div class="header-right d-flex justify-content-end align-items-center">
                            <div class="mean__menu-wrapper">
                                <div class="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="program.html">Programs</a></li>
                                            <li><a href="montessori-learning.html">Montessori Learning</a></li>
                                            <li><a href="gallery.html">Gallery</a></li>
                                            <li><a href="admissions.html">Admissions</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="header-button">
                                <a href="contact.html" class="theme-btn">
                                    <span>
                                        Book A Visit
                                        <i class="fa-solid fa-arrow-right-long"></i>
                                    </span>
                                </a>
                            </div>
                            <div class="header__hamburger d-xl-none my-auto">
                                <div class="sidebar__toggle">
                                    <i class="fas fa-bars"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        `;

const newFooterSection = `<!--<< Footer Section Start >>-->
        <footer class="footer-section section-bg fix">
            <div class="footer-top-shape">
                <img src="assets/img/footer-top.png" alt="shape-img">
            </div>
            <div class="frame-shape">
                <img src="assets/img/frame.png" alt="shape-img">
            </div>
            <div class="zebra-shape float-bob-y">
                <img src="assets/img/about/zebra.png" alt="shape-img">
            </div>
            <div class="container">
                <div class="contact-info-area">
                    <div class="contact-info-items wow fadeInUp" data-wow-delay=".3s">
                        <div class="icon">
                            <i class="fa-solid fa-phone" style="font-size: 24px; color: var(--theme);"></i>
                        </div>
                        <div class="content">
                            <p>Call Us 24/7</p>
                            <h3>
                                <a href="tel:+919876543210">+91 98765 43210</a>
                            </h3>
                        </div>
                    </div>
                    <div class="contact-info-items wow fadeInUp" data-wow-delay=".5s">
                        <div class="icon">
                            <i class="fa-solid fa-envelope" style="font-size: 24px; color: var(--theme);"></i>
                        </div>
                        <div class="content">
                            <p>Email Admissions</p>
                            <h3>
                                <a href="mailto:admissions@mindgrowerskiddoria.com">admissions@mindgrowerskiddoria.com</a>
                            </h3>
                        </div>
                    </div>
                    <div class="contact-info-items wow fadeInUp" data-wow-delay=".7s">
                        <div class="icon">
                            <i class="fa-solid fa-location-dot" style="font-size: 24px; color: var(--theme);"></i>
                        </div>
                        <div class="content">
                            <p>Campus Address</p>
                            <h3>
                                Mind Growers Kiddoria Campus
                            </h3>
                        </div>
                    </div>
                </div>    
            </div>
            <div class="footer-widgets-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div class="single-footer-widget">
                                <div class="widget-head">
                                    <a href="index.html">
                                        <img src="assets/img/logo/logo-white.png" alt="logo-img" style="max-height: 80px;">
                                    </a>
                                </div>
                                <div class="footer-content">
                                    <p>
                                        Lighting the Spark of Knowledge, Nurturing the Tree of Wisdom. Inspired by Rabindranath Tagore's philosophy of natural learning.
                                    </p>
                                    <div class="social-icon d-flex align-items-center">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-twitter"></i></a>
                                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                            <div class="single-footer-widget">
                                <div class="widget-head">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul class="list-area">
                                    <li>
                                        <a href="about.html">
                                            <i class="fa-solid fa-chevron-right"></i>
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="program.html">
                                            <i class="fa-solid fa-chevron-right"></i>
                                            Our Programs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="montessori-learning.html">
                                            <i class="fa-solid fa-chevron-right"></i>
                                            Montessori Learning
                                        </a>
                                    </li>
                                    <li>
                                        <a href="gallery.html">
                                            <i class="fa-solid fa-chevron-right"></i>
                                            Gallery
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                            <div class="single-footer-widget">
                                <div class="widget-head">
                                    <h3>Programs</h3>
                                </div>
                                <ul class="list-area">
                                    <li>
                                        <a href="program.html">
                                            <i class="fa-solid fa-chevron-right"></i>
                                            Preschool
                                        </a>
                                    </li>
                                    <li>
                                        <a href="program.html">
                                            <i class="fa-solid fa-chevron-right"></i>
                                            Daycare
                                        </a>
                                    </li>
                                    <li>
                                        <a href="program.html">
                                            <i class="fa-solid fa-chevron-right"></i>
                                            Academy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="program.html">
                                            <i class="fa-solid fa-chevron-right"></i>
                                            Activity Centre
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="f-bottom-shape">
                    <img src="assets/img/footer-bottom.png" alt="shape-img">
                </div>
                <div class="container">
                    <div class="footer-wrapper d-flex align-items-center justify-content-between">
                        <p class="wow fadeInLeft color-2" data-wow-delay=".3s">
                            © All Copyright 2026 by <a href="index.html">Mind Growers Kiddoria</a>. Designed & Developed by Talvyyo.
                        </p>
                        <ul class="footer-menu wow fadeInRight" data-wow-delay=".5s">
                            <li>
                                <a href="terms-conditions.html">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="privacy-policy.html">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <a href="#" id="scrollUp" class="scroll-icon">
                    <i class="far fa-arrow-up"></i>
                </a>
            </div>
        </footer>

        `;

targetFiles.forEach(file => {
    let filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) {
        filePath = path.join(__dirname, file); // Fallback in case of current directory run
    }

    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${file}`);
        return;
    }

    console.log(`Updating layout for: ${file}`);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Update Title and metadata descriptions
    content = content.replace(/<title>[^<]+<\/title>/g, `<title>Mind Growers Kiddoria - Nature-Inspired Preschool</title>`);
    content = content.replace(/<meta name="description" content="[^"]+">/g, `<meta name="description" content="Mind Growers Kiddoria is a nature-inspired preschool based on Rabindranath Tagore's philosophy and Montessori education, focusing on holistic child development, hands-on activities, and parent partnership.">`);

    // 2. Add custom stylesheet link if not present
    if (!content.includes('assets/css/custom.css')) {
        content = content.replace('</head>', '    <link rel="stylesheet" href="assets/css/custom.css">\n    </head>');
    }

    // 3. Replace Offcanvas Area
    let offcanvasStartIdx = content.indexOf('<!-- Offcanvas Area Start -->');
    let offcanvasEndIdx = content.indexOf('<!-- Header Top Section Start -->');
    if (offcanvasStartIdx !== -1 && offcanvasEndIdx !== -1) {
        content = content.substring(0, offcanvasStartIdx) + newOffcanvas + content.substring(offcanvasEndIdx);
    }

    // 4. Replace Header Top Section
    let headerTopStartIdx = content.indexOf('<!-- Header Top Section Start -->');
    let headerTopEndIdx = content.indexOf('<!-- Header Section Start -->');
    if (headerTopStartIdx !== -1 && headerTopEndIdx !== -1) {
        content = content.substring(0, headerTopStartIdx) + newHeaderTop + content.substring(headerTopEndIdx);
    }

    // 5. Replace Main Header Section
    let headerStartIdx = content.indexOf('<!-- Header Section Start -->');
    let headerEndIdx = content.indexOf('<!-- Search Area Start -->');
    if (headerStartIdx !== -1 && headerEndIdx !== -1) {
        content = content.substring(0, headerStartIdx) + newHeaderSection + content.substring(headerEndIdx);
    }

    // 6. Replace Footer Section
    let footerStartIdx = content.indexOf('<!--<< Footer Section Start >>-->');
    let footerEndIdx = content.indexOf('<!--<< All JS Plugins >>-->');
    if (footerStartIdx !== -1 && footerEndIdx !== -1) {
        content = content.substring(0, footerStartIdx) + newFooterSection + content.substring(footerEndIdx);
    }

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Layout updates completed successfully!');
