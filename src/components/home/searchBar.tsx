import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

interface AthletesInfo {
    searchAthlete: Function;
}

export default function Search(props: AthletesInfo) {
    const { searchAthlete } = props;

    return (
        <>
            <TextField
                id="search-bar"
                className="text"
                onChange={(e) => { searchAthlete(e.target.value) }}
                variant="outlined"
                placeholder="Search by name"
                size="small"
                sx={{
                    width: '50%',
                    marginLeft: '10px'
                }}
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
        </>
    );
}