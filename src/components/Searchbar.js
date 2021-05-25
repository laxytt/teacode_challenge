import React from "react";
import {TextField} from "@material-ui/core"

const SearchBar = ({ query, updateQuery }) => {
  const handleChange = (event) => {
    updateQuery(event.target.value.trim());
  };

  return (
    <form  noValidate autoComplete="off">
      <TextField id="standard-basic" label="Search" value={query} onChange={handleChange} />
      {/* <input type="text" value={query} onChange={handleChange} /> */}
    </form>
  );
};

export default SearchBar;
