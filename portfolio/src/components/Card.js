import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description }) => {
    return (
        <VStack
          align="start"
          spacing={4}
          p={4}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="md"
          bgColor="white"
          width="100%"
        >
         <Heading as="h2" size="md">
            {title}
          </Heading>
          <Text
          color="black">{description}</Text>
          <HStack>
            <Text fontWeight="bold">Learn more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </VStack>
      );
};

export default Card;