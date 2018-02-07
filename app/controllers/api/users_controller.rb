class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render "api/users/show"
  end

  def index
    team_id = params[:team_id]

   if team_id
     @users = User.includes(:teams).where(teams: {id: team_id})
   else
     @users = User.all
   end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
