export const FILTER_BY_DATE_RANGE = "FILTER_BY_DATE_RANGE";
export const FILTER_BY_SERVICE = "FILTER_BY_SERVICE";
export const FILTER_SUCCESS = "FILTER_SUCCESS";
export const FILTER_FAILURE = "FILTER_FAILURE";
export const RESET_FILTER = "RESET_FILTER";
export const LOAD_INITIAL_DATA_REQUEST = "LOAD_INITIAL_DATA_REQUEST";
export const LOAD_INITIAL_DATA_SUCCESS = "LOAD_INITIAL_DATA_SUCCESS";
export const LOAD_INITIAL_DATA_FAILURE = "LOAD_INITIAL_DATA_FAILURE";
export const CREATE_SHIPMENT_REQUEST = "CREATE_SHIPMENT_REQUEST";
export const CREATE_SHIPMENT_SUCCESS = "CREATE_SHIPMENT_SUCCESS";
export const CREATE_SHIPMENT_FAILURE = "CREATE_SHIPMENT_FAILURE";

export const createShipment = (shipmentData) => ({
  type: CREATE_SHIPMENT_REQUEST,
  payload: shipmentData,
});

export const loadInitialData = () => ({
  type: LOAD_INITIAL_DATA_REQUEST,
});

export const filterByDateRange = (dateRange) => ({
  type: FILTER_BY_DATE_RANGE,
  payload: dateRange,
});

export const filterByService = (serviceType) => ({
  type: FILTER_BY_SERVICE,
  payload: serviceType,
});

export const clearFilters = () => ({
  type: RESET_FILTER,
});
