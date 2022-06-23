import { addItemToCart, removeItemFromCart } from './cart.utils';

describe('cart utility tests', () => {
    const cartItems = [
        {
            id: 21,
            name: "Brown Shearling",
            imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
            price: 165,
            quantity: 3
        },
        {
            id: 25,
            name: "Hats",
            imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
            price: 22,
            quantity: 1
        }
    ]
    it('Add a new item to cart', () => {
        const cartItemToAdd = {
            id: 20,
            imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
            name: "Grey Jean Jacket",
            price: 90
        }
        const expected = [
            {
                id: 21,
                name: 'Brown Shearling',
                imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                price: 165,
                quantity: 3
            },
            {
                id: 25,
                name: "Hats",
                imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
                price: 22,
                quantity: 1
            },
            {
                id: 20,
                imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
                name: 'Grey Jean Jacket',
                price: 90,
                quantity: 1
            }
        ]
        const actual = addItemToCart(cartItems, cartItemToAdd)
        expect(actual).toEqual(expected)

    })

    it('Add an existing item to cart', () => {
        const cartItemToAdd = {
            id: 21,
            name: "Brown Shearling",
            imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
            price: 165
        }
        const expected = [
            {
                id: 21,
                name: 'Brown Shearling',
                imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                price: 165,
                quantity: 4
            },
            {
                id: 25,
                name: "Hats",
                imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
                price: 22,
                quantity: 1
            }
        ]
        const actual = addItemToCart(cartItems, cartItemToAdd)
        expect(actual).toEqual(expected)

    })

    it('Remove an existing item from cart', () => {
        const cartItemToRemove = {
            id: 21,
            name: "Brown Shearling",
            imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
            price: 165,
        }
        const expected = [
            {
                id: 21,
                name: 'Brown Shearling',
                imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                price: 165,
                quantity: 2
            },
            {
                id: 25,
                name: "Hats",
                imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
                price: 22,
                quantity: 1
            }
        ]
        const actual = removeItemFromCart(cartItems, cartItemToRemove)
        expect(actual).toEqual(expected)

    })

    it('Remove an existing item from cart which has quantity 1', () => {
        const cartItems = [
            {
                id: 21,
                name: "Brown Shearling",
                imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
                price: 165,
                quantity: 1
            },
            {
                id: 25,
                name: "Hats",
                imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
                price: 22,
                quantity: 1
            }
        ]
        const cartItemToRemove = {
            id: 21,
            name: "Brown Shearling",
            imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
            price: 165,
        }
        const expected = [
            {
                id: 25,
                name: "Hats",
                imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
                price: 22,
                quantity: 1
            }
        ]
        const actual = removeItemFromCart(cartItems, cartItemToRemove)
        expect(actual).toEqual(expected)

    })
})



