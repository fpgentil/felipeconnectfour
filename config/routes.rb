Rails.application.routes.draw do
  resources :users, only: :show
  resources :games do
    post :update_board
    get :restart
  end
end
