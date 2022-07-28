class Api::UserworkoutsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_userworkout, only: [:show, :update, :destroy]

  def index
    render json: current_user.userworkouts
  end

  def show
    render json: @userworkout 
  end

  def create
    @userworkout = current_user.userworkouts.new(userworkout_params)
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
   def set_userworkout
     @userworkout = current_user.userworkouts.find(params[:id])
   end

   def userworkout_params
     params.require(:userworkout).permit( :workout_id)
   end
end