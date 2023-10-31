import React from 'react';
import './tre.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function StockSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={lightBg ? 'tre-section1' : 'tre-section1 darkBg1'}
      >
        <div className='container1'>
          <div
            className='row home__tre-row1'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse1' : 'row1'
            }}
          >
            <div className='col1'>
              <div className='home__tre-text-wrapper1'>
                <div className='top-line1'>{topLine}</div>
                <h1 className={lightText ? 'heading1' : 'heading1 dark1'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__tre-subtitle1'
                      : 'home__tre-subtitle1 dark1'
                  }
                >
                  {description}
                </p>
                <Link to='/sign-up'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col1'>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StockSection;