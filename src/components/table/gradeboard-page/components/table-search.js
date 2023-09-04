import { InputAdornment, TextField, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function TableSearchComponent() {
    return (  
        <TextField
            sx={{ width: "100%" }}
            label="Searching"
            variant="standard"
            placeholder="Enter keyword"
            InputProps={{
              endAdornment: (
                <Tooltip sx={{ cursor: "pointer" }} title="Search">
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                </Tooltip>
              ),
            }}
          />
    );
}