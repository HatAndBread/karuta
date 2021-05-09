# No!
class QuizzesController < ApplicationController
  def index
    @quizzes = Quiz.all.where(user: current_user)
  end

  def new
    @quiz = Quiz.new
    @quiz.user_id = current_user.id
  end

  def show
    @quiz = Quiz.find(params[:id])
  end

  def create
    @quiz = Quiz.new(quizzes_params)
  end

  def edit
    @quiz = Quiz.find(params[:id])
  end

  def update
    @quiz = Quiz.find(params[:id])
    puts '$$$$$$$$$$$$$$$$$$$$$$$44'
    p params
    # redirect_to @quiz if @quiz.update(quizzes_params)
  end

  def destroy
    @quiz = Quiz.find(params[:id])
    redirect_to quizzes_url if @quiz.destroy
  end

  private

  def quizzes_params
    params.require(:quizzes).permit(:name, :public, :questions)
  end
end
