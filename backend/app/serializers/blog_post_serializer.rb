class BlogPostSerializer < ActiveModel::Serializer
    include Rails.application.routes.url_helpers
    attributes :id, :title, :content, :link, :image

    has_many :comments

  

      def image
        if object.image.attached?
          {
            url: rails_blob_url(object.image)
          }
        end
      end
end 










# def image
#     return unless object.image.attached?

#     object.image.blob.attributes
#           .slice('filename', 'byte_size')
#           .merge(url: image_url)
#           .tap { |attrs| attrs['name'] = attrs.delete('filename') }
#   end

#   def image_url
#     url_for(object.image)
#   end