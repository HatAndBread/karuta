class Quiz < ApplicationRecord
  belongs_to :user
  has_many :questions, -> { order('created_at asc') }, dependent: :destroy

  accepts_nested_attributes_for :questions
end
