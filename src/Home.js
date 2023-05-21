/*

This source file is part of the Stanford Spezi SMART-on-FHIR open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
*/

import { FHIRClientProvider } from './context/FHIRClientContext';
import { PatientProvider } from './context/PatientContext';
import { UserProvider } from './context/UserContext';
import Dashboard from './components/Dashboard';

const Home = () => {
  return (
    <FHIRClientProvider>
      <UserProvider>
        <PatientProvider>
          <Dashboard />
        </PatientProvider>
      </UserProvider>
    </FHIRClientProvider>
  );
}

export default Home;