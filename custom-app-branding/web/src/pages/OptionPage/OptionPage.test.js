import { render } from '@redwoodjs/testing'

import OptionPage from './OptionPage'

describe('OptionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OptionPage />)
    }).not.toThrow()
  })
})
