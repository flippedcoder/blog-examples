import { render } from '@redwoodjs/testing/web'

import MapPage from './MapPage'

describe('MapPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MapPage />)
    }).not.toThrow()
  })
})
