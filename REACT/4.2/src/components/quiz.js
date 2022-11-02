import Q1 from './Q1'
import Q2 from './Q2'
import QuizTitle from './QuizTitle'
import './quiz.css'
function Quiz() {
    return(
        <div id='Quiz'>
            <QuizTitle></QuizTitle>
            <Q1></Q1>
            <Q2></Q2>
        </div>
    )
}

export default Quiz