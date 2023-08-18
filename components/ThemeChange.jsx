const ThemeSelect = () => {
    const dataArray = ['light','dark'];
  
    const queryArray = () => {
      const dropdown = document.getElementById('dropdown');
      // @ts-ignore
      const selectedValue = dropdown.value;
      const resultDiv = document.getElementById('result');
      const htmlElement = document.querySelector('html');
  
      // Check if the selected value exists in the array
      if (dataArray.includes(selectedValue)) {
        resultDiv.innerText = '';
        // Set the data-theme attribute
        htmlElement.setAttribute('data-theme', selectedValue);
      } else {
        resultDiv.innerText = '';
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
export default ThemeSelect