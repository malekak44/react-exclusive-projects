import React from 'react';
import './Quiz.scss';
import { useGlobalContext } from './context';
import SetupForm from './SetupForm';
import Modal from './Modal';

const Wrapper = () => {
    const { waiting, loading, questions, index, correct, nextQuestion, checkAnswer } = useGlobalContext();

    if (waiting) {
        return <SetupForm />
    }
    if (loading) {
        return <main id="quiz">
            <div className="loading"></div>
        </main>
    }

    const { question, incorrect_answers, correct_answer } = questions[index];
    let answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4);
    if (tempIndex === 3) {
        answers.push(correct_answer);
    } else {
        answers.push(answers[tempIndex]);
        answers[tempIndex] = correct_answer;
    }

    return (
        <main id="quiz">
            <Modal />
            <section className='quiz'>
                <p className='correct-answers'>
                    correct answers : {correct}/{index}
                </p>
                <article className='container'>
                    <h2 dangerouslySetInnerHTML={{ __html: question }} />
                    <div className='btn-container'>
                        {answers.map((answer, index) => {
                            return (
                                <button
                                    key={index}
                                    className='answer-btn'
                                    onClick={() => checkAnswer(correct_answer === answer)}
                                    dangerouslySetInnerHTML={{ __html: answer }}
                                />
                            )
                        })}
                    </div>
                </article>
                <button className='next-question' onClick={nextQuestion}>
                    next question
                </button>
            </section>
        </main>
    )
}

export default Wrapper;