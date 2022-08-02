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
    get '/popularWorkouts', to: 'workouts#popular'
    get '/newestWorkouts', to: 'workouts#newest'
  end
end
