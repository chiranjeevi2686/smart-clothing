import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {ContactContainer, ContactTitleContainer} from './contact.styles'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


const Contact = ()=>{
    const [contactInformation, setContactInformation] = useState({
        displayName: '',
        name: '',
        email: '',
        message: ''
    })
    const dispatch = useDispatch();
    const {displayName, name, email, message} = contactInformation;
    const handleSubmit = async event => {
        event.preventDefault();
        //dispatch();
    };
    const handleChange = event => {
        const { name, value } = event.target;
        setContactInformation({ ...contactInformation, [name]: value });
    };
    return(
        <ContactContainer>
            <ContactTitleContainer>Get in touch.</ContactTitleContainer>
        <form>
            <FormInput
            type='text'
            name='displayName'
            data-test-id='display-name'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
            />
            <FormInput
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
            label='email'
            required
            />
            <FormInput
            type='text'
            name='message'
            value={message}
            onChange={handleChange}
            label='message'
            required
            />
            <CustomButton type='submit'>SEND</CustomButton>
        </form>
        </ContactContainer>
    )
}
export default Contact;