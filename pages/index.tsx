import { Box, Center, Flex, Heading, HStack, Stack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Keyframes, Scroll } from "scrollex";
import styles from "../styles/Home.module.css";
import { useScrollValue } from "scrollex";
import { clamp } from "../utils";
import { useTransform } from "framer-motion";

const useSectionProgress = () => {
  return useScrollValue(({ position, section, container }) => {
    const sectionPosition = position - section.topAt("container-top");
    const sectionScrollableHeight = section.height - container.height;
    const progress = sectionPosition / sectionScrollableHeight;
    return clamp(progress, 0, 1);
  });
};

const Img = chakra(Image);
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
};

const Home: NextPage = () => {
  return (
    <ScrollContainer h="100vh">
      <ScrollSection h="100vh">
        <Center h="100%">
          <Stack pos="relative">
            <Box pos="relative" width="400px" height="400px">
              <Image
                layout="fill"
                src="/gradient-sm.webp"
                style={{
                  borderTopLeftRadius: "200px",
                  borderBottomRightRadius: "200px",
                }}
              />
              <Box pos="absolute" top="50%" transform="translateY(-50%)">
                <Heading ml={-40} size="3xl">
                  Avneesh
                </Heading>
                <Heading ml={-20} size="3xl">
                  Agarwal
                </Heading>
              </Box>
            </Box>

            <HStack>
              <Heading size="md">Web3</Heading>
              <Box flex={1} alignSelf="center" h="1px" bg="white" />
              <Heading size="md">Developer</Heading>
            </HStack>
          </Stack>
        </Center>
      </ScrollSection>
      <SectionHeading heading="ABOUT ME" />
      <ScrollSection h="300vh"></ScrollSection>
      <SectionHeading heading="PROJECTS" />
      <ScrollSection h="300vh"></ScrollSection>
    </ScrollContainer>
  );
};

const SectionHeading = ({ heading }: any) => {
  return (
    <ScrollSection h="400vh">
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

export default Home;
