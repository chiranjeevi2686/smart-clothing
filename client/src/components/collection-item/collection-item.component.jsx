import React from 'react';
import {
    CollectionItemContainer,
    BackgroundImage,
    CollectionFooterContainer,
    NameContainer,
    PriceContainer,
    AddButton
} from './collection-item.styles.jsx';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';



const CollectionItem = ({ item }) => {

    const { imageUrl, name, price } = item;
    const dispatch = useDispatch();
    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>${price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton
                data-test-id='add-cart-button'
                onClick={() => dispatch(addItem(item))} inverted >
                ADD TO CART
            </AddButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem;