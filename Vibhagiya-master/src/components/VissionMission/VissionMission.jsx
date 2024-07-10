import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const vision = [
  {
    head: 'Eternal Style:',
    text: 'We dream of being a timeless fashion icon, helping everyone feel super confident in their unique style.',
  },
  {
    head: 'You-ness Celebration:',
    text: 'We want to be a place where everyone, no matter who they are, can celebrate and show off their awesome individuality.',
  },
  {
    head: 'Community Impact:',
    text: `We're not just about clothes. Contributing to social welfare by supporting NGOs and initiatives aimed at making a positive difference in society.`,
  },
];

const mision = [
  {
    head: 'Super Quality Stuff:',
    text: 'We promise to pick only the coolest, longest-lasting clothes that make you feel amazing.',
  },
  {
    head: 'Your Own Fashion Adventure:',
    text: `When you shop with us, it's like going on a personalized treasure hunt! We want your style to shine through.`,
  },
  {
    head: 'Joyful Vibes:',
    text: `Our goal is to make you feel inspired and happy. We're all about sharing unique designs, top-notch craftsmanship, and clothes that last and last.`,
  },
  {
    head: 'Your Style Powerhouse:',
    text: `We want to be your go-to spot for clothes that boost your confidence, style, and stay awesome for a really long time.`,
  },
];

const CardElement = ({ data, color, heading }) => (
  <Box
    h={'auto'}
    maxW={600}
    borderRadius={10}
    boxShadow={'lg'}
    p={5}
    color={'white'}
    bg={color}
  >
    <Heading children={heading} size={'2xl'} textAlign={'center'} pb={5} />
    <br />
    {data.map(item => (
      <>
        <Text as={'b'}>{item.head}</Text>
        <Text>{item.text}</Text>
        <br />
      </>
    ))}
  </Box>
);

const VissionMission = () => {
  return (
    <Box
      display={'flex'}
      flexWrap={'wrap'}
      gap={10}
      justifyContent={'center'}
      m={10}
    >
      <CardElement data={vision} heading={'VISION'} color={'#E57E39'} />
      <CardElement data={mision} heading={'MISSION'} color={'#99BE4A'} />
    </Box>
  );
};

export default VissionMission;
