import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function EngineerJobForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    bio: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 p-6 shadow-lg">
        <CardContent>
          <h2 className="text-xl font-bold text-center mb-4">Engineer Job Application</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Name</label>
              <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-sm font-medium">Mobile Number</label>
              <Input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <Textarea name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div>
              <label className="block text-sm font-medium">Bio</label>
              <Textarea name="bio" value={formData.bio} onChange={handleChange} required />
            </div>
            <Button type="submit" className="w-full">Apply Now</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
