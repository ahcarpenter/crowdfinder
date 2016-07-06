class Eventbrite::EventSerializer < ApplicationSerializer
  attributes :name, :capacity, :logo, :description, :start, :end

  belongs_to :organizer do
    object.organizer.fetch
  end
end
