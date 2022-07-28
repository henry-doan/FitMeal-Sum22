class Exercise < ApplicationRecord
  belongs_to :workout
  # validates :name, :level, :movetype, :eduration, :reps, :sets, :image, :desc, :category, presence: true
end
