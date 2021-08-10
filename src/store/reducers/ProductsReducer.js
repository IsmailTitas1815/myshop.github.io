const initState = {

    products: [

        { id: 1, name: "men t-shirt summer season", image: "1.jpg", price: 20, discount: 2, discountPrice: (20 - (2 / 100) * 20), quantity: 1, desc: "lorem Deserunt cillum aute duis pariatur dolor Lorem aute culpa aliqua excepteur. Excepteur veniam irure duis" },

        { id: 2, name: "women jacket for summer", image: "2.jpg", price: 30, discount: 5, discountPrice: 30 - (5 / 100) * 30, quantity: 1, desc: "lorem Deserunt cillum aute duis pariatur dolor Lorem aute culpa aliqua excepteur. Excepteur veniam irure duis" },

        { id: 3, name: "men trouser for all seasons", image: "3.jpg", price: 15, discount: 3, discountPrice: 15 - (3 / 100) * 15, quantity: 1, desc: "lorem Deserunt cillum aute duis pariatur dolor Lorem aute culpa aliqua excepteur. Excepteur veniam irure duis" },

        { id: 4, name: "shoes for all seasons", image: "4.jpg", price: 50, discount: 4, discountPrice: 50 - (4 / 100) * 50, quantity: 1, desc: "lorem Deserunt cillum aute duis pariatur dolor Lorem aute culpa aliqua excepteur. Excepteur veniam irure duis" },

        { id: 5, name: "women skirt for all seasons", image: "5.jpg", price: 25, discount: 2, discountPrice: 25 - (2 / 100) * 25, quantity: 1, desc: "lorem Deserunt cillum aute duis pariatur dolor Lorem aute culpa aliqua excepteur. Excepteur veniam irure duis" },

        { id: 6, name: "women jeans", image: "6.jpg", price: 60, discount: 6, discountPrice: 60 - (6 / 100) * 60, quantity: 1, desc: "lorem Deserunt cillum aute duis pariatur dolor Lorem aute culpa aliqua excepteur. Excepteur veniam irure duis" },

        { id: 7, name: "men trouser for all seasons", image: "7.jpg", price: 35, discount: 2, discountPrice: 35 - (2 / 100) * 35, quantity: 1, desc: "lorem Deserunt cillum aute duis pariatur dolor Lorem aute culpa aliqua excepteur. Excepteur veniam irure duis" },

        { id: 8, name: "men jacket for winter", image: "8.jpg", price: 80, discount: 7, discountPrice: 80 - (7 / 100) * 80, quantity: 1, desc: "lorem Deserunt cillum aute duis pariatur dolor Lorem aute culpa aliqua excepteur. Excepteur veniam irure duis" },

        { id: 9, name: "men shirt for all seasons", image: "9.jpg", price: 95, discount: 4, discountPrice: 95 - (4 / 100) * 95, quantity: 1, desc: "lorem Deserunt cillum aute duis pariatur dolor Lorem aute culpa aliqua excepteur. Excepteur veniam irure duis" },

        { id: 10, name: "men winter jacket", image: "10.jpg", price: 120, discount: 3, discountPrice: 120 - (3 / 100) * 120, quantity: 1, desc: "lorem Deserunt cillum aute duis pariatur dolor Lorem aute culpa aliqua excepteur. Excepteur veniam irure duis" },

    ],
    product: {},
    orders: []


}

const ProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case "PRODUCT": {
            return {
                ...state,
                product: state.products.find(product => product.id === parseInt(action.payload))
            }
        }
        case "LOAD_ORDERS": {
            let orders = []
            for (let key in action.payload) {
                orders.push({
                    ...action.payload[key],
                    id: key
                })
            }
            return {
                ...state,
                orders: orders
            }
        }
        default:
            return state;
    }
}

export default ProductsReducer;