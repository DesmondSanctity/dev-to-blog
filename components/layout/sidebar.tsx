import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type LinkButtonProps = {
  children: ReactNode;
};

const LinkButton = ({ children }: LinkButtonProps) => {
  return (
    <Button
      _hover={{ color: "#323ebe", bg: "#e2e4e6" }}
      bg="transparent"
      width="14rem"
      padding="8px"
      fontWeight="normal"
      justifyContent="flex-start"
    >
      {children}
    </Button>
  );
};

function LoginCard() {
  return (
    <Box
      as="section"
      bg="#f9f9f9"
      borderRadius="md"
      borderBottom="1px solid #E2E4E6"
    >
      <VStack spacing={8}>
        <Text fontWeight="500" mb={5} mt={5}>
          DEV Community is a community of 803,838 amazing developers
        </Text>
        <Text fontWeight="200" mb={5}>
          We are a place where coders share, stay up-to-date and grow their
          careers.
        </Text>
        <Button
          variant="outline"
          color="#fff"
          borderRadius="4px"
          bg="#3b49df"
          _hover={{ bg: "#323ebe" }}
        >
          Create account
        </Button>
        <Text fontWeight="500" mb={5}>
          Login
        </Text>
      </VStack>
    </Box>
  );
}

const Links = () => {
  return (
    <>
      <LoginCard />
      <Box as="nav">
        <LinkButton>
          <Image src="/assets/images/sidebar/home.svg" mr="3" alt="home" />
          Home
        </LinkButton>
        <LinkButton>
          <Image
            src="/assets/images/sidebar/reading.svg"
            mr="3"
            alt="reading"
          />
          Reading List
        </LinkButton>
        <LinkButton>
          <Image
            src="/assets/images/sidebar/listing.svg"
            mr="3"
            alt="listing"
          />
          Listings
        </LinkButton>
        <LinkButton>
          <Image
            src="/assets/images/sidebar/podcast.svg"
            mr="3"
            alt="podcast"
          />
          Podcasts
        </LinkButton>
        <LinkButton>
          <Image src="/assets/images/sidebar/video.svg" mr="3" alt="video" />
          Videos
        </LinkButton>
        <LinkButton>
          <Image src="/assets/images/sidebar/tag.svg" mr="3" alt="tag" />
          Tags
        </LinkButton>
        <LinkButton>
          <Text fontWeight="normal" color="#4d5760" ml="2.3rem">
            More...
          </Text>
        </LinkButton>
      </Box>
    </>
  );
};

const TagList = ({ children }) => {
  return (
    <Box>
      {children &&
        children.map((item, idx) => <LinkButton key={idx}>#{item}</LinkButton>)}
    </Box>
  );
};

const Tags = () => {
  return (
    <Box mt="6">
      <Flex pl="2" py="4">
        <Heading as="h3" fontSize="1rem">
          My Tags
        </Heading>
        <Spacer />
        <Image src="/assets/images/settings.svg" alt="settings" />
      </Flex>
      <Box maxH="50vh" overflowY="auto">
        <TagList>
          {[
            "Nextjs",
            "react",
            "javascript",
            "ruby",
            "ruby on rails",
            "beginners",
            "typescript",
          ]}
        </TagList>
      </Box>
    </Box>
  );
};

const Sidebar = (props) => {
  return (
    <Box as="aside" {...props}>
      <Links />
      <Tags />
    </Box>
  );
};

export default Sidebar;
