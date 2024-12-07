import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-white: #F2FDFF;
  --color-black: #222222;

  --color-green-1: #1b444b;
  --color-green-2: #173f46;
  --color-green-3: #418C99;
  --color-magenta-1: #A14A76;

  --color-grey-light-1: #f9fafb;
  --color-grey-light-2: #f2f2f2;
  --color-grey-light-3: #dadada;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

::selection {
  color: var(--color-white);
  background: var(--color-green-3);
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  line-height: 1.5;
  min-height: 100vh;
  color: var(--color-black);
}

a{
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
