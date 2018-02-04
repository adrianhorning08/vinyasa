# == Schema Information
#
# Table name: project_memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  project_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ProjectMembership < ApplicationRecord
  validates :user_id, :project_id, presence: true

  belongs_to :user
  belongs_to :project
end
