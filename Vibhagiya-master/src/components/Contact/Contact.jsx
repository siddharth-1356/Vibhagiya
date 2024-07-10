import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { RiContactsBookLine } from 'react-icons/ri';

const Contact = () => {
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwD_tCf5IVOYR3sIKHqaQjvpHbGSKATHVutwSbpxuf5o7YOS5eaD2C7kP4wTc4MBK8/exec',
        {
          method: 'POST',
          body: new FormData(event.target),
        }
      );
      if (!response.ok) {
        alert('Error processing your request');
        return;
      }
      alert('Data uploaded to the server. Fire on!');
      onClose();
    } catch (error) {
      alert('Error submitting the form');
      console.error(error);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        rounded={'full'}
        onClick={onOpen}
        width={12}
        height={12}
        zIndex={'overlay'}
        colorScheme="yellow"
        position={'fixed'}
        bottom={6}
        color={'white'}
        right={6}
      >
        <RiContactsBookLine />
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Contact Us</DrawerHeader>

          <DrawerBody>
            <form
              id="my-form"
              method={'POST'}
              onSubmit={handleSubmit}
              action="https://script.google.com/macros/s/AKfycbwD_tCf5IVOYR3sIKHqaQjvpHbGSKATHVutwSbpxuf5o7YOS5eaD2C7kP4wTc4MBK8/exec"
            >
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="Name" required />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="Email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Gender</FormLabel>
                <Select placeholder="Select your Gender" name="Gender">
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="Desc"
                  placeholder="Write a brief description..."
                  h={'150px'}
                />
              </FormControl>
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button type="submit" form="my-form" mt={4} colorScheme="teal">
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Contact;
