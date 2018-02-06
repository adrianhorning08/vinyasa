class Api::TasksController < ApplicationController
  def index
    if params[:user_id]
      @tasks = Project.where(user_id: params[:user_id])
      render "api/tasks/index"
    elsif params[:project_id]
      @tasks = Project.where(project_id: params[:project_id])
      render "api/tasks/index"
    end
  end

  def create
    @task = Task.create(task_params)
    if @task.save
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def show
    @task = Task.find_by(id: params[:task_id])
    render "api/tasks/show"
  end

  def destroy
    @task = Task.find_by(id: params[:task_id])
    @task.destroy
    render "api/tasks/show"
  end

  private
  def task_params
    params.require(:task).permit(:title, :description, :due_date, :user_id, :project_id)
  end
end
