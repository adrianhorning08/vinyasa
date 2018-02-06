@tasks.each do |task|
  json.set! task.id do
    json.extract! task, :id, :title, :description, :due_date, :user_id, :project_id
  end
end
