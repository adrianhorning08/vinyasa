@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :team_id
  end
end 
