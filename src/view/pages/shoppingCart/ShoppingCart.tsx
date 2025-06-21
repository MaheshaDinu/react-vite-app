import type {CartItem} from "../../../model/CartItem.ts";

interface ShoppingCartProps{
    itemsList: CartItem[];
}
export function ShoppingCart({itemsList}) {
    return (
        <div className='flex justify-center items-center px-4'>
            <div className='w-full max-w-screen-xl border-green-200'>
                <table className='min-w-full border-collapse'>
                    <thead>
                        <tr className='bg-green-700 text-white'>
                            <th className="text-xs font-semibold border-green-600 p-2">ID</th>
                            <th className="text-xs font-semibold border-green-600 p-2">Name</th>
                            <th className="text-xs font-semibold border-green-600 p-2">Unit Price</th>
                            <th className="text-xs font-semibold border-green-600 p-2">Quantity</th>
                            <th className="text-xs font-semibold border-green-600 p-2">Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        itemsList.length===0?(
                            <tr>
                            <td className='border-green-300 border p-2 bg-green-100' colSpan={5}>
                                <p className='text-center text-sm text-gray-600'>No items in cart</p>
                            </td>
                            </tr>
                        ):(
                            itemsList.map((item, index) =>(
                                <tr key={item.product.id} className={`${index % 2 === 0 ? 'bg-green-100' : 'bg-green-200'} hover:bg-green-300  border-green-300 text-center`}>
                                    <td>{item.product.id}</td>
                                    <td>{item.product.name}</td>
                                    <td>{item.product.price} {item.product.currency}</td>
                                    <td>{item.itemCount}</td>
                                    <td>{item.product.price * item.itemCount} {item.product.currency}</td>
                                </tr>
                            ))
                        )

                    }
                    </tbody>

                </table>

            </div>

        </div>
    );
}