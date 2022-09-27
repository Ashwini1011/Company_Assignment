import React from 'react'
import './HistoryModal.css'
import midpart from './midpart.svg'

const HistoryModal = () => {
  return (
    <>
      <div className='main-container'>
        <button className='history-btn'>History</button>
        <div className='progress-bar'>
          <div className='bar-1'></div>
          <div className='bar-2'></div>
          <div className='bar-3'></div>
        </div>
        <div className='vertical-bar'></div>
        <div className='bar-card'>
          <i class='fa-solid fa-xmark'></i>
          <div className='strength-txt'>Strength Bar</div>
          <div className='strength-introduction'>
            Introducing strength bar to help you know your week subjects.
          </div>
          <img src={midpart} />
          <button className='finish-btn'>Finish</button>
        </div>
      </div>
    </>
  )
}

export default HistoryModal
