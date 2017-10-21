const pickBioData = (congressman, data) => (
  congressman.getIn(['bio', data])
);

const pickIdData = (congressman, data) => (
  congressman.getIn(['id', data])
);

const pickNameData = (congressman, data) => (
  congressman.getIn(['name', data])
);

const pickTermData = (congressman, data) => (
  congressman.get('terms').maxBy(term => new Date(term.get('end'))).get(data)
);

export {
  pickBioData,
  pickIdData,
  pickNameData,
  pickTermData,
};
