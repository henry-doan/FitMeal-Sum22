class Workout < ApplicationRecord

  has_many :userworkouts, dependent: :destroy
  has_many :users, through: :userworkouts
  has_many :exercises, dependent: :destroy
  validates :wname, :wimage, presence: true
end
