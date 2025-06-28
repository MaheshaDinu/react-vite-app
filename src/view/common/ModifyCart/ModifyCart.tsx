import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../store/store.ts";
import {decreaseQuantity, increaseQuantity} from "../../../slices/cartSlice.ts";


interface ModifyCartProps {
    data: any
}
// export const itemsList:CartItem[] =[]

export function ModifyCart({data}: ModifyCartProps) {
    const dispatch = useDispatch<AppDispatch>()
    const [itemCount, setItemCount] = useState(1);

    // useEffect(()=>{
    //     let existingItem = itemsList.find(item => item.product.id === data.product.id)
    //
    //     if (existingItem){
    //         existingItem.itemCount = itemCount;
    //     }else {
    //         itemsList.push({product: data.product, itemCount: itemCount})
    //     }
    // },[itemCount,data])
    // console.log(itemsList)
    const onDecreaseItemCount = ()=> {
        // setItemCount(itemCount > 1 ? itemCount-1 :(alert("Item count cannot be less than 1"),itemCount));
        if (itemCount > 1){
            setItemCount((prev) => prev - 1);
            dispatch(decreaseQuantity(data.id))
        } else {
            alert("Item count cannot be less than 1");
        }
    }

    const onIncreaseItemCount= () => {
        //
        setItemCount((prev) => prev + 1);
        dispatch(increaseQuantity(data.id))
    }

    return (
        <div className='w-full mt-1 p-[2.4px] text-[8px] text-center'>
            <button onClick={onDecreaseItemCount} className='float-left text-[8px] bg-yellow-300 rounded-lg h-3 w-4'>-</button>
            <small className='text-[8px]'>{itemCount}</small>
            <button onClick={onIncreaseItemCount} className='float-right text-[8px] bg-yellow-300 rounded-lg h-3 w-4'>+</button>

        </div>
    );
}