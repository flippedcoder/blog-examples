import { useState, useEffect } from 'react'
import Web3 from 'web3'
import { PROFILE_ABI, PROFILE_ADDRESS } from '../../config'

interface UserProps {
  name: string;
  role: string;
  profileImg: string;
  isRegistered: boolean;
}

const ProfilePage = () => {
  const [account, setAccount] = useState<string>('')
  const [profile, setProfile] = useState<any>()
  const [user, setUser] = useState<UserProps>()
  const [formData, setFormData] = useState<UserProps>()
  const [role, setRole] = useState<string>()
  const [profileImg, setProfileImg] = useState<string>()
  const [isRegistered, setIsRegistered] = useState<boolean>()

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const web3 = new Web3('http://localhost:7545')

    const accounts = await web3.eth?.getAccounts()
    setAccount(accounts[0])

    const profile = new web3.eth.Contract(PROFILE_ABI, PROFILE_ADDRESS)
    setProfile(profile)

    const user = await profile.methods.usersById(2).call()
    setUser(user)
  }

  const createProfile = async (event) => {
    event.preventDefault()
    const { name, role, profileImg, isRegistered } = event.target.elements
    await profile.methods.createUser(name.value, role.value, profileImg.value, isRegistered.value).send({ from: account, gas: 4712388 })
      .once('receipt', (receipt) => {
        console.log(receipt)
      })
  }

  return (
    <div>
      <h1>Profile Page</h1>
      Profile account id: {account}
      {user &&
        <div>
          <p>{user.name}</p>
          <p>{user.role}</p>
          <video controls src={user.profileImg} />
          <input type="checkbox" checked={user.isRegistered} />
        </div>
      }
      <form onSubmit={createProfile}>
        <label htmlFor='name'>Name:</label>
        <input name='name' type='text' />
        <label htmlFor='role'>Role:</label>
        <input name='role' type='text' />
        <label htmlFor='profileImg'>Profile Pic:</label>
        <input name='profileImg' type='text' />
        <label htmlFor='isRegistered'>Registered:</label>
        <input name='isRegistered' type='checkbox' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ProfilePage
