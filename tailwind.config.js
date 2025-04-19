
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Good
    // This might be too broad
    // It will match `packages/**/node_modules` too
    // '../../packages/**/*.{js,ts,jsx,tsx}',
    
  ],
  extend: {
    animation: {
      typing: 'typing 3s steps(30, end), blink 0.75s step-end infinite',
      blink: 'blink 1s step-end infinite',
    },
    keyframes: {
      typing: {
        'from': { width: '0%' },
        'to': { width: '100%' },
      },
      blink: {
        '0%, 100%': { borderColor: 'transparent' },
        '50%': { borderColor: 'white' },
      },
    },
  }
  
}





