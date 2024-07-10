import { Button, Link } from '@chakra-ui/react';
import React from 'react';
import { RiWhatsappLine } from 'react-icons/ri';

const WhatsApp = () => {
  return (
    <Link isExternal href="https://api.whatsapp.com/send/?phone=7250080770">
      <Button
        rounded={'full'}
        width={12}
        height={12}
        zIndex={'overlay'}
        colorScheme="green"
        position={'fixed'}
        bottom={135}
        right={6}
      >
        <RiWhatsappLine />
      </Button>
    </Link>
  );
};

export default WhatsApp;
