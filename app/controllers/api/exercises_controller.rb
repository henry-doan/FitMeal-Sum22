class Api::ExercisesController < ApplicationController

  before_action :set_workout
  before_action :set_exercise, only: [:show, :update, :destroy]

  def index
    render json: @workout.exercises 
  end

  def show
    render json: @exercise
  end

  def create
    @exercise = @workout.exercises.new(exercise_params)
    if @exercise.save 
      render json: @exercise
    else
      render json: { errors: @exercise.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @exercise.update(exercise_params)
      render json: @exercise 
    else
      render json: { errors: @exercise.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @exercise.destroy
    render json: { message: "exercise Deleted" }
  end
private 
  def set_workout 
    @workout = Workout.find(params[:workout_id])
  end

  def set_exercise
    @exercise = @workout.exercise.find(params[:id])
  end
  def exercise_params
     params.require(:exercise).permit(:name, :level, :movetype, :timeframe, :reps, :sets, :image, :desc, :category)
  end


end
