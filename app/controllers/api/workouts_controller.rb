class Api::WorkoutsController < ApplicationController
  # before_action :authenticate_user!
  before_action :set_workout, only: [:show, :update, :destroy]
  
  def index
    paginate json: Workout.all 
  end
 
  def show
    render json: @workout
  end
 
  def create
    @workout =  Workout.new(wname: params[:wname], difficulty: params[:difficulty])

    file = params[:file]
    
    if file && file != '' && file != "undefined"
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @workout.wimage = cloud_image['secure_url']
        if @workout.save
          render json: @workout
        else
          render json: { errors: @workout.errors.full_messages }, status: 422
        end
      rescue => e
  
        render json: { errors: e }, status: 422
      end
    else
      @workout.wimage = 'https://images.unsplash.com/photo-1553531889-65d9c41c2609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d29ya291dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
      if @workout.save
        render json: @workout
      else
        render json: { errors: @workout.errors.full_messages }, status: 422
      end
    end
  end
 
  def update
    @workout.wname = params[:wname] ? params[:wname] : @workout.wname
    @workout.difficulty = params[:difficulty] ? params[:difficulty] : @workout.difficulty

    file = params[:file]
    
    if file && file != '' && file != "undefined"
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @workout.wimage = cloud_image['secure_url']
        if @workout.save
          render json: @workout
        else
          render json: { errors: @workout.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else
      if @workout.save
        render json: @workout
      else
        render json: { errors: @workout.errors.full_messages }, status: 422
      end
    end
  end
 
  def destroy
    @workout.destroy
    render json: { message: ' Workout removed' }
  end
 
  def newest
    render json: Workout.all.order(created_at: :desc)
  end

  def popular
    render json: Workout.popular
  end

  def workout_all
    render json: Workout.all 
  end

  private
  def workout_params
    params.require(:workout).permit(:wname, :wimage, :difficulty)
  end
 
  def set_workout
    @workout =  Workout.find(params[:id])
  end
 
 
 end
 