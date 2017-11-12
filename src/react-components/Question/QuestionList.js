import React from "react";
import QuestionItem from "./QuestionItem";

class QuestionList extends React.Component {
  render() {
    return (
      <ul className="question-list">
        {
          this.props.questionList.map(function(item, idx) {
            return <QuestionItem key={idx} {...item}/>
          })
        }
      </ul>
    );
  }
}

export default QuestionList;
