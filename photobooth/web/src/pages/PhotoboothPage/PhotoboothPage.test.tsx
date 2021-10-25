import { render } from '@redwoodjs/testing/web'

import PhotoboothPage from './PhotoboothPage'

describe('PhotoboothPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PhotoboothPage />)
    }).not.toThrow()
  })
})
