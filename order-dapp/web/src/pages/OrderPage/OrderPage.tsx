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

    const userOrderCount = await orderMaker.methods.userOrderCount(accounts[0]).call()
    console.log(userOrderCount)

    // const order = await orderMaker.methods.ordersFromUser(accounts[0]).call()
    // console.log(order)
    // setOrders({ itemName: order.itemName, price: order.price, quantity: order.quantity })
  }

  const createOrder = async (event) => {
    event.preventDefault()
    const { itemName, quantity } = event.target.elements
    await orderMaker.methods.createOrder(itemName.value, quantity.value).send({ from: account, gas: 4712388 })
      .once('receipt', (receipt) => {
        console.log(receipt)
      })
  }

  return (
    <>
      <h1>Orders from EVM</h1>
      {orders?.map((order) => (
        <>
          <div>Item: {order.itemName}</div>
          <div>Price: {order.price}</div>
          <div>Quantity: {order.quantity}</div>
        </>
      ))}
      <form onSubmit={createOrder}>
        <div>
          <label htmlFor='itemName'>Item Name:</label>
          <input name='itemName' type='text' />
        </div>
        <div>
          <label htmlFor='quantity'>Amount:</label>
          <input name='quantity' type='number' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default OrderPage
