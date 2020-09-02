class Api::V1::BlogPostsController < ApplicationController

    def index
        blog_posts = BlogPost.all 
        render json: blog_posts
    end

    def create 
        blog_posts = BlogPost.create(blog_posts_params)
        blog_posts.save!
        render json: blog_posts
    end

    def destroy 
        blog_posts = BlogPost.find_by(:id => params[:id]).destroy
        render json: blog_posts
    end

    private

    def blog_posts_params
        params.require(:blog_posts).permit(:title, :content)
    end
end