const { Toolkit } = require('actions-toolkit')

describe('Hash Issue Delivery', () => {
  let action, tools

  Toolkit.run = jest.fn((actionFn) => { action = actionFn })
  require('.')

  beforeEach(() => {
    tools = new Toolkit()
    tools.log = jest.fn()
    tools.exit.success = jest.fn()
  })

  it('exits successfully', () => {
    action(tools)
    expect(tools.log).toHaveBeenCalled()
  })
})
