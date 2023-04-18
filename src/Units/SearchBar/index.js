import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import cn from "classnames";
import { useStyles } from "./styles";

export default function SearchAppBar({
  className,
  inputValue = "",
  setInputValue = () => {},

  handleSearch = () => {},
}) {
  const classes = useStyles();
  const containerClasses = cn(classes.search, className);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(String(value).trimStart());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) handleSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={containerClasses}>
        <input
          placeholder="Search here"
          value={inputValue}
          onChange={handleChange}
          className={classes.inputRoot}
        />
        <button className={classes.searchBtn} onClick={handleSubmit}>
          <SearchIcon className={classes.searchcon} />
        </button>
      </div>
    </form>
  );
}
