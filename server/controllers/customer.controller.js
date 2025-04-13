// server/controllers/customer.controller.js
export const submitCustomer = async (req, res) => {
    try {
      const { name, mobile, email, requirement } = req.body;
      console.log("Customer submitted:", { name, mobile, email, requirement });
  
      // You can save to MongoDB if needed
      res.status(200).json({ message: "Customer data submitted successfully!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  