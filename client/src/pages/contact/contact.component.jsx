import React from 'react';
import {
    ContactPageContainer,
    LogoContainer,
    LogoMainContainer,
    FacebookIcon,
    InstaIcon,
    TwitterIcon,
    LinkedInIcon
} from './contact.styles.jsx';
import Contact from '../../components/contact/contact.component';


const ContactPage = () => {
    return (
        <ContactPageContainer>
            <div></div>
            <Contact/>
            <LogoMainContainer>
            <LogoContainer to={{ pathname: "https://www.facebook.com/SmartFashion-111599627983805" }} target="_blank">
                <FacebookIcon />
            </LogoContainer>
            <LogoContainer to={{ pathname: "https://www.facebook.com/SmartFashion-111599627983805" }} target="_blank">
                <InstaIcon />
            </LogoContainer>
            <LogoContainer to={{ pathname: "https://www.facebook.com/SmartFashion-111599627983805" }} target="_blank">
                <TwitterIcon />
            </LogoContainer>
            <LogoContainer to={{ pathname: "https://www.facebook.com/SmartFashion-111599627983805" }} target="_blank">
                <LinkedInIcon />
            </LogoContainer>
           </LogoMainContainer>
        </ContactPageContainer>


    )
}

export default ContactPage;