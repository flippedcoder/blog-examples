import { useState, useEffect } from 'react'
import Web3 from 'web3'
import { PROFILE_ABI, PROFILE_ADDRESS } from '../../config'

export const ProfilePage = () => {
  const [account, setAccount] = useState<string>('')
  const [profile, setProfile] = useState<any>()
  const [user, setUser] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const web3 = new Web3('http://localhost:7545')

    const accounts = await web3.eth?.getAccounts()
    setAccount(accounts[0])

    const profile = new web3.eth.Contract(PROFILE_ABI, PROFILE_ADDRESS)
    setProfile(profile)

    const user = await profile.methods.userByAddress(account).call()
    setUser(user)
  }

  return (
    <div>
      Profile account id: {account}
      <ul id="videoList">
        {users.map((user, key) => {
          return (
            <div key={key}>
              <p>{user.name}</p>
              <p>{user.role}</p>
              <img src={user.img} />
            </div>
          )
        })}
      </ul>
    </div>
  )
}
