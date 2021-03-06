export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            console.log(action.payload);
            const index = state.basket.findIndex(
                basketItem => basketItem.id === action.payload
            );
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`cant find this product`);
            }
            console.log(newBasket);
            return { ...state, basket: newBasket };
        default:
            return state;
    }
};
export default reducer;
