import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { ColorModeButton } from "./ui/color-mode";

export interface Prop {
  color: string;
}

const Landing = ({ color }: Prop) => {
  return (
    <>
      <section className="container">
        <Box
          bgColor={{ _light: "white", _dark: "black" }}
          opacity={{ _light: 0.95, _dark: 0.95 }}
          w={"100%"}
          position={"fixed"}
          top={0}
          left={0}
        >
          <HStack
            justify={"space-between"}
            p={{ mdDown: "1rem 1.2rem", mdTo2xl: "1rem 5rem" }}
            mb={".3rem"}
          >
            <Button
              bgColor={{ _light: "white", _dark: "black" }}
              _hover={{
                transform: "scale(1.07)",
              }}
              transitionProperty={"transform, bgColor"}
              transitionDuration={".5s"}
              transitionTimingFunction={"linear"}
            >
              <Box
                textStyle={{ mdDown: "sm", mdTo2xl: "xl" }}
                fontWeight={{}}
                p={".4rem .8rem"}
                bgColor={{ _light: "black", _dark: "white" }}
                borderRadius={".5rem"}
              >
                U
              </Box>
              <Text
                textStyle={{ mdDown: "sm", mdTo2xl: "xl" }}
                color={{ _light: "black", _dark: "white" }}
                hideBelow={"md"}
              >
                Uthman
              </Text>
            </Button>
            <ColorModeButton />
              <Button
                _hover={{
                  _light: {
                    color: "white",
                    transform: "scale(1.07)",
                  },
                  _dark: {
                    color: "black",
                    transform: "scale(1.07)",
                  },
                }}
                transitionProperty={"transform, bgColor"}
                transitionDuration={".5s"}
                transitionTimingFunction={"linear"}
                variant={{ _light: "outline", _dark: "solid" }}
                bgColor={{ _light: "black", _dark: "white" }}
                color={{ _light: "white", _dark: "black" }}
                border={"1px solid black"}
                p={{ mdDown: "1rem 1.4rem", mdTo2xl: "1.3rem 1.4rem" }}
                textStyle={{ mdDown: "sm", mdTo2xl: "xl" }}
                fontWeight={{ mdDown: "semibold", mdTo2xl: "semibold" }}
              >
                Contact me
              </Button>
          </HStack>
          <hr />
        </Box>
        <Box h={"100vh"} w={"100%"} display={"flex"} justifyContent={"center"}>
          <Stack
            h={"100%"}
            align={"center"}
            justify={"center"}
            gap={"2rem"}
            p={{ mdDown: "1rem", mdTo2xl: "4rem" }}
            w={{ mdDown: "90%", mdTo2xl: "65%" }}
          >
            <Text
              textAlign={"center"}
              fontWeight={"bold"}
              lineHeight={"1"}
              fontSize={{ mdDown: "4xl", mdTo2xl: "7xl" }}
            >
              Adebayo Uthman
            </Text>
            <Text
              textAlign={"center"}
              fontSize={{ mdDown: "sm", mdTo2xl: "xl" }}
              color={{ _light: "rgb(75, 85, 99)" }}
              fontWeight={"semibold"}
            >
              Software Engineer specializing in Frontend Development using
              modules like React, Typescript and NextJs to build user-friendly
              high performance web applications that solve real business
              problems
            </Text>
            <Button size={{ mdDown: "md", mdTo2xl: "lg" }} p={"1rem 2rem"}>
              View My Work
            </Button>
            <HStack gap={"1.3rem"} mt={"1.5rem"}>
              <VscGithubAlt color={color} size={"1.6rem"} />
              <FaLinkedinIn color={color} size={"1.6rem"} />
              <CiTwitter color={color} size={"1.6rem"} />
            </HStack>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default Landing;
