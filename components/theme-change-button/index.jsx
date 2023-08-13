import './themeChange';
import './theme-change.css';

export default ThemeChang => {
    return(
        <label class="switch">
            <input type="checkbox" data-toggle-theme="dark"/>
            <span class="slider round"></span>
        </label>
    )
};
