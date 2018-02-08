# this will be handled by the usersReducer
json.user do
  json.extract! user, :id, :username
end

# tasksReducer
json.tasks do
  json.array! user.tasks, :id, :title, :description, :due_date, :user_id, :project_id
end
