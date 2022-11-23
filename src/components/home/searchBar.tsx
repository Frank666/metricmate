import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";


interface AthletesInfo {
    searchAthlete: Function;
}

export default function Search(props: AthletesInfo) {
    const { searchAthlete } = props;

    return (
        <div >
            <div >
                <SearchIcon />
            </div>
            <TextField
                id="search-bar"
                className="text"
                onInput={(e) => {
                    searchAthlete(e);
                }}
                label="Enter a city name"
                variant="outlined"
                placeholder="Search..."
                size="small"
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
        </div>
    );
}