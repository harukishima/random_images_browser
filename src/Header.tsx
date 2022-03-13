import React, { useEffect, useState } from 'react';
import { PhotoQuery } from './App';

interface HeaderProp {
  callback: (query: PhotoQuery) => Promise<void>;
}

const Header = (prop: HeaderProp) => {
  const { callback } = prop;
  const [num, setNum] = useState<number>(20);
  const [r18, setR18] = useState<boolean>(false);

  useEffect(() => {
    callback({ num, r18 });
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    callback({
      num,
      r18,
    });
    //scroll to top
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ position: 'fixed' }}>
      <label htmlFor="num">Num: </label>
      <input
        name="num"
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      <label htmlFor="r18">R18</label>
      <input
        name="r18"
        type="checkbox"
        value={r18 ? 'true' : 'false'}
        onChange={(e) => {
          setR18(!r18);
        }}
      />
      <button onClick={handleSubmit}>Refresh</button>
    </div>
  );
};

export default Header;
