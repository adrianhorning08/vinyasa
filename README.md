# Vinyasa

![vinyasa_login](/vinyasa login.png)
[Vinyasa live](https://vinyasa.herokuapp.com/#/dashboard)

Vinyasa is a clone of [Asana](https://asana.com/?utm_source=app.asana.com&utm_campaign=app.asana.com#close)
It is built with a Rails backend and React/Redux frontend. Authentication implemented using BCyrpt.


![vinyasa_main](/vinyasa main.png)
## Features

  * Simple todo app
  * Users can create profiles and login with secure authentication
  * Users can create teams, projects, and tasks
  * Users can view and assign themselves (or others) tasks

## Implementation

### Getting all dependencies
The greatest struggle that I had was fetching the correct dependencies.
Dependencies:
  * Teams/Projects have many users
  * Users have many teams/Projects

To solve this I created Team Membership and Project Membership join tables. As an example, here is what the users model looked like:
```
has_many :team_memberships
has_many :teams,
  through: :team_memberships,
  source: :team
has_many :project_memberships
has_many :projects,
  through: :project_memberships,
  source: :project
has_many :tasks
```
From there, it was simply a matter of fetching the data, and formatting the json to have the data that I wanted. For example, here is the json I fetched from a team:

```
json.team do
  json.extract! team, :id, :name
end

json.members do
  json.array! team.members, :id, :username
end

json.projects do
  json.array! team.projects, :id, :title
end
```

Then the data would hit my reducers, and update my state appropriately.

### Realtime task update
By far, the hardest thing was to be able to create a task in the main task list, and be able to see the task name update in real time on the right pan showing the details of that task.

![adding_task](/vinyasa adding a task.png)

To do this, anytime the field in the main task index was updated (ie, a letter was added or subtracted), it would update the request via a patch request:
```
updateField(e) {
  if (this.state.title !== e.target.value) {
    this.setState({title: e.target.value});
    this.props.updateTask(this.state);
  }
}
```

This definitely creates a lot of requests going to the server. If I had more time I think I would use a websocket for this.


## Ideas for Future Work

  * Edit a task from the main task index list
  * Be able to edit the task either in the index list or in the right pane window and see real-time updates
  * In the main task right pane window, users should be able to assign other users a task and set a due date
  * Users should only be able to see team specific tasks (right now they see all their tasks across all teams)
  * Users should be able to invite other people to join their team via email
