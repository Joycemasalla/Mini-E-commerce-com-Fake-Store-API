// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', 'Segoe UI', 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: #2d3748;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
  }

  #root {
    min-height: 100vh;
    background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  }

  button {
    border: none;
    outline: none;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  input, select, textarea {
    font-family: inherit;
    outline: none;
    border: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(45deg, #5a67d8, #68d391);
  }

  /* Animações globais */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }

  /* Responsividade */
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;