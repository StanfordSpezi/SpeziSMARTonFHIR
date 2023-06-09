/*

This source file is part of the Stanford Spezi open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
*/

import { createContext, useContext, useState, useEffect } from 'react';
import FHIR from "fhirclient";
import Loading from '../components/Loading';

export const FHIRClientContext = createContext(null);

export const useFHIRClient = () => useContext(FHIRClientContext);

export const FHIRClientProvider = ({ children }) => {

    const [client, setClient] = useState(null);

    useEffect(() => {
        FHIR.oauth2.ready()
            .then((client) => setClient(client))
            .catch(console.error);
    }, []);

    return (
        client ?
            <FHIRClientContext.Provider value={client}>
                {children}
            </FHIRClientContext.Provider>
            : <Loading />);
}