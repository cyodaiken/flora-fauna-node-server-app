import Database from "../Database/index.js";
import * as dao from "./dao.js";

function exploreRoutes(app) {
  const findAllObservations = async (req, res) => {
    const observations = await dao.findAllObservationsDao();
    res.json(observations);
  };
  app.get("/project/explore", findAllObservations);

  const findObservationById = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const observation = await dao.findObservationByIdDao(id);
    res.json(observation);
  };
  app.get("/project/explore/:id", findObservationById);

  const deleteObservation = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const status = await dao.deleteObservationDao(id);
    res.json(status);
  };
  app.delete("/project/explore/:id", deleteObservation);

  const createObservation = async (req, res) => {
    const newObservation = {
      id: req.body.id,
      created_at: new Date().toString(),
      ...req.body,
    };
    const createdObservation = await dao.createObservationDao(newObservation);
    res.json(createdObservation);
  };
  app.post("/project/explore", createObservation);

  const updateObservation = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const newObservation = req.body;
    const observation = await dao.updateSingleObservationDao(
      id,
      newObservation
    );
    res.json(observation);
  };
  app.put("/project/explore/:id", updateObservation);
}
export default exploreRoutes;
