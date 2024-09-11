import React from 'react';
import useScrollDirection from './hooks/useScrollDirection'; // 커스텀 훅 import

const CheckScrollDirection = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div>
      <h1>Scroll direction: {scrollDirection}</h1>
      {/* 다른 컴포넌트 로직 */}
    </div>
  );
};

export default CheckScrollDirection;
