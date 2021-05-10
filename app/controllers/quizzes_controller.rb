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
    @quiz = Quiz.new(quiz_params)
  end

  def edit
    @quiz = Quiz.find(params[:id])
  end

  def update
    quiz = Quiz.find(params[:id])
    quiz.update(quiz_params)
    update_questions(params[:questions])
    render json: quiz.to_json(include: [:questions])
  end

  def destroy
    @quiz = Quiz.find(params[:id])
    redirect_to quizzes_url if @quiz.destroy
  end

  private

  def quiz_params
    params.require(:quiz).permit(:name, :public, :questions)
  end

  def update_questions(questions)
    questions.each do |question|
      Question.find(question[:id]).update({ content: question[:content], answer: question[:answer] })
    end
  end
end
