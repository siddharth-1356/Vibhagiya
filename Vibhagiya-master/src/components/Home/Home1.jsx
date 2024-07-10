import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import googlePlayIcon from '../../assets/images/Google_Play_Store.png';
import delivery from '../../assets/images/icons/delivery-truck.png';
import groceryMan from '../../assets/images/groceryMan-2.png';

const Home = () => {
  return (
    <Box
      minH={'100vh'}
      style={{
        background: 'rgb(3,81,17)',
        background:
          'linear-gradient(90deg, rgba(3,81,17,1) 0%, rgba(44,218,76,1) 61%, rgba(0,60,11,1) 100%)',
      }}
      pt={[10, 20]}
      pl={[0, 10]}
      pr={[0, 10]}
    >
      <Flex flexWrap={'wrap'} alignItems={'center'}>
        <VStack alignItems={['center', 'flex-start']} spacing={8} ml={[0, 10]}>
          <Box
            p={2}
            border={'2px solid white'}
            borderRadius={'full'}
            boxShadow={'md'}
            className="hover"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            cursor={'pointer'}
          >
            <HStack>
              <Image src={delivery} height={8} />
              <Text children={'Grocery Delivery Services '} color={'white'} />
            </HStack>
          </Box>
          <Box>
            <Heading
              className="glow"
              textAlign={['center', 'left']}
              children="Get fresh Grocery"
              size={'3xl'}
              color={'white'}
              letterSpacing={2}
              opacity={0.96}
            />
            <Heading
              letterSpacing={2}
              className="glow"
              textAlign={['center', 'left']}
              children="Enjoy healthy life."
              size={'2xl'}
              fontWeight={'thin'}
              color={'white'}
            />
          </Box>
          <Box>
            <Box position={'relative'} color={'white'}>
              <Input
                size={'lg'}
                borderRadius={100}
                width={[330, 400]}
                focusBorderColor="white"
                _placeholder={{ color: 'white', letterSpacing: 1 }}
                placeholder={'Select Category'}
                color={'white'}
              />
              <Button
                borderEndRadius={100}
                colorScheme="yellow"
                children={'Shop Now'}
                width={140}
                position={'absolute'}
                right={1}
                top={1}
              />
            </Box>
            <Text color={'white'} pl={3}>
              Not yet Member?
              <span className="glow" style={{ cursor: 'pointer' }}>
                {' '}
                Sign Up{' '}
              </span>{' '}
              Now
            </Text>
          </Box>
          <Image />
          <Box mb={[10, 0]}>
            <Text
              color={'white'}
              children="Download App"
              textAlign={['center', 'left']}
              className="glow"
            />
            <Link href="https://www.google.com" isExternal>
              <Image src={googlePlayIcon} mt={2} w={200} className="hover" />
            </Link>
          </Box>
        </VStack>
        <Box alignItems={'center'} ml={[0, 20]}>
          <Image
            src={groceryMan}
            h={['auto', 600]}
            w={['100%', 'auto']}
            objectFit={'cover'}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
