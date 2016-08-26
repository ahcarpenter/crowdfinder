class PrefetchEventDataJob < ApplicationJob
  queue_as :default

  def perform(*args)
    (1..19).each do |page|
      @events = Eventbrite::Event.by_address('Los Angeles, CA')
                  .page(page).fetch
      print "Event data for page #{page} fetched!\n"

      @events.each do |event|
        event.organizer.fetch
        print "Organizer data for event #{event.id} fetched!\n"
      end
    end
  end
end
