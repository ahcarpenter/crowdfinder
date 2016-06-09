json.array!(@eventbrite_venues) do |eventbrite_venue|
  json.extract! eventbrite_venue, :id
  json.url eventbrite_venue_url(eventbrite_venue, format: :json)
end
