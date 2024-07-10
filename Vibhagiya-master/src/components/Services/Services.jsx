import React from 'react';
import { Box, Heading, Stack, Text, VStack } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import deliveryIcon from '../../assets/images/icons/delivery.png';
import trolleyIcon from '../../assets/images/icons/trolley.png';
import walletIcon from '../../assets/images/icons/wallet.png';
import trustIcon from '../../assets/images/icons/trust.png';

const LinkButton = ({ linkUrl, heading, text }) => (
  <VStack w={['70%', '25%']}>
    <Image src={linkUrl} boxSize={90} className="hover" />
    <Heading children={heading} size={'lg'} color="#" />
    <Text
      align={'center'}
      color={'grey'}
      as={'b'}
      children={text}
      size={'lg'}
      noOfLines={2}
    />
  </VStack>
);

const OfferCard = ({ offer, dish, color }) => (
  <Box
    className="hover"
    minH={150}
    maxW={400}
    bg={color}
    borderRadius={15}
    p={7}
    style={{ userSelect: 'none' }}
  >
    <VStack color={'white'} gap={3} alignItems={'flex-start'}>
      <Text children={offer} as={'b'} size={'xl'} />
      <Heading noOfLines={2} children={dish} size={'lg'} />
      <Box
        cursor={'pointer'}
        borderRadius={10}
        bg={'white'}
        p={2}
        color={'orange'}
      >
        <Text as={'b'}>Shop Now</Text>
      </Box>
    </VStack>
  </Box>
);

const Services = () => {
  return (
    <>
      <Box id="services">
        <VStack>
          <Box
            display={'flex'}
            alignItems={['center', 'flex-start']}
            w={'100%'}
            pl={[0, 100]}
          >
            <Heading
              children={'Why Choose Us?'}
              size={'4xl'}
              textAlign={'center'}
              color={'#EC1C24'}
              p={8}
            />
          </Box>
          <Stack
            justifyContent={['center', 'space-around']}
            alignItems={['center', 'baseline']}
            direction={['column', 'row']}
            gap={[10, 0]}
          >
            <LinkButton
              linkUrl={deliveryIcon}
              heading={'All Fresh Products'}
              text={
                'Enjoy the Convenience of your shopping and good quality products.'
              }
            />
            <LinkButton
              linkUrl={trolleyIcon}
              heading={'Door Delivery'}
              text={'We offer the home delivery. Anywhere in the city.'}
            />
            <LinkButton
              linkUrl={trustIcon}
              heading={'Trusted'}
              text={
                'Your Payment process will be safe because we have allowed security comfortable.'
              }
            />
            <LinkButton
              linkUrl={walletIcon}
              heading={'Reasonable Prices'}
              text={
                'All Products Available at our store are at reasonable prices.'
              }
            />
          </Stack>
          <Stack direction={['column', 'row']} gap={8} m={10}>
            <OfferCard
              offer={'EXTRA DISCOUNT EVERY DAY'}
              color={'#E57E39'}
              dish={'MINIMUM 5.5% BELOW MRP...'}
            />
            <OfferCard
              offer={'*ON SHOPPING OF ₹1499 & ABOVE'}
              color={'#99BE4A'}
              dish={'SUGAR AT ₹5/KG EVERYDAY...'}
            />
            <OfferCard
              offer={'*ON CLOTHES AT OUR APP'}
              color={'#E57E39'}
              dish={'MINIMUM 20% EXTRA DISCOUNT EVERYDAY...'}
            />
          </Stack>
        </VStack>
      </Box>
    </>
  );
};

export default Services;
