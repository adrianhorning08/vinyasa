class AddProjectIdToTasks < ActiveRecord::Migration[5.1]
  def change
    add_column :tasks, :project_id, :integer
  end
end
