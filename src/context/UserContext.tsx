/*

This source file is part of the Stanford Spezi open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
*/

import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { useFHIRClient } from './FHIRClientContext';
import Client from 'fhirclient/lib/Client';

type UserType = any;

export const UserContext = createContext<UserType | null>(null);

export const useUser = () => useContext(UserContext);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {

    const fhirClient: Client | null = useFHIRClient();
    const [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
        
        // get the current user resource from the FHIR server
        async function getUserData() {
            try {
                const currentUser = await fhirClient?.user.read();
                if (currentUser) {
                    setUser(currentUser);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getUserData();

    }, [fhirClient]);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};