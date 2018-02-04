# == Schema Information
#
# Table name: team_memberships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  team_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TeamMembership < ApplicationRecord
  belongs_to :team
  belongs_to :user
end
