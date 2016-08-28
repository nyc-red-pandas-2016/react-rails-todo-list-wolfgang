class TasksController < ApplicationController
  # before_action :find_task, only:[:destroy,:delete]
  def new
  end

  def show
      render json:all_tasks
  end

  def update
  end

  def delete
    find_task
  end

  def destroy
    Task.find(params[:id]).destroy
    render json:all_tasks
  end
  private
  def all_tasks
    Task.all
  end
end
