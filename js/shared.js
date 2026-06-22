const themeButton = document.querySelector(".dark-btn");
const storedTheme = localStorage.getItem("showcase-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(isDark) {
  document.body.classList.toggle("dark", isDark);

  if (themeButton) {
    themeButton.innerHTML = isDark
      ? '<span aria-hidden="true">☀</span> Modo claro'
      : '<span aria-hidden="true">☾</span> Modo oscuro';
    themeButton.setAttribute("aria-pressed", String(isDark));
  }
}

setTheme(storedTheme ? storedTheme === "dark" : prefersDark);

themeButton?.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark");
  setTheme(isDark);
  localStorage.setItem("showcase-theme", isDark ? "dark" : "light");
});
