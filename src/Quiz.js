import React, {Component} from 'react';

let quizData = require('./quiz_data.json');

class Quiz extends React.Component {

    constructor() {
        super();
        this.state = {quiz_position: 1};
    }

    render = function() {
        <div className="QuizQuestion">{quizData.quiz_questions[0].instruction_text}</div>
    }
}

export default Quiz;