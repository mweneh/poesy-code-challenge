import React, { useState } from "react";

function Poem({title, content, author}) {

  const [asRead, setAsRead] =useState(false)

  function handleClick() {
    setAsRead(asRead =>asRead = !asRead)
  }
  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- By {author}</strong>
      </p>
      <button onClick={handleClick} >{asRead?"Mark as read" : 'Mark as unread'}</button>
    </div>
  );
}

export default Poem;
