import {ShowModalDispatchTypes, SHOW_MODAL, HIDE_MODAL} from '../types';
import {Dispatch} from 'redux';

export const showModalAction =
  () => (dispatch: Dispatch<ShowModalDispatchTypes>) => {
    dispatch({
      type: SHOW_MODAL,
    });
  };

export const hideModalAction =
  () => (dispatch: Dispatch<ShowModalDispatchTypes>) => {
    dispatch({
      type: HIDE_MODAL,
    });
  };
