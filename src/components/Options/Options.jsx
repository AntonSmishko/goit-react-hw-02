const Options = ({
    feedback,

    updateFeedback,
    feedbackResetBtn,
}) => {
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
