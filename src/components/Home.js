import Box from "@mui/material/Box";
import AllChats from './Chats/AllChats';
import SelectedChat from './SelectedChat/SelectedChat';

const Home = () => {
    return (
        <Box display="flex">
            <AllChats/>
            <SelectedChat/>
        </Box>
    );
}

export default Home;
