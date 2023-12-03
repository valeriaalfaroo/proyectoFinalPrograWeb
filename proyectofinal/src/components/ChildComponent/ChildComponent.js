// ChildComponent.js
import React from 'react';

const ChildComponent = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ChildComponent;