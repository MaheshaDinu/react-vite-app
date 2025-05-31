import orange from "../../../assets/products/fruit-1220367_1280.png";
import {useState} from "react";
import {ModifyCart} from "../ModifyCart/ModifyCart.tsx";

type productData = {
    id: number;
    name: string;
    price: number;
    currency: string;
    image: string;
}

type ProductProps = {
    data: productData
}

const images: Record<string, string> = import.meta.glob('../../../assets/products/*',{eager: true, import: 'default'});


export function Product({data}: ProductProps) {
   //console.log(images)
    console.log(`../../../assets/products/${data.image}`);
   let image = images[`../../../assets/products/${data.image}`];

   const [isActive, setIsActive] = useState(false);
    const addToCart = () =>{

        setIsActive(true);
    }

    return (
        <div className="w-34 h-fit  bg-amber-100 rounded p-2 flex flex-col justify-between items-center">
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
                isActive?(<ModifyCart data={{product: data}}/>):(<button onClick={addToCart} className="w-full mt-1 py-[3px] text-[10px] bg-[#1f9e4b] text-white border border-gray-400 rounded">
                    Add to Cart
                </button>)
            }
        </div>
    );
}