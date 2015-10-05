class AddLastMoveToGame < ActiveRecord::Migration
  def change
    add_column :games, :last_move_user_id, :integer
  end
end
