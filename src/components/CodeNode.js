import React from 'react';

function CodeNode(props) {
  return (
    <div className="code">
      <pre {...props.attributes}>
        <code>{props.children}</code>
      </pre>
    </div>
  )
}

export default CodeNode;