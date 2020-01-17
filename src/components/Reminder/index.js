import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faShareAlt } from '@fortawesome/free-solid-svg-icons'

import { 
  Container,
  ReminderContentWrapper,
  ReminderContent,
  ReminderActions,
  SaveReminderButton,
  IconWrapper,
  ShareButton
} from './styles';

export default function Reminder() {
  return (
    <Container>
      <ReminderContentWrapper>
        <ReminderContent />
      </ReminderContentWrapper>
      <ReminderActions>
        <SaveReminderButton>
          <IconWrapper>
            <FontAwesomeIcon icon={faBookmark} style={{ fontSize: 22, color: '#424761' }} />
          </IconWrapper>
          <strong>101</strong>
          {' '}
          saves
        </SaveReminderButton>
        <ShareButton>
          <FontAwesomeIcon icon={faShareAlt} style={{ fontSize: 22, color: '#424761' }} />
        </ShareButton>
      </ReminderActions>
    </Container>
  );
}
