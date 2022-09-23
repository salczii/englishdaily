import { Box } from "@chakra-ui/layout";
import Menu from "./Menu";

const MainLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" left="0" height="75px" width="100vw">
        <Menu />
      </Box>
      <Box width="100vw" paddingTop="75px" height="calc(100vh-75px-100px)">
        {children}
      </Box>
      <Box bottom="0" left="0" height="100px" position="absolute">
        player
      </Box>
    </Box>
  );
};

export default MainLayout;
