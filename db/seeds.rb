# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require Rails.root + 'db/dictionary.rb'

def create_questions(quiz)
    word = dic
    question = Question.create({content: word[:definition], answer: word[:word], quiz: quiz})
    puts "New question: #{question.answer}: #{question.content}"
end

def create_quiz(user)
    quiz = Quiz.create({name: Faker::Hipster.word, public: [true, false].sample, user: user})
    puts "Created a new quiz called #{quiz.name} owned by #{quiz.user.email}"
    quiz
end

puts "Destroying old database..."
User.destroy_all

me = User.create({email: 'a@a.co', password: 'asdasd'})
3.times do 
    quiz = create_quiz(me) 
    (1..39).to_a.sample.times { create_questions(quiz) }
end

puts "Old data deleted ✨"
20.times do 
    user = User.create({email: Faker::Internet.email, password: '123456'})
    puts "Created user: #{user.email}"
    (0..11).to_a.sample.times do
        quiz = create_quiz(user)
        (1..39).to_a.sample.times { create_questions(quiz) }
    end
end
