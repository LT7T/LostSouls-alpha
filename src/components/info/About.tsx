import {
  Box,
  Center,
  HStack,
  Icon,
  Image,
  Link,
  Text,
  useColorMode,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import GitHubButton from "react-github-btn";
import { FaCrown, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

export const GITHUB_URL = "https://github.com/LT7T/LostSouls-alpha";

export const About: React.FC = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack mt="5">
      <Box
        px="4"
        py="2"
        mb="3"
        rounded="md"
        fontStyle="italic"
        fontWeight="semibold"
        alignItems="center"
        bgGradient="linear(45deg,#9945ff,#19fb9d)"
      >
      </Box>

      <Image w="300px" src="/logo512.png" alt="Logo" />
      <Box h="5" />

      <Box p="5" boxShadow="dark-lg" rounded="lg">
        <Center mb="3">
          <Link href={GITHUB_URL} isExternal as="kbd" fontSize="md">
            <Icon as={FaGithub} mr="1" />
            labeleven-dev/bettercallsol
          </Link>
        </Center>

        <Wrap spacingX="1" spacingY="-1" justify="center" align="center">
          <WrapItem>
            <GitHubButton
              href="https://github.com/LT7T/LostSouls-alpha"
              data-icon="octicon-star"
              data-color-scheme={colorMode}
              data-show-count="true"
              aria-label="Star LT7T/LostSouls-alpha on GitHub"
            >
              Star
            </GitHubButton>
          </WrapItem>

          <WrapItem>
            <GitHubButton
              href="https://github.com/LT7T/LostSouls-alpha/discussions"
              data-icon="octicon-comment-discussion"
              data-color-scheme={colorMode}
              aria-label="Discuss LT7T/LostSouls-alpha on GitHub"
            >
              Discuss
            </GitHubButton>
          </WrapItem>

          <WrapItem>
            <GitHubButton
              href="https://github.com/LT7T/LostSouls-alpha/issues/new?template=bug.yml&labels=bug"
              data-icon="octicon-issue-opened"
              data-color-scheme={colorMode}
              aria-label="Issue LT7T/LostSouls-alpha on GitHub"
            >
              Bug Report
            </GitHubButton>
          </WrapItem>

          <WrapItem>
            <GitHubButton
              href="https://github.com/LT7T/LostSouls-alpha/issues/new?template=feature_request.md&labels=enhancement"
              data-icon="octicon-issue-opened"
              data-color-scheme={colorMode}
              aria-label="Issue LT7T/LostSouls-alpha on GitHub"
            >
              Feature Request
            </GitHubButton>
          </WrapItem>

          <WrapItem>
            <GitHubButton
              href="https://github.com/LT7T/LostSouls-alpha/security/policy"
              data-icon="octicon-issue-opened"
              data-color-scheme={colorMode}
              aria-label="Issue LT7T/LostSouls-alpha on GitHub"
            >
              Security Policy
            </GitHubButton>
          </WrapItem>
        </Wrap>
      </Box>

      <Box h="5" />

      <HStack>
    
        <Link href="https://github.com/LT7T" isExternal>
          <Icon mr="1" as={FaGithub} />
        </Link>
      </HStack>

      <Text fontSize="md" pt="5">
        Made with ❤ in 🇦🇺
      </Text>
    </VStack>
  );
};
