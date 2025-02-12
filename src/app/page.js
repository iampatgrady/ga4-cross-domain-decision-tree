// src/app/page.js
"use client";
import { useState } from 'react';
import Question from '../components/Question';
import { decisionTree } from '../data/tree';
import { strategyDetails } from '../data/strategyDetails';
import Markdown from 'markdown-to-jsx';

export default function Home() {
    const [currentQuestionId, setCurrentQuestionId] = useState('start');
    const [strategy, setStrategy] = useState(null);

    const handleAnswer = (next) => {
        if (typeof next === 'string' && decisionTree[next]) {
            setCurrentQuestionId(next);
            setStrategy(null);
        } else {
            setStrategy(next);
            setCurrentQuestionId(null);
        }
    };

    const handleReset = () => {
        setCurrentQuestionId('start');
        setStrategy(null);
    };

    return (
        <main className="container">
            <h1>Cross-Domain Strategy Guide</h1>
            {currentQuestionId && (
                <Question
                    questionData={decisionTree[currentQuestionId]}
                    onAnswer={handleAnswer}
                />
            )}
            {strategy && (
                <div className="result">
                    {/* Wrap h2 and button in a div */}
                    <div className="result-header">
                        <h3>Recommended Strategy:</h3>
                        <button className="reset-button" onClick={handleReset}>
                            Start Over
                        </button>
                    </div>
                    {strategyDetails[strategy] && (
                        <div className="strategy-details">
                            <h2>{strategyDetails[strategy].title}</h2>
                            <Markdown>{strategyDetails[strategy].description}</Markdown>
                        </div>
                    )}
                </div>
            )}
        </main>
    );
}