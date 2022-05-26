import React from 'react';
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item.styles';
import { useHistory } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const history = useHistory();
    return (
        <MenuItemContainer
            size={size}
            onClick={() => history.push(`${linkUrl}`)}>
            <BackgroundImageContainer
                className='background-image'
                imageUrl={imageUrl}
            />
            <ContentContainer>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}
export default MenuItem;