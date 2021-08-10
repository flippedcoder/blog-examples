import { useState, useEffect } from 'react'
import Web3 from 'web3'

export const DappPage = () => {
  const [account, setAccount] = useState<string>('')

  useEffect(() => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8912')
  }, [])
  return <div>Dapp go here</div>
}
