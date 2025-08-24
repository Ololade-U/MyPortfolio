import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { VscGithubAlt } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { ColorModeButton } from "./ui/color-mode";
import { useObserve } from "./hooks/Observe";
import {HashLink} from "react-router-hash-link"


export interface Prop {
  color: string;
}

const Landing = ({ color }: Prop) => {

  const { componentRef, isInView } = useObserve();
  return (
    <>
      <section className="container">
        <Box
          zIndex={10}
          bgColor={{ _light: "white", _dark: "black" }}
          opacity={{ _light: 0.95, _dark: 0.95 }}
          w={"100%"}
          position={"fixed"}
          top={-200}
          left={0}
          data-state="open"
          _open={{
            animation: "drop .8s ease-out",
            animationFillMode: "forwards",
          }}
        >
          <HStack
            justify={"space-between"}
            p={{ mdDown: "1rem 1.2rem", mdTo2xl: "1rem 3.5rem" }}
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
            <Box>
                <HashLink to={'#hash-target'} smooth>
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
                  mr={"1rem"}
                >
                  Contact me
                </Button>
                </HashLink>
              <ColorModeButton />
            </Box>
          </HStack>
          <hr />
        </Box>
        <Box
          ref={componentRef}
          position={"relative"}
          top={100}
          // mt={"4rem"}
          h={"100vh"}
          w={"100%"}
          display={"flex"}
          justifyContent={"center"}
          data-state={isInView ? "open" : "close"}
          _open={{
            animation: "up 1s ease-out",
            animationFillMode: "forwards",
          }}
        >
          <Stack
            h={"100%"}
            align={"center"}
            justify={"center"}
            gap={"2rem"}
            p={{ mdDown: "1rem", mdTo2xl: "4rem" }}
            w={{ mdDown: "90%", mdTo2xl: "65%" }}
          >
            <Text
              opacity={0}
              data-state={isInView ? "open" : "close"}
              _open={{
                animation: "appear .8s ease-out",
                animationFillMode: "forwards",
              }}
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
              data-state={isInView ? "open" : "close"}
              opacity={0}
              _open={{
                animation: "appear 1s linear",
                animationDelay: ".3s",
                animationFillMode: "forwards",
              }}
            >
              Software Engineer specializing in Frontend Development using
              modules like React, Typescript and NextJs to build user-friendly
              high performance web applications that solve real business
              problems
            </Text>
            <HashLink to={'#project-hash'} smooth>
            <Button
              // visibility={"hidden"}
              opacity={0}
              data-state={isInView ? "open" : "close"}
              _open={{
                animation: "appear 1s ease-in",
                animationDelay: ".6s",
                animationFillMode: "forwards",
              }}
              size={{ mdDown: "md", mdTo2xl: "lg" }}
              p={"1rem 2rem"}
            >
              View My Work
            </Button>
            </HashLink>
            <HStack
              gap={"1.3rem"}
              mt={"1.5rem"}
              opacity={0}
              data-state={isInView ? "open" : "close"}
              _open={{
                animation: "appear 1s ease-in",
                animationDelay: ".7s",
                animationFillMode: "forwards",
              }}
            >
              <a target="_blank" href="https://github.com/Ololade-U">
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
            </HStack>
          </Stack>
        </Box>
      </section>
    </>
  );
};

export default Landing;
