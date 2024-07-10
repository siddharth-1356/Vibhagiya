import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import consmetics from '../../assets/images/icons/categories/cosmetics.png';
import electricApl from '../../assets/images/icons/categories/electric-appliance.png';
import giftBox from '../../assets/images/icons/categories/giftbox.png';
import grocery from '../../assets/images/icons/categories/grocery.png';
import hat from '../../assets/images/icons/categories/hat.png';
import house from '../../assets/images/icons/categories/house.png';
import jewelry from '../../assets/images/icons/categories/jewelry.png';
import laundry from '../../assets/images/icons/categories/laundry.png';
import makeUp from '../../assets/images/icons/categories/makeup.png';
import schoolBag from '../../assets/images/icons/categories/school-bag.png';
import shoes from '../../assets/images/icons/categories/shoes.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = ({ url, title }) => (
  <Box w={'150px'} h={'150px'} borderRadius={20} bg={'orange'}>
    <VStack justifyContent={'center'} h={'100%'}>
      <Image src={url} height={'80px'} />
      <Heading children={title} size={'sm'} />
    </VStack>
  </Box>
);

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box id="categories">
      <VStack alignItems={['center', 'flex-start']} m={10}>
        <Heading children={'Browse All Categories'} size={'3xl'} />
        <Text textAlign={['center', 'left']} width={['100%', '65%']}>
          Discover a world of flavors at your fingertips! Browse all categories
          in our grocery store to explore a diverse selection of fresh produce,
          pantry staples, and delightful treats for every culinary preference.
        </Text>
        <Box w={'100%'} mt={10} mb={10}>
          <Slider {...settings}>
            <Card url={laundry} title={'Clothing'} />
            <Card url={grocery} title={'Grocery'} />
            <Card url={electricApl} title={'Home Appliances'} />
            <Card url={giftBox} title={'Gifts'} />
            <Card url={jewelry} title={'Artificial Jewellery'} />
            <Card url={consmetics} title={'Cosmetics'} />
            <Card url={shoes} title={'Footwear'} />
            <Card url={schoolBag} title={'Travel Bags'} />
            <Card url={hat} title={'Man Accesories'} />
            <Card url={makeUp} title={'Beauty Parlour'} />
            <Card url={house} title={'Home Furnish'} />
          </Slider>
        </Box>
      </VStack>
    </Box>
  );
};

export default Categories;
