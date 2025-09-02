// Main JavaScript file for portfolio website

// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
  const mainNav = document.getElementById('mainNav');
  
  if (mainNav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        mainNav.classList.add('navbar-shrink');
      } else {
        mainNav.classList.remove('navbar-shrink');
      }
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for navbar height
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarCollapse.classList.contains('show')) {
          navbarToggler.click();
        }
      }
    });
  });
  
  // Add animation to skill cards
  const skillCards = document.querySelectorAll('.skill-card');
  
  skillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
  
  // Add animation to project cards
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});