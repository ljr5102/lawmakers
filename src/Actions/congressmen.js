const fetchingCongressmenRequest = () => ({
  type: 'GET_CONGRESSMEN_REQUEST',
});

const getCongressmenSuccess = congressmen => ({
  type: 'GET_CONGRESSMEN_SUCCESS',
  congressmen,
});

const getCongressmenFailure = () => ({
  type: 'GET_CONGRESSMEN_FAILURE',
});

const fetchingCongressmenEnd = () => ({
  type: 'GET_CONGRESSMEN_END',
});

export {
  fetchingCongressmenRequest,
  getCongressmenSuccess,
  getCongressmenFailure,
  fetchingCongressmenEnd,
};
