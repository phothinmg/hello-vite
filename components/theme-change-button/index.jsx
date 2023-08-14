import './theme-change.css';
/**
 *Inspired by https://github.com/saadeghi/theme-change
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

export default ThemeChang => {
    return(
        <label class="switch">
            <input type="checkbox" data-toggle-theme="dark"/>
            <span class="slider round"></span>
        </label>
    )
};
