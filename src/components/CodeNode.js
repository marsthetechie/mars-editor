import React from 'react';

function CodeNode(props) {
  return (
    <div className="code">
      <code>
        {props.children}
      </code>
    </div>
  )
}

export default CodeNode;