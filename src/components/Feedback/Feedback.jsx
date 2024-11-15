const Feedback = ({ feedback }) => {
    return (
        <div>
            <ul>
                {Object.keys(feedback).map(key => (
                    <li key={key}>
                        {key}: {feedback[key]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Feedback;
