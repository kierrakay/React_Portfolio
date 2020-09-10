class BlogPostSerializer < ActiveModel::Serializer

    attributes :id, :title, :content, :url
    has_many :comments
end 