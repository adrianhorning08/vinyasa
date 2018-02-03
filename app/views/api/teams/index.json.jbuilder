@teams.each do |team|
  json.set! team.id do
    json.extract! team, :id, :name
  end
end
