// src/components/Question.js

function Question({ questionData, onAnswer }) {
    return (
        <div className="question">
            <h2>{questionData.question}</h2>
            <div className="answers">
                {questionData.answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => onAnswer(answer.next || answer.strategy)}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Question;