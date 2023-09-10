/*

This source file is part of the Stanford Spezi open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
*/

import Client from "fhirclient/lib/Client";
import { Medication, Coding, Practitioner, Patient } from 'fhir/r4';

export const getAllResources = async (client: Client) => {
    const resourceBundle = await client.request(`/Patient/${client.patient.id}/$everything`,
        {
            pageLimit: 0,
            flat: true,
            useRefreshToken: true
        });
    return resourceBundle;
};

export const getAllMedications = async (client: Client) => {
    const release = await client.getFhirRelease();
    const resource = (release > 2) ? "MedicationRequest" : "MedicationOrder";
    try {
        const bundle = await client.request(resource, {
            resolveReferences: ["medicationReference"],
        });
        if (!bundle.entry || !bundle.entry.length) {
            return bundle.entry;
        } else {
            return bundle.entry.map((medication: Medication) => {
                return getMedicationName(
                    client.getPath(medication, "resource.medicationCodeableConcept.coding") ||
                    client.getPath(medication, "resource.medicationReference.code.coding")
                );
            });
        }
    } catch (error) {
        console.error(error);
    }
};

export const getMedicationName = (codings: Coding[]) => {
    var coding = codings.find((code) => {
        return code.system === "http://www.nlm.nih.gov/research/umls/rxnorm";
    });
    return (coding && coding.display) || "Unknown Medication";
};

export const formatName = (resource: Practitioner | Patient) => {
    const name = (resource.name instanceof Array) ? (resource.name.find((e) => e.use === "official") || resource.name[0]) : resource.name;
    return name ? `${(name.given ?? []).join(" ")} ${name.family ?? ""} ${name.suffix ?? ""}` : "";
};