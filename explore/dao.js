import model from "./model.js";

export const findAllObservationsDao = () => model.find();
export const findObservationByIdDao = (id) => model.findOne({ id: id });
export const findObservationByCredentialDao = (username, password) => model.findOne({ username: username, password: password });  
export const findObservationByRoleDao = (role) => model.find({ role: role }); 
export const findObservationByUserName = (name) => model.findOne({ name: name });
export const createObservationDao = (observation) => model.create(observation);
export const deleteObservationDao = (id) => model.deleteOne({ id: id });    
export const updateObservationDao = (id, observation) => model.updateOne({ id: id }, { $set: observation });