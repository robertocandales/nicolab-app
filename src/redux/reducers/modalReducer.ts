import {ShowModalDispatchTypes, SHOW_MODAL, HIDE_MODAL} from '../types';

interface IinitialState {
  isVisible: boolean;
}

const initialState: IinitialState = {
  isVisible: false,
};
const modalReducer = (
  state: IinitialState = initialState,
  action: ShowModalDispatchTypes,
): IinitialState => {
  switch (action.type) {
    case SHOW_MODAL:
      return {...state, isVisible: true};
    case HIDE_MODAL:
      return {...state, isVisible: false};

    default:
      return state;
  }
};

export default modalReducer;
