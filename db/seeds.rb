# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

puts 'creating users..'
User.create
User.create

puts 'creating game..'
Game.create(user_one_id: 1, user_two_id: 2, status: 0, winner: nil, last_move_user_id: 2)

puts 'creating board..'
Board.create(game_id: 1)

puts 'now.. game it up!'