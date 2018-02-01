@teams.each do |team|
  json.set! team.id do
    json.partial 'bench', bench: bench
  end
end
