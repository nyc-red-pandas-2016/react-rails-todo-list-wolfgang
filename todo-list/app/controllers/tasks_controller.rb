class TasksController < ApplicationController
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
end
