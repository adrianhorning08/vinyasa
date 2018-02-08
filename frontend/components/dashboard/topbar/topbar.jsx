import React from 'react';
import TopbarRightContainer from './topbar_right_container';
import TopbarLeftContainer from './topbar_left_container';

export class Topbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="topbar">
        <TopbarLeftContainer/>
        <TopbarRightContainer/>
      </div>
    );
  }
}
