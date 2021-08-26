import { render } from '@redwoodjs/testing'

import MixerPage from './MixerPage'

describe('MixerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MixerPage />)
    }).not.toThrow()
  })
})
