import { Image } from '@chakra-ui/image';
import {
  Box,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/layout';
import React from 'react';
import ArrowIcon from '../../assets/images/icons/right-arrow.png';
import StarIcon from '../../assets/images/star-image.png';
import GoodDay from '../../assets/new_asset/Good_Day.png';
import Yippee from '../../assets/new_asset/Yippee.png';
import Horlicks from '../../assets/new_asset/Horlicks.png';
// import bgFruit from '../../assets/images/bg-fruits.jpg';

const LogoButton = ({ title, text }) => (
  <Box
    w={'180px'}
    h={'180px'}
    bg={'#D9D9D9'}
    rounded={'full'}
    alignItems={'center'}
    justifyContent={'center'}
    display={'flex'}
  >
    <VStack p={0}>
      <Heading children={title} as={'b'} size={'xl'} />
      <Text children={text} as={''} size={'sm'} />
    </VStack>
  </Box>
);

const FruitButton = ({ url, mrp, offerPrice, name }) => (
  <Box
    border={'solid 1px black'}
    w={'100%'}
    className="hover"
    borderRadius={20}
  >
    <HStack>
      <Image src={url} h={'100%'} height={'100%'} boxSize={100} p={2} />
      <VStack w={'220px'} gap={[0, 'auto']}>
        <Image src={StarIcon} height={10} objectFit={'cover'} />
        <Text children={name} as={'b'} fontSize={'md'} />
        <HStack m={0}>
          <Text children={mrp} color={'grey'} fontSize={'sm'} />
          <Text children={offerPrice} color={'red'} fontSize={'sm'} />
        </HStack>
        <HStack display={'flex'} alignItems={'center'}>
          <Text children={'Shop Now'} />
          <Image src={ArrowIcon} boxSize={6} />
        </HStack>
      </VStack>
    </HStack>
  </Box>
);

const Trending = () => {
  return (
    <>
      <Box bg={'white'} mt={10}>
        <Stack
          direction={['column', 'column', 'row']}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <Box
            ml={[0, 0, 50]}
            mb={10}
            h={[400, 500]}
            w={[360, 400]}
            alignItems={'center'}
            boxShadow={'dark-lg'}
            bg={'#D9D9D9'}
            zIndex={[0, 1]}
            borderRadius={10}
          >
            <VStack divider={<StackDivider />}>
              <HStack justifyContent={'space-around'} w={'100%'}>
                <Text size={'xl'} children="New Arrivals" />
                <Text size={'xl'} children="Trending Products" as={'b'} />
                <Text size={'xl'} children="Best Selling" />
              </HStack>
              <VStack>
                <FruitButton
                  url={GoodDay}
                  name={'Good Day'}
                  mrp={'₹100.00'}
                  offerPrice={'₹80.00'}
                />
                <FruitButton
                  url={Yippee}
                  name={'Yippee'}
                  mrp={'₹15.00'}
                  offerPrice={'₹14.00'}
                />
                <FruitButton
                  url={Horlicks}
                  name={'Horlicks'}
                  mrp={'₹800.00'}
                  offerPrice={'₹600.00'}
                />
              </VStack>
            </VStack>
          </Box>
          <Box>
            <VStack alignItems={['center', 'center', 'flex-start']}>
              <Stack
                direction={['column', 'row']}
                alignItems={'center'}
                w={'100%'}
              >
                <Heading
                  children="Get "
                  size={['3xl', '4xl']}
                  textAlign={'center'}
                />
                <Text display={['none', 'block']}>
                  <span>&nbsp;&nbsp;</span>
                </Text>
                <Heading
                  color={'#EC1C24'}
                  children=" 20% Discount on"
                  textAlign={'center'}
                  size={['3xl', '4xl']}
                />
              </Stack>
              <Heading children="Clothing" size={'3xl'} />
              <Text
                children="Fashion intermediate apportunities and multimedia based benefits"
                textAlign={'center'}
              />
              <Stack
                direction={['column', 'row']}
                w={'100%'}
                justifyContent={'space-around'}
                alignItems={'center'}
                m={6}
              >
                <LogoButton title={'10k+'} text={'Active Customers'} />
                <LogoButton title={'7k+'} text={'Satisfied Customers'} />
                <LogoButton title={'10k+'} text={'Active Products'} />
              </Stack>
            </VStack>
          </Box>
        </Stack>
      </Box>
      {/* <Box h={['auto', '40vh']} bg={'#223941'} overflow={'hidden'}>
          <Image
            src={bgFruit}
            zIndex={0}
            objectFit={'fill'}
            width={'100%'}
            display={['none', 'block']}
          />
        </Box> */}
    </>
  );
};

export default Trending;
