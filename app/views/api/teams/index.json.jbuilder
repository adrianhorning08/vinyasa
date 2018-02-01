@teams.each do |team|
  json.set! team.id do
    # json.partial 'team', team: team
    json.extract! team, :id, :name
  end
end
