class Eventbrite::EventDecorator < ApplicationDecorator
  include ActionView::Helpers::NumberHelper

  decorates_association :organizer, with: Eventbrite::OrganizerDecorator

  def name
    object.name[:text].truncate(25)
  end

  def capacity
    number_to_human(object.capacity)
  end
end
