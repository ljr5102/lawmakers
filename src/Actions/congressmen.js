const getCongressmenSuccess = congressmen => ({
  type: 'GET_CONGRESSMEN_SUCCESS',
  congressmen,
});

const getCongressmenFailure = () => ({
  type: 'GET_CONGRESSMEN_FAILURE',
});

export {
  getCongressmenSuccess,
  getCongressmenFailure,
};
