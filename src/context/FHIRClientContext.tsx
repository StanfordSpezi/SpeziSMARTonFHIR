/*

This source file is part of the Stanford Spezi open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
*/

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import FHIR from "fhirclient";
import Loading from '../components/Loading';
import Client from 'fhirclient/lib/Client';

interface FHIRClientProviderProps {
    children: ReactNode;
}

export const FHIRClientContext = createContext<Client | null>(null);

export const useFHIRClient = () => useContext(FHIRClientContext);

export const FHIRClientProvider: React.FC<FHIRClientProviderProps> = ({ children }) => {

    const [client, setClient] = useState<Client | null>(null);

    useEffect(() => {
        FHIR.oauth2.ready()
            .then((client: Client) => setClient(client))
            .catch(console.error);
    }, []);

    return (
        client ?
            <FHIRClientContext.Provider value={client}>
                {children}
            </FHIRClientContext.Provider>
            : <Loading />);
}