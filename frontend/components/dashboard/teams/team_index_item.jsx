import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export class TeamIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    // Fetch the team and link to the show page?
    // It works like a charm when i just put in the url
    return (
        <li>
          <Link to={`dashboard/teams/${this.props.team.id}`}>
            {this.props.team.name}
          </Link>
        </li>
      );
    }
  }
