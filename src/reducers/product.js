//[]
let lastId=0;
const productReducer=(state=[],action)=>{
    if(action.type==="ADD_PRODUCT"){
        return [
            ...state,
            {
                id: ++lastId,
                productName:action.payload.productName,
                description:action.payload.description,
                price:action.payload.price
            }
        ]
    }
    else if(action.type==="REMOVE_PRODUCT"){
        return state.filter(pd=>pd.id !== action.payload.id)
    }
    else{
        return state;
    }
}

export default productReducer;