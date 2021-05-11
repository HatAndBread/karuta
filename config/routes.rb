Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get '/games', to: 'pages#games'
  resources :users do
    resources :quizzes
  end
  resources :questions, only: [:destroy]
end
