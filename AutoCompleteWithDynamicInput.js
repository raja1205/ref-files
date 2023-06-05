import React, { useState } from 'react';
import './autocomplete.css'

const AutoCompleteWithDynamicInput = () => {
  const [inputList, setInputList] = useState([{ value: '', autoCompleteValues: ['Apple', 'Banana', 'Cherry'] }]);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const list = [...inputList];
    list[index].value = value;
    setInputList(list);
  };

  const handleAutoComplete = (index, value) => {
    const list = [...inputList];
    list[index].value += value;
    setInputList(list);
  };

  const handleAddInput = () => {
    setInputList([...inputList, { value: '', autoCompleteValues: ['Apple', 'Banana', 'Cherry'] }]);
  };

  const handleRemoveInput = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  return (
    <div className="container">
      {inputList.map((input, index) => (
        <div key={index} className="input-container">
          <input
            type="search"
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
            className="form-control"
          />
          <ul className="autocomplete-list">
            {input.autoCompleteValues.map((value, idx) => (
              <li
                key={idx}
                onClick={() => handleAutoComplete(index, value)}
              >
                {value}
              </li>
            ))}
          </ul>
          <button className="btn btn-danger" onClick={() => handleRemoveInput(index)}>
            -
          </button>
        </div>
      ))}
      <button className="btn btn-success" onClick={handleAddInput}>
        +
      </button>
    </div>
  );
};

export default AutoCompleteWithDynamicInput;


// const AutoCompleteWithDynamicInput = () => {
//   const [searchValue, setSearchValue] = useState('');
//   const [selectedValues, setSelectedValues] = useState([]);
//   const [inputValues, setInputValues] = useState([]);

//   const autoCompleteOptions = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry', 'Apple and Orange'];

//   const handleSearchChange = (event) => {
//     setSearchValue(event.target.value);
//   };

//   const handleSelectOption = (option) => {
//     setSearchValue(option);
//   };

//   const handleAddInput = () => {
//     setInputValues([...inputValues, '']);
//   };

//   const handleRemoveInput = (index) => {
//     const updatedInputs = [...inputValues];
//     updatedInputs.splice(index, 1);
//     setInputValues(updatedInputs);
//   };

//   const handleInputChange = (index, event) => {
//     const updatedInputs = [...inputValues];
//     updatedInputs[index] = event.target.value;
//     setInputValues(updatedInputs);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
//       searchValue,
//       selectedValues,
//       inputValues
//     };
//     console.log(data);
//   };

//   return (
//     <div className="container">
//       <h1>Auto Complete with Dynamic Inputs</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="searchInput">Search:</label>
//           <input
//             type="text"
//             className="form-control"
//             id="searchInput"
//             value={searchValue}
//             onChange={handleSearchChange}
//             autoComplete="off"
//           />
//           <div className="autocomplete">
//             {autoCompleteOptions
//               .filter(option => option.toLowerCase().startsWith(searchValue.toLowerCase()))
//               .map(option => (
//                 <div
//                   key={option}
//                   className="autocomplete-option"
//                   onClick={() => handleSelectOption(option)}
//                 >
//                   {option}
//                 </div>
//               ))}
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Selected Values:</label>
//           <ul>
//             {selectedValues.map((value, index) => (
//               <li key={index}>{value}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="form-group">
//           <label>Additional Text:</label>
//           {inputValues.map((value, index) => (
//             <div key={index} className="input-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={value}
//                 onChange={(event) => handleInputChange(index, event)}
//               />
//               <div className="input-group-append">
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={() => handleRemoveInput(index)}
//                 >
//                   -
//                 </button>
//               </div>
//             </div>
//           ))}
//           <button type="button" className="btn btn-success mt-2" onClick={handleAddInput}>
//             +
//           </button>
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AutoCompleteWithDynamicInput;
