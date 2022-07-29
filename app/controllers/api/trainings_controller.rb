class Api::TrainingsController < ApplicationController

  before_action :set_userworkout
  before_action :set_training, only: [:show, :update, :destroy]

  def index
  render json: @userworkout.trainings
  end

  def show
    render json: @training
  end

  def create
    @training = @userworkout.trainings.new(training_params)
    if @training.save 
      render json: @training 
    else
      render json: { errors: @training.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @training.update(training_params)
      render json: @training 
    else
      render json: { errors: @training.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @training.destroy
    render json: { message: "training Deleted" }
  end

  private 
    def set_userworkout
      @userworkout = Userworkout.find(params[:userworkout_id])
    end
    def set_training
      @training = @userworkout.trainings.find(params[:id])
    end
    def training_params
      params.require(:training).permit(:tname, :duration)
    end
end
