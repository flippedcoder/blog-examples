import { render } from '@redwoodjs/testing'

import DisplayPage from './DisplayPage'

describe('DisplayPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisplayPage />)
    }).not.toThrow()
  })
})
