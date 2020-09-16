class Api::V1::CommentsController < ApplicationController
    before_action :set_blog_post

    def index
        @blog_post = @blog_post.comments
        render json: @comments
    end

    def create 
        # binding.pry
        # if @blogPost = BlogPost.find_by(:id => params[:blog_post_id])
        @comment = @blog_post.comments.new(comment_params)
        if @blogPost = BlogPost.find_by(:id => params[:blog_post_id])
        @comment.save
        render json: @blog_post
        else 
            render json: {error: "invalid"}
        end
    
    end

    def show 
       
       @comment= Comment.find(params[:id])
        render json: @comment
    end

    def destroy 
        @comment = Comment.find_by(:id => params[:id]).destroy
        render json: @comment
    end

    private

    def set_blog_post
        @blog_post = BlogPost.find(params[:blog_post_id])
    end

    def comment_params
        params.require(:comment).permit(:name, :content, :blog_post_id)
    end
end