// import './theme-change.css';
// import './themeChange';
// export default ThemeChang => {
//     return(
//         <label class="switch">
//             <input type="checkbox" data-toggle-theme="dark"/>
//             <span class="slider round"></span>
//         </label>
//     )
// };

const ThemeChange = () => {
    const dataArray = ['light','dark'];
  
    const queryArray = () => {
      const dropdown = document.getElementById('dropdown');
      // @ts-ignore
      const selectedValue = dropdown.value;
      const resultDiv = document.getElementById('result');
      const htmlElement = document.querySelector('html');
  
      // Check if the selected value exists in the array
      if (dataArray.includes(selectedValue)) {
        resultDiv.innerText = 'Selected: ' + selectedValue;
        // Set the data-theme attribute
        htmlElement.setAttribute('data-theme', selectedValue);
      } else {
        resultDiv.innerText = 'Value not found in the array.';
      }
    };
  
    return (
      <div>
        <select id="dropdown" onClick={queryArray} >
          {dataArray.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
        {/* <button onClick={queryArray}>Query</button> */}
        <div id="result"></div>
      </div>
    );
  };
export default ThemeChange