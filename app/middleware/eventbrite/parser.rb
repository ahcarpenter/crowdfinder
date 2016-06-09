class Eventbrite::Parser < Faraday::Response::Middleware
  def on_complete(env)
    json = MultiJson.load(env[:body], symbolize_keys: true)
    error = json.delete(:error)
    pagination = json.delete(:pagination)

    env[:body] = {
      data: json,
      errors: error,
      metadata: {
        pagination: pagination
      }
    }
  end
end
