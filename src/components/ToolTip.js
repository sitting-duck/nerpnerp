import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip'

function App() {
  return (
    <div>
      <a data-tip data-for="tooltipId">Hover over me</a>
      <ReactTooltip id="tooltipId" place="top" effect="solid">
        Tooltip Content
      </ReactTooltip>
    </div>
  );
}
