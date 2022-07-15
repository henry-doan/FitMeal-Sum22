class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :level
      t.string :movetype
      t.datetime :timeframe
      t.integer :reps
      t.integer :sets
      t.string :image
      t.text :desc
      t.string :category
      t.belongs_to :workout, null: false, foreign_key: true

      t.timestamps
    end
  end
end
