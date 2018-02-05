# == Schema Information
#
# Table name: projects
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string           not null
#  team_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
  validates :title, presence: true

  has_many :project_memberships
  has_many :users,
    through: :project_memberships,
    source: :user
end
