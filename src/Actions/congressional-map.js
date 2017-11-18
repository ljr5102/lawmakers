import { fetchMapData } from '../Utils';

const getMemberMapData = code => ({
  type: 'GET_CONGRESSIONAL_MAP',
  promise: fetchMapData(code),
});

const clearMapData = () => ({
  type: 'CLEAR_MAP_DATA',
});

export {
  getMemberMapData,
  clearMapData,
};
