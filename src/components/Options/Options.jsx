const Options = ({ feedback, setFeedback, updateFeedback }) => {
    // const updateFeedback = feedbackType => {
    //     setFeedback(prev => ({
    //         ...prev,
    //         [feedbackType]: prev[feedbackType] + 1,
    //     }));
    // };

    const feedbackResetBtn = () => {
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    return (
        <div>
            {Object.keys(feedback).map(key => (
                <button key={key} onClick={() => updateFeedback(key)}>
                    {key}
                </button>
            ))}
            <button onClick={feedbackResetBtn}>Reset</button>
        </div>
    );
};

export default Options;
