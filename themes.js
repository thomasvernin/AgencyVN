const themeToggleButton = document.getElementById("theme-toggle-footer");
const iconMoon = document.getElementById("icon-moon-footer");
const iconSun = document.getElementById("icon-sun-footer");
const currentTheme = localStorage.getItem("theme");
const htmlElement = document.documentElement;

// Initialisation du thème
if (currentTheme) {
  htmlElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    iconSun.classList.add("selected-icon"); 
  } else {
    iconMoon.classList.add("selected-icon"); 
  }
} else {
  htmlElement.setAttribute("data-theme", "light"); // Thème par défaut
  iconSun.classList.add("selected-icon"); // Sélectionner l'icône Soleil par défaut
}

themeToggleButton.addEventListener("click", () => {
  const newTheme = htmlElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  if (newTheme === "dark") {
    iconSun.classList.add("selected-icon");
    iconMoon.classList.remove("selected-icon");
  } else {
    iconMoon.classList.add("selected-icon");
    iconSun.classList.remove("selected-icon");
  }
});




