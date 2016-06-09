class Eventbrite::Venue
  include Her::Model
  has_many :events
end
