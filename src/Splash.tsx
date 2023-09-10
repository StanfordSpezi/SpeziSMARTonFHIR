/*

This source file is part of the Stanford Spezi SMART-on-FHIR open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
*/

import logo from './images/spezi_logo.png';

export default function Splash() {
    return (
        <div>
            <div className="mx-auto mt-5 mb-5 text-center">
                <img src={logo} style={{width: 200}} alt="Spezi Logo" />
                <br />
                <br />
                <h2>Spezi SMART-on-FHIR Dashboard</h2>
                <br />
                <p className="lead">Please launch the dashboard from a SMART-on-FHIR compatible launcher to continue.</p>
            </div>
        </div>
    )
}