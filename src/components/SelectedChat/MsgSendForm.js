import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import TextField from "@mui/material/TextField";

const MsgSendForm = () => {
  return (
    <Box
      sx={{
        p: 0.7,
        borderRadius: 0,
        display: "flex",
        alignItems: "center",
        boxShadow: 20,
        backgroundColor:"whitesmoke"
      }}
    >
      <IconButton sx={{ mx: 0.8 }}>
        <SentimentSatisfiedAltIcon />
      </IconButton>
      <IconButton sx={{ mx: 0.8 }}>
        <AttachFileIcon />
      </IconButton>

      <TextField
        fullWidth
        autoFocus
        size="small"
        placeholder="Search or start new chat"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: 0,
            },
            "&.Mui-focused fieldset": {
              border: 0,
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton>
                <SendIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default MsgSendForm;
