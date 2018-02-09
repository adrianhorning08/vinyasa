# Vinyasa

[Vinyasa live](https://vinyasa.herokuapp.com/#/dashboard)

Vinyasa is a full-stack application, modeled after [Asana](https://asana.com/?utm_source=app.asana.com&utm_campaign=app.asana.com#close) built with a Rails backend and React/Redux frontend. Authentication implemented using BCyrpt.

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

### Fetching data
Because of all the dependencies, fetching the data got pretty wonky. In the future I will probably refactor the requests. For example, after updating a task, I have to fetch a user or a project depending on if the user is on a user page, or a project page.
```
this.props.updateTask(this.state)
  .then(() => action(id))
  .then(() => this.props.history.push(`/dashboard/${path}/${id}`));
```

It seems like it would make more sense to fetch the tasks, team members, and projects separately.


## Ideas for Future Work

  * Edit a task from the main task index list
  * Be able to edit the task either in the index list or in the right pane window and see real-time updates
  * In the main task right pane window, users should be able to assign other users a task and set a due date
  * Users should only be able to see team specific tasks (right now they see all their tasks across all teams)
  * Users should be able to invite other people to join their team via email
