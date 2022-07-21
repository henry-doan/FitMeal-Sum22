class Training < ApplicationRecord
  belongs_to :userworkout

  validates :tname, :duration, presence: true
end
