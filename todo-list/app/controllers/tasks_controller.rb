class TasksController < ApplicationController
  # before_action :find_task, only:[:destroy,:delete]
  def new

  end
  def create
    task = Task.new(tasks_params)
    if task.save
      render json:all_tasks
    else
      errorsArray = task.errors.full_messages
      errors = {
        errors: errorsArray
      }
      render json:errors
    end
  end

  def show
      render json:all_tasks
  end

  def update
    task = Task.find(params[:id])
   if task.complete == false
     task.update_attributes(:complete=>true)
   else
     task.update_attributes(:complete=>false)
   end
    render json:all_tasks
  end

  def delete
    find_task
  end

  def destroy
    Task.find(params[:id]).destroy
    render json:all_tasks
  end
  private
  def tasks_params
    params.require(:task).permit(:name,:description,:complete)
  end
  def all_tasks
    Task.all
  end
end
