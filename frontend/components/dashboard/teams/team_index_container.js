import { fetchTeams, receiveTeam } from '../../../actions/team_actions';
import { connect } from 'react-redux';
import { TeamIndex } from './team_index';

const mapStateToProps = state => {
  return {
    teams: Object.values(state.teams)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTeams: () => dispatch(fetchTeams()),
    receiveTeam: team => dispatch(receiveTeam(team))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamIndex);
