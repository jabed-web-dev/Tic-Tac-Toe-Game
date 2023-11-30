window.addEventListener('load', () => {
  const html = document.documentElement,
    dark = '🌙',
    light = '🔆',
    button = document.createElement('button');

  let styles = {
    position: 'absolute',
    top: '2px',
    right: '2px',
    zIndex: 99,
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    userSelect: 'none',
    outline: 'none',
    border: 'none',
    padding: 0,
    borderRadius: '5px',
    fontSize: '14px',
    lineHeight: '1.3',
    textAlign: 'center',
    backgroundColor: 'rgba(200,200,200,0.3)',
  };

  for (let key in styles) {
    button.style[key] = styles[key];
  }

  if (
    localStorage['color-scheme'] === 'dark' ||
    (!('color-scheme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    button.innerHTML = dark;
    html.classList.add('dark');
  } else {
    button.innerHTML = light;
    html.classList.remove('dark');
  }

  button.addEventListener('click', (event) => {
    event.preventDefault();
    if (
      localStorage['color-scheme'] === 'dark' ||
      (!('color-scheme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      button.innerHTML = light;
      html.classList.remove('dark');
      localStorage.setItem('color-scheme', 'light');
    } else {
      button.innerHTML = dark;
      html.classList.add('dark');
      localStorage.setItem('color-scheme', 'dark');
    }
  });

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem('color-scheme')
  html.appendChild(button);
});
