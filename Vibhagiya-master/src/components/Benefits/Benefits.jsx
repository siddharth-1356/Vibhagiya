import { Image } from '@chakra-ui/image';
import { Box, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/layout';
import React from 'react';
import deliveryMan from '../../assets/images/deliveryMan.png';
import deliveryIcon from '../../assets/images/icons/delivery-truck.png';
import paymentIcon from '../../assets/images/icons/credit-card.png';
import supportIcon from '../../assets/images/icons/customer-support.png';
import refundIcon from '../../assets/images/icons/refund.png';

const Features = ({ title, url }) => (
  <Box w={'100%'} p={7} boxShadow={'sm'}>
    <HStack>
      <Box h={10} w={10} bg={'orange'} borderRadius={'5px'} className="hover">
        <Image src={url} p={1} color={'white'} />
      </Box>
      <Text ml={4} children={title} fontSize={25} as={'b'} />
    </HStack>
  </Box>
);

const Benefits = () => {
  return (
    <>
      <Box w={'100%'}>
        <Stack
          direction={['column', 'row']}
          justifyContent={'space-around'}
          ml={[0, 10]}
        >
          <VStack>
            <Box textAlign={['center', 'left']}>
              <Heading
                children={"We're Best Quality Grocery Shopper"}
                size={'2xl'}
                p={2}
              />
              <Text p={2}>
                In these times, we've eliminated the stress associated with
                shopping for daily essentials. You can now effortlessly order
                all your household products and groceries online.
              </Text>
            </Box>
            <Box w={'100%'}>
              <VStack mt={10}>
                <Features url={paymentIcon} title={'Multi Payment Methods'} />
                <Features url={refundIcon} title={'Easy Refund Policy'} />
                <Features url={supportIcon} title={'Customer Support'} />
                <Features url={deliveryIcon} title={'Fast Delivery'} />
              </VStack>
            </Box>
          </VStack>
          <Image
            src={deliveryMan}
            h={['auto', 600]}
            w={['100%', 'auto']}
            objectFit={'cover'}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Benefits;
