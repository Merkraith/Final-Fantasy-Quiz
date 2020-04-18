function Quiz(questions) {
    this.score = 0
    this.questions = questions;
    this.quesitonIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.quesitonIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.quesitonIndex;
}

Quiz.prototype.guess = function(answer) {
    this.quesitonIndex++;

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++
    }
}