import React from 'react'
import "./transfer.css"
import TransferReciept from '../transferRecipt/TransferReciept'

function Transfer() {
  return (
    <div className="transferApp">
        <h2 className='transferHeader'>
            Transections
        </h2>

        <div className="transectionsContainer">
            <TransferReciept />
            <TransferReciept />
            <TransferReciept />
            <TransferReciept />
            <TransferReciept />
            <TransferReciept />
            <TransferReciept />
        </div>
    </div>
  )
}

export default Transfer