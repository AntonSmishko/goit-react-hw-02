const Feedback = ({ feedback }) => {
    return (
        <div>
            {Object.keys(feedback).map(key => (
                <p key={key}>
                    {key}: {feedback[key]}
                </p>
            ))}
        </div>
    );
};

export default Feedback;
