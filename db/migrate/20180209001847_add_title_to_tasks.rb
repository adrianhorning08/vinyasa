class AddTitleToTasks < ActiveRecord::Migration[5.1]
  def change
    add_column :tasks, :title, :string
  end
end
