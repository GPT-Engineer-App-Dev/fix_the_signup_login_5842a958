import { Box, FormControl, FormLabel, Input, Button, VStack, Link } from '@chakra-ui/react';

const Login = () => {
  return (
    <Box>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <VStack spacing={6} my={8}>
        <Button size="lg" colorScheme="blue" w="full" mt={4} boxShadow="md">
          Login
        </Button>
        <Link href="/signup" color="blue.500">Don't have an account? Sign up</Link>
      </VStack>
    </Box>
  );
};

export default Login;
