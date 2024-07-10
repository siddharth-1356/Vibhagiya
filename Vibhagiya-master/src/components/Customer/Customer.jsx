import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import profile1 from '../../assets/images/profiles/1.png';
import profile2 from '../../assets/images/profiles/2.png';
import profile3 from '../../assets/images/profiles/3.png';
import star from '../../assets/images/star-image.png';
import whiteStar from '../../assets/images/white-star-image.png';
import React from 'react';

const CustomerCard = ({ review, name, url, bg, starUrl, text, subtext }) => (
  <Card maxW="md" m={2} minH={'xs'} boxShadow={'lg'} bg={bg} className="hover">
    <CardHeader>
      <Flex spacing="4">
        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
          <Avatar name={name} size={'xl'} src={url} />

          <Box>
            <Heading size="md" children={name} color={text} />
            <Text color={subtext} as={'b'}>
              Regular Customer
            </Text>
          </Box>
        </Flex>
      </Flex>
    </CardHeader>
    <CardBody>
      <Text children={review} as={'b'} color={subtext} />
    </CardBody>
    <CardFooter>
      <Image src={starUrl} h={10} />
    </CardFooter>
  </Card>
);

const Customer = () => {
  return (
    <>
      <Box
        w={'100%'}
        h={['auto', '80vh']}
        display={'flex'}
        id="customer"
        alignItems={['center', 'left']}
        m={[0, 10]}
      >
        <VStack>
          <Heading
            children="What Our Customer Say About Us"
            size={'4xl'}
            textAlign={'center'}
            p={8}
            mb={[0, 10]}
          />
          <Box>
            <Stack direction={['column', 'row']}>
              <CustomerCard
                name={'Sarthak Jain'}
                review={
                  'Very good shopping Mart for our household products. The aisles are well-organized, making it easy to navigate and find everything on your shopping list. '
                }
                url={profile2}
                bg={'white'}
                starUrl={star}
                subtext={'grey'}
              />
              <CustomerCard
                name={'Adarsh Bhardwaj'}
                review={
                  'Nice place for groceries shopping and great discounts.  The team members are well-versed in the store layout and product offerings, readily providing helpful recommendations and answering any questions.'
                }
                bg={'#E57E39'}
                url={profile1}
                text={'white'}
                subtext={'white'}
                starUrl={whiteStar}
              />
              <CustomerCard
                name={'Aman Aggarwal'}
                review={
                  'All item are available in this shop so please visit one time. The attention to detail in maintaining a sanitary and inviting space enhances the overall shopping experience'
                }
                url={profile3}
                starUrl={star}
                subtext={'grey'}
                bg={'white'}
              />
            </Stack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};

export default Customer;
