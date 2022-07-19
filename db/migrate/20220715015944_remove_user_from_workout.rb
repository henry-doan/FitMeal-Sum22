class RemoveUserFromWorkout < ActiveRecord::Migration[7.0]
  def change
    remove_reference :workouts, :user, null: false, foreign_key: true
  end
end
