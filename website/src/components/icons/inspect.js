import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "basis";

function InspectIcon(props) {
  const theme = useTheme();
  const color = props.color ? theme.getColor(props.color) : "currentColor";

  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 32 32"
      focusable="false"
      role="img"
      aria-label="Inspect components"
      fill={color}
    >
      <path d="M14 14l14 3.5-5.2 3.5 4.86 4.93a.49.49 0 010 .7l-1 1a.5.5 0 01-.7 0L21 22.77 17.5 28z" />
      <path d="M12 26H6a2 2 0 01-2-2V6a2 2 0 012-2h18a2 2 0 012 2v6a1 1 0 01-2 0V6H6v18h6a1 1 0 010 2z" />
    </svg>
  );
}

InspectIcon.propTypes = {
  color: PropTypes.string
};

export default InspectIcon;
