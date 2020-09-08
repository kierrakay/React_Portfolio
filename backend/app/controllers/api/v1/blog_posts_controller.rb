class Api::V1::BlogPostsController < ApplicationController

    def index
        blog_posts = BlogPost.all 
        render json: blog_posts
    end

    def create 
        # binding.pry
        blog_post = BlogPost.create(blog_post_params)
        blog_post.save!
        render json: blog_post
    end

    def show 
       
        blog_post = BlogPost.find(params[:id])
        render json: blog_post
    end

    def destroy 
        blog_post = BlogPost.find_by(:id => params[:id]).destroy
        render json: blog_post
    end

    private

    def blog_post_params
        params.require(:blog_post).permit(:title, :content)
    end
end