import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyNavbar from "./componets/nav";
import Dashboard from "./pages/dashboards";
import MyUser from "./pages/user";
import EditUser from "./pages/user/edit";
import MyProduct from "./pages/product";
import EditProduct from "./pages/product/edit";
import MyClient from "./pages/clientes";
import EditClient from "./pages/clientes/edit";






const RoutesAPP = () => {
    return (
        <>
        <BrowserRouter>
        <MyNavbar/>
        <Routes>
            <Route path='/' element={<Dashboard/>} />
            <Route path='/user' element={<MyUser/>} />
            <Route path='/editUser' element={<EditUser/>} />
            <Route path='/product' element={<MyProduct/>} />
            <Route path='/editProduct' element={<EditProduct/>} />
            <Route path='/client' element={<MyClient/>} />
            <Route path='/editClient' element={<EditClient/>} />
        </Routes>
        </BrowserRouter>
        </>

    )
}

export default RoutesAPP