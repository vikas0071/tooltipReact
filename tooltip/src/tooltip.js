import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ position, content, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const toggleTooltip = () => {
    setTooltipVisible(!isTooltipVisible);
  };

  const tooltipStyles = {
    position: 'relative',
    display: 'inline-block',
  };

  const tooltipContentStyles = {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '5px',
    borderRadius: '4px',
    zIndex: 1,
    fontSize: '14px',
    maxWidth: '200px', // Adjust the maximum width as needed
    textAlign: 'center',
    visibility: isTooltipVisible ? 'visible' : 'hidden',
    opacity: isTooltipVisible ? 1 : 0,
    transition: 'opacity 0.3s, visibility 0.3s',
  };

  if (position === 'top') {
    tooltipContentStyles.bottom = '100%';
    tooltipContentStyles.transform = 'translateX(-50%)';
  } else if (position === 'bottom') {
    tooltipContentStyles.top = '100%';
    tooltipContentStyles.transform = 'translateX(-50%)';
  } else if (position === 'left') {
    tooltipContentStyles.right = '100%';
    tooltipContentStyles.transform = 'translateY(-50%)';
  } else if (position === 'right') {
    tooltipContentStyles.left = '100%';
    tooltipContentStyles.transform = 'translateY(-50%)';
  }

  return (
    <div
      style={tooltipStyles}
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      {children}
      <div style={tooltipContentStyles}>{content}</div>
    </div>
  );
};

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']).isRequired,
  content: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;
