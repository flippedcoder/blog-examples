import { render } from '@redwoodjs/testing/web'

import Radarchart from './Radarchart'

describe('Radarchart', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Radarchart />)
    }).not.toThrow()
  })
})
