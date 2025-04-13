export const createJob = async (req, res) => {
    try {
      const { name, state, email, bio, resume, mobile } = req.body;
      console.log("Job created:", { name, state, email, bio, resume, mobile });
      res.status(200).json({ message: "Job created successfully!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  