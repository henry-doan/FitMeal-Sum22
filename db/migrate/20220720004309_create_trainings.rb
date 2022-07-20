class CreateTrainings < ActiveRecord::Migration[7.0]
  def change
    create_table :trainings do |t|
      t.string :tname
      t.integer :duration
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
