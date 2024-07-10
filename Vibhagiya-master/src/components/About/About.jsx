import { Box, Image, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import img1 from '../../assets/images/about/1.png';
import img2 from '../../assets/images/about/2.png';
import img3 from '../../assets/images/about/3.png';
import img4 from '../../assets/images/about/4.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  return (
    <Box p={10} id="about" h={'100%'}>
      <VStack>
        <Image src={img1} objectFit={'cover'} />
        <Stack direction={['column', 'row']}>
          <VStack>
            <Image src={img2} objectFit={'cover'} />
            <Image src={img4} objectFit={'cover'} />
          </VStack>
          <Image src={img3} objectFit={'cover'} />
        </Stack>
      </VStack>
    </Box>
  );
};

export default About;
