class QuizzesController < ApplicationController
    def index
        @quizzes = Quiz.all.where(user: current_user)
    end
    def create
        
    end
    def edit
        @quiz = Quiz.find(params[:id])
    end
    def update
        
    end
    
    private

    def quizzes_params
        params.require(:quizzes).permit(:name, :public)
    end
end
