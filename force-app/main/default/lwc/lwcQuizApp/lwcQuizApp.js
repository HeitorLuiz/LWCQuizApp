import { LightningElement } from 'lwc';

export default class LwcQuizApp extends LightningElement {

    myQuestions= [{
        id: "Question1",
        question: "Which one of the following is not a template loop?",
        answers:{
            a: "foreach",
            b: "iterator",
            c: "map loop"
            },
        correctAnswer: "c"
            },{
        id: "Question2",
        question: "Which of the file is invalid in LWC component folder?",
        answers:{
            a: ".svg",
            b: ".apex",
            c: ".js"
        },
        correctAnswer: "b"
    },{
        id: "Question3",
        question: "Which method is used to navigate in LWC?",
        answers:{
            a: "NavigationMixin",
            b: "navigateTo",
            c: "navigate"
        },
        correctAnswer: "a"
    }
                ]
                changeHandler(event) {
                    console.log("name", event.target.name);
                    console.log("value", event.target.value);
    }
}