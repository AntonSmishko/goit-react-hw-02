const Options = ({ feedback, setFeedback }) => {
    const onClickHandler = value => {
        setFeedback(prev => ({ ...prev, [value]: prev[value] + 1 }));
    };

    const feedbackResetBtn = () => {
        console.log('reset');
        setFeedback({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    return (
        <div>
            {Object.keys(feedback).map(key => (
                <button key={key} onClick={() => onClickHandler(key)}>
                    {key}
                </button>
            ))}
            <button onClick={feedbackResetBtn}>Reset</button>
        </div>
    );
};

export default Options;
