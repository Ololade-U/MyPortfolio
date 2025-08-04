import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlinePython } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoNodejs } from "react-icons/io";
import type { Prop } from "./Landing";
import { useObserve } from "./hooks/Observe";

const TechStack = ({ color }: Prop) => {
  const { componentRef, isInView } = useObserve();
  return (
    <>
      <Box
        ref={componentRef}
        position={"relative"}
        top={100}
        data-state={isInView ? "open" : "close"}
        _open={{
          animation: "up 1s ease-out",
          animationFillMode: "forwards",
        }}
      >
        <Heading
          size={{ mdTo2xl: "4xl", mdDown: "3xl" }}
          fontWeight={"bold"}
          textAlign={"center"}
          data-state={isInView ? "open" : "close"}
          opacity={0}
          _open={{
            animation: "appear 1s linear",
            animationDelay: ".3s",
            animationFillMode: "forwards",
          }}
        >
          My Tech Stack
        </Heading>
        <Stack
          w={"100%"}
          align={{ mdDown: "center" }}
          justify={{ mdTo2xl: "center" }}
          gap={{ mdDown: "1.5rem", mdTo2xl: "3.5rem" }}
          py={"2rem"}
          direction={{ mdDown: "column", mdTo2xl: "row" }}
          data-state={isInView ? "open" : "close"}
          opacity={0}
          _open={{
            animation: "appear 1s linear",
            animationDelay: ".5s",
            animationFillMode: "forwards",
          }}
        >
          <Box
            width={{ mdDown: "85%", mdTo2xl: "35%" }}
            borderRadius={"1rem"}
            p={"1.2rem 1.5rem"}
            border={"2px solid rgba(190, 190, 190, 1)"}
          >
            <Stack gap={"2rem"}>
              <Heading size={"3xl"}>Frontend</Heading>
              <Flex alignItems={"center"} gap={".8rem"}>
                <Box
                  padding={".2rem .2rem"}
                  borderRadius={".5rem"}
                  bgColor={"gray.100"}
                >
                  <FaReact color={color} size={"2rem"} />
                </Box>
                <Stack lineHeight={"1"}>
                  <Text fontSize={"larger"} fontWeight={"bold"}>
                    React Js
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color={{ _light: "rgba(47, 47, 47, 1)" }}
                  >
                    UI Libary
                  </Text>
                </Stack>
              </Flex>
              <Flex alignItems={"center"} gap={".8rem"}>
                <Box
                  padding={".2rem .2rem"}
                  borderRadius={".5rem"}
                  bgColor={"gray.100"}
                >
                  <RiNextjsLine color={color} size={"2rem"} />
                </Box>
                <Stack lineHeight={"1"}>
                  <Text fontSize={"larger"} fontWeight={"bold"}>
                    Next Js
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color={{ _light: "rgba(47, 47, 47, 1)" }}
                  >
                    SSR, Routing, SEO
                  </Text>
                </Stack>
              </Flex>
              <Flex alignItems={"center"} gap={".8rem"}>
                <Box
                  padding={".2rem .2rem"}
                  borderRadius={".5rem"}
                  bgColor={"gray.100"}
                >
                  <TbBrandJavascript color={color} size={"2rem"} />
                </Box>
                <Stack lineHeight={"1"}>
                  <Text fontSize={"larger"} fontWeight={"bold"}>
                    JavaScript
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color={{ _light: "rgba(47, 47, 47, 1)" }}
                  >
                    Dynamic Web Content
                  </Text>
                </Stack>
              </Flex>
              <Flex alignItems={"center"} gap={".8rem"}>
                <Box
                  padding={".2rem .2rem"}
                  borderRadius={".5rem"}
                  bgColor={"gray.100"}
                >
                  <SiTailwindcss color={color} size={"2rem"} />
                </Box>
                <Stack lineHeight={"1"}>
                  <Text fontSize={"larger"} fontWeight={"bold"}>
                    TailWind CSS
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color={{ _light: "rgba(47, 47, 47, 1)" }}
                  >
                    Utility-first styling
                  </Text>
                </Stack>
              </Flex>
              <Flex alignItems={"center"} gap={".8rem"}>
                <Box
                  padding={".2rem .2rem"}
                  borderRadius={".5rem"}
                  bgColor={"gray.100"}
                >
                  <SiChakraui color={color} size={"2rem"} />
                </Box>
                <Stack lineHeight={"1"}>
                  <Text fontSize={"larger"} fontWeight={"bold"}>
                    Chakra UI
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color={{ _light: "rgba(47, 47, 47, 1)" }}
                  >
                    Component Libary
                  </Text>
                </Stack>
              </Flex>
              <Flex alignItems={"center"} gap={".8rem"}>
                <Box
                  padding={".2rem .2rem"}
                  borderRadius={".5rem"}
                  bgColor={"gray.100"}
                >
                  <VscGithubAlt color={color} size={"2rem"} />
                </Box>
                <Stack lineHeight={"1"}>
                  <Text fontSize={"larger"} fontWeight={"bold"}>
                    Git/GitHub
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color={{ _light: "rgba(47, 47, 47, 1)" }}
                  >
                    Source Control
                  </Text>
                </Stack>
              </Flex>
            </Stack>
          </Box>
          <Box
            width={{ mdDown: "85%", mdTo2xl: "35%" }}
            h={{ mdTo2xl: "32.5rem" }}
            borderRadius={"1rem"}
            p={"1.2rem 1.5rem"}
            border={"2px solid rgba(190, 190, 190, 1)"}
          >
            <Stack gap={"2rem"}>
              <Heading size={"2xl"}>Backend & Other Tools</Heading>
              <Flex alignItems={"center"} gap={".8rem"}>
                <Box
                  padding={".2rem .2rem"}
                  borderRadius={".5rem"}
                  bgColor={"gray.100"}
                >
                  <AiOutlinePython color={color} size={"2rem"} />
                </Box>
                <Stack lineHeight={"1"}>
                  <Text fontSize={"larger"} fontWeight={"bold"}>
                    Python
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color={{ _light: "rgba(47, 47, 47, 1)" }}
                  >
                    Functional, OOP
                  </Text>
                </Stack>
              </Flex>
              <Flex alignItems={"center"} gap={".8rem"}>
                <Box
                  padding={".2rem .2rem"}
                  borderRadius={".5rem"}
                  bgColor={"gray.100"}
                >
                  <MdOutlineEmail color={color} size={"2rem"} />
                </Box>
                <Stack lineHeight={"1"}>
                  <Text fontSize={"larger"} fontWeight={"bold"}>
                    NodeMailer
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color={{ _light: "rgba(47, 47, 47, 1)" }}
                  >
                    Email Notifications
                  </Text>
                </Stack>
              </Flex>
              <Flex alignItems={"center"} gap={".8rem"}>
                <Box
                  padding={".2rem .2rem"}
                  borderRadius={".5rem"}
                  bgColor={"gray.100"}
                >
                  <IoLogoNodejs color={color} size={"2rem"} />
                </Box>
                <Stack lineHeight={"1"}>
                  <Text fontSize={"larger"} fontWeight={"bold"}>
                    Node JS
                  </Text>
                  <Text
                    fontSize={"sm"}
                    color={{ _light: "rgba(47, 47, 47, 1)" }}
                  >
                    Dynamic Web Content
                  </Text>
                </Stack>
              </Flex>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default TechStack;
