class Eventbrite::OrganizerDecorator < ApplicationDecorator
  def name
    object.name.truncate(30) if object.name
  end

  def long_name
    object.name
  end
end
