import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from '../../actions';
import { removeProduct } from '../../actions';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const showProducts = useSelector(state => state.product);
    const dispatch = useDispatch();
    console.log(showProducts)


    //Remove Product
    const handleRemove=(id)=>{
        const theId={
            id:id
        }
        console.log(id, 'product id');
       dispatch(removeProduct(theId));
    }
    

    //Hook Form Start
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch(addProduct(data))
    }
    //Hook Form Ends
    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {errors.exampleRequired && <span>This field is required</span>}
                <input placeholder="Product Name" {...register("productName", { required: true })} /><br />
                <input placeholder="Price" {...register("price", { required: true })} /><br />
                <textarea rows="5" cols="20" placeholder="Product Detail" {...register("description", { required: true })}></textarea><br />
                <button type="submit">Add Product</button>
            </form>

            <h1>All Products</h1>
            <ul>
                {
                    showProducts.map(pd=><li key={pd.id}>{pd.productName} | {pd.price}  | {pd.description} <button onClick={()=>handleRemove(pd.id)}>Remove Now</button> </li>)
                }
            </ul>

        </div>
    );
};

export default AddProduct;