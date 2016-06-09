json.array!(@eventbrite_ticket_classes) do |eventbrite_ticket_class|
  json.extract! eventbrite_ticket_class, :id
  json.url eventbrite_ticket_class_url(eventbrite_ticket_class, format: :json)
end
