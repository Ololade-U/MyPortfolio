import { Box, Flex, Heading, Separator, Stack, Text } from "@chakra-ui/react";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import type { Prop } from "./Landing";

const Footer = ({ color }: Prop) => {
  return (
    <>
      <Box
        w={"100%"}
        bgColor={"Black"}
        py={"3.5rem"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Stack
          direction={{ mdDown: "column", mdTo2xl: "row" }}
          align={"center"}
          justify={{ mdTo2xl: "space-between" }}
          gap={{ mdDown: "2rem" }}
          mb={"1.5rem"}
          w={"65%"}
          //   justify={{mdTo2xl : ''}}
        >
          <Flex direction={"column"}>
            <Heading color={"white"} size={"2xl"}>
              Adebayo Uthman
            </Heading>
            <Text color={"rgba(177, 178, 178, 1)"} fontSize={"md"}>
              Frontend Developer
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={".8rem"}>
            <a
              target="_blank"
              href="https://github.com/Ololade-U"
            >
              <VscGithubAlt color={color} size={"1.6rem"} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/adebayo-uthman-38aaa1266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            >
              <FaLinkedinIn color={color} size={"1.6rem"} />
            </a>
            <a target="_blank" href="https://x.com/trb_adebayo?s=21">
              <CiTwitter color={color} size={"1.6rem"} />
            </a>
          </Flex>
        </Stack>
        <Separator w={{ mdDown: "85%", mdTo2xl: "65%" }} size={"xs"} />
        <Text color={"rgba(177, 178, 178, 1)"} mt={"1.5rem"}>
          © 2025 Adebayo Uthman. All rights reserved.
        </Text>
      </Box>
    </>
  );
};

export default Footer;
