import Database from "../Database/index.js";

function exploreRoutes(app) {
    app.get("/project/explore", async (req, res) => {
        const observations = Database.observations;
        res.json(observations);
    });
    app.get("/project/explore/:id", async (req, res) => {
        const id = parseInt(req.params.id, 10);
        const observation = Database.observations.find((observation) => observation.id === id);
        res.json(observation);
    });
    app.delete("/project/explore/:id", async (req, res) => {
        const id = parseInt(req.params.id, 10);
        const index = Database.observations.findIndex((observation)=> observation.id === id)
        Database.observations.splice(index, 1);
        res.json(204);
    });

    app.post("/project/explore", async (req, res) => {
        const newObservation = {
            id: new Date().getTime().toString(),
            ...req.body,
        };
        Database.observations.unshift(newObservation);
        res.json(newObservation);
    });
}
export default exploreRoutes;