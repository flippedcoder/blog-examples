import { render } from '@redwoodjs/testing/web'

import OrderPage from './OrderPage'

describe('OrderPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderPage />)
    }).not.toThrow()
  })
})
