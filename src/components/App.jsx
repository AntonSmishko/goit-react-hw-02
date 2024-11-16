import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';
import Options from './Options/Options';

import { useState, useEffect } from 'react';

function App() {
    const [feedback, setFeedback] = useState(() => {
        return (
            JSON.parse(localStorage.getItem('feedback')) || {
                good: 0,
                neutral: 0,
                bad: 0,
            }
        );
    });

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

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
                <Feedback feedback={feedback} totalFeedback={totalFeedback} />
            ) : (
                <Notification />
            )}
        </>
    );
}

export default App;
