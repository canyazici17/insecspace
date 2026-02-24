import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

const Registration = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', surname: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name || !form.surname || !form.email || !form.phone) return false;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRe.test(form.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fill all fields with valid information');
      return;
    }
    setSubmitting(true);
    try {
      // POST to backend API
      const apiBase = process.env.REACT_APP_API_URL || 'http://localhost:8000';
      const res = await fetch(`${apiBase}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Server error');
      }

      const data = await res.json();
      console.log('Registration saved', data);
      toast.success('Registration submitted — we will contact you via email');
      setForm({ name: '', surname: '', email: '', phone: '' });
      setShowForm(false);
    } catch (err) {
      console.error(err);
      toast.error('Submission failed — please try again');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h1 className="text-4xl font-bold mb-6">Registration</h1>
        <p className="text-gray-400 mb-6">Register for INSECSPACE 2026. Please follow the registration instructions provided by the organisers.</p>

        <div className="flex justify-center">
          <Button onClick={() => setShowForm(true)} className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded-md">
            Register Now
          </Button>
        </div>

        {showForm && (
          <div className="mt-8 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
                <Input name="surname" value={form.surname} onChange={handleChange} placeholder="Surname" />
              </div>
              <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" />
              <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" />

              <div className="flex justify-end gap-4">
                <Button type="button" variant="ghost" onClick={() => setShowForm(false)} className="text-gray-400">Cancel</Button>
                <Button type="submit" disabled={submitting} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  {submitting ? 'Submitting...' : 'Submit Registration'}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Registration;
