// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});

// Function to update the visitor counter
function updateVisitorCounter() {
  // Check if the visitor count exists in localStorage
  let visitorCount = localStorage.getItem('visitorCount');

  // If it doesn't exist, initialize it to 0
  if (!visitorCount) {
      visitorCount = 0;
  }

  // Increment the visitor count
  visitorCount = parseInt(visitorCount) + 1;

  // Save the updated count back to localStorage
  localStorage.setItem('visitorCount', visitorCount);

  // Display the visitor count in the footer
  document.getElementById('visitor-counter').textContent = `Visitors: ${visitorCount}`;
}

// Call the function when the page loads
window.onload = updateVisitorCounter;