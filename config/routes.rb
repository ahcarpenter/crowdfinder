Rails.application.routes.draw do
  namespace :eventbrite do
    resources :events
    resources :organizers
    resources :ticket_classes
    resources :venues
  end

  devise_for :users

  root 'eventbrite/events#index'
end
