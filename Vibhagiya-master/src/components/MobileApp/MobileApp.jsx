import { Link } from '@chakra-ui/react';
import { Image } from '@chakra-ui/image';
import { Box, Heading, Stack, VStack } from '@chakra-ui/layout';
import React from 'react';
import mobilePhone from '../../assets/images/mobilePhone.png';
import googlePlayIcon from '../../assets/images/Google_Play_Store.png';
import comingSoon from '../../assets/images/comingSoon.png';

const MobileApp = () => {
  return (
    <>
      <Box w={'100%'}>
        <Stack
          direction={['column', 'row']}
          justifyContent={'space-around'}
          ml={[0, 10]}
        >
          <VStack textAlign={['center', 'left']} spacing={5}>
            <Heading
              letterSpacing={2}
              children={'Download Our Grocery Mobile App And Save Your Time'}
              size={'2xl'}
              p={2}
            />
            <Image src={comingSoon} h={[150, 300]} />

            <Link href="https://www.google.com" isExternal>
              <Image
                src={googlePlayIcon}
                mt={[10, 50]}
                w={300}
                className="hover"
              />
            </Link>
          </VStack>
          <Image src={mobilePhone} boxSize={600} objectFit={'cover'} />
        </Stack>
      </Box>
    </>
  );
};

export default MobileApp;
