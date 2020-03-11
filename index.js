const { Toolkit } = require('actions-toolkit')

// Run your GitHub Action!
Toolkit.run(async tools => {
  const { context } = tools
  tools.log(context.payload)
  tools.exit.success('Finish')
}, {
  event: 'issue_comment.created' // limit for now
})
