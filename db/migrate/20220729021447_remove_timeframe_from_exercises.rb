class RemoveTimeframeFromExercises < ActiveRecord::Migration[7.0]
  def change
    remove_column :exercises, :timeframe
    add_column :exercises, :eduration, :integer 
  end
end
