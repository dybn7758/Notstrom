import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>Error occurred during loading...</div>
    )
  }
};