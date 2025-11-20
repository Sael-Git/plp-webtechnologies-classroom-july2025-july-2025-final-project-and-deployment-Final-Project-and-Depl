// Toggle mobile menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Form validation for contact page
function validateForm(event){
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(!name || !email || !message){
    alert("Please fill in all fields.");
    return false;
  }
  alert("Message sent successfully!");
  document.getElementById("contactForm").reset();
  return true;
}
