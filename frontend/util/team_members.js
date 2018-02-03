export const fetchTeamMembers = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/teams/${id}/users`
  });
};
