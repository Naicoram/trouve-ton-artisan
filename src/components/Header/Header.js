import { useState } from 'react';
import './Header.css';

function Header() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="flex container">
      <img id="logo" src="/assets/Logo.png" alt="Logo header"/>
      <div>
        <ul className="flex">
          <li><a href='/artisans?category=batiment'>Bâtiments</a></li>
          <li><a href='/artisans?category=service'>Services</a></li>
          <li><a href='/artisans?category=fabrication'>Fabrication</a></li>
          <li><a href='/artisans?category=alimentation'>Alimentation</a></li>
        </ul>
      </div>
      <form action={'/artisans'}>
        <input type="text" name='search' value={inputValue} onChange={e => setInputValue(e.target.value)}/>
        <button type='submit'>GO</button>
      </form>
    </div>
  );
}

export default Header;