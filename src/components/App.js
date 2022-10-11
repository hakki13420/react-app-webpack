import React from "react"
import ListGif from './ListGif'
import "./styles/app.css"
import {Routes, Route, BrowserRouter } from 'react-router-dom'
import NavBar from "./NavBar"
import Contact from "./Contact"

const App=()=>{
    return (
        <div className="app">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ListGif />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </BrowserRouter>            
        </div>
    )
}

export default App