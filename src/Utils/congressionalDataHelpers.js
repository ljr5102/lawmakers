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

const numToAbb = (num) => {
  const str = num.toString();
  if (str[str.length - 1] === 1) {
    return `${str}st`;
  } else if (str[str.length - 1] === 2 && str[str.length - 2] !== 1) {
    return `${str}nd`;
  } else if (str[str.length - 1] === 3 && str[str.length - 2] !== 1) {
    return `${str}rd`;
  }
  return `${str}th`;
};

const stateAbbToName = abb => ({
  AK: 'Alaska',
  AL: 'Alabama',
  AR: 'Arkansas',
  AZ: 'Arizona',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  IA: 'Iowa',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  MA: 'Massachusetts',
  MD: 'Maryland',
  ME: 'Maine',
  MI: 'Michigan',
  MN: 'Minnesota',
  MO: 'Missouri',
  MS: 'Mississippi',
  MT: 'Montana',
  NC: 'North Carolina',
  ND: 'North Dakota',
  NE: 'Nebraska',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NV: 'Nevada',
  NY: 'New York',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VA: 'Virginia',
  VT: 'Vermont',
  WA: 'Washington',
  WI: 'Wisconsin',
  WV: 'West Virginia',
  WY: 'Wyoming',
}[abb]);

export {
  pickBioData,
  pickIdData,
  pickNameData,
  pickTermData,
  stateAbbToName,
  numToAbb,
};
