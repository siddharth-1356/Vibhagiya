import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import s1 from '../../assets/new_asset/1.png';
import s2 from '../../assets/new_asset/2.png';
import s3 from '../../assets/new_asset/3.png';
import s4 from '../../assets/new_asset/4.png';
import s5 from '../../assets/new_asset/5.png';
import s6 from '../../assets/new_asset/6.png';
import s7 from '../../assets/new_asset/7.png';
import s8 from '../../assets/new_asset/8.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home2.css';

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const Home2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    // autoplaySpeed: 5000,
    cssEase: 'linear',
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <>
      <Box minH={'auto'} position={'relative'} zIndex={'-1'}>
        <Slider {...settings}>
          <Image src={s1} h={'100%'} />
          <Image src={s2} h={'100%'} />
          <Image src={s3} h={'100%'} />
          <Image src={s4} h={'100%'} />
          <Image src={s5} h={'100%'} />
          <Image src={s6} h={'100%'} />
          <Image src={s7} h={'100%'} />
          <Image src={s8} h={'100%'} />
        </Slider>
      </Box>
    </>
  );
};

export default Home2;
