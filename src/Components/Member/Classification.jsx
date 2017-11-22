import React from 'react';
import { stateAbbToName, numToAbb } from '../../Utils';

const Classification = ({ member }) => {
  const houseLabel = () => (
    `Representative for ${stateAbbToName(member.get('state'))}'s ${numToAbb(member.get('district'))} Congressional District`
  );
  const senateLabel = () => (
    `Senator for the state of ${stateAbbToName(member.get('state'))}`
  );
  const chamberToLabel = {
    rep: () => houseLabel(),
    sen: () => senateLabel(),
  };
  return (
    <div className="label">
      {chamberToLabel[member.get('chamber')]()}
    </div>
  );
};

export default Classification;
