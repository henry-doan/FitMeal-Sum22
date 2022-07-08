class Api::WorkoutsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_workout, only: [:show, :update, :destroy]
  
  def index
    render json: current_user.workouts
  end

  def show
    render json: @workout
  end

  def create
    @workout = current_user.workouts.new(workout_params)
    if @workout.save
      render json: @workout
    else
      render json: { errors: @workout.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @workout.update(workout_params)
      render json: @workout
    else
      render json: { errors: @workout.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @workout.destroy
    render json: { message: 'Workout deleted'}
  end
  
  private
    def workout_params 
      params.require(:workout).permit(:wname, :wimage)
    end

    def set_workout
      @workout = current_user.workouts.find(params[:id])
    end
end
