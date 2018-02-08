import { fetchTeams, fetchTeam, createTeam, clearTeamErrors } from '../../../../actions/team_actions';
import { connect } from 'react-redux';
import { TeamIndex } from './team_index';

const mapStateToProps = state => {
  return {
    teams: state.teams.teams
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
    fetchTeam: id => dispatch(fetchTeam(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);
