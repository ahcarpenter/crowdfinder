class Eventbrite::EventsController < ApplicationController
  before_action :set_eventbrite_event, only: [:show, :edit, :update, :destroy]

  respond_to :html, :json

  def index
    @eventbrite_events = Eventbrite::Event.popular.by_address('Los Angeles, CA')
      .page(params[:page])

    respond_with(@eventbrite_events)
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
      params[:eventbrite_event]
    end
end
