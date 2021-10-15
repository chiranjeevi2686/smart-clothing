import React from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state= {
        hasErrored:false
        };
    };

    static getDerivedStateFromError(error){
        return {hasErrored:true}
    };
    componentDidCatch(error, info){
        console.log('Error:',error);
        console.log('Info:',info);
    };
    render(){
        if(this.state.hasErrored){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer/>
                    <ErrorImageText>oops! the page is broken</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    };
};
export default ErrorBoundary;