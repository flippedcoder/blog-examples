import { useState, useEffect } from 'react'
import Web3 from 'web3'
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from '../../config.js'


export const DappPage = () => {
  const [account, setAccount] = useState<string>('')
  const [todoList, setTodoList] = useState()
  const [taskCount, setTaskCount] = useState(0)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8912')

    const accounts = await web3.eth.getAccounts()
    setAccount(accounts[0])

    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS)

    setTodoList(todoList)

    const taskCount = await todoList.methods.taskCount().call()
    setTaskCount(taskCount)

    for (var i = 1; i <= taskCount; i++) {
      const task = await todoList.methods.tasks(i).call()
      setTasks([...tasks, task])
    }
  }

  return <div>Dapp go here {account}</div>
}
