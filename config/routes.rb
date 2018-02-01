Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api do
    resources :users, only: [:create, :update], defaults: {format: :json}
    resource :session, only: [:create, :destroy], defaults: {format: :json}
    resources :teams, except: [:new, :edit], defaults: {format: :json}
  end
end
