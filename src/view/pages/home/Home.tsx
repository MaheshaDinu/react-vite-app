
import {useEffect} from "react";
import {Product} from "../../common/product/Product.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch} from "../../../store/store.ts";
import {getAllProducts} from "../../../slices/productSlice.ts";
import type {rootState} from "../../../store/store.ts";


export function Home() {


    // const [products, setProducts] = useState<productData[]>([]);

    const dispatch = useDispatch<AppDispatch>()
    const {list} =useSelector((state: rootState) => state.product )


    useEffect(() => {
        dispatch(getAllProducts());


    },[])
    return (
        <div >
            <div className="flex flex-wrap gap-3 justify-center items-center mx-auto">
                {
                    list.map((product)=> (
                        <Product key={product.id} data={product}/>
                    ))
                }

            </div>
        </div>


    );
}