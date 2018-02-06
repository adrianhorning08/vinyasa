class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.string :description
      t.date :due_date
      t.integer :user_id, null: false
      t.integer :project_id, null: false

      t.timestamps
    end
    add_index :tasks, :user_id
    add_index :tasks, :project_id
  end
end
