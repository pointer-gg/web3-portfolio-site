import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import Image from "next/image";
import { Scroll } from "scrollex";
import Ticker from "../Ticker";
import InlineList from "../InlineList";
import { portfolio } from "../../data";

const ChakraTicker = chakra(Ticker);
const ScrollSection = chakra(Scroll.Section);

const AboutSection = () => {
  return (
    <ScrollSection id="about-section" borderBottom="sm">
      <Flex>
        <Box p="3xl" flex={1}>
          <Text whiteSpace="pre-wrap" size="md">
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
    </ScrollSection>
  );
};

export default AboutSection;
