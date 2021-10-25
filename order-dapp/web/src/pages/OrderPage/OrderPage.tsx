import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import Web3 from 'web3'

import { ORDER_MAKER_ABI, ORDER_MAKER_ADDRESS } from '../../config'

const OrderPage = () => {
  const [account, setAccount] = useState<string>('')
  const [orders, setOrders] = useState(null)
  const [orderMaker, setOrderMaker] = useState(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const web3 = new Web3('http://localhost:7545')

    const accounts = await web3.eth?.getAccounts()
    setAccount(accounts[0])

    const orderMaker = new web3.eth.Contract(
      ORDER_MAKER_ABI,
      ORDER_MAKER_ADDRESS
    )
    setOrderMaker(orderMaker)

    const userOrderCount = await orderMaker.methods.userOrderCount().call()

    for (let i = 1; i <= userOrderCount; i++) {
      const order = await orderMaker.methods.orders(i).call()
      setOrders([...orders, order])
    }
  }

  return (
    <>
      {orders.map((order) => (
        <>
          <div>Item: {order.itemName}</div>
          <div>Price: {order.price}</div>
          <div>Quantity: {order.quantity}</div>
        </>
      ))}
    </>
  )
}

export default OrderPage
