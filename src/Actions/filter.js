import { fetchStateDistrictData } from '../Utils';

const updateFilter = param => ({
  type: 'UPDATE_FILTER',
  param,
});

const fetchAddressAndFilter = place => ({
  type: 'FETCH_STATE_DISTRICT_DATA',
  promise: fetchStateDistrictData(place),
});

const clearAddressFilter = () => ({
  type: 'CLEAR_ADDRESS_FILTER',
});

const clearFilters = () => ({
  type: 'CLEAR_FILTERS',
});

export {
  updateFilter,
  fetchAddressAndFilter,
  clearAddressFilter,
  clearFilters,
};
