class Eventbrite::Event < Eventbrite::Model
  include Kaminari::HerCollection

  parse_root_in_json true, format: :active_model_serializers

  belongs_to :organizer

  collection_path '/events/search'
  resource_path '/events/:id'

  scope :by_address, ->(address) { where('location.address' => address) }
end
