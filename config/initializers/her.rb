Her::API.setup url: 'https://www.eventbriteapi.com' do |c|
  #Request
  c.use FaradayMiddleware::Caching, Rails.cache
  c.use FaradayMiddleware::OAuth2, ENV['EVENTBRITE_ACCESS_TOKEN'], {param_name: 'token'}
  c.use Eventbrite::TokenAuthentication

  # Response
  c.use Eventbrite::Parser

  # Adapter
  c.use Faraday::Adapter::NetHttp
end

