import { render } from '@redwoodjs/testing/web'

import VisualizerPage from './VisualizerPage'

describe('VisualizerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VisualizerPage />)
    }).not.toThrow()
  })
})
