class TasksController < ApplicationController
  before_action :find_task, only:[:destroy]
  def new
  end

  def show
      task= Task.all
      render json:task
  end

  def update
  end

  def delete
    
  end

  def destroy
    find_task.destroy
  end
  private
  def find_task
    task = Task.find(params[:id])
  end
end
