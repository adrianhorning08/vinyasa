import { fetchTeams, fetchTeam, createTeam, clearTeamErrors } from '../../../../actions/team_actions';
import { connect } from 'react-redux';
import { TeamIndex } from './team_index';
import { fetchUser } from '../../../../actions/user_actions';

const mapStateToProps = state => {
  return {
    teams: state.teams.teams,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
    fetchTeam: id => dispatch(fetchTeam(id)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);
