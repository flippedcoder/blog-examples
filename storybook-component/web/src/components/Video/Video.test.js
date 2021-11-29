import { render } from '@redwoodjs/testing'

import Video from './Video'

describe('Video', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Video />)
    }).not.toThrow()
  })
})
