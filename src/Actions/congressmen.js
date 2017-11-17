import { fetchCongress } from '../Utils';

const getCongressmen = () => ({
  type: 'GET_CONGRESSMEN',
  promise: fetchCongress(),
});

export {
  getCongressmen,
};
