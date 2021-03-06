# == Schema Information
#
# Table name: teams
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Team < ApplicationRecord
  validates :name, presence: true
  has_many :team_memberships
  has_many :members,
    through: :team_memberships,
    source: :user
  has_many :projects
end
