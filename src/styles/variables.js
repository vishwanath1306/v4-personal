import { css } from 'styled-components';

const variables = css`
  :root {
    --dark-navy: #011F65;
    --navy: #012169;
    --light-navy: #0033a0
    --lightest-navy: #007dba;
    --navy-shadow: rgba(1, 33, 105, 0.7);
    --dark-slate: #495670;
    --slate: #b1b3b3;
    --light-slate: #d0d0ce;
    --lightest-slate: #d9d9d6;
    --white: #f8f8f8;
    --yellow: #f2a900;
    --yellow-tint: rgba(242, 169, 0, 0.1);
    --green: #64ffda;
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #c6007e;
    --blue: #00aeef;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
