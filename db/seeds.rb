# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Team.delete_all
User.delete_all

User.create!(
  username: 'Luke Skywalker',
  password: 'password'
)

User.create!(
  username: 'Han Solo',
  password: 'password'
)

User.create!(
  username: 'Leia',
  password: 'password'
)

User.create!(
  username: 'Darth Vader',
  password: 'password'
)

Team.create!(name: 'Rebel Alliance')
Team.create!(name: 'Rogue One')
Team.create!(name: 'The Empire')
