import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

function App() {
  return (
    <div>
      <button data-tip data-for="unique_id">Hover over me</button>
      <ReactTooltip 
        id="unique_id" 
        place="top" 
        effect="solid"
        delayShow={500} // Tooltip shows after 500ms
        delayHide={1000} // Tooltip hides 1000ms after mouse out
        event="mouseover" 
        eventOff="mouseout"
      >
        This is a tooltip
      </ReactTooltip>
    </div>
  );
}

export default ReactTooltip;
