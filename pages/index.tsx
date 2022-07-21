import { Box, Center, Heading } from "@chakra-ui/layout";
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

const ScrollContainer = chakra(Scroll.Container);
const ScrollSection = chakra(Scroll.Section);
const ScrollItem = chakra(Scroll.Item);

const keyframes: Record<string, Keyframes> = {
  background: ({ section }) => ({
    [section.topAt("container-top")]: {
      translateZ: 0,
    },
    [section.bottomAt("container-top")]: {
      translateZ: 500,
    },
  }),
  heading: ({ section }) => ({
    [section.topAt("container-top")]: {
      translateZ: 0,
    },
    [section.bottomAt("container-top")]: {
      translateZ: 1100,
    },
  }),
};

const Home: NextPage = () => {
  return (
    <ScrollContainer h="100vh">
      <ScrollSection h="600vh">
        <IntroSection />
      </ScrollSection>
      <ScrollSection
        pos="relative"
        h="100vh"
        zIndex={1}
        bg="blackAlpha.900"
        borderTopRightRadius="5rem"
      >
        <Center h="100%">
          <Box
            pos="relative"
            width="60vw"
            height="40vw"
            rounded="lg"
            overflow="hidden"
          >
            <Image layout="fill" src="/project-1.png" objectFit="cover" />
            <Heading
              fontSize="6rem"
              pos="absolute"
              bottom={0}
              textAlign="center"
              w="100%"
            >
              Scrollex
            </Heading>
          </Box>
        </Center>
      </ScrollSection>
    </ScrollContainer>
  );
};

const IntroSection = () => {
  // const sectionProgress = useSectionProgress();
  // const filter = useTransform(sectionProgress, (progress) => {
  //   const blur = (progress || 0) * 50;
  //   return `blur(${blur}px)`;
  // });

  return (
    <>
      <ScrollItem
        pos="fixed"
        inset={0}
        h="100%"
        w="100%"
        bg="url(/stellar-death.jpg)"
        bgSize="cover"
        bgPosition="center"
        zIndex={-1}
        style={{
          transformPerspective: 1000,
          // filter,
          // perspectiveOrigin: "center bottom",
        }}
        keyframes={keyframes.background}
      />
      <Center pos="sticky" top="0" h="100vh">
        <ScrollItem
          keyframes={keyframes.heading}
          style={{
            transformPerspective: 1000,
          }}
        >
          <Heading fontSize="8rem" fontWeight="black">
            Avneesh
          </Heading>
          <Heading fontSize="4rem" fontWeight="medium">
            Web3 Developer
          </Heading>
        </ScrollItem>
      </Center>
    </>
  );
};

export default Home;
