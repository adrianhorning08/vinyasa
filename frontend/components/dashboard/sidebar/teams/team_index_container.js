import { fetchTeams,
  createTeam,
  clearTeamErrors } from '../../../../actions/team_actions';
import { connect } from 'react-redux';
import { TeamIndex } from './team_index';

const mapStateToProps = state => {
  return {
    teams: Object.values(state.teams)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: () => dispatch(fetchTeams())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);
