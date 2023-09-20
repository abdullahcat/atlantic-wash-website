import Head from 'next/head';
import React, { useState } from 'react';

type Question = {
    id: number;
    question: string;
    answer: string;
};

const questions: Question[] = [
    {
        id: 1,
        question: "How does Atlantic Wash work?",
        answer: "Atlantic Wash harnesses advanced reservation technologies...",
    },
    {
        id: 2,
        question: "What makes Atlantic Wash different?",
        answer: "We prioritize futuristic approaches...",
    },
    // ... add more questions here
];

const FAQ: React.FC = () => {
    const [activeQuestionId, setActiveQuestionId] = useState<number | null>(null);

    return (
        <div className="flex flex-col min-h-screen font-mono ">
            <Head>
                <title>FAQ</title>
            </Head>
            <main className="flex-grow space-y-6 p-4">
                <h1 className="text-2xl font-bold mt-16">Frequently Asked Questions</h1> {/* added mt-16 here */}

                <div className="space-y-4">
                    {questions.map((q) => (
                        <div key={q.id} className="border-2 border-white p-4 rounded-none">
                            <div className="flex justify-between items-center">
                                <h3
                                    onClick={() => setActiveQuestionId(q.id === activeQuestionId ? null : q.id)}
                                    className="cursor-pointer text-xl font-bold"
                                >
                                    {q.question}
                                </h3>
                                <span
                                    onClick={() => setActiveQuestionId(q.id === activeQuestionId ? null : q.id)}
                                    className="cursor-pointer text-xl"
                                >
                                    {q.id === activeQuestionId ? '▲' : '▼'}
                                </span>
                            </div>
                            {q.id === activeQuestionId && <p className="mt-2 text-white text-l font-medium">{q.answer}</p>}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default FAQ;