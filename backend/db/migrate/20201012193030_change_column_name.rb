class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :blog_posts, :url, :link
  end
end
