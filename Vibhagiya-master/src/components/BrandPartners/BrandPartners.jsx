import React from 'react';
import { Box, Heading, Image, VStack } from '@chakra-ui/react';
import img1 from '../../assets/new_asset/bp1.png';
import img2 from '../../assets/new_asset/bp2.png';
import img3 from '../../assets/new_asset/bp3.png';
import img4 from '../../assets/new_asset/bp4.png';
import img5 from '../../assets/new_asset/bp5.png';
import img6 from '../../assets/new_asset/bp6.png';
import img7 from '../../assets/new_asset/bp7.png';
import img8 from '../../assets/new_asset/bp8.png';
import img9 from '../../assets/new_asset/bp9.png';
import img10 from '../../assets/new_asset/bp10.png';

const Card = ({ url }) => (
  <Box
    w={['130px', '200px']}
    h={['130px', '200px']}
    m={[5, 7, 10]}
    rounded={'full'}
    display={'flex'}
    boxShadow={'lg'}
    justifyContent={'center'}
    alignItems={'center'}
  >
    <Image src={url} w={'80%'} />
  </Box>
);

const BrandPartners = () => {
  return (
    <Box id="categories">
      <VStack alignItems={['center']} m={[0, 0, 10]}>
        <Heading
          children={'OUR BRAND PARTNERS'}
          size={'3xl'}
          textAlign={'center'}
        />
        <Box
          w={'100%'}
          mt={10}
          mb={10}
          display={'flex'}
          flexWrap={'wrap'}
          justifyContent={'center'}
        >
          <Card url={img1} />
          <Card url={img2} />
          <Card url={img3} />
          <Card url={img4} />
          <Card url={img5} />
          <Card url={img6} />
          <Card url={img7} />
          <Card url={img8} />
          <Card url={img9} />
          <Card url={img10} />
        </Box>
      </VStack>
    </Box>
  );
};

export default BrandPartners;
