import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from "../../actions";

class SurveyList extends React.Component{
  componentDidMount(){
    this.props.fetchSurveys();
  }

  renderSurveys(){
    console.log(this.props.surveys);
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className='card darken-1' key={survey.id}>
          <div className='card-content'>
            <span className='card-title'>{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className='right'>
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className='card-action'>
            <a>Yes: {survey.yes}</a>
            <a>No: {survey.no}</a>
          </div>
        </div>
      );
    });
  }

  render(){
    if (this.props.surveys && this.props.surveys.length) {
      return (
        <div>
          {this.renderSurveys()}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

function mapStateToProps({ surveys }){
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);