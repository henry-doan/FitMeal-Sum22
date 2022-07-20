class Api::TrainingsController < ApplicationController

  before_action :set_training, only: [:show, :update, :destroy]

  def index
    render json: current_user.trainings    
  end

  def show
    render json: @training
  end

  def create
    @training = current_user.trainings.new(training_params)
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
    render json: { message: 'training removed' }
  end

  private 
    def training_params 
      params.require(:training).permit(:tname, :duration)
    end

    def set_training
      @training = current_user.trainings.find(params[:id])
    end
end
