import React from 'react';

const Summary = ({ activity, sleep, phq9 }) => {
    const extractValuesAndDatesFromObservation = (data) => {
        let extractedData = data.entry.map(item => {
            return {
                date: item.resource.effectiveDateTime,
                value: item.resource.valueQuantity.value
            }
        });

        return extractedData;
    }

    const formatDataForPrompt = (data) => {
        return data.map(item => `Date: ${item.date}, Value: ${item.value}`).join("\n");
    }

    const parsePhq9 = (phq9) => {
        const questions = [
            "Little interest or pleasure in doing things",
            "Feeling down, depressed, or hopeless",
            "Trouble falling or staying asleep, or sleeping too much",
            "Feeling tired or having little energy",
            "Poor appetite or overeating",
            "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
            "Trouble concentrating on things, such as reading the newspaper or watching television",
            "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
            "Thoughts that you would be better off dead or of hurting yourself in some way"
        ];

        let result = "";

        phq9.entry.forEach((entry, index) => {
            result += `Survey ${index + 1} Date: ${entry.resource.authored}\n`;

            entry.resource.item.forEach((item) => {
                let questionIndex = parseInt(item.linkId.split('.')[1]) - 1; // Get question number from linkId and subtract 1 for 0-indexed array
                result += `${item.linkId} (${questions[questionIndex]}): ${item.answer[0].valueInteger}\n`;
            });

            result += '\n'; // Adds an empty line between survey results
        });

        return result;
    }

    // Call the function
    const extractedActivityData = extractValuesAndDatesFromObservation(activity);
    const extractedSleepData = extractValuesAndDatesFromObservation(sleep);

    // Format the data
    const formattedActivityData = formatDataForPrompt(extractedActivityData);
    const formattedSleepData = formatDataForPrompt(extractedSleepData);
    const formattedPHQ9 = parsePhq9(phq9);

    const prompt = `
      Please summarize the following data over the past couple of weeks and focus on the trends in the data:

      Activity:
      ${formattedActivityData}

      Sleep:
      ${formattedSleepData}

      PHQ-9 Responses:
      ${formattedPHQ9}
    `

    // Render the extracted data
    return (
        <div>
            <div>
                <br />
                <p class="lead">Activity Trends:</p>
                <p>Over the first two weeks of May 2023, activity data showed variable values ranging from 3,000 to 9,000. The pattern is not consistently increasing or decreasing; however, it seems to oscillate with no clear trends. The average value is approximately 6,150 suggesting a moderate level of activity.</p>

                <p class="lead">Sleep Trends:</p>
                <p>Sleep data from May 12th to 23rd, 2023 showed an average of about 7 hours per night. This suggests relatively stable sleep patterns, with small fluctuations between 6 and 8 hours of sleep per night, aligning with the generally recommended amount of sleep for adults.</p>

                <p class="lead">PHQ-9 Survey Trends:</p>
                <p>From the PHQ-9 survey responses, it's clear that there's a general decreasing trend in the reported symptoms of depression from January to February 2023.</p>
                <ul>
                    <li>The score for "Little interest or pleasure in doing things" reduced from 3 to 1.</li>
                    <li>The score for "Feeling down, depressed, or hopeless" reduced from 3 to 1.</li>
                    <li>The score for "Poor appetite or overeating" reduced from 3 to 1.</li>
                    <li>The score for "Feeling bad about yourself" reduced from 3 to 1.</li>
                </ul>
                <p>There are some items, like "Trouble falling or staying asleep, or sleeping too much" and "Thoughts that you would be better off dead or of hurting yourself in some way" where the scores remained relatively constant. These changes suggest some improvement in the individual's mental health state, although some issues remained consistent. These could be areas of focus for potential intervention or treatment. However, there are no recent PHQ-9 surveys for comparison, so it's unclear if these trends continued into May.</p>
            </div>

        </div>
    );
};

export default Summary;
