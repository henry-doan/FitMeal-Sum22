class AddDifficultyToWorkouts < ActiveRecord::Migration[7.0]
  def change
    add_column :workouts, :difficulty, :string
  end
end
