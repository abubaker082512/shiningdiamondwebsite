import * as React from "react";
import { useState } from "react";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await api.submitLead(data);
      setSubmitted(true);
      toast.success("Appointment request sent successfully!");
    } catch (err) {
      toast.error("Failed to send request. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-100 p-12 rounded-3xl text-center space-y-4">
        <h3 className="text-2xl font-bold text-emerald-900">Thank You!</h3>
        <p className="text-emerald-700">Your appointment request has been received. Our team will contact you shortly.</p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4">
          Send another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" name="name" placeholder="John Doe" required className="h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="john@example.com" required className="h-12" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" name="phone" placeholder="+1 (555) 000-0000" required className="h-12" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="service">Interested Service</Label>
          <select
            id="service"
            name="service"
            required
            className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select a service</option>
            <option value="lawn">Lawn Maintenance</option>
            <option value="garden">Garden Design</option>
            <option value="hardscape">Hardscaping</option>
            <option value="irrigation">Irrigation System</option>
            <option value="cleanup">Seasonal Cleanup</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea id="message" name="message" placeholder="Describe your project here..." className="min-h-[120px]" required />
      </div>

      <Button type="submit" disabled={loading} className="w-full h-14 text-lg bg-emerald-600 hover:bg-emerald-700">
        {loading ? <Loader2 className="mr-2 animate-spin" /> : "Request Appointment"}
      </Button>
      <p className="text-center text-xs text-slate-500">
        By submitting this form, you agree to our privacy policy and terms of service.
      </p>
    </form>
  );
}
