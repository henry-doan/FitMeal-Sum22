class Userworkout < ApplicationRecord
  belongs_to :user
  belongs_to :workout

  has_many :trainings, through: :userworkouts
end
