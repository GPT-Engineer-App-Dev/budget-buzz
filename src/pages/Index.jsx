import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box bg="gray.800" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">
            Financial Times
          </Heading>
          <HStack spacing={8}>
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Home
            </Link>
            <Link as={RouterLink} to="/world" _hover={{ textDecoration: "none", color: "gray.400" }}>
              World
            </Link>
            <Link as={RouterLink} to="/business" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Business
            </Link>
            <Link as={RouterLink} to="/markets" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Markets
            </Link>
            <Link as={RouterLink} to="/opinion" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Opinion
            </Link>
            <Link as={RouterLink} to="/tech" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Tech
            </Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={8} px={4}>
        <Box flex="3" mr={{ md: 8 }}>
          {/* Featured Article */}
          <Box mb={8}>
            <Heading as="h2" size="xl" mb={4}>
              Featured Article
            </Heading>
            <Text fontSize="lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>

          {/* Recent Articles */}
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Recent Article 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Recent Article 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Recent Article 3
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          {/* Trending Topics */}
          <Box mb={8}>
            <Heading as="h3" size="lg" mb={4}>
              Trending Topics
            </Heading>
            <VStack spacing={4} align="stretch">
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>
                Trending Topic 1
              </Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>
                Trending Topic 2
              </Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>
                Trending Topic 3
              </Link>
            </VStack>
          </Box>

          {/* Advertisements */}
          <Box>
            <Heading as="h3" size="lg" mb={4}>
              Advertisements
            </Heading>
            <Box bg="gray.200" p={4} textAlign="center">
              Ad Space 1
            </Box>
            <Box bg="gray.200" p={4} textAlign="center" mt={4}>
              Ad Space 2
            </Box>
          </Box>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <HStack spacing={8}>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>
              About Us
            </Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Contact
            </Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Privacy Policy
            </Link>
            <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>
              Terms of Service
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;