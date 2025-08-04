import { Box, Heading, Stack, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      bgColor={{_light : '#fcfcfcff'}}
      m={'2rem 0'}
      p={'3rem 0'}
      color={{_light :'#535353ff'}}
    >
      <Stack align={'center'} w={{mdDown:'80%', mdTo2xl:'60%'}} gap={'2rem'}>
        <Heading size={'4xl'} fontWeight={'bold'}>About Me</Heading>
        <Text fontSize={{mdDown: 'lg', mdTo2xl: 'xl'}} >
          I'm a frontend developer with a keen eye for detail and an obsession
          with building user-friendly, performant, and accessible websites. I
          specialize in HTML, CSS, Tailwind CSS, JavaScript, and TypeScript,
          working primarily with React and Next.js.
        </Text>
        <Text fontSize={{mdDown: 'lg', mdTo2xl: 'xl'}}>
          I'm a passionate frontend developer who loves bringing ideas to life through code and
          translate business requirements into reliable and maintainable
          interfaces. My experience spans from working with startups to building
          full-stack platforms that solve real-world problems. Currently
          expanding my skills into backend development to become a more
          well-rounded developer.
        </Text>
        <Text fontSize={{mdDown: 'lg', mdTo2xl: 'xl'}}>
          When I'm not writing code i enjoy exploring emerging technologies, contributing to open-source communities. Driven by curiosity and collaboration, i believe continuous learning is the key to crafting exceptional digital experiences.
        </Text>
      </Stack>
    </Box>
  );
};

export default About;
