/*

This source file is part of the Stanford Spezi open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
*/

import { useState, useEffect, createContext, useContext } from 'react';
import { useFHIRClient } from './FHIRClientContext';
import Loading from "../components/Loading";

export const PatientContext = createContext(null);

export const usePatient = () => useContext(PatientContext);

export const PatientProvider = ({ children }) => {

    const fhirClient = useFHIRClient();
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        // get the current patient from the FHIR server
        async function getCurrentPatient() {
            const currentPatient = await fhirClient.patient.read();
            setPatient(currentPatient);
        }
        getCurrentPatient();
    }, [fhirClient]);

    return (
        patient ?
        <PatientContext.Provider value={patient}>
            {children}
        </PatientContext.Provider>
        :
        <Loading />
    );
};