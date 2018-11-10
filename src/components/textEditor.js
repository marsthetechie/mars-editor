import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

import { CodeNode } from './index';

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

    if (event.key === '&') {

      event.preventDefault();
      editor.insertText('and');

    } else if (event.ctrlKey && event.key === '`') {

      event.preventDefault();
      const isCode = editor.value.blocks.some(block => block.type === 'code');

      editor.setBlocks(isCode ? 'paragraph' : 'code');


    } else {
      return next()
    }
  }

  renderNode = (props, editor, next) => {

    switch (props.node.type) {

      case 'code':
        return <CodeNode {...props} />
        
      default:
        return next()
    }
  }
  
  render() {
    return (
      <Editor 
      value={this.state.value} 
      onChange={this.onChange} 
      onKeyDown={this.onKeyDown} 
      renderNode={this.renderNode}
      />
    );
  }
}