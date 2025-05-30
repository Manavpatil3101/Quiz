import classes from "./QuizTitle.module.css"

const QuizTitle = ({qtitle})=>{
    return(
        <div className={classes.quiztitle}>
            <h3>{qtitle}</h3>
        </div>
    )
}

export default QuizTitle;