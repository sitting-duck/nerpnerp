import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import './ToolTip.css'

function App() {
  return (
    <div>
      <a data-tooltip-id="unique_id" data-tooltip-content="mah text">well documented</a>
      <ReactTooltip 
        id="unique_id" 
        className="custom-tooltip"
        place="top" 
        effect="solid"
        delayShow={500} // Tooltip shows after 500ms
        delayHide={1000} // Tooltip hides 1000ms after mouse out
        clickable={true} // This allows the tooltip to be clickable
        event="click" 
        eventOff="click"
      >
        This is a tooltip
      </ReactTooltip>
    </div>
  );
}

export default ReactTooltip;
