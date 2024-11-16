const Feedback = ({ feedback, totalFeedback }) => {
    return (
        <div>
            <div>
                <ul>
                    {Object.keys(feedback).map(key => (
                        <li key={key}>
                            {key}: {feedback[key]}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {totalFeedback > 0 ? (
                    <ul>
                        <li>Total: {totalFeedback}</li>
                        <li>
                            Positive:
                            {Math.round((feedback.good / totalFeedback) * 100)}%
                        </li>
                    </ul>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Feedback;
