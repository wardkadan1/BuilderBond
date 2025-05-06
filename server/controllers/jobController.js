const Job = require("../models/Job");

exports.handleJobs = async (req, res) => {
  const { command, data } = req.body;
  try {
    switch (command) {
      case "insert":
        const newJob = new Job(data);
        await newJob.save();
        return res.json({ message: "Job inserted", job: newJob });
      case "select":
        const jobs = await Job.find({});
        return res.json({ jobs });
      case "update":
        const updated = await Job.findByIdAndUpdate(data.id, data, {
          new: true,
        });
        return res.json({ message: "Job updated", job: updated });
      case "delete":
        await Job.findByIdAndDelete(data.id);
        return res.json({ message: "Job deleted" });
      default:
        return res.status(400).json({ message: "Invalid command" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error in jobController" });
  }
};
