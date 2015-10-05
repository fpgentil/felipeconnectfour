class CreateBoards < ActiveRecord::Migration
  def change
    create_table :boards do |t|
      t.integer :game_id
      t.text :matrix, array: true, default: []

      t.timestamps null: false
    end
  end
end
