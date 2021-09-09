import { render } from '@redwoodjs/testing/web'

import GraphicPage from './GraphicPage'

describe('GraphicPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GraphicPage />)
    }).not.toThrow()
  })
})
