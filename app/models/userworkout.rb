class Userworkout < ApplicationRecord
  belongs_to :user
  belongs_to :workout
  validates :workout_id, uniqueness:{scope: :user_id,
  message: “can only add a workout once”}
  


end