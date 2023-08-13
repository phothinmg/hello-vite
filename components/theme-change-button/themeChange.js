// @ts-nocheck
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

/**
 * Removes the theme from the document element and removes it from local storage.
 *
 * @param {string} dataKey - The key used to store the theme in local storage. Optional.
 * @return {void} 
 */
  function removeTheme() {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem(dataKey ? dataKey : "theme");
  }

  /**
   * Updates the theme based on the themes array.
   *
   * @param {Array} themesArray - The array of themes to update.
   * @return {undefined} This function does not return a value.
   */
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

  /**
   * Toggles the theme.
   *
   * @return {undefined} No return value.
   */
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
 
/**
 * Generates the theme button functionality.
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
function themeBtn() {
   const btnEl = document.querySelector("[data-set-theme='']");
   const dataKey = btnEl.getAttribute("data-key");
   
   const theme = localStorage.getItem(dataKey ? dataKey : "theme");
   
   if (theme && theme !== "") {
      document.documentElement.setAttribute("data-theme", theme);
      const btnEl = document.querySelector("[data-set-theme='" + theme.toString() + "']");
      
      if (btnEl) {
         [...document.querySelectorAll("[data-set-theme]")].forEach(el => {
            el.classList.remove(el.getAttribute("data-act-class"))
         });
         
         const dataActClass = btnEl.getAttribute("data-act-class");
         
         if (dataActClass) {
            btnEl.classList.add(dataActClass);
         }
      }
   } else {
      const dataActClass = btnEl.getAttribute("data-act-class");
      
      if (dataActClass) {
         btnEl.classList.add(dataActClass);
      }
   }
   
   [...document.querySelectorAll("[data-set-theme]")].forEach(el => {
      el.addEventListener("click", function () {
         const theme = this.getAttribute("data-set-theme");
         
         document.documentElement.setAttribute("data-theme", theme);
         localStorage.setItem(dataKey ? dataKey : "theme", theme);
         
         [...document.querySelectorAll("[data-set-theme]")].forEach(el => {
            el.classList.remove(el.getAttribute("data-act-class"))
         });
         
         const dataActClass = el.getAttribute("data-act-class");
         
         if (dataActClass) {
            el.classList.add(dataActClass);
         }
      })
   });
}
 
/**
 * Selects a theme based on user preference and updates the UI accordingly.
 *
 * @param {type} paramName - description of parameter
 * @return {type} description of return value
 */
function themeSelect() {
   const selectEl = document.querySelector("select[data-choose-theme]");
   const dataKey = selectEl.getAttribute("data-key");
   const theme = localStorage.getItem(dataKey ? dataKey : "theme");

   if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      const optionTogglers = document.querySelectorAll(`select[data-choose-theme] [value='${theme}']`);
      optionTogglers.forEach(el => {
         el.selected = true;
      });
   }

   if (selectEl) {
      const changeHandler = function () {
         const selectedTheme = this.value;
         document.documentElement.setAttribute("data-theme", selectedTheme);
         localStorage.setItem(dataKey ? dataKey : "theme", selectedTheme);
         const selectedOptionTogglers = document.querySelectorAll(`select[data-choose-theme] [value='${selectedTheme}']`);
         selectedOptionTogglers.forEach(el => {
            el.selected = true;
         });
      };

      const selectEls = document.querySelectorAll("select[data-choose-theme]");
      selectEls.forEach(el => {
         el.addEventListener("change", changeHandler);
      });
   }
}
 
function themeChange(attach = true) {
   const attachEvent = () => {
      themeToggle();
      themeSelect();
      themeBtn();
   };

   if (attach === true) {
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