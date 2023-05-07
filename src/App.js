import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {ethers} from 'ethers'
import abi from './contracts/chai.json'
import { useEffect, useState } from 'react';
import Bay from './components/Bay';
import Memos from './components/Memos';
console.log('abi', abi)
function App() {
  const [state, setState] = useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account,setAccount]=useState([])

  useEffect(()=>{
    const connectWallate=async()=>{
      const contractAddress='0xd3dbdef26d519cd01a54bc6df44fbca2cc85a0f2'
      const contractAbi =abi.abi
      try{
        const {ethereum}=window

        if(ethereum){

          const account =await ethereum.request({method:'eth_requestAccounts'})

          window.ethereum.on('chainChanged',()=>{window.location.reload()})
          window.ethereum.on('accountsChanged',()=>{window.location.reload()})

          const provider =new ethers.providers.Web3Provider(ethereum);
  
          const signer=provider.getSigner();
  
          const contract = new ethers.Contract(contractAddress,contractAbi,signer)
  
          setState({provider,signer,contract })
          setAccount(account)
        }
        else{
          alert('Please install Meta mask !')
        }
      }catch(err){
        console.log('err in React integrate Metamask',err)
      }
    }
    connectWallate()
  },[])
  console.log('state', state)
  return (
    <div >
      <div>
        <p className='accout'>{account ? `Connected Account:-${account}` : <p style={{color:'red'}}>Please Connect Accout</p>}</p>
        <span className='text'> Hospital  contribute Amount 0.001 ETH !</span>
      </div>
      <Bay state={state}/>
      <hr/>
      <Memos  state={state}/>
    </div>
  );
}

export default App;
