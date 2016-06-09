class Eventbrite::VenuesController < ApplicationController
  before_action :set_eventbrite_venue, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @eventbrite_venues = Eventbrite::Venue.all
    respond_with(@eventbrite_venues)
  end

  def show
    respond_with(@eventbrite_venue)
  end

  def new
    @eventbrite_venue = Eventbrite::Venue.new
    respond_with(@eventbrite_venue)
  end

  def edit
  end

  def create
    @eventbrite_venue = Eventbrite::Venue.new(eventbrite_venue_params)
    @eventbrite_venue.save
    respond_with(@eventbrite_venue)
  end

  def update
    @eventbrite_venue.update(eventbrite_venue_params)
    respond_with(@eventbrite_venue)
  end

  def destroy
    @eventbrite_venue.destroy
    respond_with(@eventbrite_venue)
  end

  private
    def set_eventbrite_venue
      @eventbrite_venue = Eventbrite::Venue.find(params[:id])
    end

    def eventbrite_venue_params
      params[:eventbrite_venue]
    end
end
