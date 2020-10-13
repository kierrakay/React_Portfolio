class Api::V1::BlogPostsController < ApplicationController

    def index
        blog_posts = BlogPost.all 
        render json: blog_posts
        # render json: blog_posts.with_attached_image
    end

    def create 
       binding.pry
        # blog_post = BlogPost.create(blog_post_params)
        # blog_post.save!
        # render json: blog_post
        # render json: blog_post, notice: 'Blog was successfully created.'
    end

    def show 
       
        blog_post = BlogPost.find(params[:id])
        image = rails_blob_path(blog_post.image)
        render json: blog_post
    end

    def destroy 
        # binding.pry
        blog_post = BlogPost.find(params[:id])
        # comment = Comment.find(blog_post.comments)
        # blog_post = BlogPost.find(params["id"])
        blog_post.destroy
        render json: {}, status: 200
        # render json: blog_post
        # blog_post = BlogPost.find_by(:id => params[:id]).destroy
        # render json: blog_post
        # blog_post = BlogPost.find_by(:id => params[:blog_post_id]).destroy
        # render json: blog_post
    end

    private

    def blog_post_params
        params.require(:blog_post).permit(:title, :content, :link, :image)
        
      
    end
end