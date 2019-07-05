export default {
    namespaced: true,
    state: {
        items: [
            {
                url: '/cart',
                text: 'Cart List'
            },
            {
                url: '/er404',
                text: 'Error Page'
            },
            {
                url: '/product',
                text: 'Products'
            }
        ]
    },
    getters: {
        items(state){
            return state.items;
        }
    }
};