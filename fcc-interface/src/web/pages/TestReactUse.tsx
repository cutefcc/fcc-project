import { memo, useState, useCallback } from 'react';
import { useCookie } from '@mmfcc/hooks';

function TestReactUse() {
  const handleSetCookie = () => {
    useCookie('fcc', 'cutefcc');
  };
  return (
    <div>
      <h2>TestReactUse</h2>
      <button onClick={handleSetCookie}>setCookie: key: fcc value: cutefcc</button>
    </div>
  );
}
export default memo(TestReactUse);
