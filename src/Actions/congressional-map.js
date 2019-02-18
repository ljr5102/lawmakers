import { fetchCongressionalMapData, fetchCongressionalMapDataNew, fetchSenateMapData, fetchSenateMapDataNew } from '../Utils';

const getMemberCongressionalMapData = code => ({
  type: 'GET_CONGRESSIONAL_MAP',
  promise: fetchCongressionalMapData(code),
});

const getMemberCongressionalMapDataNew = code => ({
  type: 'GET_CONGRESSIONAL_MAP_NEW',
  promise: fetchCongressionalMapDataNew(code),
});

const getMemberSenateMapData = state => ({
  type: 'GET_SENATE_MAP',
  promise: fetchSenateMapData(state),
});

const getMemberSenateMapDataNew = state => ({
  type: 'GET_SENATE_MAP_NEW',
  promise: fetchSenateMapDataNew(state),
});

const clearMapData = () => ({
  type: 'CLEAR_MAP_DATA',
});

const hideMap = () => ({
  type: 'HIDE_MAP',
});

export {
  getMemberCongressionalMapData,
  getMemberCongressionalMapDataNew,
  getMemberSenateMapData,
  getMemberSenateMapDataNew,
  clearMapData,
  hideMap,
};
