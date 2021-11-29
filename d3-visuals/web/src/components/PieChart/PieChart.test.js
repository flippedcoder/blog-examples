import { render } from '@redwoodjs/testing/web'

import PieChart from './PieChart'

describe('PieChart', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PieChart />)
    }).not.toThrow()
  })
})
