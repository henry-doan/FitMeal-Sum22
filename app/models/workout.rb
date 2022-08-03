class Workout < ApplicationRecord

  has_many :userworkouts, dependent: :destroy
  has_many :users, through: :userworkouts
  has_many :exercises, dependent: :destroy
  validates :wname, :wimage, :difficulty, presence: true
  
  def self.popular 
    Workout.find_by_sql("select wo.id, wo.wname,wo.wimage,count(uwo.user_id)
    from workouts as wo
    left join userworkouts as uwo on uwo.workout_id = wo.id
    group by wo.id
    order by count desc")
  end
end
