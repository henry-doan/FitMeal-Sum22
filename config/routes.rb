Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api do
    
    resources :users, only: :update do
    
      resources :userworkouts
    end
    resources :workouts do
      resources :exercises
   
    # get '/:id/users', to: 'workouts#users'
    end
    get '/userWorkouts', to: 'users#allUserWorkouts'
    resources :userworkouts, except: [:index, :show, :create, :update, :destroy] do
      resources :trainings
    end
    get '/workout_all', to: 'workouts#workout_all'
  end
end
