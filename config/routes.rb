Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :teams, except: [:new, :edit] do
      resources :projects, except: [:new, :edit]
    end
    resources :projects, except: [:new, :edit] do
      resources :tasks, except: [:new, :edit]
    end
    resources :users, except: [:new, :edit] do
      resources :tasks, except: [:new, :edit]
    end
  end
end
