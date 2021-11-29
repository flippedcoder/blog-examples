import { useEffect, useState } from 'react'
import Web3 from 'web3'

import { ORDER_MAKER_ABI, ORDER_MAKER_ADDRESS } from '../../config'

const OrderPage = () => {
  const [account, setAccount] = useState<string>('')
  const [order, setOrder] = useState(null)
  const [orderMaker, setOrderMaker] = useState(null)

  const web3 = new Web3('http://localhost:7545')

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const accounts = await web3.eth?.getAccounts()
    setAccount(accounts[0])

    const orderMaker = new web3.eth.Contract(
      ORDER_MAKER_ABI,
      ORDER_MAKER_ADDRESS
    )
    setOrderMaker(orderMaker)

    const order = await orderMaker.methods.ordersById(1).call()
    setOrder(order)
  }

  const createOrder = async (event) => {
    event.preventDefault()

    const { itemName, quantity } = event.target.elements
    await orderMaker.methods.createOrder(itemName.value, quantity.value).send({ from: account, gas: 4712388, value: web3.utils.toWei("0.001") })
  }

  return (
    <>
      <h1>Order from EVM</h1>
      {order &&
        <>
          <div>Item: {order.itemName}</div>
          <div>Price: {order.price}</div>
          <div>Quantity: {order.quantity}</div>
        </>
      }
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
