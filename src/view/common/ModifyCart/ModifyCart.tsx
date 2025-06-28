import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, rootState} from "../../../store/store.ts";
import {decreaseQuantity, increaseQuantity} from "../../../slices/cartSlice.ts";


interface ModifyCartProps {
    data: any
}
// export const itemsList:CartItem[] =[]

export function ModifyCart({data}: ModifyCartProps) {
    const dispatch = useDispatch<AppDispatch>()

    console.log(data);
    // const [itemCount, setItemCount] = useState(1);
   const item = useSelector((state: rootState) => state.cart.items.find(cartItem => cartItem.product.id === data.product.id));
    console.log(item);

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
        if (item && item.itemCount > 1){
            dispatch(decreaseQuantity(data.product.id))
        } else {
            alert("Item count cannot be less than 1");
        }
    }

    const onIncreaseItemCount= () => {
        //

        dispatch(increaseQuantity(data.product.id))
    }

    return (
        <div className='w-full mt-1 p-[2.4px] text-[8px] text-center'>
            <button onClick={onDecreaseItemCount} className='float-left text-[8px] bg-yellow-300 rounded-lg h-3 w-4'>-</button>
            <small className='text-[8px]'>{item?.itemCount}</small>
            <button onClick={onIncreaseItemCount} className='float-right text-[8px] bg-yellow-300 rounded-lg h-3 w-4'>+</button>

        </div>
    );
}