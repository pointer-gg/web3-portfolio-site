import { Box, Center, Heading, HStack, Stack } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import Image from "next/image";
import { Scroll } from "scrollex";
import { motion, useSpring, useTransform } from "framer-motion";
import TextReveal from "../TextReveal";
import gradientImg from "../../public/gradient-sm.webp";
import { portfolio } from "../../data";
import { useScrollClock } from "../../hooks";
import ColorModeButton from "../ColorModeButton";

const MotionHStack = motion(HStack);
const MotionBox = motion(Box);
const ScrollSection = chakra(Scroll.Section);

const GradientImg = () => {
  const clock = useScrollClock({ scrollAccelerationFactor: 20 });
  const rotate = useTransform(clock, (time) => time / 100);
  return (
    <Box
      pos="relative"
      h="100%"
      w="100%"
      borderTopLeftRadius="12rem"
      borderBottomRightRadius="12rem"
      overflow="hidden"
      transform="translateZ(0)"
    >
      <MotionBox
        h="100%"
        w="100%"
        style={{
          rotate: rotate,
          scale: 1.45,
        }}
      >
        <Image src={gradientImg} layout="fill" priority />
      </MotionBox>
    </Box>
  );
};

const IntroSection = () => {
  return (
    <ScrollSection id="intro-section" h="h-screen" borderBottom="sm">
      <Box pos="absolute" top="md" right="md">
        <ColorModeButton />
      </Box>
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
            <Box flex={1} alignSelf="center" h="1px" bg="border-contrast-xl" />
            <Heading size="md">Developer</Heading>
          </MotionHStack>
        </Stack>
      </Center>
    </ScrollSection>
  );
};

export default IntroSection;
