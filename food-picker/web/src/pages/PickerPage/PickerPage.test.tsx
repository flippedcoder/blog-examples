import { render } from '@redwoodjs/testing/web'

import PickerPage from './PickerPage'

describe('PickerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PickerPage />)
    }).not.toThrow()
  })
})
