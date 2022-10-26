import "./SelectedChat.css";
import Box from "@mui/material/Box";
import BgImg from "../../assets/bg_img.jpg";
import ChatBox from "./ChatBox";
import MsgSendForm from "./MsgSendForm";
import Header from "./Header";

const SelectedChat = () => {
  return (
    <Box
      sx={{
        width: "70%",
        height: "100vh",
        background: `url(${BgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          height: "inherit",
          display: "flex",
          flexDirection: "column",
          bgcolor: "rgba(102,102,102,0.2)",
          overflowY: "auto",
        }}
      >
        <Header />
        <ChatBox />
        <MsgSendForm />
      </Box>
    </Box>
  );
};

export default SelectedChat;
