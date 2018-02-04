# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Team.delete_all
User.delete_all
TeamMembership.delete_all
ProjectMembership.delete_all
Project.delete_all

luke = User.create!(
  username: 'Luke Skywalker',
  password: 'password'
)

han = User.create!(
  username: 'Han Solo',
  password: 'password'
)

leia = User.create!(
  username: 'Leia Organa',
  password: 'password'
)

lando = User.create!(
  username: 'Lando Calrissian',
  password: 'password'
)

wedge = User.create!(
  username: 'Wedge Antilles',
  password: 'password'
)

yoda = User.create!(
  username: 'Yoda',
  password: 'password'
)

obi_wan = User.create!(
  username: 'Obi-Wan Kenobi',
  password: 'password'
)

vader = User.create!(
  username: 'Darth Vader',
  password: 'password'
)
tarkin = User.create!(
  username: 'Grand Moff Tarkin',
  password: 'password'
)

palpatine = User.create!(
  username: 'Emperor Palpatine',
  password: 'password'
)

piett = User.create!(
  username: 'Admiral Piett',
  password: 'password'
)

alliance = Team.create!(name: 'Rebel Alliance')
jedi = Team.create!(name: 'Jedi Knights')
rogue = Team.create!(name: 'Rogue Squadron')
sith = Team.create!(name: 'Sith')
empire = Team.create!(name: 'The Empire')

TeamMembership.create!(
  user_id: luke.id,
  team_id: rogue.id
)
TeamMembership.create!(
  user_id: wedge.id,
  team_id: rogue.id
)

TeamMembership.create!(
  user_id: luke.id,
  team_id: alliance.id
)

TeamMembership.create!(
  user_id: han.id,
  team_id: alliance.id
)

TeamMembership.create!(
  user_id: leia.id,
  team_id: alliance.id
)
TeamMembership.create!(
  user_id: wedge.id,
  team_id: alliance.id
)

TeamMembership.create!(
  user_id: lando.id,
  team_id: alliance.id
)

TeamMembership.create!(
  user_id: luke.id,
  team_id: jedi.id
)

TeamMembership.create!(
  user_id: yoda.id,
  team_id: jedi.id
)

TeamMembership.create!(
  user_id: obi_wan.id,
  team_id: jedi.id
)

TeamMembership.create!(
  user_id: vader.id,
  team_id: empire.id
)

TeamMembership.create!(
  user_id: palpatine.id,
  team_id: empire.id
)

TeamMembership.create!(
  user_id: piett.id,
  team_id: empire.id
)

TeamMembership.create!(
  user_id: tarkin.id,
  team_id: empire.id
)

TeamMembership.create!(
  user_id: vader.id,
  team_id: sith.id
)
TeamMembership.create!(
  user_id: palpatine.id,
  team_id: sith.id
)

blow_up_death_star = Project.create!(
  title: 'Blow up the Death Star',
  team_id: alliance.id
)

peace = Project.create!(
  title: 'Bring peace to the Galaxy',
  team_id: alliance.id
)

hoth = Project.create!(
  title: 'Defend Hoth Base',
  team_id: rogue.id
)

attack_death_star = Project.create!(
  title: 'Attack the Death Star',
  team_id: rogue.id
)

dominate = Project.create!(
  title: 'Galatic Domination',
  team_id: empire.id
)

destroy_sith = Project.create!(
  title: 'Destroy the Sith',
  team_id: jedi.id
)

train_luke = Project.create!(
  title: 'Train Luke to become a Jedi',
  team_id: jedi.id
)

destroy_jedi = Project.create!(
  title: 'Destroy the Jedi',
  team_id: sith.id
)

convert_luke = Project.create!(
  title: 'Convert Luke to Dark Side',
  team_id: empire.id
)

teach_stormtroopers = Project.create!(
  title: 'Teach Stormtroopers how to shoot',
  team_id: empire.id
)

alliance.members.each do |member|
  ProjectMembership.create!(
    user_id: member.id,
    project_id: blow_up_death_star.id)
end

alliance.members.each do |member|
  ProjectMembership.create!(
    user_id: member.id,
    project_id: peace.id)
end

rogue.members.each do |member|
  ProjectMembership.create!(
    user_id: member.id,
    project_id: hoth.id)
end

rogue.members.each do |member|
  ProjectMembership.create!(
    user_id: member.id,
    project_id: attack_death_star.id)
end

empire.members.each do |member|
  ProjectMembership.create!(
    user_id: member.id,
    project_id: dominate.id)
end

empire.members.each do |member|
  ProjectMembership.create!(
    user_id: member.id,
    project_id: convert_luke.id)
end

empire.members.each do |member|
  ProjectMembership.create!(
    user_id: member.id,
    project_id: destroy_jedi.id)
end

jedi.members.each do |member|
  ProjectMembership.create!(
    user_id: member.id,
    project_id: destroy_sith.id)
end

jedi.members.each do |member|
  ProjectMembership.create!(
    user_id: member.id,
    project_id: train_luke.id)
end

empire.members.each do |member|
  ProjectMembership.create!(
    user_id: member.id,
    project_id: teach_stormtroopers.id)
end
