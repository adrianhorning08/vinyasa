class Api::TeamsController < ApplicationController
  before_action :ensure_logged_in

  def create
    @team = Team.new(team_params)
    if @team.save
      render "api/teams/show"
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def index
    @teams = Team.all
    # This is what I wasnt doing before (below)
    # Why do you want to do this even?
    # For example, when do you render Json vs. rendering this way
    render "api/teams/index"
  end

  def update
    @team = Team.find_by(id: params[:id])

    if @team.update(team_params)
      render "api/teams/show"
    else
      render json: @team.errors.full_messages, status: 422
    end

  end

  def show
    @team = Team.find_by(id: params[:id])
    render "api/teams/show"
  end

  def destroy
    @team = Team.find_by(id: params[:id])
    render "api/teams/show"
  end

  private
  def team_params
    params.require(:team).permit(:name)
  end
end
