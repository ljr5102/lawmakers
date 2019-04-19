import { fetchCongressionalMapData, fetchSenateMapData } from '../Utils';

const getMemberCongressionalMapData = code => ({
  type: 'GET_CONGRESSIONAL_MAP',
  promise: fetchCongressionalMapData(code),
});

const getMemberSenateMapData = state => ({
  type: 'GET_SENATE_MAP',
  promise: fetchSenateMapData(state),
});

const clearMapData = () => ({
  type: 'CLEAR_MAP_DATA',
});

const hideMap = () => ({
  type: 'HIDE_MAP',
});

export {
  getMemberCongressionalMapData,
  getMemberSenateMapData,
  clearMapData,
  hideMap,
};
