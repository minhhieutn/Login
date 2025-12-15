import { DataSource } from "../data/Data_souce";
import {
  FILTER_BY_SERVICE,
  FILTER_SUCCESS,
  FILTER_FAILURE,
  RESET_FILTER,
  FILTER_BY_DATE_RANGE,
} from "./Actions";
const initialState = {
  data: DataSource,
  dateRange: null,
  serviceType: null,
  filteredData: DataSource,
  loading: false,
  error: null,
};

const filteredReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_DATE_RANGE:
      return {
        ...state,
        dateRange: action.payload,
        loading: true,
      };
    case FILTER_BY_SERVICE:
      return {
        ...state,
        serviceType: action.payload,
        loading: true,
      };
    case FILTER_SUCCESS:
      return {
        ...state,
        filteredData: action.payload,
        loading: false,
        error: null,
      };
    case FILTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_FILTER:
      return {
        ...state,
        filteredData: DataSource,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
export default filteredReducer;
