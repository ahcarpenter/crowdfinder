class Eventbrite::TicketClassesController < ApplicationController
  before_action :set_eventbrite_ticket_class, only: [:show, :edit, :update, :destroy]

  respond_to :html

  def index
    @eventbrite_ticket_classes = Eventbrite::TicketClass.all
    respond_with(@eventbrite_ticket_classes)
  end

  def show
    respond_with(@eventbrite_ticket_class)
  end

  def new
    @eventbrite_ticket_class = Eventbrite::TicketClass.new
    respond_with(@eventbrite_ticket_class)
  end

  def edit
  end

  def create
    @eventbrite_ticket_class = Eventbrite::TicketClass.new(eventbrite_ticket_class_params)
    @eventbrite_ticket_class.save
    respond_with(@eventbrite_ticket_class)
  end

  def update
    @eventbrite_ticket_class.update(eventbrite_ticket_class_params)
    respond_with(@eventbrite_ticket_class)
  end

  def destroy
    @eventbrite_ticket_class.destroy
    respond_with(@eventbrite_ticket_class)
  end

  private
    def set_eventbrite_ticket_class
      @eventbrite_ticket_class = Eventbrite::TicketClass.find(params[:id])
    end

    def eventbrite_ticket_class_params
      params[:eventbrite_ticket_class]
    end
end
