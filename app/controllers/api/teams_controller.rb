class Api::TeamsController < ApplicationController
  before_action :ensure_logged_in

  def create
    @team = Team.new(team_params)
    if @team.save
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def index
    @teams = Team.all
  end

  def update
    @team = Team.find_by(id: params[:id])

    if @team.update(team_params)
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end

  end

  def show
    @team = Team.find_by(id: params[:id])
  end

  def destroy
    @team = Team.find_by(id: params[:id])
    @team.delete
  end

  private
  def team_params
    params.require(:team).permit(:name)
  end
end
