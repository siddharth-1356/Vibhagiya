import { Box, Heading, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import c1 from '../../assets/new_asset/c1.png';
import c2 from '../../assets/new_asset/c2.png';
import c3 from '../../assets/new_asset/c3.png';
import b1 from '../../assets/new_asset/b1.png';
import b2 from '../../assets/new_asset/b2.png';
import fb1 from '../../assets/new_asset/fb1.png';
import fb2 from '../../assets/new_asset/fb2.png';
import fb3 from '../../assets/new_asset/fb3.png';
import bc1 from '../../assets/new_asset/b&c1.png';
import bc2 from '../../assets/new_asset/b&c2.png';
import bc3 from '../../assets/new_asset/b&c3.png';
import bc4 from '../../assets/new_asset/b&c4.png';
import bc5 from '../../assets/new_asset/b&c5.png';

const cat1 = [
  {
    url: c1,
  },
  {
    url: c2,
  },
  {
    url: c3,
  },
];
const cat2 = [
  {
    url: b1,
  },
  {
    url: b2,
  },
  {
    url: b1,
  },
];
const cat3 = [
  {
    url: bc1,
  },
  {
    url: bc2,
  },
  {
    url: bc3,
  },
  {
    url: bc4,
  },
  {
    url: bc5,
  },
];
const cat4 = [
  {
    url: fb1,
  },
  {
    url: fb2,
  },
  {
    url: fb3,
  },
];
const cat5 = [
  {
    url: fb3,
  },
  {
    url: fb2,
  },
  {
    url: fb1,
  },
];

const settings = {
  dots: false,
  infinite: true,
  accessibility: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 10000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
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

const CategoryEle = ({ header, catArr }) => (
  <Box w={'100%'} justifyContent={'center'}>
    <Heading children={header} textAlign={'center'} size={'4xl'} p={10} />
    <Slider {...settings}>
      {catArr.map((item, index) => (
        <Box key={index}>
          <Image src={item.url} alt={header} p={[0, 10]} />
        </Box>
      ))}
    </Slider>
  </Box>
);

const CategoryType = () => {
  return (
    <Box>
      <VStack width={'100%'}>
        <CategoryEle header={'Clothing'} catArr={cat1} />
        <CategoryEle header={'Baby Care'} catArr={cat2} />
        <CategoryEle header={'Beauty and Cosmetics'} catArr={cat3} />
        <CategoryEle header={'Food and Bevarages'} catArr={cat4} />
        <CategoryEle header={'Grocery'} catArr={cat5} />
      </VStack>
    </Box>
  );
};

export default CategoryType;
