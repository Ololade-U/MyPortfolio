import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import movie from "../assets/MovieXYZ - Google Chrome 8_20_2025 11_47_13 AM.png";
import { IoLink } from "react-icons/io5";
import { VscGithubAlt } from "react-icons/vsc";
import { useObserve } from "./hooks/Observe";

const Projects = () => {
  const { componentRef, isInView } = useObserve();
  return (
    <>
      <Heading id="project-hash" textAlign={"center"} size={{ mdTo2xl: "4xl", mdDown: "3xl" }}>
        Projects
      </Heading>
      <Flex
        ref={componentRef}
        position={"relative"}
        top={100}
        my={"1.5rem"}
        justifyContent={"center"}
        alignItems={{mdDown : 'center'}}
        flexDirection={{ mdDown: "column" }}
        data-state={isInView ? "open" : "close"}
        _open={{
          animation: "up 1s ease-out",
          animationFillMode: "forwards",
        }}
      >
        <Box
          py={"1rem"}
          w={{ smDown : '85%', lgDown: "75%", lgTo2xl: "40%" }}
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
              fontSize={{smTo2xl : "sm", smDown : 'x-small'}}
              border={{_light : "1px solid black", _dark : '1px solid #e3e3e3'}}
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
            <Flex flexWrap={'wrap'} alignItems={'center'} gap={'.4rem'} my={".3rem"}>
              <Text
                opacity={{_light : ".7"}}
                color={{_dark:'black'}}
                fontSize={{smTo2xl : "sm", smDown : 'x-small'}}
                fontWeight={"bold"}
                bgColor={"#ebebebff"}
                p={".2rem .7rem"}
                borderRadius={"1rem"}
              >
                React
              </Text>
              <Text
                opacity={{_light : ".7"}}
                color={{_dark:'black'}}
                fontSize={{smTo2xl : "sm", smDown : 'x-small'}}
                fontWeight={"bold"}
                bgColor={"#ebebebff"}
                p={".2rem .7rem"}
                borderRadius={"1rem"}
              >
                Typescript
              </Text>
              <Text
              color={{_dark:'black'}}
                opacity={{_light : ".7"}}
                fontSize={{smTo2xl : "sm", smDown : 'x-small'}}
                fontWeight={"bold"}
                bgColor={"#ebebebff"}
                p={".2rem .7rem"}
                borderRadius={"1rem"}
              >
                Chakra UI
              </Text>
              <Text
                opacity={{_light : ".7"}}
                color={{_dark:'black'}}
                fontSize={{smTo2xl : "sm", smDown : 'x-small'}}
                fontWeight={"bold"}
                bgColor={"#ebebebff"}
                p={".2rem .7rem"}
                borderRadius={"1rem"}
              >
                TMDB API
              </Text>
              <Text
                opacity={{_light : ".7"}}
                color={{_dark:'black'}}
                fontSize={{smTo2xl : "sm", smDown : 'x-small'}}
                fontWeight={"bold"}
                bgColor={"#ebebebff"}
                p={".2rem .7rem"}
                borderRadius={"1rem"}
              >
                Zustand
              </Text>
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
      </Flex>
    </>
  );
};

export default Projects;
