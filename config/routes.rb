Rails.application.routes.draw do
  namespace :eventbrite do
    end
  namespace :eventbrite do
    resources :venues
  end
  namespace :eventbrite do
    resources :ticket_classes
  end
  namespace :eventbrite do
    resources :organizers
  end
  namespace :eventbrite do
    resources :events
  end

  devise_for :users

  root 'eventbrite/events#index'
end
