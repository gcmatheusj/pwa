import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  border-radius: 5px;
  margin: 16px 0;
`;

export const StoryWrapper = styled.div`
  display: flex;
  background: #fff;
  height: 120px;
  padding: 5px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #424761;
  font-size: 18px;
  line-height: 22px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const Ideas = styled.h4`
  display: flex;
  align-items: center;
  color: #424761;
  font-size: 12px;
  text-transform: uppercase;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #424761;
    font-weight: bold;
    color: #fff;
    margin-right: 4px;;
  }
`

export const ExternalLink = styled(Link)`
  color: #424761;
`

export const Image = styled.img`
  height: 98px;
  min-width: 98px;
  background: #666;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-left: 8px;
`

export const ReminderWrapper = styled.div`
  display: flex;
  background: rgba(244, 239, 227, 0.8);
  padding: 10px 5px 2px;
  height: 60px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`

export const Reminder = styled.div`
  margin: 0 2px 4px;
  border: 1px dashed #424761;
  min-height: 20px;
  width: 25%;
  color: #424761;
  border-top-left-radius: 8px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 4px;
  padding: 5px;
`

export const ReminderTitle = styled.h5`
  font-size: 9px;
  width: 100%;
  line-height: 14px;
`
