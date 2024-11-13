const Options = ({ feedback }) => {
    return (
        <div>
            {Object.keys(feedback).map(key => (
                <button key={key}>{key}</button>
            ))}
            <button>Reset</button>
        </div>
    );
};

export default Options;
