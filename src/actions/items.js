
export const addItem = newItem => (dispatch) => {
    return dispatch({
        type: "ADD_ITEM",
        newItem,
    });
};


export const removeItem = id => (dispatch) => {
    return dispatch({
        type: "REMOVE_ITEM",
        id,
    });
};

export const addComment = comment => (dispatch) => {
    return dispatch({
        type: "ADD_COMMENT",
        comment,
    });
};