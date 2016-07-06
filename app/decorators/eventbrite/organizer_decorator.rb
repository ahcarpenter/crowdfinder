class Eventbrite::OrganizerDecorator < ApplicationDecorator
  decorates Eventbrite::Organizer

  def name
    object.name.truncate(30) if object.name
  end
end
