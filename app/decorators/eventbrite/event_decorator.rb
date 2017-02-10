class Eventbrite::EventDecorator < ApplicationDecorator
  include ActionView::Helpers::NumberHelper

  decorates_association :organizer, with: Eventbrite::OrganizerDecorator

  def name
    object.name[:text].truncate(25)
  end

  def long_name
    object.name[:text]
  end

  def capacity
    number_to_human object.capacity
  end

  def start
    strdate_to_human(object.start['local'])
  end

  def end
    strdate_to_human(object.end['local'])
  end
end
