import React from 'react';
import { render } from '@testing-library/react';
import CollectionPage from './collection.component';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const defaultStore = {
    shop: {
        collections: {
            "hats": {
                "routeName": "hats",
                "id": "lQ1JWe8M0dlc5RPcGNDE",
                "title": "Hats",
                "items": [
                    {
                        "id": 1,
                        "price": 25,
                        "imageUrl": "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                        "name": "Brown Brim"
                    },
                    {
                        "imageUrl": "https://i.ibb.co/ypkgK0X/blue-beanie.png",
                        "price": 18,
                        "name": "Blue Beanie",
                        "id": 2
                    },
                    {
                        "id": 3,
                        "name": "Brown Cowboy",
                        "imageUrl": "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
                        "price": 35
                    },
                    {
                        "name": "Grey Brim",
                        "id": 4,
                        "imageUrl": "https://i.ibb.co/RjBLWxB/grey-brim.png",
                        "price": 25
                    },
                    {
                        "imageUrl": "https://i.ibb.co/YTjW3vF/green-beanie.png",
                        "name": "Green Beanie",
                        "price": 18,
                        "id": 5
                    },
                    {
                        "name": "Palm Tree Cap",
                        "price": 14,
                        "imageUrl": "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
                        "id": 6
                    },
                    {
                        "name": "Red Beanie",
                        "imageUrl": "https://i.ibb.co/bLB646Z/red-beanie.png",
                        "price": 18,
                        "id": 7
                    },
                    {
                        "imageUrl": "https://i.ibb.co/1f2nWMM/wolf-cap.png",
                        "id": 8,
                        "name": "Wolf Cap",
                        "price": 14
                    },
                    {
                        "name": "Blue Snapback",
                        "price": 16,
                        "imageUrl": "https://i.ibb.co/X2VJP2W/blue-snapback.png",
                        "id": 9
                    }
                ]
            }
        }}
};
const mockStore = configureStore();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    collectionId: 'hats',
  }),
}));

describe('CollectionPage component', () => {
    it('should render CollectionPage', () => {
        const { asFragment } = render(<Provider store={mockStore(defaultStore)}>
            <CollectionPage />
        </Provider>)
        expect(asFragment()).toMatchSnapshot();
    })
})

