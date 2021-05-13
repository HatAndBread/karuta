class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: %i[home games]
  def home; end

  def games
    @quizzes = Quiz.all.where(user: current_user)
  end
end
