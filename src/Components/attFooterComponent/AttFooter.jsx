import React, { Component } from 'react';
import'./AttFooter.css';
import footerLogo from '../../Assets/img/att-footer-logo.png';

export class AttFooter extends Component {
  render() {
    return (
        <footer>
        <div className='footer'>
            <div className='container'>
                <div className='ftrTxt'>{'© 2018 AT&T Intellectual Property. All rights reserved.'}</div>
                <div className='flt-right'>
                    <img
                        src={footerLogo}
                        width="31"
                        height="31"
                        alt={'AT&T Logo'}
                    />
                </div>
            </div>
        </div>
    </footer>
    )
  }
}

export default AttFooter
