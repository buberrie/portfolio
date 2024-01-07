import React from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactMeSection = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      type: '',
      comment: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      type: Yup.string(),
      comment: Yup.string().min(25, 'Must be at least 25 characters').required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      // Use the submit function or API call here
      // For demonstration, log the form values
      console.log(values);

      // Reset the form after submission
      resetForm();
    },
  });

  return (
    <Box p={8} id="contactme-section" maxWidth="1440px">
      <Heading mb={6}>Contact Me</Heading>
      <VStack spacing={4}>
        <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
          <FormLabel htmlFor="firstName">Name</FormLabel>
          <Input
            id="firstName"
            placeholder="Your Name"
            {...formik.getFieldProps('firstName')}
          />
          <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.touched.email && formik.errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" placeholder="Your Email" {...formik.getFieldProps('email')} />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="type">Type of Enquiry</FormLabel>
          <Select id="type" placeholder="Select" {...formik.getFieldProps('type')}>
            <option value="hireMe">Hire Me</option>
            <option value="openSource">Open Source</option>
            <option value="other">Other</option>
          </Select>
        </FormControl>

        <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
          <FormLabel htmlFor="comment">Message</FormLabel>
          <Textarea
            id="comment"
            placeholder="Your Message"
            {...formik.getFieldProps('comment')}
          />
          <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
        </FormControl>

        <Button
          colorScheme="teal"
          isLoading={formik.isSubmitting}
          onClick={formik.handleSubmit}
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactMeSection;
