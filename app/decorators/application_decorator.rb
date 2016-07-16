class ApplicationDecorator < Draper::Decorator
  delegate_all

  private
    def strtime_to_long_ordinal(time)
      DateTime.parse(time).to_s(:long_ordinal)
    end
end
