class Eventbrite::OrganizerSerializer < ApplicationSerializer
  attributes :name

  has_many :events
end
