/*

This source file is part of the Stanford Spezi open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
*/

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { useFHIRClient } from './FHIRClientContext';
import Loading from "../components/Loading";
import Client from 'fhirclient/lib/Client'
import { Patient } from 'fhir/r4';

interface PatientProviderProps {
    children: ReactNode;
}

export const PatientContext = createContext<Patient | null>(null);

export const usePatient = (): Patient | null => useContext(PatientContext);

export const PatientProvider: React.FC<PatientProviderProps> = ({ children }) => {
    const fhirClient: Client | null = useFHIRClient();
    const [patient, setPatient] = useState<Patient | undefined>(undefined);

    useEffect(() => {
        // get the current patient from the FHIR server
        async function getCurrentPatient() {
            const currentPatient = await fhirClient?.patient.read();
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