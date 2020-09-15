import React from 'react';
import useScrollPosition from 'use-scroll-position'
import './App.scss';

const isBrowser = typeof window !== `undefined`

const calcCur = (opts:any) => {
  const {final, max, min, end, cur} = opts
  if (typeof min !== "undefined") {
    return Math.min(final, min * (end - cur)/end)
  }
  if (typeof max !== "undefined") {
    return Math.max(final, max * (end - cur)/end)
  }
  throw new Error("Max or min required")
}

function App() {
  const scrollPos = useScrollPosition()
  const cur = scrollPos
  const end = 400;
  const logoStyle = {
    height: calcCur({final: 80, max: 400, end, cur}),
    marginBottom: calcCur({final: 4, min: -600, end, cur}),
    marginLeft: calcCur({final: 4, max: window.innerHeight / 2 - 200, end, cur})
  }
  const navStyle = {
    height: calcCur({final: 100, max: 800, end, cur}),
  }
  const mainStyle = {
    marginTop: cur + calcCur({final: 100, max: 800, end, cur}),
  }

  return (
    <div className="App">
      <nav className="main-nav">
        <div style={navStyle} className="header">
          <img style={logoStyle} className="logo" src="/logo/ashworth.svg" />
        </div>
      </nav>
      <main style={mainStyle} className="main-content">
      </main>
    </div>
  );
}

export default App;
