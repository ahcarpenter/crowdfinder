class Eventbrite::EventDecorator < ApplicationDecorator
  include ActionView::Helpers::NumberHelper

  decorates_association :organizer, with: Eventbrite::OrganizerDecorator

  def name
    object.name[:text].truncate(25)
  end

  def capacity
    number_to_human object.capacity
  end

  def start
    strtime_to_long_ordinal(object.start['local'])
  end

  def end
    strtime_to_long_ordinal(object.end['local'])
  end
end
