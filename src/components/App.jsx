import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';

function App() {
    const [feedback, setFeedback] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    const updateFeedback = feedbackType => {
        setFeedback(prev => ({
            ...prev,
            [feedbackType]: prev[feedbackType] + 1,
        }));
    };

    const feedbackResetBtn = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    return (
        <>
            <Description />
            <Options
                feedback={feedback}
                updateFeedback={updateFeedback}
                feedbackResetBtn={feedbackResetBtn}
            />
            <Feedback feedback={feedback} />
        </>
    );
}

export default App;
