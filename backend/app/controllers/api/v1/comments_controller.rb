class Api::V1::CommentsController < ApplicationController

    def index
        comments = Comment.all 
        render json: comments
    end

    def create 
        # binding.pry
       comment = Comment.create(comment_params)
        comment.save!
        render json: comment
    end

    def show 
       
       comment= Comment.find(params[:id])
        render json: comment
    end

    def destroy 
        comment = Comment.find_by(:id => params[:id]).destroy
        render json: comment
    end

    private

    def comment_params
        params.require(:comment).permit(:name, :content, :book_post_id)
    end
end