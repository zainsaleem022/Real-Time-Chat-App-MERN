import React, { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { Box } from "@chakra-ui/layout";
const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
      }}
    >
      {user && <SideDrawer />}
      <Box
        d="flex"
        alignItems="center"
        justifyContent="center"
        h="90vh"
        w={{ base: "100%", md: "100%", lg: "100%" }}
        p="10px"
        display="inline-flex"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
