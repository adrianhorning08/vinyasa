class TasksChannel < ApplicationCable::Channel
  def subscribed
    stream_from "tasks_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # this is what swangs had
 #  def create(opts)
 #   Message.create(
 #     content: opts.fetch('content'),
 #     channel_id: opts.fetch('channel_id'),
 #     author_id: opts.fetch('author_id')
 #   )
 # end
end
