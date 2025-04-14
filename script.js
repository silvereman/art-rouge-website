document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle for mobile
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    if (burger) {
        burger.addEventListener('click', () => {
            // Toggle Navigation
            nav.classList.toggle('nav-active');
            
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
            
            // Burger Animation
            burger.classList.toggle('toggle');
        });
    }
    
    // Scroll effect for header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });
    
    // Scroll animations for sections
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in-left, .slide-in-right');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);
    
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
    
    sliders.forEach(slider => {
        appearOnScroll.observe(slider);
    });
    
    // Add animation classes to elements
    document.querySelectorAll('.dish').forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.menu-item').forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.info-card').forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.insta-post').forEach((item, index) => {
        item.classList.add('fade-in');
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Story section animations
    const storyText = document.querySelector('.story-text');
    const storyImage = document.querySelector('.story-image');
    
    if (storyText) storyText.classList.add('slide-in-left');
    if (storyImage) storyImage.classList.add('slide-in-right');
    
    // Chef section animations
    const chefBio = document.querySelector('.chef-bio');
    const chefImage = document.querySelector('.chef-image');
    
    if (chefBio) chefBio.classList.add('slide-in-right');
    if (chefImage) chefImage.classList.add('slide-in-left');
    
    // Gallery filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => { 
                // Remove active class from all
                filterBtns.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                // Get filter value
                const filterValue = btn.getAttribute('data-filter');
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (item.classList.contains(filterValue) || filterValue === 'all') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        , false);});
        }
    });
    // Smooth scroll for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');   
