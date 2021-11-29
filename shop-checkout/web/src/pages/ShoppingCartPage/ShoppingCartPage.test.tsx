import { render } from '@redwoodjs/testing/web'

import ShoppingCartPage from './ShoppingCartPage'

describe('ShoppingCartPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShoppingCartPage />)
    }).not.toThrow()
  })
})
