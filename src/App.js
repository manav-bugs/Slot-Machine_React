import React from 'react';

const SlotM = (props) => {
  // let x='😄';
  // let y='😄';
  // let z='x';

  let x = props.x;
  let y = props.y;
  let z = props.z;
  if ((props.x === props.y) && (props.x === props.z)) {
    return (
      <>
        <div className='slot_inner'>
          <h1>{" "}{x}{y}{z}{" "}</h1>
          <h1>This is Matching.</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='slot_inner'>
          <h1>{" "}{x}{y}{z}{" "}</h1>
          <h1>This is not Matching.</h1>
          <hr />
        </div>
      </>
    );
  }
}

const App = () => {
  return <>
    <h1 className='heading_style'>
      🎰 Welcome to <span style={{ fontWeight: "bold" }}>
        Slot machine game</span> 🎰
    </h1>,
    <div className="container">

      <SlotM x="😄" y="😄" z="😄" />
      <SlotM x="😄" y="😂" z="😄" />
      <SlotM x="🎅" y="🎅" z="🎅" />
      
    </div>
    <div className="footer">

      <p>If there is same then matching otherwise not matching using passing props.</p>
    </div>

  </>;
}

export default App