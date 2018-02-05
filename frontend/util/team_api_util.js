export const fetchTeams = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/teams'
  });
};

export const fetchTeam = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/teams/${id}`
  });
};

export const createTeam = (team) => {
  return $.ajax({
    method: 'POST',
    url: `api/teams`,
    data: { team }
  });
};


export const deleteTeam = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/teams/${id}`
  });
};

// export const createTeamMembership = (user_id, team_id) => {
//   return $.ajax({
//     method: 'POST',
//     url:
//   })
// }
