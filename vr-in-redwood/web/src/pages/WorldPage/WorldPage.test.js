import { render } from '@redwoodjs/testing'

import WorldPage from './WorldPage'

describe('WorldPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorldPage />)
    }).not.toThrow()
  })
})
