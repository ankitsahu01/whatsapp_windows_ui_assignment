import MsgData from "./MsgData.json";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ py: 0.5, px: 2, bgcolor: "whitesmoke", boxShadow: 3 }}
      >
        <div>
          <Typography variant="h6" component="h2">
            {MsgData.name}
          </Typography>
          {MsgData.isOnline && (
            <Typography variant="body1" sx={{ opacity: 0.5 }}>
              online
            </Typography>
          )}
        </div>
        <Stack direction="row" gap={2}>
          <IconButton>
            <VideocamOutlinedIcon />
          </IconButton>
          <IconButton>
            <LocalPhoneOutlinedIcon />
          </IconButton>
          <Divider orientation="vertical" variant="middle" flexItem />
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <Avatar alt={MsgData.name} src={MsgData.picUrl} sx={{ width: 25, height: 25 }} />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
