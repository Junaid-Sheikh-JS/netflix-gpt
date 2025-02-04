import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { Routes, Route } from "react-router";

const Body = () => {
    return (
        <>
            <Routes>
                <Route path="/" index element={<Login />} />
                <Route path="browse" element={<Browse />} />
            </Routes>
        </>
    )
}

export default Body