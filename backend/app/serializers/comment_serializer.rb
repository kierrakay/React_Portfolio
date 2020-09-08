class CommentSerializer < ActiveModel::Serializer

    attributes :id, :name, :content
    belongs_to :blog_post
end 