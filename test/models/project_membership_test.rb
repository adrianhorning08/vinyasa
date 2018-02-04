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

require 'test_helper'

class ProjectMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
