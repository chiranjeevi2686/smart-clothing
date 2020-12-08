import React from 'react';
import { CollectionItemContainer, BackgroundImage, CollectionFooterContainer, NameContainer, PriceContainer, AddButton } from './collection-item.styles.jsx';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';



const CollectionItem = ({ item, addItem }) => {

    const { imageUrl, name, price } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted >
                ADD TO CART
            </AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);