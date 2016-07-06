class Eventbrite::EventsController < ApplicationController
  before_action :set_eventbrite_event, only: [:show, :edit, :update, :destroy]
  # decorates_assigned :event

  respond_to :html, :json

  def index
    @eventbrite_events = Eventbrite::Event.by_address('Los Angeles, CA')
      .page(params[:page])

    @eventbrite_events = Eventbrite::EventDecorator.decorate_collection(@eventbrite_events)

    meta = {
      current_page: @eventbrite_events.current_page,
      total_pages: @eventbrite_events.total_pages,
      total_count: @eventbrite_events.total_count
    }

    respond_with(@eventbrite_events, each_serializer: Eventbrite::EventSerializer, include: :*, meta: meta)
  end

  def show
    respond_with(@eventbrite_event)
  end

  def new
    @eventbrite_event = Eventbrite::Event.new
    respond_with(@eventbrite_event)
  end

  def edit
  end

  def create
    @eventbrite_event = Eventbrite::Event.new(eventbrite_event_params)
    @eventbrite_event.save
    respond_with(@eventbrite_event)
  end

  def update
    @eventbrite_event.update(eventbrite_event_params)
    respond_with(@eventbrite_event)
  end

  def destroy
    @eventbrite_event.destroy
    respond_with(@eventbrite_event)
  end

  private
    def set_eventbrite_event
      @eventbrite_event = Eventbrite::Event.find(params[:id])
    end

    def eventbrite_event_params
      params.require(:eventbrite_event)
    end
end
