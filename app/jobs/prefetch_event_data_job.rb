class PrefetchEventDataJob < ApplicationJob
  queue_as :default

  def perform(*args)
    (1..5).each do |page|
      Rails.cache.delete("/events/search?location.address=Los+Angeles%2C+CA&page=#{page}")
      @events = Eventbrite::Event.by_address('Los Angeles, CA')
                  .page(page).fetch
      print "Event data for page #{page} fetched!\n"

      @events.each do |event|
        Rails.cache.delete("/organizers/#{event.organizer.id}")
        event.organizer.fetch
        print "Organizer data for event #{event.id} fetched!\n"
      end
    end
  end
end
