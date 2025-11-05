import { Slider } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <div style={{ width: '320px' }}>
      <Slider defaultValue={50} onChange={onChange} reverse />
      <Slider defaultValue={50} disabled={true} reverse />
    </div>
  );
};

export default App;
