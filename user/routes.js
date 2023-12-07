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
    req.session.destroy();
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
    // req.session["currentUser"] = user;
    res.json(user);
  };
  app.get("/a5/welcome", (req, res) => {
    res.send("Welcome to Assignment 5");
  });

  /*   WIP: Apurva 
  1. signin
  2. signup
  3. signout
  4. account 

  */

  const signup = async (req, res) => {
    try {
      const user = await dao.findUserByUserIdDao(req.body.user_id);
      if (user) {
        res.json(200);
      }
      const newUser = {
        user_id: req.body.user_id,
        password: req.body.password,
        role: req.body.user_role,
        user_name: req.body.user_name,
        email: req.body.email,
        user_login: req.body.user_login,
        created_at: new Date().toString(),
        ...req.body,
      };
      const currentUser = await dao.createUserDao(newUser);
      req.session["currentUser"] = currentUser;
      res.json(currentUser);
    } catch (e) {
      console.log(e);
    }
  };

  const signin = async (req, res) => {
    try {
      const { user_id, password } = req.body;
      const currentUser = await dao.findUserByCredentialsDao(user_id, password);
      if (currentUser) {
        req.session["currentUser"] = currentUser;
        res.json(currentUser);
      } else {
        res.sendStatus(403);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const account = async (req, res) => {
    const currentUser = req.session["currentUser"];
    console.log(currentUser);
    if (!currentUser) {
      res.sendStatus(403);
      return;
    }
    res.json(currentUser);
  };
  const signout = (req, res) => {
    try {
      req.session.destroy();
      res.json(200);
    } catch (e) {
      console.log(e);
    }
  };
  app.post("/project/users/signup", signup);
  app.post("/project/users/signin", signin);
  app.post("/project/users/signout", signout);
  app.post("/project/users/account", account);
}

export default userRoutes;
