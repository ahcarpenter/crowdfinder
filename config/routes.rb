Rails.application.routes.draw do
  concern :paginatable do
    get '(page/:page)', action: :index, on: :collection, as: ''
  end

  namespace :eventbrite do
    resources :events, concerns: :paginatable
    resources :organizers, concerns: :paginatable
  end

  root 'eventbrite/events#index'
end
