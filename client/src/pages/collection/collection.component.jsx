import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {CollectionPageContainer, TitleContainer, CollectionItemsContainer} from './collection.styles';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = () => {
    const {collectionId} = useParams();
    const collection = useSelector(selectCollection(collectionId));
    const { title, items } = collection;

    return (
        <CollectionPageContainer>
            <TitleContainer>{title}</TitleContainer>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};
export default CollectionPage;