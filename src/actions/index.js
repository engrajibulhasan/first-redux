export const increment=(number)=>{
    return{
        type:'INCREMENT',
        payload:number
    }
}

export const decrement=()=>{
    return{
        type:'DECREMENT'
    }
}

export const addProduct=(productData)=>{
    return{
        type:'ADD_PRODUCT',
        payload:productData
    }
}

export const removeProduct=(id)=>{
    return{
        type:'REMOVE_PRODUCT',
        payload:id
    }
}