import Database from "../Database/index.js";

function userRoutes(app) {
  // populating all user
  app.get("/project/users", async (req, res) => {
    const users = Database.users;
    res.json(users);
  });
  // getting new user.
  app.get("/project/users/:id", async (req, res) => {
    const id = req.params.id;
    const user = Database.users.find((user) => user.user_id === id);
    res.json(user);
  });
  // deleting user
  app.delete("/project/users/:id", async (req, res) => {
    const id = req.params.id;
    const user = Database.users.find((user) => user.user_id === id);
    const index = Database.users.indexOf(user);
    Database.users.splice(index, 1);
    res.json(user);
  });
  // posting new user
  app.post("/project/users", async (req, res) => {
    const newUser = {
      user_id: req.body.user_id,
      created_at: new Date().toString(),
      ...req.body,
    };

    Database.users.unshift(newUser);
    res.json(newUser);
  });
}

export default userRoutes;
