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

  belongs_to :user
  belongs_to :project,
    primary_key: :id,
    foreign_key: :project_id,
    class_name: 'Project',
    optional: true
end
