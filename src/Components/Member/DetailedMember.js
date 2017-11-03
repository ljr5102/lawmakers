import { connect } from 'react-redux';
import { Map } from 'immutable';
import { getCongressmen } from '../../Actions';
import MemberDisplay from './MemberDisplay';

const getNextAndPrev = (list, id) => {
  const currentIdx = list.findIndex(cong => cong.get('id') === id);
  if (currentIdx === -1) {
    return Map({
      next: 0,
      previous: 0,
    });
  }
  const nextIndex = currentIdx + 1 === list.size ? 0 : currentIdx + 1;
  const prevIndex = currentIdx === 0 ? -1 : currentIdx - 1;
  return Map({
    next: list.get(nextIndex).get('id'),
    previous: list.get(prevIndex).get('id'),
  });
};

const mapStateToProps = ({ congressmen }, { id }) => {
  const nextPrev = getNextAndPrev(congressmen.get('list'), id);
  return {
    member: congressmen.get('list').find(cong => cong.get('id') === id),
    nextId: nextPrev.get('next'),
    previousId: nextPrev.get('previous'),
  };
};

const mapDispatchToProps = dispatch => ({
  load: () => {
    dispatch(getCongressmen());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MemberDisplay);
