import { takeLatest, put, select, delay } from "redux-saga/effects";
import {
  FILTER_BY_DATE_RANGE,
  FILTER_BY_SERVICE,
  FILTER_SUCCESS,
  CREATE_SHIPMENT_SUCCESS,
  CREATE_SHIPMENT_REQUEST,
  LOAD_INITIAL_DATA_FAILURE,
  LOAD_INITIAL_DATA_SUCCESS,
  LOAD_INITIAL_DATA_REQUEST,
} from "../store/Actions";
import { DataSource } from "../data/Data_souce";
const getFilterState = (state) => ({
  dateRange: state.dateRange,
  serviceType: state.serviceType,
});
function* filterSagaData() {
  try {
    const { dateRange, serviceType } = yield select(getFilterState);
    let filteredData = DataSource;
    if (serviceType !== null && serviceType !== undefined) {
      const isSPX = serviceType === "SPX"; // SPX → true, PHT → false
      filteredData = filteredData.filter((item) => item.serviec === isSPX);
    }
    if (dateRange && dateRange.length === 2) {
      const [start, end] = dateRange;
      const startDate = start.startOf("day").toDate();
      const endDate = end.endOf("day").toDate();
      filteredData = filteredData.filter((item) => {
        const parts = item.datetime.split(/[/ :]/);
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        const hours = parseInt(parts[3], 10);
        const minutes = parseInt(parts[4], 10);
        const seconds = parseInt(parts[5], 10);
        const itemDate = new Date(year, month, day, hours, minutes, seconds);
        return itemDate >= startDate && itemDate <= endDate;
      });
    }
    yield delay(2000);
    yield put({ type: FILTER_SUCCESS, payload: filteredData });
  } catch (error) {
    console.error("Error in filterSagaData:", error);
  }
}
function* loadInitialDataSaga() {
  try {
    yield delay(3000);
    yield put({ type: LOAD_INITIAL_DATA_SUCCESS, payload: DataSource });
  } catch (error) {
    yield put({ type: LOAD_INITIAL_DATA_FAILURE, payload: error.message });
  }
}

function* createShipmentSaga(action) {
  try {
    const newShipment = {
      key: Date.now().toString(),
      ...action.payload,
      prepaid: true,
      serviec: true, // true = SPX, false = PHT
      datetime: new Date().toLocaleString("vi-VN"),
    };

    yield delay(2000);

    yield put({ type: CREATE_SHIPMENT_SUCCESS, payload: newShipment });
  } catch (error) {
    console.error("Lỗi tạo shipment:", error);
  }
}

export function* watchFilter() {
  yield takeLatest([FILTER_BY_DATE_RANGE, FILTER_BY_SERVICE], filterSagaData);
  yield takeLatest(LOAD_INITIAL_DATA_REQUEST, loadInitialDataSaga);
  yield takeLatest(CREATE_SHIPMENT_REQUEST, createShipmentSaga);
}
