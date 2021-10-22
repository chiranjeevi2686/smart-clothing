import React from 'react';
import Alert from 'react-bootstrap/Alert';

const SmartAlert = ({ varient, message }) => (
    <Alert variant={varient}>
        {message}
    </Alert>
)

export default SmartAlert;