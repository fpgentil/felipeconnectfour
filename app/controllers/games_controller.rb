class GamesController < ApplicationController
  def update_board
    game = Game.find(params[:game_id])
    board = game.board

    column = params[:column].to_i
    value = params[:value].to_i

    matrix = board.matrix
    row_index = 5
    moved = false

    matrix.reverse.each do |row|
      if row[column] == "0"
        row[column] = value.to_s
        moved = true
        break
      end
      row_index -= 1
    end

    board.update_attributes(matrix: matrix)
    game.update_attributes(last_move_user_id: params[:value]) if moved
    response = { 'status': 'success' }
    response['column'] = column
    response['row'] = row_index
    response['value'] = value

    respond_to do |format|
      format.js { render json: response }
    end
  end
end
