import { ReactNode } from "react";
import {
  Box,
  Heading,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <>
      <Box padding={2}>
        <Flex justifyContent='center'>
          <Heading>ToDo App</Heading>
        </Flex>
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
}
