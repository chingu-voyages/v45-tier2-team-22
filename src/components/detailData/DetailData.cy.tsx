import React from 'react'
import DetailData from './DetailData'

describe('<DetailData />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DetailData />)
  })
})