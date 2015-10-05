class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :user_one_id
      t.integer :user_two_id
      t.integer :status
      t.integer :winner_id

      t.timestamps null: false
    end
  end
end
