import React from 'react';

export default function ErrorBanner({ state, district }) {
  return (
    <ul className="error-list">
      {state ? (
        <li>
          <i className="fas fa-exclamation-circle" />
          &nbsp;
          {state ? "We couldn't find a state for the address you entered ¯\\_(ツ)_/¯" : ''}
        </li>
      ) : null}
      {district ? (
        <li>
          <i className="fas fa-exclamation-circle" />
          &nbsp;
          {district ? "We couldn't find a district for the address you entered ¯\\_(ツ)_/¯" : ''}
        </li>
      ) : null}
    </ul>
  );
}
