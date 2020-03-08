import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext'

export default class Button extends Component {
  // link to context
  static contextType = LanguageContext

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
    return (
      <button className="ui button primary">{ text }</button>
    )
  }
}
