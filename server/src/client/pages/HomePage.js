import React from 'react';

const HomePage = () => {
  return (
    <div>
      <div>Home here</div>
      <button onClick={() => console.log('hi there')}>Click here</button>
    </div>
  );
};

export default { component: HomePage };
