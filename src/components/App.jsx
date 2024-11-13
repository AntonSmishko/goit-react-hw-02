import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
// eslint-disable-next-line no-unused-vars
import { useState } from 'react';

function App() {
    const [feedback, setFeedback] = useState({
        good: 24,
        neutral: 8,
        bad: 1,
    });

    return (
        <>
            <Description />
            <Options feedback={feedback} />
            <Feedback feedback={feedback} />
        </>
    );
}

export default App;
