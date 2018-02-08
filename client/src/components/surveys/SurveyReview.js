import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });


  return (
    <div>
      <h5>please confirm your entries</h5>
      {reviewFields}
      <button onClick={onCancel} className='yellow darken-3 btn-flat'>Back</button>
      <button onClick={() => submitSurvey(formValues, history)} className='teal white-text right btn-flat'>Send Survey<i className='material-icons right'>email</i></button>
    </div>
  );
};

function mapStateToProps({ form }) {
  return { formValues: form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));