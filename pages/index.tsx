import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Keyframes, Scroll } from "scrollex";
import { motion, useSpring, useTransform } from "framer-motion";
import Ticker from "../components/Ticker";
import TextReveal from "../components/TextReveal";
import InlineList from "../components/InlineList";
import { Button } from "@chakra-ui/button";
import gradientImg from "../public/gradient-sm.webp";
import { portfolio } from "../data";
import { useScrollClock } from "../hooks";

const MotionHStack = motion(HStack);
const MotionBox = motion(Box);

const ChakraTicker = chakra(Ticker);
const ScrollContainer = chakra(Scroll.Container);
const ScrollSection = chakra(Scroll.Section);
const ScrollItem = chakra(Scroll.Item);

const keyframes: Record<string, Keyframes> = {
  sectionHeading: ({ section, container }) => ({
    [section.topAt("container-top")]: {
      translateX: "0%",
    },
    [section.bottomAt("container-bottom") - container.height / 3]: {
      translateX: "-100%",
    },
  }),
  gradientImg: ({ section, container }) => ({
    [section.topAt("container-top")]: {
      rotateZ: "0deg",
    },
    [section.bottomAt("container-top")]: {
      rotateZ: "60deg",
    },
  }),
};

const GradientImg = () => {
  const clock = useScrollClock({ scrollAccelerationFactor: 20 });
  const rotate = useTransform(clock, (time) => time / 100);
  const spring = useSpring(rotate, {
    mass: 0.01,
    stiffness: 100,
    damping: 7.5,
  });
  return (
    <Box
      pos="relative"
      h="100%"
      w="100%"
      borderTopLeftRadius="12rem"
      borderBottomRightRadius="12rem"
      overflow="hidden"
    >
      <MotionBox
        h="100%"
        w="100%"
        style={{
          rotate: spring,
          scale: 1.45,
        }}
      >
        <Image src={gradientImg} layout="fill" priority />
      </MotionBox>
    </Box>
  );
};

const Home: NextPage = () => {
  return (
    <ScrollContainer h="100vh">
      <ScrollSection h="h-screen" borderBottom="sm">
        <Center h="100%">
          <Stack transform={{ base: "scale(0.75)", md: "none" }}>
            <Box pos="relative" width="24rem" height="24rem">
              <GradientImg />
              <Box
                w="44rem"
                pos="absolute"
                left="50%"
                top="50%"
                transform="translate(-50%, -50%)"
              >
                <Heading size="3xl">
                  <TextReveal text={portfolio.about.firstName} delay={0.25} />
                </Heading>
                <Heading size="3xl" textAlign="end">
                  <TextReveal text={portfolio.about.lastName} delay={0.45} />
                </Heading>
              </Box>
            </Box>

            <MotionHStack
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Heading size="md">Web3</Heading>
              <Box
                flex={1}
                alignSelf="center"
                h="1px"
                bg="border-contrast-xl"
              />
              <Heading size="md">Developer</Heading>
            </MotionHStack>
          </Stack>
        </Center>
      </ScrollSection>
      <SectionHeading heading="ABOUT ME" />
      <ScrollSection borderBottom="sm">
        <AboutContent />
      </ScrollSection>
      <SectionHeading heading="PROJECTS" />
      {portfolio.projects.map((project) => (
        <ProjectSection key={project.name} project={project} />
      ))}
    </ScrollContainer>
  );
};

const SectionHeading = ({ heading }: any) => {
  return (
    <ScrollSection h="h-screen-4" borderBottom="sm">
      <Flex h="h-screen" alignItems="center" pos="sticky" top={0}>
        <ScrollItem
          keyframes={keyframes.sectionHeading}
          pos="relative"
          left="50%"
        >
          <Heading size="6xl" whiteSpace="nowrap">
            {heading}
          </Heading>
        </ScrollItem>
      </Flex>
    </ScrollSection>
  );
};

const AboutContent = () => {
  return (
    <Flex>
      <Box p="3xl" flex={1}>
        <Text whiteSpace="pre-wrap" size="md" mb="2xl">
          {portfolio.about.bio}
        </Text>
      </Box>
      <Box h="h-screen" pos="sticky" top={0} overflow="hidden">
        <ChakraTicker
          loopDuration={12000}
          direction="y"
          borderLeft="sm"
          borderRight="sm"
        >
          <Heading
            size="lg"
            whiteSpace="nowrap"
            textTransform="lowercase"
            w={14}
            style={{ writingMode: "vertical-rl" }}
          >
            <InlineList items={portfolio.about.skills} />
          </Heading>
        </ChakraTicker>
      </Box>
      <Box
        flex={1}
        pos="sticky"
        top={0}
        h="h-screen"
        p="3xl"
        display={{ base: "none", md: "block" }}
      >
        <Center pos="absolute" inset={0}>
          <Stack>
            <Box
              pos="relative"
              w="24rem"
              h="26rem"
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
              }}
              overflow="hidden"
            >
              <Image
                src={portfolio.about.img}
                layout="fill"
                priority
                objectFit="cover"
              />
            </Box>
            <Heading textAlign="center" size="lg">
              {portfolio.about.firstName} {portfolio.about.lastName}
            </Heading>
          </Stack>
        </Center>
      </Box>
    </Flex>
  );
};

const ProjectSection = ({ project }: any) => {
  return (
    <ScrollSection borderBottom="sm">
      <Box h="h-screen" pos="relative">
        <Image layout="fill" priority src={project.img} objectFit="cover" />
      </Box>
      <Flex borderBottom="sm" h="12">
        <Center px="md" h="100%" borderRight="sm">
          <Heading size="md" fontWeight="bold">
            Built With
          </Heading>
        </Center>
        <Center flex={1} overflow="hidden">
          <ChakraTicker
            minW="max-content"
            w="100%"
            loopDuration={12000}
            whiteSpace="nowrap"
          >
            <Heading size="md" mr="3ch" textTransform="lowercase">
              <InlineList items={project.tools} />
            </Heading>
          </ChakraTicker>
        </Center>
        <Button h="100%" borderY="none" borderRight="none">
          View Project
        </Button>
      </Flex>
      <Box py="4xl" px="2xl">
        <Box maxW="4xl" m="0 auto">
          <Heading size="2xl" mb="2xl">
            {project.name}
          </Heading>
          <Text whiteSpace="pre-wrap" size="md" mb="2xl">
            {project.description}
          </Text>
        </Box>
      </Box>
    </ScrollSection>
  );
};

export default Home;
