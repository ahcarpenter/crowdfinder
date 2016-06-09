json.array!(@eventbrite_organizers) do |eventbrite_organizer|
  json.extract! eventbrite_organizer, :id
  json.url eventbrite_organizer_url(eventbrite_organizer, format: :json)
end
