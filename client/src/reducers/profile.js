import {
  CLEAR_PROFIlE,
  GET_PROFILE,
  UPDATE_PROFIlE,
  PROFILE_ERROR,
} from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFIlE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFIlE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false,
      };

    default:
      return state;
  }
}