class ApplicationDecorator < Draper::Decorator
  delegate_all

  private
    def strdate_to_human(str)
      str.to_time.strftime("%b %-d, %Y @ %l %P")
    end
end
