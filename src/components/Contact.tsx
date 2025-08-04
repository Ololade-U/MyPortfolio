import {
  Box,
  Button,
  Field,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import type { Prop } from "./Landing";

const Contact = ({ color }: Prop) => {
  return (
    <>
      <Box bgColor={{_light : '#fbfbfbff'}}>
        <Heading
          size={{ mdTo2xl: "4xl", mdDown: "3xl" }}
          mb={"3rem"}
          textAlign={"center"}
        >
          Get In Touch
        </Heading>
        <Box
          px={"2rem"}
          display={"flex"}
          gap={"2rem"}
          flexDirection={{ mdDown: "column", mdTo2xl: "row" }}
          justifyContent={{ mdTo2xl: "center" }}
          mb={"2rem"}
        >
          <Stack gap={"1.3rem"} py={"1rem"} w={{ mdTo2xl: "35%" }}>
            <Heading size={"3xl"}>Let's Work Together</Heading>
            <Text fontSize={"lg"} p={{ mdDown: "0 2rem 0 0" }}>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a project in mind or just want to chat about
              frontend development, feel free to reach out.
            </Text>
            <Stack gap={".5rem"}>
              <Flex alignItems={"center"} gap={".6rem"}>
                <MdOutlineEmail size={"1.5rem"} />
                <Text>uthmanadebayo852@gmail.com</Text>
              </Flex>
              <Flex alignItems={"center"} gap={".6rem"}>
                <FaPhone size={"1.5rem"} />
                <Text>+234 906 8464 735</Text>
              </Flex>
              <Flex alignItems={"center"} gap={".6rem"}>
                <BiMessageRounded size={"1.5rem"} />
                <Text>09068464735</Text>
              </Flex>
              <Flex alignItems={"center"} gap={".6rem"}>
                <CiLocationOn size={"1.5rem"} />
                <Text>Lagos State, Nigeria</Text>
              </Flex>
            </Stack>
          </Stack>
          <Stack
            width={{ mdDown: "90%", mdTo2xl: "35%" }}
            borderRadius={"1rem"}
            p={"1.2rem 1.5rem"}
            border={"2px solid rgba(190, 190, 190, 1)"}
          >
            <Heading size={"3xl"} lineHeight={0.9}>
              Send a Message
            </Heading>
            <Text
              mb={"2rem"}
              fontSize={"sm"}
              lineHeight={0.9}
              color={{ _light: "rgba(47, 47, 47, 1)" }}
            >
              I'll get back to you as soon as possible
            </Text>
            <Field.Root>
              <Input
                color={color}
                pl={"1rem"}
                placeholder="Your name (optional)"
              />
            </Field.Root>
            <Field.Root>
              <Input color={color} pl={"1rem"} placeholder="Your Email" />
            </Field.Root>
            <Field.Root>
              <Textarea
                color={color}
                p={".5rem 1rem"}
                rows={5}
                placeholder="Your message"
              />
            </Field.Root>
            <Field.Root mt={".5rem"}>
              <Input
                type="submit"
                fontWeight={"bold"}
                value={"Send Message"}
                textAlign={"center"}
                color={"white"}
                bgColor={"black"}
                _hover={{
                  opacity: ".9",
                  transform: "scale(1.04)",
                }}
                transitionProperty={"transform, bgColor"}
                transitionDuration={".3s"}
                transitionTimingFunction={"linear"}
              />
            </Field.Root>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
