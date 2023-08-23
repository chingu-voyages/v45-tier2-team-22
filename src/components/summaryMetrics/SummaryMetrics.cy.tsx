import React from 'react'
import SummaryMetrics from './SummaryMetrics'

describe('<SummaryMetrics />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SummaryMetrics />)
  })
})