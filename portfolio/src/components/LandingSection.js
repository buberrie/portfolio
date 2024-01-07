import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import teamGirlImage from '../images/team-girl.png';

const greeting = "Hello, I am Gloria!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#3498db"
  >
    <VStack spacing={4} align="center">
      <Avatar size="2xl" name="Gloria" src={teamGirlImage} />
      <Heading as="h1" size="xl" color="white">
        {greeting}
      </Heading>
      <Heading as="h2" size="md" color="white">
        {bio1}
      </Heading>
      <Heading as="h2" size="md" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;