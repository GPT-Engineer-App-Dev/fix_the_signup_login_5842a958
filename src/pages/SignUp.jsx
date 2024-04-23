import { Box, FormControl, FormLabel, Input, Button, VStack } from '@chakra-ui/react';

const SignUp = () => {
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
          Sign Up
        </Button>
      </VStack>
    </Box>
  );
};

export default SignUp;
