
import {
     getUsers,
     getQuestions,
     saveQuestionAnswer,
     saveQuestion
} from './Data'



export function loadInitialData() {
    return Promise.all([getQuestions(), getUsers()])
    .then(
        [questions, users]
    ) => (
        {
            questions,
            users
    }
    )
}

export function save_QuestionAnswer(data){
    return saveQuestionAnswer(data)
}

export function save_Question(data){
    return saveQuestion(data)
}