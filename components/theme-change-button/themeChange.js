
/**
 * See more about theme-change https://github.com/saadeghi/theme-change
 * Easy to use 
 */
function themeToggle() {
  const toggleEl = document.querySelector("[data-toggle-theme]");
  const dataKey = toggleEl.getAttribute("data-key");

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    [...document.querySelectorAll("[data-toggle-theme]")].forEach(el => {
      el.classList.add(toggleEl.getAttribute("data-act-class"));
    });
  }

  function removeTheme() {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem(dataKey ? dataKey : "theme");
  }

  function updateTheme(themesArray) {
    if (document.documentElement.getAttribute("data-theme") === themesArray[0]) {
      if (themesArray.length === 1) {
        removeTheme();
      } else {
        document.documentElement.setAttribute("data-theme", themesArray[1]);
        localStorage.setItem(dataKey ? dataKey : "theme", themesArray[1]);
      }
    } else {
      document.documentElement.setAttribute("data-theme", themesArray[0]);
      localStorage.setItem(dataKey ? dataKey : "theme", themesArray[0]);
    }
  }

  function toggleTheme() {
    [...document.querySelectorAll("[data-toggle-theme]")].forEach(el => {
      el.classList.toggle(this.getAttribute("data-act-class"));
    });
  }

  (function () {
    const theme = localStorage.getItem(dataKey ? dataKey : "theme");
    if (theme) {
      setTheme(theme);
    }
  })();

  if (toggleEl) {
    [...document.querySelectorAll("[data-toggle-theme]")].forEach(el => {
      el.addEventListener("click", function () {
        const themesList = el.getAttribute("data-toggle-theme");
        if (themesList) {
          const themesArray = themesList.split(",");
          updateTheme(themesArray);
        }
        toggleTheme();
      });
    });
  }
}


// function themeSelect() {
//   const selectElement = document.querySelector("select[data-choose-theme]");
//   const dataKey = selectElement?.getAttribute("data-key");
//   const theme = localStorage.getItem(dataKey || "theme");

//   if (theme) {
//     document.documentElement.setAttribute("data-theme", theme);
//     const optionTogglers = document.querySelectorAll(
//       `select[data-choose-theme] [value='${theme}']`
//     );
//     optionTogglers.forEach((el) => {
//       el.setAttribute('selected', 'selected');
//     });
//   }

//   if (selectElement) {
//     const changeHandler = function () {
//       const selectedTheme = this.value;
//       document.documentElement.setAttribute("data-theme", selectedTheme);
//       localStorage.setItem(dataKey || "theme", selectedTheme);
//       const optionTogglers = document.querySelectorAll(
//         `select[data-choose-theme] [value='${selectedTheme}']`
//       );
//       optionTogglers.forEach((el) => {
//         const optionValue = el.getAttribute('value');
//         el.setAttribute('selected', optionValue === selectedTheme ? 'selected' : null);
//       });
//     };

//     const selectElements = document.querySelectorAll("select[data-choose-theme]");
//     selectElements.forEach((el) => {
//       el.addEventListener("change", changeHandler);
//     });
//   }
// }


 
function themeChange(attach = true) {
  const attachEvent = () => {
    themeToggle();
    // themeSelect();

  };

  if (attach) {
    document.addEventListener("DOMContentLoaded", attachEvent);
  } else {
    attachEvent();
  }
}
 if (typeof exports != "undefined") {
    module.exports = {
       themeChange: themeChange
    }
 } else {
    themeChange()
 }