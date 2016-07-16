class Eventbrite::OrganizerDecorator < ApplicationDecorator
  def name
    object.name.truncate(30) if object.name
  end
end
