# this will be handled by the usersReducer
json.extract! user, :id, :username

# tasksReducer
json.tasks do
  json.array! user.tasks, :id, :title, :description, :due_date, :user_id, :project_id
end
