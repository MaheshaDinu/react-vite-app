
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home.tsx";
import {About} from "../../pages/about/About.tsx";
import {Contact} from "../../pages/contact/Contact.tsx";
// import * as React from "react";
import {ShoppingCart} from "../../pages/shoppingCart/ShoppingCart.tsx";
// import {itemsList} from "../ModifyCart/ModifyCart.tsx";
export function MainContent() {
    return (
        <div className=' bg-white w-full h-screen p-2 flex items-center justify-center'>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/shopping-cart' element={<ShoppingCart />}></Route>
            </Routes>
        </div>
    );
}