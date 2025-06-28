import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";
import type {ProductData} from "../../../model/ProductData.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, rootState} from "../../../store/store.ts";
import {addItemToCart} from "../../../slices/cartSlice.ts";



type ProductProps = {
    data: ProductData
}

const images: Record<string, string> = import.meta.glob('../../../assets/products/*',{eager: true, import: 'default'});


export function Product({data}: ProductProps) {

   let image = images[`../../../assets/products/${data.image}`];

   const dispatch =useDispatch<AppDispatch>()

   const item = useSelector((state: rootState)=> state.cart.items.find(item => item.product.id === data.id))

  // const [isActive, setIsActive] = useState(false);
    const addToCart = () =>{

        //setIsActive(true);
        dispatch(addItemToCart(data))

    }

    return (
        <div className="w-34 h-fit  bg-green-100 rounded p-2 flex flex-col justify-between items-center shadow-md hover:bg-green-200 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
            <div>
                <img src={image} alt="orange" className="w-20 h-20 object-contain" />
            </div>


            <div className="flex items-center justify-between mt-1 text-xs">
                <h3 className="text-[#1f9e4b] pr-1">{data.name}</h3>
                <div className="bg-yellow-300 rounded-lg px-2 py-[1px]">
                    <h3>
                        {data.price} <small className="text-[8px]">{data.currency}</small>
                    </h3>
                </div>
            </div>

            {
                item ? (<ModifyCart data={{product: data}}/>):(<button onClick={addToCart} className="w-full mt-1 py-[3px] text-[10px] bg-[#1f9e4b] text-white border border-gray-400 rounded">
                    Add to Cart
                </button>)
            }
        </div>
    );
}