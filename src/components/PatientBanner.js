/*

This source file is part of the Stanford Spezi SMART-on-FHIR open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
*/

import { formatName } from '../fhir';
import { usePatient } from '../context/PatientContext';
import moment from 'moment';

const PatientBanner = () => {

    const patient = usePatient();

    return (
        <div>
            <p className="lead">
                <strong>{formatName(patient)}</strong> · {moment().diff(patient.birthDate, 'years')}-year-old {patient.gender || ""} ·
                DOB {moment(patient.birthDate).format('MM/DD/YYYY')}
            </p>
        </div>
    )
};

export default PatientBanner;