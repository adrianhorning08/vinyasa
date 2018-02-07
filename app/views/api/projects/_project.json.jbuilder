# this will be handled by the projectsReducer
json.project do
  json.extract! project, :id, :title, :team_id
end

# tasksReducer
json.tasks do
  json.array! project.tasks, :id, :title, :description, :due_date, :user_id, :project_id
end

# membersReducer
json.members do
  json.array! project.members, :id, :username
end
