import { useQuery } from '@redwoodjs/web'
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export const QUERY = gql`
query Items {
  items {
    name
    price
    url
    orderId
  }
}
`

const ShoppingCartPage = () => {
  const { data, loading } = useQuery(QUERY)

  if (loading) {
    return <div>Loading...</div>
  }

  const orderItems = data.items.filter(item => item.orderId === 'cktqa4gy70001psxhf9b88c3a')

  const processToken = (token) => {
    console.log('This is where some back-end things would happen after a successful transaction')
  }

  return (
    <>
      <StripeCheckout
        amount={36694}
        billingAddress
        description={`The ${orderItems.length} items you selected are here`}
        image="https://res.cloudinary.com/milecia/image/upload/v1606580786/samples/landscapes/landscape-panorama.jpg"
        locale="auto"
        name="Your Cart"
        stripeKey={process.env.STRIPE_ID}
        token={processToken}
        zipCode
      />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {orderItems.map(item => {
          return (
            <div style={{
              border: '1px solid',
              margin: '0 12px 24px',
              padding: '24px',
              height: '500px',
              width: '20%'
            }}>
              {item.url.includes('mp4') ?
                <video controls src={item.url} height={200} style={{ maxWidth: '100%' }}></video> :
                <img src={item.url} height={200} style={{ maxWidth: '100%' }} />
              }
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
            </div>
          )
        })
        }
      </div>
    </>
  )
}

export default ShoppingCartPage
