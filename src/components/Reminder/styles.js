import styled from 'styled-components';

export const Container = styled.div`
  height: 270px;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 20px;
  margin: 16px 0;
  position: relative;
  background: #fff;
`;

export const ReminderContentWrapper = styled.div`
  position: absolute;
  top: 8px;
  border-top-left-radius: 20px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 76%;
`

export const ReminderContent = styled.div`
  margin: 0 8px;
  height: 100%;
  background: #40c4ff;
  border-top-left-radius: 14px;
  border-top-right-radius: 4px;
`

export const ReminderActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 24%;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 20px;
  padding: 0 20px;
`

export const SaveReminderButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  background: transparent;
  color: #424761;
  font-size: 16px;

  strong {
    margin: 0 6px
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 2px solid #424761;
  border-radius: 50%;
`

export const ShareButton = styled.button`
  border: 0;
  background: transparent
`
