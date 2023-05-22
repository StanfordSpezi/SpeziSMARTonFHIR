/*

This source file is part of the Stanford Spezi SMART-on-FHIR open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
*/

import { Navbar } from 'react-bootstrap';
import logo from '../images/cardinal_logo_white.svg';
import { useUser } from '../context/UserContext';
import { useFHIRClient } from '../context/FHIRClientContext';
import { formatName } from '../fhir';
import { Button } from 'react-bootstrap';

const Header = () => {
    const user = useUser();
    const fhirClient = useFHIRClient();
    const id_token = fhirClient.getIdToken();

    const getProviderName = () => {
        // try to get logged in provider's name from user context. 
        // if no context available, then get from ID token
        if (user) {
            return formatName(user);
        } else if (id_token) {
            return id_token.given_name + " " + id_token.family_name;
        } else {
            return "";
        }
    }

    const providerName = getProviderName();

    return (
        <Navbar className="spezi-bg-color" fixed="top" expand="lg" style={{display: 'flex', justifyContent: 'space-between'}}>
            <Navbar.Brand href="#home" style={{paddingLeft: '20px'}}>
                <img
                    src={logo}
                    className="d-inline-block align-top"
                    alt="Spezi Logo"
                    height="50"
                />
            </Navbar.Brand>
            <Navbar.Text className="text-white" style={{margin: '0 auto'}}>
                <h5>Spezi SMART-on-FHIR Dashboard</h5>
            </Navbar.Text>
            <Navbar.Text className="text-white" style={{paddingRight: '20px'}}>
                {providerName !== "" ? <Button variant="dark"> {providerName}</Button> : null}
            </Navbar.Text>
        </Navbar>
    )
}

export default Header;