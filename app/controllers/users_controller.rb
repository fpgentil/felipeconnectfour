class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    @game = Game.first
    @turn = @game.last_move_user != @user
  end
end
