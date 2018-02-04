class Api::TeamMembershipsController < ApplicationController
  def create
    @team_membership = TeamMembership.new(team_membership_params)
    if @team_membership.save
      render "api/team_memberships/show"
    else
      render json: @team_membership.errors.full_messages, status: 422
    end
  end

  private
  def team_membership_params
    params.require(:team_membership).permit(:user_id, :team_id)
  end
end
