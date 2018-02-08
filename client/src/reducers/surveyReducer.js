import { FETCH_SURVEYS} from "../actions/types";

const initialState = [{
  id: 'fjlalfka',
  title: 'Email Survey Title',
  body: 'this is the sample body content for survey',
  dateSent: 2000,
  yes: 51,
  no: 617
}, {
  id: 'fjl2t2llfka',
  title: 'Email Sample Title2',
  body: 'This body content will be a body of email for customers',
  dateSent: 2500,
  yes: 5112,
  no: 2897
}];

export default function (state = [], action) {
  switch(action.type) {
    case FETCH_SURVEYS:
      // return action.payload;
      return initialState;
    default:
      return state;
  }
}