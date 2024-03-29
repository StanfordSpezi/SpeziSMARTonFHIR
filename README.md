<!--

This source file is part of the Stanford Spezi SMART-on-FHIR open-source project

SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)

SPDX-License-Identifier: MIT
   
-->

# Spezi SMART-on-FHIR Demo

A demonstration of a SMART-on-FHIR dashboard application built in [React](https://react.dev/) that can be launched from within an Electronic Health Record (EHR) system. 

Check out the <a href="https://www.youtube.com/watch?v=CGj_X79yk-o">demo video</a> for an example.

## Installation

To run this software, you will first need to have [Node.js](https://nodejs.org/en) version 18+ installed on your system.

1. Install dependencies by running `npm install`.
2. Set the environment variables in `.env.sample` and rename it to `.env`.
    - `VITE_SMART_CLIENTID` and `VITE_SMART_CLIENTSECRET` are the client credentials registered with your EHR system. (Note: If you are testing with the SMART Launcher, it does not validate these, so they can be left blank.)
    - `VITE_SMART_SCOPE` is the set of [FHIR scopes](https://build.fhir.org/ig/HL7/smart-app-launch/scopes-and-launch-context.html) your app will request access to. 

## Testing with the SMART Launcher

1. Start the application locally by running `npm start`.
2. Load the [SMART Launcher](https://launch.smarthealthit.org) in your browser.
3. Select **Provider EHR Launch** and set **FHIR Version** to **R4**.
4. Select a sample patient and provider.
5. Enter `http://localhost:5173/launch` in **App Launch URL** and launch the app!

## Contributing

Contributions to this project are welcome. Please make sure to read the [contribution guidelines](https://github.com/StanfordSpezi/.github/blob/main/CONTRIBUTING.md) and the [contributor covenant code of conduct](https://github.com/StanfordSpezi/.github/blob/main/CODE_OF_CONDUCT.md) first.


## License

This project is licensed under the MIT License. See [Licenses](https://github.com/StanfordSpezi/Spezi/tree/main/LICENSES) for more information.

![Spezi Footer](https://raw.githubusercontent.com/StanfordSpezi/.github/main/assets/FooterLight.png#gh-light-mode-only)
![Spezi Footer](https://raw.githubusercontent.com/StanfordSpezi/.github/main/assets/FooterDark.png#gh-dark-mode-only)