/*

This source file is part of the Stanford Spezi SMART-on-FHIR open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
*/

import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <footer id="footer">
            <Container>
                <div>
                    <hr />
                    <p className="text-center">SMART-on-FHIR Dashboard for <a href="https://github.com/StanfordSpezi" target="_blank" rel="noreferrer">Stanford Spezi</a></p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;