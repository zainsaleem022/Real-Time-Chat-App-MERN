import React from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { px } from "framer-motion";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <div>
      <Box
        px={2}
        py={1}
        borderRadius="lg"
        m={1}
        mb={2}
        variant="solid"
        fontSize={12}
        backgroundColor="blue"
        color="white"
        cursor="pointer"
        onClick={handleFunction}
      >
        {user.name}
        <CloseIcon paddingLeft={1} />
      </Box>
    </div>
  );
};

export default UserBadgeItem;
