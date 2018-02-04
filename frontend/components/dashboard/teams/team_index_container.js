import { fetchTeams, receiveTeam,
  createTeam, clearTeamErrors } from '../../../actions/team_actions';
import { connect } from 'react-redux';
import { TeamIndex } from './team_index';

const mapStateToProps = state => {
  let errors = state.errors.teams;
  return {
    teams: Object.values(state.teams),
    errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
    receiveTeam: team => dispatch(receiveTeam(team)),
    createTeam: team => dispatch(createTeam(team)),
    clearTeamErrors: () => dispatch(clearTeamErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);
