import {
  Box,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import arrow from '../../assets/images/icons/red-right-arrow.png';
import ArrowIcon from '../../assets/images/icons/right-arrow.png';
import groceries from '../../assets/images/grocerie.png';
import React from 'react';

const ShopNowIcon = () => (
  <Box
    p={2}
    className="hover"
    style={{ cursor: 'pointer' }}
    border={'2px solid orange'}
    borderRadius={10}
  >
    <HStack display={'flex'} alignItems={'center'}>
      <Text children={'Shop Now'} color={'white'} />
      <Image src={ArrowIcon} boxSize={6} />
    </HStack>
  </Box>
);

const Offer = () => {
  return (
    <Box w={'100%'} bg={'#2C4436'}>
      <Stack direction={['column', 'row']} p={[0, 10]}>
        <VStack
          alignItems={['center', 'flex-start']}
          w={'100%'}
          p={10}
          spacing={5}
        >
          <HStack className="hover" style={{ cursor: 'pointer' }}>
            <Text
              children="MINIMUM 20% DISCOUNT ON CLOTHING ITEMS"
              color={'#C8403F'}
              letterSpacing={2}
              as={'i'}
              fontSize={'lg'}
            />
            <Image src={arrow} height={10} />
          </HStack>
          <Heading
            letterSpacing={3}
            textAlign={'center'}
            children="Buy More Products"
            color={'white'}
          />
          <Heading
            letterSpacing={3}
            children="More Discounts."
            color={'white'}
          />
          <ShopNowIcon />
        </VStack>
        <Box w={'100%'}>
          <Image src={groceries} height={'100%'} objectFit={'cover'} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Offer;
