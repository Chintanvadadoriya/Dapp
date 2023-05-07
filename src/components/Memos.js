import React, { useEffect, useState } from 'react'

function Memos({state}) {
    const [memo, setMemo] = useState([])
    const {contract}=state

    useEffect(()=>{
        const memoMessage =async()=>{
            const memos =await contract.getMemos()
            setMemo(memos)

        }
        contract && memoMessage()
    },[contract])
  return (
    <>
    <div className='tableofmemo'>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">name</th>
                <th scope="col">Message</th>
                <th scope="col">Address</th>
                <th scope="col">Date</th>
                </tr>
            </thead>
  <tbody>
    {
        memo.map((m,index)=>{
        return(
            <>
             <tr>
                <th scope="row">{index}</th>
                <td>{m.name}</td>
                <td>{m.message}</td>
                <td>{m.from}</td>
                <td>{new Date(m?.timestamp * 1000).toLocaleString()}</td>
               

            </tr>
            </>
        )

        })
    }
    
  </tbody>
        </table>

    </div>
    </>
  )
}

export default Memos