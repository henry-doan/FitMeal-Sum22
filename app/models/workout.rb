class Workout < ApplicationRecord
  belongs_to :user

  has_many :exercises, dependent: :destroy
  validates :wname, :wimage, presence: true
end
