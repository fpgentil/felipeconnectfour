class Board < ActiveRecord::Base
  belongs_to :game

  before_create :setup_board

  private
  def setup_board
    self.matrix = Matrix.build(6,7){|row, column| 0}.to_a
  end
end
