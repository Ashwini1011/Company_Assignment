import React from 'react'

const midpart = () => {
  return (
    <div className='midpart'>
      <div className='frist-row'>
        <div className='weak-row'>
          <div className='weak-text'>Weak</div>
          <div className='progress-bar'>
            <progress id='file' value='32' max='100'>
              {' '}
              32%{' '}
            </progress>
            <progress id='file' value='32' max='100'>
              {' '}
              32%{' '}
            </progress>
            <progress id='file' value='32' max='100'>
              {' '}
              32%{' '}
            </progress>
          </div>
        </div>
      </div>
    </div>
  )
}

export default midpart
