class AddUrlToBlogPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :blog_posts, :url, :string
  end
end
