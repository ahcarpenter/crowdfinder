json.array!(@eventbrite_events) do |eventbrite_event|
  json.extract! eventbrite_event, :id
  json.url eventbrite_event_url(eventbrite_event, format: :json)
end
