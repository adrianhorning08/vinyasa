json.task do
  json.extract! task, :id, :title, :description, :due_date, :user_id, :project_id
end
