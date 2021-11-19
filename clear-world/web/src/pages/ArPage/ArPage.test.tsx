import { render } from '@redwoodjs/testing/web'

import ArPage from './ArPage'

describe('ArPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArPage />)
    }).not.toThrow()
  })
})
