import { useForm } from "react-hook-form";

import {
  Button,
  Card,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    console.log(JSON.stringify(values, null, 2));
  }

  return (
    <Center>
      <Card w="2xl" variant="outline" px="40" py="20" boxShadow="lg">
        <Center>
          <Heading pb={8} textTransform="uppercase" fontWeight={"medium"}>
            Sign Up
          </Heading>
        </Center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <FormControl isInvalid={errors.username}>
              <FormLabel htmlFor="username">Username</FormLabel>
              <Input
                id="username"
                placeholder="Username"
                {...register("username", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: "This is required",
                  maxLength: {
                    value: 50,
                    message: "The email should have at most 50 characters",
                  },
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: "Email address must be a valid address",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                {...register("password", {
                  required: "This is required",
                  minLength: {
                    value: 6,
                    message: "Minimum length should be 6",
                  },
                })}
              />
              <FormErrorMessage>
                {errors.password && errors.password.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.confirmPassword}>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <Input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "This is required",
                  validate: (value) =>
                    value === "password" || "Passwords do not match", // Validation logic
                })}
              />
              <FormErrorMessage>
                {errors.confirmPassword && errors.confirmPassword.message}
              </FormErrorMessage>
            </FormControl>
            <Center>
              <Button
                mt={12}
                colorScheme="teal"
                isLoading={isSubmitting}
                type="submit"
                fontWeight="light"
                px={6}
                fontSize={"lg"}
                textTransform="uppercase"
              >
                Sign Up
              </Button>
            </Center>
          </VStack>
        </form>
      </Card>
    </Center>
  );
};

export default RegisterForm;
