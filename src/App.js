import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="arjs-loader">
          <div className="arjs-loader-spinner"></div>
        </div>

        <div className="fab">
            <span className="fab-action-button">
                <i className="fab-icon"></i>
            </span>
            <ul className="fab-buttons">
                <li className="fab-buttons-item">
                    <a className="fab-buttons-link" target="_blank" href="https://github.com/HEXcube/EnchantAR/blob/master/README.md" data-tooltip="How to use">
                        <i className="icon-material icon-material-info"></i>
                    </a>
                </li>
                <li className="fab-buttons-item">
                    <a className="fab-buttons-link" target="_blank" href="https://github.com/HEXcube/EnchantAR/raw/master/assets/markers/phoenix-of-autumn.jpg" data-tooltip="Open marker image">
                        <i className="icon-material icon-material-image"></i>
                    </a>
                </li>
                <li className="fab-buttons-item">
                    <a className="fab-buttons-link" target="_blank" href="https://github.com/HEXcube/EnchantAR" data-tooltip="View source code">
                        <i className="icon-material icon-material-source"></i>
                    </a>
                </li>
                <li className="fab-buttons-item">
                    <a className="fab-buttons-link" target="_blank" href="https://hexcube.github.io" data-tooltip="About me">
                        <i className="icon-material icon-material-about"></i>
                    </a>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default App;
