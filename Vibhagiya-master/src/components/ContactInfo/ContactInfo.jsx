import {
  Box,
  HStack,
  Heading,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

const ContactInfo = () => {
  return (
    <Box
      padding={4}
      bg={'#E6E4EB'}
      minH={'10vh'}
      color={'#293036'}
      textAlign={'center'}
    >
      <VStack>
        <Heading children="Contact Us" />
        <HStack>
          <Text as={'b'} children="Name: " />
          <Text children="Anuj Roy" />
        </HStack>
        <HStack>
          <Text as={'b'} children="Email: " />
          <Text children="connectvibhagiya@gmail.com" />
        </HStack>
        <HStack>
          <Text as={'b'} children="GSTIN: " />
          <Text children="10AIXPR5729A1Z7" />
        </HStack>
        <StackDivider />
        <Text as={'b'} children="Privacy Policy | Terms & Conditions" />
        <Text children="© 2023 Vibhagiya Limited. All Rights Reserved." />
        <Text children="For queries contact us: Anuj Roy, Vibhagiya Limited Raynagar Chowk Ganga Hat DIGHIKALA West Hajipur, Bihar, India" />
      </VStack>
    </Box>
  );
};

export default ContactInfo;
