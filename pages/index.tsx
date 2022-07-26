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
import { motion, useTransform } from "framer-motion";
import InfiniteBanner from "../components/InfiniteBanner";
import TextReveal from "../components/TextReveal";
import { Button } from "@chakra-ui/button";
import gradientImg from "../public/gradient-sm.webp";
import profileImg from "../public/profile.png";
import stackOverflowImg from "../public/decentralized-stackoverflow.webp";
import { Input } from "@chakra-ui/react";
import SparkleIcon from "../components/SparkleIcon";

const MotionHStack = motion(HStack);

const ChakraInfiniteBanner = chakra(InfiniteBanner);
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
  profileImg: ({ section }) => ({
    [section.topAt("container-bottom")]: {
      scale: 1.15,
    },
    [section.bottomAt("container-top")]: {
      scale: 1,
    },
  }),
};

const Home: NextPage = () => {
  return (
    <ScrollContainer h="100vh">
      <ScrollSection h="100vh" borderBottom="sm">
        <Center h="100%">
          <Stack transform={{ base: "scale(0.75)", md: "none" }}>
            <Box pos="relative" width="24rem" height="24rem">
              <Image
                src={gradientImg}
                layout="fill"
                priority
                style={{
                  borderTopLeftRadius: "12rem",
                  borderBottomRightRadius: "12rem",
                }}
              />
              <Box
                w="44rem"
                pos="absolute"
                left="50%"
                top="50%"
                transform="translate(-50%, -50%)"
              >
                <Heading size="3xl">
                  <TextReveal delay={0.25} text="Kamila" />
                </Heading>
                <Heading size="3xl" textAlign="end">
                  <TextReveal text="Mendoza" delay={0.45} />
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
      <ProjectSection />
    </ScrollContainer>
  );
};

const SectionHeading = ({ heading }: any) => {
  return (
    <ScrollSection h="400vh" borderBottom="sm">
      <Flex h="100vh" alignItems="center" pos="sticky" top={0}>
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
        <Text size="md" mb="2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          tristique mattis tellus, quis porttitor lacus rhoncus eu. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Maecenas non libero vel lacus rutrum ultricies quis
          pretium lectus. Duis volutpat metus ut aliquam dapibus. Phasellus
          finibus iaculis urna quis porttitor. Maecenas fermentum tristique
          metus eu vulputate. Sed vel tortor non dolor molestie tempor et nec
          purus.
        </Text>
        <Text size="md" mb="2xl">
          Phasellus lobortis et mauris eget eleifend. Sed eget ullamcorper
          felis. Aliquam eu augue ut libero tincidunt efficitur. Proin et lectus
          eget arcu bibendum aliquet tristique eu dui. Aliquam erat volutpat.
          Mauris in felis massa. Nunc a eleifend mi, nec hendrerit risus.
          Curabitur eget feugiat erat. In nec cursus mi.
        </Text>
        <Text size="md" mb="2xl">
          Suspendisse et ex maximus, elementum felis a, convallis elit. Sed
          placerat turpis ut pretium placerat. Praesent pharetra arcu eget nunc
          egestas, sed fringilla massa tristique. Donec et enim eget sapien
          fringilla ultrices. Sed porttitor, metus vel dignissim luctus, nulla
          massa porta mi, non aliquam lacus eros sagittis neque. Maecenas
          scelerisque arcu vitae elit dignissim, vitae mollis ex consequat.
          Suspendisse vitae malesuada sapien. Curabitur rutrum, neque at gravida
          sodales, lorem metus lacinia turpis, vel laoreet est libero non
          tortor. Phasellus fermentum egestas commodo.
        </Text>
      </Box>
      <Box h="100vh" pos="sticky" top={0} overflow="hidden">
        <ChakraInfiniteBanner
          loopDuration={12000}
          direction="y"
          borderLeft="sm"
          borderRight="sm"
          minW="max-content"
        >
          <Heading
            size="lg"
            whiteSpace="nowrap"
            textTransform="lowercase"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            TypeScript <SparkleIcon /> Rust <SparkleIcon /> Solidity{" "}
            <SparkleIcon /> Solana <SparkleIcon /> Polygon &nbsp;
          </Heading>
        </ChakraInfiniteBanner>
      </Box>
      <Box
        flex={1}
        pos="sticky"
        top={0}
        h="100vh"
        p="3xl"
        display={{ base: "none", md: "block" }}
      >
        <Center pos="absolute" inset={0}>
          <Stack>
            <Box
              w="24rem"
              h="26rem"
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
              }}
              overflow="hidden"
            >
              <ScrollItem
                keyframes={keyframes.profileImg}
                h="100%"
                pos="relative"
              >
                <Image
                  src={profileImg}
                  layout="fill"
                  priority
                  // style={{
                  //   borderTopLeftRadius: "50%",
                  //   borderTopRightRadius: "50%",
                  // }}
                  objectFit="cover"
                />
              </ScrollItem>
            </Box>
            <Heading textAlign="center" size="lg">
              Kamila Mendoza
            </Heading>
          </Stack>
        </Center>
      </Box>
    </Flex>
  );
};

const ProjectSection = ({ heading }: any) => {
  return (
    <ScrollSection borderBottom="sm">
      <Box h="100vh" pos="relative">
        <Image
          layout="fill"
          priority
          src={stackOverflowImg}
          style={{ filter: "saturation(0)" }}
          objectFit="cover"
        />
      </Box>
      <Flex borderBottom="sm" h="12">
        <Center px="md" h="100%" borderRight="sm">
          <Heading size="md" fontWeight="bold">
            Built With
          </Heading>
        </Center>
        <Center flex={1} overflow="hidden">
          <ChakraInfiniteBanner
            minW="max-content"
            w="100%"
            loopDuration={12000}
            whiteSpace="nowrap"
          >
            <Heading size="md" mr="3ch" textTransform="lowercase">
              NextJS <SparkleIcon /> TypeScript <SparkleIcon /> Solidity{" "}
              <SparkleIcon /> Ethereum
            </Heading>
          </ChakraInfiniteBanner>
        </Center>
        <Button h="100%" borderY="none" borderRight="none">
          View Project
        </Button>
      </Flex>
      <Box py="4xl" px="2xl">
        <Box maxW="4xl" m="0 auto">
          <Heading size="2xl" mb="2xl">
            Decentralized Stack Overflow
          </Heading>
          <Text size="md" mb="2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tristique mattis tellus, quis porttitor lacus rhoncus eu.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Maecenas non libero vel lacus rutrum
            ultricies quis pretium lectus. Duis volutpat metus ut aliquam
            dapibus. Phasellus finibus iaculis urna quis porttitor. Maecenas
            fermentum tristique metus eu vulputate. Sed vel tortor non dolor
            molestie tempor et nec purus.
          </Text>
          <Text size="md" mb="2xl">
            Phasellus lobortis et mauris eget eleifend. Sed eget ullamcorper
            felis. Aliquam eu augue ut libero tincidunt efficitur. Proin et
            lectus eget arcu bibendum aliquet tristique eu dui. Aliquam erat
            volutpat. Mauris in felis massa. Nunc a eleifend mi, nec hendrerit
            risus. Curabitur eget feugiat erat. In nec cursus mi.
          </Text>
        </Box>
      </Box>
    </ScrollSection>
  );
};

export default Home;
