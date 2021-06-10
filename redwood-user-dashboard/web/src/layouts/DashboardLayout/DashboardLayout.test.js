import { render } from '@redwoodjs/testing'

import DashboardLayout from './DashboardLayout'

describe('DashboardLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardLayout />)
    }).not.toThrow()
  })
})
