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

export {
  updateFilter,
  fetchAddressAndFilter,
  clearAddressFilter,
};
