export interface QuestionsInfo {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}
export interface questionsApiResponse {
  questions: QuestionsInfo[];

}

export interface QuestionContetnt {
  type: string,
  difficulty: string,
  category: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[],

}

export interface ButtonNameList {
  buttonNameList: string[]
}
