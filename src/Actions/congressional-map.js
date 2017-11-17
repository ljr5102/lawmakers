import { fetchMapData } from '../Utils';

const getMemberMapData = code => ({
  type: 'GET_CONGRESSIONAL_MAP',
  promise: fetchMapData(code),
});

export {
  getMemberMapData,
};
