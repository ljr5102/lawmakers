import React from 'react';

const Contact = ({ member }) => (
  <div className="mem-low">
    <div className="header">Contact This Congressman</div>
    <div className="data">
      <div>
        <h2>By Mail</h2>
        <div>{member.getIn(['contactInfo', 'address'])}</div>
      </div>
      <div>
        <h2>By Phone</h2>
        <div>{member.getIn(['contactInfo', 'phone'])}</div>
      </div>
      <div>
        <h2>Visit Website</h2>
        <a href={member.getIn(['contactInfo', 'url'])}>{member.getIn(['contactInfo', 'url'])}</a>
      </div>
    </div>
  </div>
);

export default Contact;
