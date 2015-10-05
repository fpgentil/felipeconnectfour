class Game < ActiveRecord::Base
  belongs_to :user_one, class_name: 'User'
  belongs_to :user_two, class_name: 'User'
  belongs_to :winner, class_name: 'User'
  belongs_to :last_move_user, class_name: 'User'
  has_one :board

  def restart!
    self.winner = nil
    self.last_move_user_id = 2
    self.save!
  end
end
