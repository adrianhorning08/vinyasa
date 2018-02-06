# == Schema Information
#
# Table name: tasks
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  due_date    :date
#  user_id     :integer          not null
#  project_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Task < ApplicationRecord
  validates :title, presence: true

  belongs_to :user
  belongs_to :project
end
