Rails.application.routes.draw do
  
  namespace :api, defaults: {format: :json} do
    resources :books, only: [:index, :create, :update, :destroy, :show]
  end
  
  root 'templates#index'
  get '/templates/:path.html' => 'templates#template', :constraints => { :path => /.+/  }
end
