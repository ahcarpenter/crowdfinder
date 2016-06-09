class Eventbrite::OrganizersController < ApplicationController
  before_action :set_eventbrite_organizer, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @eventbrite_organizers = Eventbrite::Organizer.all
    respond_with(@eventbrite_organizers)
  end

  def show
    respond_with(@eventbrite_organizer)
  end

  def new
    @eventbrite_organizer = Eventbrite::Organizer.new
    respond_with(@eventbrite_organizer)
  end

  def edit
  end

  def create
    @eventbrite_organizer = Eventbrite::Organizer.new(eventbrite_organizer_params)
    @eventbrite_organizer.save
    respond_with(@eventbrite_organizer)
  end

  def update
    @eventbrite_organizer.update(eventbrite_organizer_params)
    respond_with(@eventbrite_organizer)
  end

  def destroy
    @eventbrite_organizer.destroy
    respond_with(@eventbrite_organizer)
  end

  private
    def set_eventbrite_organizer
      @eventbrite_organizer = Eventbrite::Organizer.find(params[:id])
    end

    def eventbrite_organizer_params
      params[:eventbrite_organizer]
    end
end
