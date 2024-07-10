import {
  Box,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import placeHolder from '../../../assets/images/icons/information.png';

const UsersIcon = ({ title, text }) => (
  <Box bg={'#F4F4F4'} p={5} w={200} boxShadow={'lg'} borderRadius={10}>
    <VStack
      w={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      spacing={0}
    >
      <Heading children={title} as={'b'} size={'xl'} />
      <Text
        children={text}
        as={'b'}
        color={'#3E3299'}
        w={100}
        textAlign={'center'}
      />
    </VStack>
  </Box>
);

const Footer = () => {
  return (
    <Box
      padding={4}
      bg={'white'}
      minH={'10vh'}
      borderTop={'30px solid #F7F5FF'}
      boxShadow={'lg'}
    >
      <VStack ml={[2, 10]} mr={[2, 10]} mb={[2, 10]}>
        <HStack
          w={'100%'}
          justifyContent={['center', 'flex-start']}
          alignItems={'center'}
          m={5}
          ml={[0, '100px']}
        >
          <Image src={placeHolder} height={[20, '70px']} />
          <Heading
            letterSpacing={2}
            children={'--- '}
            size={'2xl'}
            display={['none', 'block']}
          />
          <Heading
            letterSpacing={[0, 2]}
            children={'Did you know about us?'}
            size={'2xl'}
            textAlign={'center'}
          />
        </HStack>
        <Stack direction={['column', 'row']} spacing={[10, 40]}>
          <UsersIcon title={'+150K'} text={'HAPPY CUSTOMERS'} />
          <UsersIcon title={'+100'} text={'VALUABLE PARTNERS'} />
          <UsersIcon title={'+30K'} text={'ORDERS PLACED'} />
        </Stack>
      </VStack>
    </Box>
  );
};

export default Footer;
