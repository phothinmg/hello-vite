/**
 *Inspired by https://github.com/saadeghi/theme-change
 */
/**
 * This function is responsible for toggling the theme of the website.
 * It allows the user to switch between different themes by clicking on elements with the attribute "data-toggle-theme".
 * The selected theme is stored in the browser's local storage.
 * The function also adds a CSS class to the elements with the attribute "data-toggle-theme" to represent the active theme.
 */
function themeToggle() {
  // Get the element with the attribute "data-toggle-theme"
  const toggleEl = document.querySelector("[data-toggle-theme]");
  // Get the value of the "data-key" attribute of the toggle element
  const dataKey = toggleEl.getAttribute("data-key");
  
 /**
   * Set the theme of the website
   * @param {string} theme - The theme to set
   */
 function setTheme(theme) {
  // Set the "data-theme" attribute of the root HTML element to the selected theme
  document.documentElement.setAttribute("data-theme", theme);
  // Add the active class to all elements with the attribute "data-toggle-theme"
  [...document.querySelectorAll("[data-toggle-theme]")].forEach(el => {
    el.classList.add(toggleEl.getAttribute("data-act-class"));
  });
}

  
   /**
   * Remove the theme from the website and clear the theme from local storage
   */
  function removeTheme() {
    // Remove the "data-theme" attribute from the root HTML element
    document.documentElement.removeAttribute("data-theme");
    // Remove the theme from local storage
    localStorage.removeItem(dataKey ? dataKey : "theme");
  }
  
   /**
   * Update the theme of the website based on the provided themes array
   * @param {array} themesArray - Array of themes
   */
  function updateTheme(themesArray) {
    // Check if the current theme is the first theme in the array
    if (document.documentElement.getAttribute("data-theme") === themesArray[0]) {
      // Check if there is only one theme in the array
      if (themesArray.length === 1) {
        // If there is only one theme, remove the theme from the website
        removeTheme();
      } else {
        // Set the second theme in the array as the new theme for the website
        document.documentElement.setAttribute("data-theme", themesArray[1]);
        // Store the new theme in local storage
        localStorage.setItem(dataKey ? dataKey : "theme", themesArray[1]);
      }
    } else {
      // Set the first theme in the array as the new theme for the website
      document.documentElement.setAttribute("data-theme", themesArray[0]);
      // Store the new theme in local storage
      localStorage.setItem(dataKey ? dataKey : "theme", themesArray[0]);
    }
  }
  
     /**
   * Toggle the active class on elements with the attribute "data-toggle-theme"
   */
  function toggleTheme() {
    [...document.querySelectorAll("[data-toggle-theme]")].forEach(el => {
      el.classList.toggle(this.getAttribute("data-act-class"));
    });
  }

  
     // Immediately invoked function expression (IIFE)
  // Check if a theme is stored in local storage and apply it to the website
  (function () {
    const theme = localStorage.getItem(dataKey ? dataKey : "theme");
    if (theme) {
      setTheme(theme);
    }
  })();
  
     // Check if the toggle element exists
  if (toggleEl) {
    // Attach click event listeners to elements with the attribute "data-toggle-theme"
    [...document.querySelectorAll("[data-toggle-theme]")].forEach(el => {
      el.addEventListener("click", function () {
        // Get the themes list from the element's attribute
        const themesList = el.getAttribute("data-toggle-theme");
        if (themesList) {
          // Split the themes list into an array of themes
          const themesArray = themesList.split(",");
          // Update the theme
            updateTheme(themesArray);
          }
          toggleTheme();
        });
      });
    }
  }
  
  /**
   * Changes the theme of the application.
   *
   * @param {boolean} attach - Flag indicating whether to attach the theme change event.
   */
  function themeChange(attach = true) {
    const attachEvent = () => {
      themeToggle();
  
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
  
