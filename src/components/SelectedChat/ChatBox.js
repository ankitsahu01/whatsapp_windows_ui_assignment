import MsgData from "./MsgData.json";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const ChatBox = () => {
  const scrollToLastMsg = () => {
    document.getElementById("endScroll").scrollIntoView();
  };

  return (
    <Box
      className="chatBox"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflowY: "inherit",
      }}
    >
      {MsgData.messages.map((msg, index) => (
        <>
          <Paper
            onLoad={scrollToLastMsg}
            key={index}
            elevation={2}
            sx={{
              my: 0.4,
              mx: 2,
              p: 0.9,
              pb: 0,
              maxWidth: 400,
              alignSelf:
                msg.senderId === MsgData.id ? "flex-start" : "flex-end",
              bgcolor: msg.senderId === MsgData.id ? "white" : "lightgreen",
              display: "flex",
              flexDirection: "column",
              gap: 0.2,
              position: "relative",
              zIndex: 1,
            }}
          >
            <span
              style={{
                zIndex: -1,
                position: "absolute",
                top: 0,
                left: msg.senderId === MsgData.id ? "-8px" : "50%",
                right: msg.senderId === MsgData.id ? "50%" : "-8px",
                borderWidth: 10,
                borderStyle: "solid",
                borderColor: msg.senderId === MsgData.id ? "white" : "lightgreen",
                borderLeftColor: "transparent",
                borderRightColor: "transparent",
                borderBottomColor: "transparent",
              }}
            ></span>
            {msg.imgUrl && <img src={msg.imgUrl} alt={msg.imgUrl} />}
            <Typography variant="body1">{msg.content}</Typography>

            <Box display="flex" justifyContent="end">
              <Typography
                variant="caption"
                sx={{ fontWeight: "bold", opacity: 0.4 }}
              >
                {msg.time}
              </Typography>
              {msg.status === "seen" && (
                <DoneAllIcon
                  sx={{ fontSize: "medium", ml: 0.2, color: "primary.main" }}
                />
              )}
            </Box>
          </Paper>
          {index === 2 && (
            <Typography sx={{ textAlign: "center", opacity: 0.6 }}>
              Today
            </Typography>
          )}
        </>
      ))}
      <div id="endScroll"></div>
    </Box>
  );
};

export default ChatBox;
