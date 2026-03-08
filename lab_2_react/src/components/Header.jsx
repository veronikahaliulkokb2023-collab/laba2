import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Haliulko Veronika</h1>
      <p>Computer Science Student</p>
      <nav aria-label="Contacts navigation">
        <ul>
          <li>
            <a href="mailto:veronika.haliulko@gmail.com">Email</a>
          </li>
          <li>
            <a href="tel:+380000000000">Phone</a>
          </li>
          <li>
            <a href="https://github.com/veronikahaliulkokb2023-collab" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
