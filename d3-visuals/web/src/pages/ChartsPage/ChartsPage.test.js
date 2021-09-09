import { render } from '@redwoodjs/testing/web'

import ChartsPage from './ChartsPage'

describe('ChartsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChartsPage />)
    }).not.toThrow()
  })
})
