import React from 'react'

// Experiment
const Context = React.createContext('english')

export class LanguageStore extends React.Component {

  state = { language: 'english' }

  onLanguageChange = language => {
    this.setState({ language })
  }

  render() {
    return (
      <Context.Provider value={ { ...this.state, onLanguageChange: this.onLanguageChange } }>
        { this.props.children }
      </Context.Provider>
    )
  }
}
export default Context
// Standard
// export default React.createContext('english')

// Debug code
// const context = React.createContext('english')
// console.log(context)
// export default context
