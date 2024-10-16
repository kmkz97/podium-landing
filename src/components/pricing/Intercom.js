import React from 'react';

// Higher Order Component (HOC) to add Intercom functionality
export function withShowIntercom(Component) {
  return (props) => {
    return (
      <Component
        {...props}
        onClick={() => {
          if (window.Intercom) {
            window.Intercom('show');
          }
        }}
        style={{ cursor: 'pointer', ...props.style }} // Merges the passed styles with the cursor pointer
      />
    );
  };
}
