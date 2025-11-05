import { Slider } from 'antd';
import React from 'react';

const App: React.FC = () => {
  const onChange = (value) => {
    console.log(value);
  };

  return (
    <div style={{ width: '320px' }}>
      <Slider range defaultValue={[30, 70]} onChange={onChange} />
      <Slider range defaultValue={[30, 70]} disabled={true} />
    </div>
  );
};

export default App;
