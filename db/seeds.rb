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
Task.delete_all

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

Task.create(
  title: 'Be the hero',
  description: '',
  user_id: luke.id,
  project_id: blow_up_death_star.id
)

Task.create(
  title: 'Use the force',
  description: 'Do what Ben said',
  user_id: luke.id,
  project_id: blow_up_death_star.id
)

Task.create(
  title: 'Turn off targeting computer',
  description: 'Do what Ben said',
  user_id: luke.id,
  project_id: blow_up_death_star.id
)

Task.create(
  title: 'Bail Luke out',
  description: 'Do the right thing',
  user_id: han.id,
  project_id: blow_up_death_star.id
)

Task.create(
  title: 'Watch the screen thingy',
  description: '',
  user_id: leia.id,
  project_id: blow_up_death_star.id
)

Task.create(
  title: 'Be the best wingman in the galaxy',
  description: '',
  user_id: wedge.id,
  project_id: blow_up_death_star.id
)

Task.create(
  title: 'Take down the empire...single handedly',
  description: '',
  user_id: luke.id,
  project_id: peace.id
)

Task.create(
  title: 'Betray Han',
  description: '',
  user_id: lando.id,
  project_id: peace.id
)

Task.create(
  title: 'Save Han',
  description: '',
  user_id: lando.id,
  project_id: peace.id
)

Task.create(
  title: 'Apologize to Han',
  description: '',
  user_id: lando.id,
  project_id: peace.id
)

Task.create(
  title: 'Blow up the walkers',
  description: '',
  user_id: luke.id,
  project_id: hoth.id
)

Task.create(
  title: 'Blow up the walkers',
  description: '',
  user_id: wedge.id,
  project_id: hoth.id
)

Task.create(
  title: 'Kill all my commanders',
  description: '',
  user_id: vader.id,
  project_id: dominate.id
)

Task.create(
  title: 'Just let vader do everything',
  description: '',
  user_id: palpatine.id,
  project_id: dominate.id
)

Task.create(
  title: 'Get a face lift',
  description: '',
  user_id: palpatine.id,
  project_id: dominate.id
)

Task.create(
  title: 'Blow up all the planets with the death star',
  description: '',
  user_id: palpatine.id,
  project_id: dominate.id
)

Task.create(
  title: 'Intimidate the hell outta people',
  description: '',
  user_id: vader.id,
  project_id: dominate.id
)

Task.create(
  title: 'Find luke',
  description: '',
  user_id: obi_wan.id,
  project_id: destroy_sith.id
)

Task.create(
  title: 'Fight Vader',
  description: '',
  user_id: obi_wan.id,
  project_id: destroy_sith.id
)

Task.create(
  title: 'Train Luke',
  description: '',
  user_id: yoda.id,
  project_id: destroy_sith.id
)

Task.create(
  title: 'Fight Vader',
  description: '',
  user_id: luke.id,
  project_id: destroy_sith.id
)

Task.create(
  title: 'Let dad kill the emperor',
  description: '',
  user_id: luke.id,
  project_id: destroy_sith.id
)

Task.create(
  title: 'Say very inspirational and deep things to Luke',
  description: '',
  user_id: yoda.id,
  project_id: train_luke.id
)

Task.create(
  title: 'Teach Luke to move rocks with his mind',
  description: '',
  user_id: yoda.id,
  project_id: train_luke.id
)

Task.create(
  title: 'Come off as a crazy old man',
  description: '',
  user_id: yoda.id,
  project_id: train_luke.id
)

Task.create(
  title: "Get Luke's ship out",
  description: 'Stupid kid',
  user_id: yoda.id,
  project_id: train_luke.id
)

Task.create(
  title: "Get Luke out of Tatooine",
  description: '',
  user_id: obi_wan.id,
  project_id: train_luke.id
)

Task.create(
  title: "Save Luke's life",
  description: '',
  user_id: obi_wan.id,
  project_id: train_luke.id
)

Task.create(
  title: "Try not to get kil...too late",
  description: '',
  user_id: obi_wan.id,
  project_id: train_luke.id
)

Task.create(
  title: "Kill Obi-Wan",
  description: '',
  user_id: vader.id,
  project_id: destroy_jedi.id
)

Task.create(
  title: "Convert Luke",
  description: '',
  user_id: vader.id,
  project_id: destroy_jedi.id
)

Task.create(
  title: "Kill Luke??",
  description: '',
  user_id: vader.id,
  project_id: destroy_jedi.id
)

Task.create(
  title: "Let Vader do everything",
  description: '',
  user_id: palpatine.id,
  project_id: destroy_jedi.id
)

Task.create(
  title: "Zap Luke...a lot",
  description: '',
  user_id: palpatine.id,
  project_id: convert_luke.id
)

Task.create(
  title: "Tell Vader to convert Luke",
  description: '',
  user_id: palpatine.id,
  project_id: convert_luke.id
)

Task.create(
  title: "Freeze Luke in carbonite",
  description: '',
  user_id: vader.id,
  project_id: convert_luke.id
)

Task.create(
  title: "Tell Luke I'm his dad",
  description: '',
  user_id: vader.id,
  project_id: convert_luke.id
)

Task.create(
  title: "Target practice",
  description: '',
  user_id: vader.id,
  project_id: teach_stormtroopers.id
)

Task.create(
  title: "Get new clones",
  description: '',
  user_id: tarkin.id,
  project_id: teach_stormtroopers.id
)
