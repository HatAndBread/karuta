# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require Rails.root + 'db/dictionary.rb'

puts "Destroying old database..."
User.destroy_all
User.create({email: 'a@a.co', password: 'asdasd'})
puts "Old data deleted ✨"
user = User.create({email: Faker::Internet.email, password: '123456'})
20.times do 
    user = User.create({email: Faker::Internet.email, password: '123456'})
    puts "Created user: #{user.email}"
    (0..11).to_a.sample.times do
        quiz = Quiz.create({name: Faker::Hipster.word, public: [true, false].sample, user: user})
        puts "Created a new quiz called #{quiz.name} owned by #{quiz.user.email}"
        (1..39).to_a.sample.times do
            word = dic
            question = Question.create({content: word[:definition], answer: word[:word], quiz: quiz})
            puts "New question: #{question.answer}: #{question.content}"
        end
    end
end
