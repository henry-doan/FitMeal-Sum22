class Workout < ApplicationRecord
  belongs_to :user

  validates :wname, :wimage, presence: true
end
