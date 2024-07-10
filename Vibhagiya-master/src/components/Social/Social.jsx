import { Box, Button, Link, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiYoutubeLine,
} from 'react-icons/ri';

const Social = () => {
  return (
    <Box>
      <VStack position={'fixed'} gap={2} zIndex={10} bottom={6} left={6}>
        <Link
          className="hover"
          isExternal
          href="https://www.youtube.com/channel/UCa9znB9rkRu-e328X0LB3JQ"
        >
          <Button rounded={'full'} width={12} height={12} colorScheme="red">
            <RiYoutubeLine />
          </Button>
        </Link>
        <Link
          isExternal
          href="https://www.facebook.com/vibhagiya/"
          className="hover"
        >
          <Button rounded={'full'} width={12} height={12} colorScheme="blue">
            <RiFacebookBoxLine />
          </Button>
        </Link>
        <Link
          isExternal
          href="https://instagram.com/connect_vibhagiya"
          className="hover"
        >
          <Button rounded={'full'} width={12} height={12} colorScheme="pink">
            <RiInstagramLine />
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Social;
