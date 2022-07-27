class Api::UserworkoutsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_workout
  before_action :set_userworkout, only: [:show, :update, :destroy]

  def index
    render json: @workout.userworkouts
  end

  def show
    render json: @userworkout 
  end

  def create
    @userworkout = @workout.userworkouts.new(userworkout_params)
    if @userworkout.save
      render json: @userworkout 
    else
      render json: { errors: @userworkout.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @userworkout.update(userworkout_params)
      render json: @userworkout 
    else
      render json: { errors: @userworkout.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @userworkout.destroy
    render json: { message: 'Workout removed' }
  end

 private
   def set_workout
     @workout = Workout.find(params[:workout_id]) 
   end

   def set_userworkout
     @userworkout = @workout.userworkouts.find(params[:id])
   end

   def userworkout_params
     params.require(:userworkout).permit( :user_id)
   end
end