export const FILTER_BY_DATE_RANGE = "FILTER_BY_DATE_RANGE";
export const FILTER_BY_SERVICE = "FILTER_BY_SERVICE";
export const FILTER_SUCCESS = "FILTER_SUCCESS";
export const FILTER_FAILURE = "FILTER_FAILURE";
export const RESET_FILTER = "RESET_FILTER";

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
