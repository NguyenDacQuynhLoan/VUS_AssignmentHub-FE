import { InputAdornment, TextField, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function TableSearchComponent({ searchValue }) {
  const [keyword, setKeyword] = useState("");

  const OnSearchClicked = (e) => {
    e.preventDefault();
    searchValue(keyword);
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form action="#" onSubmit={(e) => OnSearchClicked(e)}>
      <TextField
        sx={{ width: "100%" }}
        label="Searching"
        variant="standard"
        name="keyword"
        placeholder="Enter keyword"
        onChange={handleKeywordChange}
        InputProps={{
          endAdornment: (
            <button
              type="submit"
              style={{ background: "transparent", border: "none" }}
            >
              <Tooltip sx={{ cursor: "pointer" }} title="Search">
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              </Tooltip>
            </button>
          ),
        }}
      />
    </form>
  );
}