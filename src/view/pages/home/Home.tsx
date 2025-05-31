import orange from '../../../assets/products/fruit-1220367_1280.png'
import carrot from "../../../assets/products/isolated-964393_1280.png"
import kale from "../../../assets/products/kale-3189314_1280.png"
import {useEffect, useState} from "react";
import {Product} from "../../common/product/Product.tsx";

type productData = {
    id: number;
    name: string;
    price: number;
    currency: string;
    image: string;
}
export function Home() {

    const [products, setProducts] = useState<productData[]>([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('./product-data.json')
              const jsonData = await response.json()
              console.log(jsonData)
              setProducts(jsonData)
              console.log(products)
          } catch (error){
              console.error('Error Fetching data :'+error)
          }


  }
      fetchData()
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