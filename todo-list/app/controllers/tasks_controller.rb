class TasksController < ApplicationController
  # before_action :find_task, only:[:destroy,:delete]
  def new
  end

  def show
      task= Task.all
      render json:task
  end

  def update
  end

  def delete
    find_task
  end

  def destroy
    Task.find(params[:id]).destroy
    render 'show'
  end
  private
  def find_task
    # task = Task.find(id:params[:id])
  end
end
