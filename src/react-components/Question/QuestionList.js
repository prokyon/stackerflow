import React from "react";
import QuestionItem from "./QuestionItem";

class QuestionList extends React.Component {
  render() {
    return (
      <ul className="question-list">
        <QuestionItem
          id = {this.props.questionList[0].id}
          name = {this.props.questionList[0].name}
          link = {this.props.questionList[0].link}
          media = {this.props.questionList[0].media}
          likes = {this.props.questionList[0].likes}
          description = {this.props.questionList[0].description}
          user = {this.props.questionList[0].user}
        />
        <QuestionItem
          id = {this.props.questionList[1].id}
          name = {this.props.questionList[1].name}
          link = {this.props.questionList[1].link}
          media = {this.props.questionList[1].media}
          likes = {this.props.questionList[1].likes}
          description = {this.props.questionList[1].description}
          user = {this.props.questionList[1].user}
        />
      </ul>
    );
  }
}

export default QuestionList;
