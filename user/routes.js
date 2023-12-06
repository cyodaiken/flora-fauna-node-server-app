import * as dao from "./dao.js";

function userRoutes(app) {
  // populating all user
  const findAllUser = async (req, res) => {
    const user = await dao.findAllUsersDao();
    res.json(user);
  };
  app.get("/project/users", findAllUser);

  //find single user by id
  const findUserbyId = async (req, res) => {
    const id = req.params.id;
    const user = await dao.findUserByIdDao(parseInt(id));
    res.json(user);
  };
  app.get("/project/users/:id", findUserbyId);

  // deleting user
  const deleteUser = async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteUserDao(parseInt(id));
    res.json(status); // returning the status of the delete operation
  };
  app.delete("/project/users/:id", deleteUser);

  const createUser = async (req, res) => {
    const newUser = {
      user_id: user_id,
      password: req.body.password,
      role: req.body.role,
      profile_pic: req.body.profile_pic,
      created_at: new Date().toString(),
      ...req.body,
    };
    const createdUser = await dao.createUserDao(newUser);
    res.json(createdUser);
  };
  app.post("/project/users", createUser);

  const updateUser = async (req, res) => {
    const id = req.params.id;
    const newUser = req.body;
    const user = await dao.updateSingleUserDao(parseInt(id), newUser);
    res.json(user);
  };

  const account = async (req, res) => {
    // when signin, we can get the current user.
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(403);
      return;
    }
    res.json(currentUser);
  };
  app.post("/project/users/account", account);

  /*   WIP: Apurva 
  1. signin
  2. signup
  3. signout
  4. account 

  */
}

export default userRoutes;
