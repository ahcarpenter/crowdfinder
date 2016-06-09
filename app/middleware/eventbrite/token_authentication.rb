class Eventbrite::TokenAuthentication < Faraday::Middleware
  def call(env)
    env.url.path.prepend('/v3')
    env.url.path << '/'
    env.request_headers.delete('Authorization')

    @app.call(env)
  end
end
