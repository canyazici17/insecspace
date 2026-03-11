import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { toast } from 'sonner';

const Registration = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', surname: '', email: '', phone: '', title: '', organization: '' });
  const [submitting, setSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name || !form.surname || !form.email || !form.phone || !form.title || !form.organization) return false;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRe.test(form.email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error('Please fill all fields with valid information');
      return;
    }
    if (!consent) {
      setConsentError('Please read and accept the Privacy Notice to proceed with registration.');
      return;
    } else {
      setConsentError("");
    }
    setSubmitting(true);
    try {
      // POST to backend API
      const apiBase = process.env.REACT_APP_API_URL || 'https://insecspace.onrender.com';
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
      setForm({ name: '', surname: '', email: '', phone: '', title: '', organization: '' });
      setConsent(false);
      setConsentError("");
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
                <Input name="organization" value={form.organization} onChange={handleChange} placeholder="Organization" />
              </div>
              <Input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" />
              <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" />

              <div className="flex flex-col gap-1 mb-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy-consent"
                    checked={consent}
                    onChange={e => setConsent(e.target.checked)}
                    className="mr-2 h-4 w-4 accent-cyan-500"
                  />
                  <label htmlFor="privacy-consent" className="text-sm text-gray-700 select-none">
                    I have read and understood the <span className="font-semibold">Privacy Notice</span> and consent to the processing of my personal data for the purposes stated above.
                  </label>
                </div>
                {consentError && (
                  <span className="text-sm text-red-600 mt-1">{consentError}</span>
                )}
                <a
                  href="/INSECSPACE-KVKK-PRIVACY-NOTICE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-700 underline hover:text-cyan-900 mt-2"
                >
                  Please review the Personal Data Protection and Privacy Notice.
                </a>
              </div>
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
