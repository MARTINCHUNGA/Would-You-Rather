
export const LOAD_QUESTIONS = 'LOAD_QUESTION'

export function loadQuestions(questions){
    return {
        type : LOAD_QUESTIONS,
        questions
    }
}