import React from 'react';
import { Box, HStack, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const socials = [
  { icon: faGithub, link: 'https://github.com' },
  { icon: faLinkedin, link: 'https://linkedin.com' },
  { icon: faTwitter, link: 'https://twitter.com' },
];

const Header = () => {
  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <Box bg="black" color="white" p={4}>
      <HStack maxWidth="1440px" spacing={8} justifyContent="space-between">
        {/* Social Media Links */}
        <HStack spacing={4}>
          {socials.map((social, index) => (
            <Link key={index} href={social.link} isExternal>
              <FontAwesomeIcon icon={social.icon} size="2x" />
            </Link>
          ))}
        </HStack>

        {/* Internal Navigation Links */}
        <HStack spacing={4}>
          <Link onClick={() => handleClick('landing-section')}>Home</Link>
          <Link onClick={() => handleClick('projects-section')}>Projects</Link>
          <Link onClick={() => handleClick('contactme-section')}>Contact Me</Link>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Header;