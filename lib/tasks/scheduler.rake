desc 'This task pre-fetches event data'
task :prefetch_event_data => :environment do
  PrefetchEventDataJob.perform_later
end
