class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home
  def home; end

  def games
    @quizzes = Quiz.all.where(user: current_user)
  end
end
