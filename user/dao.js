import model from "./model.js";

export const findAllUsersDao = () => model.find();
export const findUserByIdDao = (user_id) => model.findOne({ user_id: user_id }); // ({_id: id}) is same as (id)
export const findUserByUserIdDao = (user_id) =>
  model.findOne({ user_id: user_id });
export const findUserByCredentialsDao = (user_id, password) =>
  model.findOne({ user_id: user_id, password: password });
export const findUserByRoleDao = (role) => model.find({ user_role: role }); // returns array of users
export const createUserDao = (user) => model.create(user);
export const updateSingleUserDao = (id, user) =>
  model.updateOne({ user_id: id }, { $set: user }); // match id and set user
export const deleteUserDao = (id) => model.deleteOne({ user_id: id });
