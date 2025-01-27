import React from 'react'
import "./transfer.css"
import { BiTransferAlt } from "react-icons/bi";

function Transfer() {
  return (
        <div className="transferContainer">
            <h2>Tranfer Cash</h2>

            <div className="recieverInputs">
                <div className="accountNum">
                    <input type="text" readOnly value={"01234567897867"} className='myAccount'/>

                    <BiTransferAlt />

                    <input type="text" className='recieverAccount' placeholder='Reciever's Account Number/>
                </div>

                <input type="text" className='sendCash' placeholder='Amount'/>
            </div>

            <div className="transferButton">
                <button>
                    Transfer
                </button>

                <p>
                    Please make sure the account number you sending to is correct!
                </p>
            </div>
        </div>
  )
}

export default Transfer