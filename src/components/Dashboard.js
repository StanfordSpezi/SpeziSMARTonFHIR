/*

This source file is part of the Stanford Spezi SMART-on-FHIR open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
*/

import Header from './Header';
import Footer from './Footer';
import TabbedInterface from './TabbedInterface';

const Dashboard = () => {
    return (
        <>
            <Header />
            <TabbedInterface />
            <Footer />
        </>
    );
}

export default Dashboard;