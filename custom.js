console.log("Portfolio Sidebar Theme has been started");

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('aside nav ul li a');
  links.forEach(link => {
    link.addEventListener('click', function() {
      console.log(`Navigating to ${this.getAttribute('href')}`);
    });
  });
});
