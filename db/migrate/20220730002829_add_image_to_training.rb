class AddImageToTraining < ActiveRecord::Migration[7.0]
  def change
    add_column :trainings, :image, :string
  end
end
