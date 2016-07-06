class Eventbrite::OrganizerSerializer < ApplicationSerializer
  attributes :name

  has_many :events

  def name
    object.name.truncate(30) if object.name
  end
end
