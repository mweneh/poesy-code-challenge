import React from "react";
import Poem from "./Poem";


function PoemsContainer({poems}) {


  return (
    <div className="poems-container">
      {/* render a list of <Poem> components in here */}
      {poems.map(poem => {
        return <Poem title = {poem.title} content={poem.content}
        author ={poem.author} key ={poem.id} />
      })}
    </div>
  );
}

export default PoemsContainer;
