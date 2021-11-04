import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { ReactComponent as FacebookLogo } from '../../assets/facebook.svg';
import { ReactComponent as InstaLogo } from '../../assets/instagram.svg';
import { ReactComponent as LinkedInLogo } from '../../assets/linkedIn.svg';
import { ReactComponent as TwitterLogo } from '../../assets/twitter.svg';
import { ReactComponent as MailLogo } from '../../assets/mail.svg';
import { ReactComponent as FacebookLogo } from '../../assets/facebook.svg';

export const ContactPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
`;
export const LogoContainer = styled(Link)`
  padding: 8px;
`;
export const LogoMainContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;
export const FacebookIcon = styled(FacebookLogo)`
  width: 24px;
  height: 24px;
`;

export const InstaIcon = styled(InstaLogo)`
  width: 24px;
  height: 24px;
`;

export const TwitterIcon = styled(TwitterLogo)`
  width: 24px;
  height: 24px;
`;

export const LinkedInIcon = styled(LinkedInLogo)`
  width: 24px;
  height: 24px;
`;

export const MailIcon = styled(MailLogo)`
  width: 24px;
  height: 24px;
`;