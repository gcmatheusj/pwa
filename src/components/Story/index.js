import React from 'react';

import { 
  Container,
  StoryWrapper,
  TitleWrapper, 
  Title, 
  Info, 
  Ideas, 
  ExternalLink, 
  Image,
  ReminderWrapper,
  Reminder,
  ReminderTitle,
} from './styles';

export default function Story() {
  return (
    <Container>
      <StoryWrapper>
        <TitleWrapper>
          <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
          <Info>
            <Ideas><span>5</span> ideas</Ideas>
            <ExternalLink>medium.com</ExternalLink>
          </Info>
        </TitleWrapper>
        <Image />
      </StoryWrapper>
      <ReminderWrapper>
        <Reminder>
          <ReminderTitle>Memory cues</ReminderTitle>
        </Reminder>
        <Reminder>
          <ReminderTitle>Different types of memory cues</ReminderTitle>
        </Reminder>
        <Reminder>
          <ReminderTitle>Example of external cues</ReminderTitle>
        </Reminder>
      </ReminderWrapper>
    </Container>
  );
}
