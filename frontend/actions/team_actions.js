import * as APIutil from '../util/team_api_util';

export const RECEIVE_ALL_TEAMS = 'RECEIVE_ALL_TEAMS';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';
export const REMOVE_TEAM = 'REMOVE_TEAM';

export const fetchTeams = () => dispatch => {
  return APIutil.fetchTeams().then(serverTeams => dispatch(receiveAllTeams(serverTeams)));
};

const receiveAllTeams = teams => {
  return {
    type: RECEIVE_ALL_TEAMS,
    teams
  };
};

export const fetchTeam = (id) => dispatch => {
  return APIutil.fetchTeam(id).then(serverTeam => dispatch(receiveTeam(serverTeam)));
};

const receiveTeam = team => {
  return {
    type: RECEIVE_TEAM,
    team
  };
};

export const createTeam = (team) => dispatch => {
  return APIutil.createTeam(team).then(serverTeam => dispatch(receiveTeam(serverTeam)));
};

export const deleteTeam = (id) => dispatch => {
  return APIutil.deleteTeam(id).then(serverTeam => dispatch(removeTeam(serverTeam)));
};

const removeTeam = team => {
  return {
    type: REMOVE_TEAM,
    team
  };
};
