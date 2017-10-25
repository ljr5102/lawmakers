import { List } from 'immutable';

const chunk = (list, chunkSize) => (
  list.reduce((chunked, item) => {
    if (chunked.get(-1).size === chunkSize) {
      return chunked.push(List([item]));
    }
    const updatedChunk = chunked.get(-1).push(item);
    return chunked.set(-1, updatedChunk);
  }, List([List([])]))
);

export {
  chunk,
};
