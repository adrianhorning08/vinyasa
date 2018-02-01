class Team < ApplicationRecord
  validates :name, presence: true
  has_many :team_memberships
  has_many :users,
    through: :team_memberships,
    source: :user
end
