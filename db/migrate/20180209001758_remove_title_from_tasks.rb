class RemoveTitleFromTasks < ActiveRecord::Migration[5.1]
  def change
    remove_column :tasks, :title, :string
  end
end
