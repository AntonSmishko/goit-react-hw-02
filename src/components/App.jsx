import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
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

    const totalFeedback = Object.values(feedback).reduce(
        (total, value) => total + value,
        0
    );

    return (
        <>
            <Description />
            <Options
                totalFeedback={totalFeedback}
                feedback={feedback}
                updateFeedback={updateFeedback}
                feedbackResetBtn={feedbackResetBtn}
            />
            {totalFeedback > 0 ? (
                <Feedback feedback={feedback} />
            ) : (
                <Notification />
            )}
        </>
    );
}

export default App;
