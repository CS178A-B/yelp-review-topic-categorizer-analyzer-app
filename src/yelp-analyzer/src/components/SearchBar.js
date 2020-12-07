import React from 'react';
// import ShowLanding from './ShowLanding';

const updateInput = async (input) => {
  console.log("Search handler triggered");
  // Assign input to property of ShowResults state
  // Do the search
}

const SearchBar = ({keyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <input
     style={BarStyling}
     placeholder={"search restaurant, cuisine, or location"}
     onChange={(e) => updateInput(e.target.value)}
    />
  );
}
 
export default SearchBar;
