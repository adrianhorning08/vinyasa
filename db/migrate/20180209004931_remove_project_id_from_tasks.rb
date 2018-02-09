class RemoveProjectIdFromTasks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tasks, :project_id, :integer
  end
end
