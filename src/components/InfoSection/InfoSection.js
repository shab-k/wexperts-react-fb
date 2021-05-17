import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, H3, H1 } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Subtitle,
  ImgWrapper,
  Img
} from './InfoSection.elements';

function InfoSection({
  id,
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={lightBg} id={id}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <H3 lightTopLine={lightTopLine}>{topLine}</H3>
                <H1 lightText={lightText}>{headline}</H1>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/sign-up'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;
