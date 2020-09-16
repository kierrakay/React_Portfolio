class BlogPost < ApplicationRecord
    has_many :comments, dependent: :destroy

   
end
