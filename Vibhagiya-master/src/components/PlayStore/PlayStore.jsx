import { Button, Link } from '@chakra-ui/react';
import React from 'react';
import { RiGooglePlayLine } from 'react-icons/ri';

const PlayStore = () => {
  return (
    <Link isExternal href="https://play.google.com/store/games?hl=en&gl=US">
      <Button
        rounded={'full'}
        width={12}
        height={12}
        zIndex={'overlay'}
        colorScheme="blue"
        position={'fixed'}
        bottom={20}
        right={6}
      >
        <RiGooglePlayLine />
      </Button>
    </Link>
  );
};

export default PlayStore;
