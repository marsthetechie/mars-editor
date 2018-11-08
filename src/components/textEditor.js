import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

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
                text: 'Some dumb dummy text',
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

  onKeyDown = (event, editor, next) => {
    if (event.key !== '&') return next()
    event.preventDefault()
    editor.insertText('and')
    return true
  }
  
  render() {
    return (
      <Editor 
      value={this.state.value} 
      onChange={this.onChange} 
      onKeyDown={this.onKeyDown}
      />
    );
  }
}