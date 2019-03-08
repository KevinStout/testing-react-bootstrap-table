import React, { Component } from 'react';
import './AttHeader.css';
import logo from '../../Assets/img/ixp-logo.png'

export class AttHeader extends Component {
  render() {
    return (
      <div className='header'>
        <div className='container'>
            <div className='flt-Left'>
                <img
                    src={logo}
                    width="166"
                    height="74"
                    alt="iXP"
                />
            </div>
        </div>
      </div>
    )
  }
}

export default AttHeader
