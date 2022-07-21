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
import styles from "../styles/Home.module.css";
import { useScrollValue } from "scrollex";
import { clamp } from "../utils";
import { useTransform } from "framer-motion";
import InfiniteBanner from "../components/InfiniteBanner";
import { useScrollClock } from "../hooks";

const useSectionProgress = () => {
  return useScrollValue(({ position, section, container }) => {
    const sectionPosition = position - section.topAt("container-top");
    const sectionScrollableHeight = section.height - container.height;
    const progress = sectionPosition / sectionScrollableHeight;
    return clamp(progress, 0, 1);
  });
};

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
              <Heading size="md" fontFamily="heading">
                Web3
              </Heading>
              <Box flex={1} alignSelf="center" h="1px" bg="white" />
              <Heading size="md" fontFamily="heading">
                Developer
              </Heading>
            </HStack>
          </Stack>
        </Center>
      </ScrollSection>
      <SectionHeading heading="ABOUT ME" />
      <ScrollSection>
        <AboutContent />
      </ScrollSection>
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

const AboutContent = () => {
  const clock = useScrollClock({ scrollAccelerationFactor: 15 });

  return (
    <SimpleGrid columns={2}>
      <Box p="3xl" mr="6">
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
      <Box pos="sticky" top={0} h="100vh" overflowY="clip">
        <ChakraInfiniteBanner
          clock={clock}
          loopDuration={10000}
          w="fit-content"
          pos="absolute"
          top={0}
          left={6}
          transform="rotate(90deg)"
          transformOrigin="top left"
          bg="white"
          color="black"
        >
          <Heading size="lg" whiteSpace="nowrap" mr="1ch">
            TypeScript - Rust - Solidity - Solana - Polygon -
          </Heading>
        </ChakraInfiniteBanner>
        <Center pos="absolute" inset={0}>
          <Stack>
            <Box w="400px" h="420px" pos="relative">
              <Image
                src="/profile.png"
                layout="fill"
                style={{
                  borderTopLeftRadius: "50%",
                  borderTopRightRadius: "50%",
                }}
                objectFit="cover"
              />
            </Box>
            <Heading size="lg">Avneesh Agarwal</Heading>
          </Stack>
        </Center>
      </Box>
    </SimpleGrid>
  );
};

export default Home;
