import { render } from '@redwoodjs/testing/web'

import HeatmapPage from './HeatmapPage'

describe('HeatmapPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeatmapPage />)
    }).not.toThrow()
  })
})
