class Api::ProjectsController < ApplicationController
  def create
    @project = Project.new(project_params)
    if @project.save
      ProjectMembership.create(user_id: current_user.id, project_id: @project.id)
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def index
    # need to filter by the team id
    @projects = Project.all
    render "api/projects/index"
  end

  def show
    @project = Project.find_by(id: params[:id])
    render "api/projects/show"
  end

  def update
    @project = Project.find_by(id: param[:id])
    if @project.update(project_params)
      render "api/projects/show"
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def destroy
    @project = Project.find_by(id: params[:id])
    # Ryan doesn't have @project.destroy, so if theres a bug,
    # that might be it
    @project.destroy
    # Why are we always rendering the show?
    # To get the data we need?
    render "api/projects/show"
  end

  private
  def project_params
    params.require(:project).permit(:title, :team_id)
  end
end
