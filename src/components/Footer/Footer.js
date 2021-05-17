import React from 'react';
import { Button, Paragraph, H2 } from '../../globalStyles';
import {
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
//   FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  SubscribeButton,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  CopyRight,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our newsletter, now or now!:)
        </FooterSubHeading>
        <Paragraph big white>You can unsubscribe at any time.</Paragraph>
        <Form>
          <FormInput name='email' type='email' placeholder='Email' />
          <SubscribeButton subscribeBorder>Subscribe</SubscribeButton>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <H2 white>About Us</H2>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <H2 white>Contact Us</H2>
            <FooterLink to='/'>Contact</FooterLink>
            <FooterLink to='/'>Support</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <H2 white>Services</H2>
            <FooterLink to='/'>Marketing</FooterLink>
            <FooterLink to='/'>Consultation</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <H2 white>Social Media</H2>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            WExperts
          </SocialLogo>
          <CopyRight>© Copyright 2021</CopyRight>
          <SocialIcons>
            <SocialIconLink
              href={
                ''
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
