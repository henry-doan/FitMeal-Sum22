class Training < ApplicationRecord
  belongs_to :user

  validates :tname, :duration, presence: true
end
