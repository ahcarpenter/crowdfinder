class Eventbrite::EventSerializer < ApplicationSerializer
  attributes :name, :long_name, :capacity, :logo,
    :description, :start, :end, :organizer, :url

  def organizer
    Eventbrite::OrganizerSerializer.new(object.organizer)
  end

  def description
    object.description[:html]
  end
end
