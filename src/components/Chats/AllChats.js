import "./AllChats.css";
import { grey } from "@mui/material/colors";
import Badge from "@mui/material/Badge";
import { Box, Stack, Grid, Avatar } from "@mui/material";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import UsersData from "./UsersData.json";
import Header from "./Header";

const Chats = () => {
  const color = grey[500];
  return (
    <>
      <Box
        className="allChats"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          height: "100vh",
          overflowY: "auto",
          boxShadow: 4,
          zIndex: 100,
          bgcolor:"whitesmoke"
        }}
      >
        <Header />
        <Stack>
          {UsersData.map((user) => (
            <Card
              key={user.name}
              variant="outlined"
              sx={{ border: 0, borderRadius: 0 }}
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 1.5,
                    bgcolor: user.selected ? "lightblue" : "whitesmoke",
                    "&:hover": {
                      bgcolor: "lightgray",
                    },
                  }}
                >
                  <Grid container columnSpacing={1}>
                    <Grid item sx={{ alignSelf: "center" }}>
                      <Avatar alt={user.name} src={user.picUrl} />
                    </Grid>
                    <Grid item sx={{ width: "60%" }}>
                      <Typography
                        component="h2"
                        sx={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <strong>{user.name}</strong>
                      </Typography>

                      <Typography
                        variant="body2"
                        component="h2"
                        sx={{
                          fontSize: 11,
                          opacity: user.isTyping ? 1 : 0.6,
                          ml: 0.2,
                          fontWeight: "bold",
                          color: user.isTyping ? "primary.main" : "",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        <Box display="flex">
                          {!user.isTyping && user.status === "sent" && (
                            <DoneAllIcon sx={{ fontSize: "medium", mr: 0.5 }} />
                          )}
                          {user.isTyping ? "typing..." : user.latestMsg}
                        </Box>
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      sx={{
                        mt: 0.9,
                        ml: "auto",
                        color: user.notification ? "primary.main" : color,
                      }}
                    >
                      <Stack>
                        <strong>{user.time}</strong>
                        {user.notification && (
                          <Badge
                            sx={{ mt: 1.5, mr: 1.5 }}
                            badgeContent={user.notification}
                            color="primary"
                          ></Badge>
                        )}
                      </Stack>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Chats;
