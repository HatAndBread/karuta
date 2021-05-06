Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  resources :users do
    resources :quizzes, only: [:index, :edit]
  end
end
