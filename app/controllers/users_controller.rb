class UsersController < ApplicationController


  def show
    @user = User.find(params[:id])
    @game = Game.first
    @turn = @game.last_move_user != @user

    response = { 'status': 'success' }
    response['turn'] = @turn
    response['matrix'] = @game.board.matrix.to_a
    response['winner'] = @game.board.winner

    respond_to do |format|
      format.html
      format.js { render json: response }
    end
  end
end
