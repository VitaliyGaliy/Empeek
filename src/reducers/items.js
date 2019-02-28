const initials = {
    items: [],
};

const reducer = (state = initials, action) => {

    switch (action.type) {

        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.newItem] };

        case "REMOVE_ITEM":
            const index = state.items.findIndex(item => item.id === action.id);
            return {
                ...state,
                items: [...state.items.slice(0, index),
                ...state.items.slice(index + 1)],
            };
        case "ADD_COMMENT":
            const indexOfItem = state.items.findIndex(item => item.id === action.comment.itemId);
            const item = state.items[indexOfItem]

            const itemsComment = { ...item, comments: [...item.comments, action.comment] }
            return {
                ...state, items: [...state.items.slice(0, indexOfItem), itemsComment,
                ...state.items.slice(indexOfItem + 1)]
            };
        default:
            return state;
    }
};

export default reducer;