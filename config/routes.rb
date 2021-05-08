Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :users do
    resources :quizzes, only: %i[index edit update]
  end
end
