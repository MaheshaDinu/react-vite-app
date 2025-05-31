
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home.tsx";
import {About} from "../../pages/about/About.tsx";
import {Contact} from "../../pages/contact/Contact.tsx";
import * as React from "react";
export function MainContent() {
    return (
        <div className='main-content bg-white w-full h-screen p-2 flex items-center justify-center'>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
        </div>
    );
}