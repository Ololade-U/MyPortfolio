import { Box, Flex, Heading, Separator, Stack, Text } from "@chakra-ui/react";
import { useObserve } from "./hooks/Observe";

const Experience = () => {
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
          m={{ mdTo2xl: "7rem 0 4rem 0" }}
          textAlign={"center"}
          data-state={isInView ? "open" : "close"}
          opacity={0}
          _open={{
            animation: "appear 1s linear",
            animationDelay: ".3s",
            animationFillMode: "forwards",
          }}
        >
          Experience
        </Heading>
        <Box
          data-state={isInView ? "open" : "close"}
          opacity={0}
          _open={{
            animation: "appear 1s linear",
            animationDelay: ".3s",
            animationFillMode: "forwards",
          }}
          display={"flex"}
          p={"0 0 0 2.5rem"}
          mb={"3rem"}
          hideFrom={"md"}
        >
          <Separator orientation={"vertical"} variant={"solid"} size={"lg"} />
          <Stack px={"2rem"}>
            <Flex w={"100%"} direction={"column"} gap={"2rem"} my={"2rem"}>
              <Box>
                <Heading color={{ _light: "blue" }} fontSize={"2xl"}>
                  Aptech Education
                </Heading>
                <Separator w={"100%"} />
                <Heading fontSize={"lg"} color={"rgba(125, 124, 124, 1)"}>
                  Faculty /Lecturer
                </Heading>
                <Text color={"rgba(125, 124, 124, 1)"}>
                  Aug 2024 - March 2025
                </Text>
              </Box>
              <Box>
                Aptech Education is a multinational education-based organization
                that provides expert IT training and real-world skills to
                students accross the globe. Delivered Python, html, css and
                react lectures to student
              </Box>
            </Flex>
            <Flex
              data-state={isInView ? "open" : "close"}
              opacity={0}
              _open={{
                animation: "appear 1s linear",
                animationDelay: ".8s",
                animationFillMode: "forwards",
              }}
              w={"100%"}
              direction={"column"}
              gap={"2rem"}
              my={"2rem"}
            >
              <Box>
                <Heading color={{ _light: "blue" }} fontSize={"2xl"}>
                  Scutigen
                </Heading>
                <Separator w={"100%"} />
                <Heading fontSize={"lg"} color={"rgba(125, 124, 124, 1)"}>
                  Frontend Dev Intern
                </Heading>
                <Text color={"rgba(125, 124, 124, 1)"}>
                  Jan 2024 - Sep 2024
                </Text>
              </Box>
              <Box>
                An Innovative Tech community that inspires and develops aspiring
                developers giving tham platform and experience required via
                working hand in hand with top developers bring tech dreams to
                life. Learned to integrate real API endpoints, manage component
                state, and transform figma into production-ready UIs.
              </Box>
            </Flex>
            <Flex
              data-state={isInView ? "open" : "close"}
              opacity={0}
              _open={{
                animation: "appear 1s linear",
                animationDelay: "1s",
                animationFillMode: "forwards",
              }}
              w={"100%"}
              direction={"column"}
              gap={"2rem"}
              my={"2rem"}
            >
              <Box>
                <Heading color={{ _light: "blue" }} fontSize={"2xl"}>
                  NIIT
                </Heading>
                <Separator w={"100%"} />
                <Heading fontSize={"lg"} color={"rgba(125, 124, 124, 1)"}>
                  Intern Lecturer
                </Heading>
                <Text color={"rgba(125, 124, 124, 1)"}>
                  June 2023 - Dec 2023
                </Text>
              </Box>
              <Box>
                The National Institute of Information Technology is
                multinational education-oriented organization focus on
                inforamtion and computer technology where i served as an
                assistant lecturer delivering html, css and JavaScript lectures
                to students
              </Box>
            </Flex>
          </Stack>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          hideBelow={"md"}
          mb={"3rem"}
          position={"relative"}
          top={100}
          data-state={isInView ? "open" : "close"}
          _open={{
            animation: "up 1s ease-out",
            animationFillMode: "forwards",
          }}
        >
          <Stack
            w={"50%"}
            textAlign={"right"}
            justifyContent={"space-between"}
            pt={"2rem"}
            px={{ lgTo2xl: "10rem 2rem", lgDown: "6rem 2rem" }}
            data-state={isInView ? "open" : "close"}
            opacity={0}
            _open={{
              animation: "appear 1s linear",
              animationDelay: ".3s",
              animationFillMode: "forwards",
            }}
          >
            <Box>
              <Heading color={{ _light: "blue" }} fontSize={"2xl"}>
                Aptech Education
              </Heading>
              <Separator w={"100%"} />
              <Heading fontSize={"lg"} color={"rgba(125, 124, 124, 1)"}>
                Faculty /Lecturer
              </Heading>
              <Text color={"rgba(125, 124, 124, 1)"}>
                Aug 2024 - March 2025
              </Text>
            </Box>
            <Box pb={"1rem"}>
              <Heading color={{ _light: "blue" }} fontSize={"2xl"}>
                Scutigen
              </Heading>
              <Separator w={"100%"} />
              <Heading fontSize={"lg"} color={"rgba(125, 124, 124, 1)"}>
                Frontend Dev Intern
              </Heading>
              <Text color={"rgba(125, 124, 124, 1)"}>Jan 2024 - Sep 2024</Text>
            </Box>
            <Box pb={{ lgTo2xl: "1rem", lgDown: "3rem" }}>
              <Heading color={{ _light: "blue" }} fontSize={"2xl"}>
                NIIT
              </Heading>
              <Separator w={"100%"} />
              <Heading fontSize={"lg"} color={"rgba(125, 124, 124, 1)"}>
                Intern Lecturer
              </Heading>
              <Text color={"rgba(125, 124, 124, 1)"}>June 2023 - Dec 2023</Text>
            </Box>
          </Stack>
          <Separator orientation={"vertical"} size={"lg"} />
          <Stack
            data-state={isInView ? "open" : "close"}
            opacity={0}
            _open={{
              animation: "appear 1s linear",
              animationDelay: ".3s",
              animationFillMode: "forwards",
            }}
            w={"50%"}
            gap={{ xlTo2xl: "5rem", xlDown: "3rem" }}
            pt={"1rem"}
            px={{ lgTo2xl: "2rem 10rem", lgDown: "2rem 6rem" }}
          >
            <Box>
              Aptech Education is a multinational education-based organization
              that provides expert IT training and real-world skills to students
              accross the globe. Delivered Python, html, css and react lectures
              to student
            </Box>
            <Box>
              An Innovative Tech community that inspires and develops aspiring
              developers giving tham platform and experience required via
              working hand in hand with top developers bring tech dreams to
              life. Learned to integrate real API endpoints, manage component
              state, and transform figma into production-ready UIs.
            </Box>
            <Box>
              The National Institute of Information Technology is multinational
              education-oriented organization focus on inforamtion and computer
              technology where i served as an assistant lecturer delivering
              html, css and JavaScript lectures to students
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Experience;
