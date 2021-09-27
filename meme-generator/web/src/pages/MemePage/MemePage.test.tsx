import { render } from '@redwoodjs/testing/web'

import MemePage from './MemePage'

describe('MemePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MemePage />)
    }).not.toThrow()
  })
})
