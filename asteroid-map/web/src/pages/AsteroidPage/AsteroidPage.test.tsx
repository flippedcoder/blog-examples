import { render } from '@redwoodjs/testing/web'

import AsteroidPage from './AsteroidPage'

describe('AsteroidPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AsteroidPage />)
    }).not.toThrow()
  })
})
