class CreateWorkouts < ActiveRecord::Migration[7.0]
  def change
    create_table :workouts do |t|
      t.string :wname
      t.string :wimage
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
