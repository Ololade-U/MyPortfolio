import { Box, Flex, Heading, Separator, Stack, Text } from "@chakra-ui/react";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import type { Prop } from "./Landing";

const Footer = ({color}: Prop) => {
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
          align={'center'}
          justify={{mdTo2xl: 'space-between'}}
          gap={{mdDown : '2rem'}}
          mb={'1.5rem'}
          w={'65%'}
        //   justify={{mdTo2xl : ''}}
        >
          <Flex direction={"column"}>
            <Heading color={"white"} size={"2xl"}>
              Adebayo Uthman
            </Heading>
            <Text color={"rgba(177, 178, 178, 1)"} fontSize={'md'}>Frontend Developer</Text>
          </Flex>
          <Flex alignItems={"center"} gap={".8rem"}>
            <VscGithubAlt color={color} size={"1.8rem"} />
            <FaLinkedinIn color={color} size={"1.8rem"} />
            <CiTwitter color={color} size={"1.8rem"} />
          </Flex>
        </Stack>
        <Separator w={{ mdDown: "85%", mdTo2xl: "65%" }} size={'xs'}/>
        <Text color={"rgba(177, 178, 178, 1)"} mt={'1.5rem'}>© 2025 Adebayo Uthman. All rights reserved.</Text>
      </Box>
    </>
  );
};

export default Footer;
