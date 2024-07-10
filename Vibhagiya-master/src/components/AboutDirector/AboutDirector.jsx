import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Profile from '../../assets/images/3.png';

const AboutDirector = () => {
  return (
    <Box mt={10} height={['100%', '100vh']}>
      <Heading
        children={'About Director'}
        size={'3xl'}
        textAlign={'center'}
        m={10}
      />
      <Stack direction={['column', 'row']} justifyContent={'center'}>
        <Image
          src={Profile}
          w={350}
          borderRadius={30}
          boxShadow={'dark-lg'}
          className="hover"
        />
        <Box p={10} textAlign={['center', 'left']} w={'50%'}>
          <Text fontSize={'3xl'} as={'b'}>
            Meet Anuj Roy - Founder of Vibhagiya
          </Text>
          <br />
          <Text>
            Anuj Roy, a BTech in Mechanical Engineering, is the visionary behind
            Vibhagiya. With seven years of business expertise alongside his
            father, Raj Vallabhab Roy ("Banduk Bhai"), and brothers Sanoj Kumar
            and Sunny Kumar, Anuj have a vision of Contributing to social
            welfare by supporting NGOs and initiatives aimed at making a
            positive difference in society.
          </Text>
          <br />
          <Text>
            His favorite quote, "Taking no risk is the biggest risk," embodies
            Anuj's fearless approach to entrepreneurship. Another guiding
            principle is, "Achievement is directly proportional to sacrifice,"
            emphasizing his dedication to success.
          </Text>
          <br />
          <Text>
            Anuj Roy's leadership is shaping Vibhagiya into a fashion haven
            where each piece tells a unique story, reflecting his passion for
            innovation and commitment to excellence.
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default AboutDirector;
