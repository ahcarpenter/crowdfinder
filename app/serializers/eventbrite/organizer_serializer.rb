class Eventbrite::OrganizerSerializer < ApplicationSerializer
  attributes :name

  has_many :events

  def name
    object.decorate.name
  end
end
