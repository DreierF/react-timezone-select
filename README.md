# 🌐⌚ react-timezone-select

[![Bundlephobia](https://badgen.net/bundlephobia/minzip/react-timezone-select?style=flat-square)](https://bundlephobia.com/result?p=react-timezone-select@0.8.3)
[![NPM Downloads](https://img.shields.io/npm/dm/react-timezone-select?style=flat-square)](https://www.npmjs.com/package/react-timezone-select)
[![npm](https://img.shields.io/npm/v/react-timezone-select?style=flat-square)](https://www.npmjs.com/package/react-timezone-select)
[![GitHub issues](https://img.shields.io/github/issues/ndom91/react-timezone-select?style=flat-square)](https://github.com/ndom91/react-timezone-select/issues)
[![MIT](https://badgen.net/badge/license/MIT/blue?style=flat-square)](https://github.com/ndom91/react-timezone-select/blob/main/LICENSE)

Another react timezone select component, I know.. However this one has a few key benefits!

While looking around for a good option, I had trouble finding a timezone select components which:

1\) Adjusted the choices automatically with Daylight Savings Time (DST)  
2\) Didn't have a huge list of choices to scroll through when technically only 24 (ish) are necessary

> Update: **v0.7+** now built with [`spacetime`](https://github.com/spencermountain/spacetime) instead of [`moment.js`](https://momentjs.com), reducing bundle size by **~66%**!

#### Demo: [ndom91.github.io/react-timezone-select](https://ndom91.github.io/react-timezone-select/)

## 🏗️ Installing

```bash
npm install --save-prod react-timezone-select
```

## 🔭 Usage

```jsx
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import TimezoneSelect from 'react-timezone-select'

const App = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({})

  return (
    <div className='App'>
      <h2>react-timezone-select</h2>
      <blockquote>Please make a selection</blockquote>
      <div className='select-wrapper'>
        <TimezoneSelect
          value={selectedTimezone}
          onChange={tz => setSelectedTimezone(tz)}
        />
      </div>
      <h3>Output:</h3>
      <div className='code'>
        <span style={{ fontWeight: '500' }}>selectedTimezone: {'{'}</span>{' '}
        <br />
        <span style={{ marginLeft: '20px', fontWeight: '500' }}>
          value: '{selectedTimezone.value}'
        </span>
        <br />
        <span style={{ marginLeft: '20px', fontWeight: '500' }}>
          label: '{selectedTimezone.label}'
        </span>
        <br />
        {'}'}
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## 🕹️ Props

- `value` - `{ value: string, label: string }`
- `onBlur` - `() => void`
- `onChange` - `(timezone) => void`
- `labelStyle` - `'original'|'altName'|'abbrev'`
- Any other props get passed along to `react-select`

**New in 0.9.0** We've added multiple label styles, based upon a generous pull request and the [`spacetime-informal`](https://npm.im/spacetime-informal) library.

#### `original`

![original labelstyle](https://user-images.githubusercontent.com/7415984/95472863-cecf7400-0983-11eb-8b2b-5cdb04e57881.png)

#### `altName`

![altName labelstyle](https://user-images.githubusercontent.com/7415984/95472987-ed356f80-0983-11eb-8bb5-5cf389f2244a.png)

#### `abbrev`

![abbrev labelstyle](https://user-images.githubusercontent.com/7415984/95472714-a9426a80-0983-11eb-9a5f-301a51c92d8a.png)

The demo page will show you all three types of values available for each selected timezone.

## 🖥️ Example

#### Demo: [ndom91.github.io/react-timezone-select/](https://ndom91.github.io/react-timezone-select/)

Theres a small example page / implementation available in the `./examples` directory, simply run `npm start` after installing everything and webpack dev server should begin, where you will be able to find the demo at `localhost:3001`

> ![Screenshot 1](https://imgur.com/6lnxeEV.png)

> ![Screenshot 3](https://imgur.com/HF6E9hH.png)

## 🚧 Contributing

Pull requests are always welcome!

## 🙏 Thanks

- [Carlos Matallin](https://github.com/matallo/) + [Demo](https://codepen.io/matallo/pen/WEjKqG?editors=1010)
- [spacetime](https://github.com/spencermountain/spacetime)
- [react-select](https://react-select.com)
