// import React, { useState } from "react";
// import "./autocomplete.css";

// const TrySearch = () => {
//   const [query, setQuery] = useState("");

//   const [inputList, setInputList] = useState(["Apple", "Banana", "Cherry"]);

//   const getFilteredItems = (query, inputList) => {
//     if (!query) {
//       return inputList;
//     }
//     return inputList.filter(item => item.includes(query))
//   };

//   const handleInputChange = (index, event) => {
//     // const { value } = event.target;
//     // const list = [...inputList];
//     // list[index].value = value;
//     // setInputList(list);
//   };

//   const filteredItems = getFilteredItems(query, inputList);

//   console.log(query);

//   return (
//     <div className="container">
//       <label>Search</label>
//       <input
//         type="search"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="form-control"
//       />
//       <ul className="autocomplete-list">
//         {filteredItems.map((value, idx) => (
//           <li key={idx} onClick={() => setQuery(value)}>
//             {value}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TrySearch;

import React, { useState } from "react";

import "./styles.css";
var data = require("./MOCK_DATA.json");

export default function TrySearch() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div className="App">
      <h1>Search</h1>

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {data
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
              >
                {item.full_name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
