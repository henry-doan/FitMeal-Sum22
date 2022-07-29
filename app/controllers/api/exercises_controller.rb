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
    @exercise = @workout.exercises.new(
      name: params[:name], 
      desc: params[:desc], 
      level: params[:level], 
      movetype: params[:movetype], 
      reps: params[:reps], 
      sets: params[:sets],
      category: params[:category],
      eduration: params[:eduration]
    )
    
    file = params[:file]

    if file && file != '' && file != "undefined"
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @exercise.image = cloud_image['secure_url']
        if @exercise.save
          render json: @exercise
        else
          render json: { errors: @exercise.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else
      @exercise.image = 'https://images.unsplash.com/photo-1553531889-65d9c41c2609?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8d29ya291dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
      if @exercise.save
        render json: @exercise
      else
        render json: { errors: @exercise.errors.full_messages }, status: 422
      end
    end
  end

  def update
    @exercise.name = params[:name] ? params[:name] : @exercise.name
    @exercise.desc = params[:desc] ? params[:desc] : @exercise.desc
    @exercise.level = params[:level] ? params[:level] : @exercise.level
    @exercise.movetype = params[:movetype] ? params[:movetype] : @exercise.movetype
    @exercise.reps = params[:reps] ? params[:reps] : @exercise.reps
    @exercise.sets = params[:sets] ? params[:sets] : @exercise.sets
    @exercise.category = params[:category] ? params[:category] : @exercise.category
    @exercise.eduration = params[:eduration] ? params[:eduration] : @exercise.eduration

    file = params[:file]

    if file && file != '' && file != "undefined"
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)
        @exercise.image = cloud_image['secure_url']
        if @exercise.save
          render json: @exercise
        else
          render json: { errors: @exercise.errors.full_messages }, status: 422
        end
      rescue => e
        render json: { errors: e }, status: 422
      end
    else
      if @exercise.save
        render json: @exercise
      else
        render json: { errors: @exercise.errors.full_messages }, status: 422
      end
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
    @exercise = @workout.exercises.find(params[:id])
  end
  def exercise_params
     params.require(:exercise).permit(:name, :level, :movetype, :eduration, :reps, :sets, :image, :desc, :category)
  end


end
