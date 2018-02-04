class CreateProjectMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :project_memberships do |t|
      t.integer :user_id, null: false
      t.integer :project_id, null: false

      t.timestamps
    end
    add_index :project_memberships, :user_id
    add_index :project_memberships, :project_id
  end
end
