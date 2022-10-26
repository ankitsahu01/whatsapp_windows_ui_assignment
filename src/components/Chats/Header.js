import { grey } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import SettingsIcon from "@mui/icons-material/Settings";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

const Header = () => {
  const color = grey[600];
  return (
    <Box p={1.5}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography component="h1" variant="h4">
          Chats
        </Typography>
        <div>
          <IconButton sx={{ mr: 2 }}>
            <AddIcon sx={{ color }} />
          </IconButton>
          <IconButton>
            <SettingsIcon sx={{ color }} />
          </IconButton>
        </div>
      </Stack>

      <TextField
        fullWidth
        margin="dense"
        size="small"
        placeholder="Search or start new chat"
        sx={{"& fieldset":{"borderRadius":0}}}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Header;
