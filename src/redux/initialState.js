import { v4 as uuidv4 } from 'uuid';

const initialState = {
    products: [
        {
            id: uuidv4(),
            name: 'milk',
            quantity: 1,
            price: 20,
            ready: false
        },
        {
            id: uuidv4(),
            name: 'cereal',
            quantity: 1,
            price: 50,
            ready: false
        },
        {
            id: uuidv4(),
            name: 'soda',
            quantity: 6,
            price: 12,
            ready: false
        },
        {
            id: uuidv4(),
            name: 'eggs',
            quantity: 1,
            price: 40,
            ready: false
        },
        {
            id: uuidv4(),
            name: 'cheese',
            quantity: 1,
            price: 60,
            ready: false
        },
        {
            id: uuidv4(),
            name: 'yogurt',
            quantity: 6,
            price: 15,
            ready: false
        },
        {
            id: uuidv4(),
            name: 'potatoes',
            quantity: 6,
            price: 35,
            ready: false
        },
        {
            id: uuidv4(),
            name: 'onions',
            quantity: 1,
            price: 22,
            ready: false
        },
        {
            id: uuidv4(),
            name: 'cooking oil',
            quantity: 1,
            price: 32,
            ready: false
        }
    ],
    cart: [
        {
            id: uuidv4(),
            name: 'tomato',
            quantity: 1,
            price: 30,
            ready: true
        },
        {
            id: uuidv4(),
            name: 'sugar',
            quantity: 1,
            price: 10,
            ready: true
        },
        {
            id: uuidv4(),
            name: 'salt',
            quantity: 1,
            price: 40,
            ready: true
        },
        {
            id: uuidv4(),
            name: 'bread',
            quantity: 1,
            price: 40,
            ready: true
        }
      
    ]
}

export { initialState }