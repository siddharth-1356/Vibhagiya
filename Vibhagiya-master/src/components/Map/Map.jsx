import {
  Box,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import map from '../../assets/images/city-map-vector.jpg';
import placeHolder from '../../assets/images/icons/placeholder.png';
// import circle from '../../assets/images/icons/dry-clean.png';
// import redCircle from '../../assets/images/icons/dry-clean-red.png';
import React from 'react';

const Map = () => {
  return (
    <Box minH={['auto', '100vh']} m={[3, 20]}>
      <VStack
        p={2}
        display={'flex'}
        alignItems={['center', 'flex-start']}
        spacing={8}
      >
        <HStack w={'100%'} justifyContent={['center', 'flex-start']}>
          <Image src={placeHolder} height={20} />
          <Heading
            letterSpacing={2}
            children={'--- '}
            size={'2xl'}
            display={['none', 'block']}
          />
          <Heading letterSpacing={[0, 2]} children={'ADDRESS'} size={'2xl'} />
        </HStack>
        <Text textAlign={['center', 'left']}>
          Welcome to Vibhagiya - Your Ultimate Lifestyle Destination! Discover
          the perfect blend of fashion, beauty, and lifestyle right here on
          Vibhagiya! We are your one-stop shop for all things fabulous, whether
          you're into men's fashion, traditional sarees, beauty products, or
          even grocery shopping with a touch of elegance. At Vibhagiya, we
          believe that style knows no bounds, and beauty is for everyone.
        </Text>
        <Text children={'Our channel is your go-to source for: '} />
        <Link
          href="https://maps.app.goo.gl/ehhKGcnLmafSHVQXA"
          isExternal
          w={'100%'}
        >
          <Image
            src={map}
            objectFit={'cover'}
            borderRadius={20}
            h={'500'}
            w={'100%'}
          />
        </Link>
        {/* <HStack>
          <Image src={circle} h={5} />
          <Text children="Pickup Only" as={'b'} />
          <Image src={redCircle} h={5} />
          <Text children="Pickup / Address Delivery" color={'red'} as={'b'} />
        </HStack> */}
      </VStack>
    </Box>
  );
};

export default Map;
