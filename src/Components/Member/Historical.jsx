import React from 'react';

const Historical = ({ member }) => (
  <div className="mem-bot">
    <div className="header">Historical Term Data</div>
    <div className="data">
      <table>
        <tbody>
          <tr>
            <th>Start</th>
            <th>End</th>
            <th>Type</th>
            <th>Party</th>
            <th>State</th>
            <th>District</th>
          </tr>
          {member.get('terms').map((term, idx) => (
            <tr key={idx}>
              <td>{new Date(term.get('start')).toLocaleDateString()}</td>
              <td>{new Date(term.get('end')).toLocaleDateString()}</td>
              <td>{term.get('type').toUpperCase()}</td>
              <td>{term.get('party')}</td>
              <td>{term.get('state')}</td>
              <td>{term.get('district')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Historical;
