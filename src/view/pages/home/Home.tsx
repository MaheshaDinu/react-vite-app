import orange from '../../../assets/products/fruit-1220367_1280.png'
import carrot from "../../../assets/products/isolated-964393_1280.png"
import kale from "../../../assets/products/kale-3189314_1280.png"
import {useEffect, useState} from "react";
import {Product} from "../../common/product/Product.tsx";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../store/store.ts";
import {getAllProducts} from "../../../slices/productSlice.ts";

type productData = {
    id: number;
    name: string;
    price: number;
    currency: string;
    image: string;
}
export function Home() {


    // const [products, setProducts] = useState<productData[]>([]);

    const dispatch = useDispatch<AppDispatch>()


    useEffect(() => {
        dispatch(getAllProducts());

    },[])
    return (
        <div >
            <div className="flex flex-wrap gap-3 justify-center items-center mx-auto">
                {
                    products.map((product)=> (
                        <Product key={product.id} data={product}/>
                    ))
                }

            </div>
        </div>


    );
}