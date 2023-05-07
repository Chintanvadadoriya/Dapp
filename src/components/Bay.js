import React from 'react'
import {ethers} from 'ethers'

function Bay({state}) {
const bayChai =async(e)=>{
    e.preventDefault()
    const {contract}=state
    const name =document.querySelector("#name").value
    const message =document.querySelector("#msg").value
    console.log('1111', name,message,contract)
    const amount ={value:ethers.utils.parseEther('0.000001')}
    const transactions = await contract.bayChai(name,message,amount)
    await transactions.wait();
    console.log('Trasaction is Done !')



}
  return (
    <>
    <div className="formDapp">
    <form  onSubmit={bayChai}>
    <div class="mb-3">
       
        <input placeholder='Hospital  Name' type="name" class="form-control" id="name" aria-describedby="emailHelp"/>
       
    </div>
    <div class="mb-3">
       <input placeholder='message' type="message" class="form-control" id="msg"/>
    </div>
    <button class="btn btn-primary">Pay</button>
    </form>
    </div>
    </>
  )
}

export default Bay
