const Options = ({
    feedback,
    totalFeedback,
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
            {totalFeedback > 0 ? (
                <button onClick={feedbackResetBtn}>Reset</button>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Options;
