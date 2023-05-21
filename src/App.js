/*

This source file is part of the Stanford Spezi open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
*/

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Launcher from "./Launcher";
import Home from "./Home";
import Splash from "./Splash";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/app" element={<Home />} />
                <Route path="/launch" element={<Launcher />} />
                <Route path="/" element={<Splash />} />
            </Routes>
        </Router>
    );
};