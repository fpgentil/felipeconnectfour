class Board < ActiveRecord::Base
  belongs_to :game

  before_create :setup_board

  def winner
    self.matrix.each do |row|
      if row.select{|v| v == "1"}.count >= 4
        return "1"
      elsif row.select{|v| v == "2"}.count >= 4
        return "2"
      end
    end

    self.matrix.transpose.each do |column|
      if column.select{|v| v == "1"}.count >= 4
        return "1"
      elsif column.select{|v| v == "2"}.count >= 4
        return "2"
      end
    end
    nil
  end

  def restart!
    self.matrix = Matrix.build(6,7){|row, column| 0}.to_a
    self.save!
  end

  private
  def setup_board
    self.matrix = Matrix.build(6,7){|row, column| 0}.to_a
  end
end
