# this will be handled by the teamsReducer
json.team do
  json.extract! team, :id, :name
end

# membersReducer
json.members do
  json.array! team.members, :id, :username
end

# projecsReducer
json.projects do
  json.array! team.projects, :id, :title
end
