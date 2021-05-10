class QuestionsController < ApplicationController
  def destroy
    question = Question.find(params[:id])
    quiz = question.quiz
    question.destroy!
    render json: quiz.to_json(include: [:questions])
  end
end
