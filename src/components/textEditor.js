/* eslint-disable default-case */
import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import BoldMark from './BoldMark';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'My first paragraph!',
              },
            ],
          },
        ],
      },
    ],
  }
})

export default class TextEditor extends Component {

  state = {
    value: initialValue,
  }

  onChange = ({value}) => {
    this.setState({value})
  }

  onKeyDown = (e, change) => {
    
    if (!e.ctrlKey) { return }
    e.preventDefault()

    switch (e.key) {

      case 'b': {
        change.toggleMark('bold')
        return true
      }
    }
  }

  renderMark = props => {
    switch (props.mark.type) {
      case 'bold':
        return <BoldMark {...props} />
    }
  }

  render() {
    return (
      <Editor 
      value={this.state.value} 
      onChange={this.onChange} 
      onKeyDown={this.onKeyDown} 
      renderMark={this.renderMark} 
      />
    )
  }
}