import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import movie from "../assets/MovieXYZ - Google Chrome 8_20_2025 11_47_13 AM.png";
import brick from "../assets/Screenshot (1).png";
import local from "../assets/local.png";
import nitt from "../assets/Nitt.png";
import { IoLink } from "react-icons/io5";
import { VscGithubAlt } from "react-icons/vsc";
import { useObserve } from "./hooks/Observe";

const Projects = () => {
  const moviesStack = [
    "React",
    "TypeScript",
    "Chakra UI",
    "TMDB API",
    "Zustand",
  ];
  const localStack = [
    "NextJS",
    "TypeScript",
    "Chakra UI",
    "MySQL",
    "NextAuth",
    "Cloudinary",
  ];
  const brickStack = ["HTML Canvas 5", "JavaScript"];
  const nittStack = [
    "React",
    "TypeScript",
    "Chakra UI",
    "MongoDb",
    "NextAuth",
    "NestJs",
  ];

  const { componentRef, isInView } = useObserve();
  return (
    <>
      <Heading
        id="project-hash"
        mb={"1.5rem"}
        textAlign={"center"}
        size={{ mdTo2xl: "4xl", mdDown: "3xl" }}
      >
        Projects
      </Heading>
      <Flex
        ref={componentRef}
        position={"relative"}
        top={100}
        mb={"3rem"}
        justifyContent={"center"}
        gap={"2rem"}
        alignItems={{ mdDown: "center" }}
        flexDirection={{ mdDown: "column" }}
        flexWrap={"wrap"}
        data-state={isInView ? "open" : "close"}
        _open={{
          animation: "up 1s ease-out",
          animationFillMode: "forwards",
        }}
      >
        <Box
          py={"1rem"}
          w={{ smDown: "85%", lgDown: "75%", lgTo2xl: "40%" }}
          borderRadius={"1rem"}
          border={{
            _dark: "1.5px solid #f3f3f3ff",
            _light: "1.5px solid #e3e3e3",
          }}
          _hover={{
            _dark: {
              transform: "scale(1.03)",
              border: "1.5px solid #b8b6b6ff",
            },
            _light: {
              transform: "scale(1.03)",
              border: "1.5px solid black",
            },
          }}
          transitionProperty={"transorm border"}
          transitionDuration={".3s"}
        >
          <Image border={"none"} src={movie} mb={"1.5rem"} />
          <Stack
            px={"1rem"}
            data-state={isInView ? "open" : "close"}
            opacity={0}
            _open={{
              animation: "appear 1s linear",
              animationDelay: ".3s",
              animationFillMode: "forwards",
            }}
          >
            <Text
              px={".5rem"}
              borderRadius={"2rem"}
              display={"inline"}
              alignSelf={"flex-start"}
              fontWeight={"bold"}
              fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
              border={{ _light: "1px solid black", _dark: "1px solid #e3e3e3" }}
            >
              Movie Recommendation Website
            </Text>
            <Heading fontSize={"2xl"} fontWeight={"bold"}>
              MovieXYZ
            </Heading>
            <Text>
              A movie recommendation site that provides you with the lastest
              movies and series update and also allows you filter by genre,
              search and fan rating.
            </Text>
            <Flex
              flexWrap={"wrap"}
              alignItems={"center"}
              gap={".4rem"}
              my={".3rem"}
            >
              {moviesStack.map((tech) => (
                <Text
                  opacity={{ _light: ".7" }}
                  color={{ _dark: "black" }}
                  fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
                  fontWeight={"semibold"}
                  bgColor={"#ebebebff"}
                  p={".2rem .7rem"}
                  borderRadius={"1rem"}
                >
                  {tech}
                </Text>
              ))}
            </Flex>
            <Flex gap={"1rem"} align={"center"} mt={"1rem"}>
              <a href="https://moviessxyz.netlify.app/" target="_blank">
                <IoLink size={"1.8rem"} />
              </a>
              <a href="https://github.com/Ololade-U/MovieXYZ" target="_blank">
                <VscGithubAlt size={"1.8rem"} />
              </a>
            </Flex>
          </Stack>
        </Box>
        <Box
          py={"1rem"}
          w={{ smDown: "85%", lgDown: "75%", lgTo2xl: "40%" }}
          borderRadius={"1rem"}
          border={{
            _dark: "1.5px solid #f3f3f3ff",
            _light: "1.5px solid #e3e3e3",
          }}
          _hover={{
            _dark: {
              transform: "scale(1.03)",
              border: "1.5px solid #b8b6b6ff",
            },
            _light: {
              transform: "scale(1.03)",
              border: "1.5px solid black",
            },
          }}
          transitionProperty={"transorm border"}
          transitionDuration={".3s"}
        >
          <Image border={"none"} src={local} mb={"1.5rem"} />
          <Stack
            px={"1rem"}
            data-state={isInView ? "open" : "close"}
            opacity={0}
            _open={{
              animation: "appear 1s linear",
              animationDelay: ".3s",
              animationFillMode: "forwards",
            }}
          >
            <Text
              px={".5rem"}
              borderRadius={"2rem"}
              display={"inline"}
              alignSelf={"flex-start"}
              fontWeight={"bold"}
              fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
              border={{ _light: "1px solid black", _dark: "1px solid #e3e3e3" }}
            >
              E-commerce Website
            </Text>
            <Heading fontSize={"2xl"} fontWeight={"bold"}>
              Fresh Harvest Hub
            </Heading>
            <Text>
              An e-commerce platform that connects local farmers with consumers
              eliminating third parties, providing fresh and organic produce
              directly from the farm to your doorstep.
            </Text>
            <Flex
              flexWrap={"wrap"}
              alignItems={"center"}
              gap={".4rem"}
              my={".3rem"}
            >
              {localStack.map((tech) => (
                <Text
                  opacity={{ _light: ".7" }}
                  color={{ _dark: "black" }}
                  fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
                  fontWeight={"semibold"}
                  bgColor={"#ebebebff"}
                  p={".2rem .7rem"}
                  borderRadius={"1rem"}
                >
                  {tech}
                </Text>
              ))}
            </Flex>
            <Flex gap={"1rem"} align={"center"} mt={"1rem"}>
              <a href="https://moviessxyz.netlify.app/" target="_blank">
                <IoLink size={"1.8rem"} />
              </a>
              <a href="https://github.com/Ololade-U/MovieXYZ" target="_blank">
                <VscGithubAlt size={"1.8rem"} />
              </a>
            </Flex>
          </Stack>
        </Box>
        <Box
          py={"1rem"}
          w={{ smDown: "85%", lgDown: "75%", lgTo2xl: "40%" }}
          borderRadius={"1rem"}
          border={{
            _dark: "1.5px solid #f3f3f3ff",
            _light: "1.5px solid #e3e3e3",
          }}
          _hover={{
            _dark: {
              transform: "scale(1.03)",
              border: "1.5px solid #b8b6b6ff",
            },
            _light: {
              transform: "scale(1.03)",
              border: "1.5px solid black",
            },
          }}
          transitionProperty={"transorm border"}
          transitionDuration={".3s"}
        >
          <Image border={"none"} src={brick} mb={"1.5rem"} />
          <Stack
            px={"1rem"}
            data-state={isInView ? "open" : "close"}
            opacity={0}
            _open={{
              animation: "appear 1s linear",
              animationDelay: ".3s",
              animationFillMode: "forwards",
            }}
          >
            <Text
              px={".5rem"}
              borderRadius={"2rem"}
              display={"inline"}
              alignSelf={"flex-start"}
              fontWeight={"bold"}
              fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
              border={{ _light: "1px solid black", _dark: "1px solid #e3e3e3" }}
            >
              Brick Breaker Game
            </Text>
            <Heading fontSize={"2xl"} fontWeight={"bold"}>
              Brick Breaker
            </Heading>
            <Text>Fun and games.</Text>
            <Flex
              flexWrap={"wrap"}
              alignItems={"center"}
              gap={".4rem"}
              my={".3rem"}
            >
              {brickStack.map((tech) => (
                <Text
                  opacity={{ _light: ".7" }}
                  color={{ _dark: "black" }}
                  fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
                  fontWeight={"semibold"}
                  bgColor={"#ebebebff"}
                  p={".2rem .7rem"}
                  borderRadius={"1rem"}
                >
                  {tech}
                </Text>
              ))}
            </Flex>
            <Flex gap={"1rem"} align={"center"} mt={"1rem"}>
              <a href="https://brick-breakerapp.netlify.app/" target="_blank">
                <IoLink size={"1.8rem"} />
              </a>
              <a
                href="https://github.com/Ololade-U/Brick-breaker"
                target="_blank"
              >
                <VscGithubAlt size={"1.8rem"} />
              </a>
            </Flex>
          </Stack>
        </Box>
      </Flex>
      <Heading
        mb={"1.5rem"}
        textAlign={"center"}
        size={{ mdTo2xl: "4xl", mdDown: "3xl" }}
      >
        Featured Projects
      </Heading>
      <Flex
        gap={"2rem"}
        justifyContent={"center"}
        alignItems={{ mdDown: "center" }}
        flexDirection={{ mdDown: "column" }}
        flexWrap={"wrap"}
        mb={"3rem"}
      >
        <Box
          py={"1rem"}
          w={{ smDown: "85%", lgDown: "75%", lgTo2xl: "40%" }}
          borderRadius={"1rem"}
          border={{
            _dark: "1.5px solid #f3f3f3ff",
            _light: "1.5px solid #e3e3e3",
          }}
          _hover={{
            _dark: {
              transform: "scale(1.03)",
              border: "1.5px solid #b8b6b6ff",
            },
            _light: {
              transform: "scale(1.03)",
              border: "1.5px solid black",
            },
          }}
          transitionProperty={"transorm border"}
          transitionDuration={".3s"}
        >
          <Image border={"none"} src={nitt} mb={"1.5rem"} />
          <Stack
            px={"1rem"}
            // opacity={0}
          >
            <Text
              px={".5rem"}
              borderRadius={"2rem"}
              display={"inline"}
              alignSelf={"flex-start"}
              fontWeight={"bold"}
              fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
              border={{ _light: "1px solid black", _dark: "1px solid #e3e3e3" }}
            >
              Metrics and Data Management
            </Text>
            <Heading fontSize={"2xl"} fontWeight={"bold"}>
              NITT
            </Heading>
            <Text>
              I featured as a frontend developer in the development of this
              metrics and data management platform for the National institute of
              Transport Technology (NITT).
            </Text>
            <Flex
              flexWrap={"wrap"}
              alignItems={"center"}
              gap={".4rem"}
              my={".3rem"}
            >
              {nittStack.map((tech) => (
                <Text
                  opacity={{ _light: ".7" }}
                  color={{ _dark: "black" }}
                  fontSize={{ smTo2xl: "sm", smDown: "x-small" }}
                  fontWeight={"semibold"}
                  bgColor={"#ebebebff"}
                  p={".2rem .7rem"}
                  borderRadius={"1rem"}
                >
                  {tech}
                </Text>
              ))}
            </Flex>
            <Flex gap={"1rem"} align={"center"} mt={"1rem"}>
              <a
                href="https://nitt.gov.ng/"
                target="_blank"
              >
                <IoLink size={"1.8rem"} />
              </a>
              <VscGithubAlt size={"1.8rem"} fill="#3b3b3b" />
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Projects;
