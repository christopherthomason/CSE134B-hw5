const themeSelector = document.getElementById("theme-selector");
themeSelector.style.display = "block";

const currTheme = localStorage.getItem("theme");
if (currTheme) {
    document.body.classList.remove("light-theme", "dark-theme", "retro-theme", "luxury-theme");
    document.body.classList.add(`${currTheme}-theme`);
    if (currTheme === "light") {
        document.documentElement.style.setProperty('--main-background-color', '#FFFFFF');
    } else if (currTheme === "dark") {
        document.documentElement.style.setProperty('--main-background-color', '#0D0D0D');
    } else if (currTheme === "retro") {
        document.documentElement.style.setProperty('--main-background-color', '#121212');
    } else if (currTheme === "luxury") {
        document.documentElement.style.setProperty('--main-background-color', '#F5F5F5');
    }
    themeSelector.value = currTheme;
}

themeSelector.addEventListener("change", function () {
    document.body.classList.remove("light-theme", "dark-theme", "retro-theme", "luxury-theme");
    const selectedTheme = themeSelector.value;
    if (selectedTheme !== "light") {
        document.body.classList.add(`${selectedTheme}-theme`);
    }

    if (selectedTheme === "light") {
        document.documentElement.style.setProperty('--main-background-color', '#FFFFFF');
    } else if (selectedTheme === "dark") {
        document.documentElement.style.setProperty('--main-background-color', '#0D0D0D');
    } else if (selectedTheme === "retro") {
        document.documentElement.style.setProperty('--main-background-color', '#121212');
    } else if (selectedTheme === "luxury") {
        document.documentElement.style.setProperty('--main-background-color', '#F5F5F5');
    }

    localStorage.setItem("theme", selectedTheme);
});