import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_o3zusea';
const ADMIN_TEMPLATE_ID = 'template_a4kexlk';
const USER_TEMPLATE_ID = 'template_c8srh12';
const PUBLIC_KEY = '8V0leUyNxF9lSCWFu';

const ContactForm = () => {
  const [form, setForm] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    box_size: '',
    title: '',
    message: '',
  });

  const [fileURL, setFileURL] = useState('');
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_upload_preset'); // 🔁 Replace with real preset
    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.secure_url) {
        setFileURL(data.secure_url);
        setFileName(file.name);
      } else {
        throw new Error('Upload failed');
      }
    } catch (err) {
      console.error('Cloudinary Upload Error:', err);
      alert('❌ File upload failed. Try again.');
    }
  };

  const validate = () => {
    const { user_name, user_email, user_phone, box_size, title, message } = form;
    return (
      user_name.trim() &&
      user_email.includes('@') &&
      user_phone.length >= 8 &&
      box_size &&
      title.trim() &&
      message.trim()
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      alert('⚠️ Please fill in all required fields correctly.');
      return;
    }

    setLoading(true);

    const templateParams = {
      ...form,
      attachment: fileURL || 'No file uploaded',
      attachment_name: fileName || 'N/A',
    };

    try {
      // Send to Admin
      await emailjs.send(SERVICE_ID, ADMIN_TEMPLATE_ID, templateParams, PUBLIC_KEY);

      // Auto Reply to User
      await emailjs.send(SERVICE_ID, USER_TEMPLATE_ID, templateParams, PUBLIC_KEY);

      alert('✅ Your message was sent successfully!');
      setForm({
        user_name: '',
        user_email: '',
        user_phone: '',
        box_size: '',
        title: '',
        message: '',
      });
      setFileURL('');
      setFileName('');
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('❌ Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow rounded-md space-y-4">
      <h2 className="text-xl font-semibold text-center">📩 Contact Us</h2>

      <input
        name="user_name"
        type="text"
        placeholder="Full Name*"
        value={form.user_name}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        required
      />

      <input
        name="user_email"
        type="email"
        placeholder="Email*"
        value={form.user_email}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        required
      />

      <input
        name="user_phone"
        type="tel"
        placeholder="Phone Number*"
        value={form.user_phone}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        required
      />

      <select
        name="box_size"
        value={form.box_size}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        required
      >
        <option value="">Select Box Size*</option>
        <option value="Small (4x4x2 inches)">Small (4x4x2 inches)</option>
        <option value="Medium (8x6x4 inches)">Medium (8x6x4 inches)</option>
        <option value="Large (12x10x6 inches)">Large (12x10x6 inches)</option>
        <option value="Custom">Custom Size</option>
      </select>

      <input
        name="title"
        type="text"
        placeholder="Subject*"
        value={form.title}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message*"
        value={form.message}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded"
        rows="4"
        required
      ></textarea>

      <input
        type="file"
        accept=".pdf,.doc,.png,.jpg,.jpeg"
        onChange={handleFileUpload}
        className="w-full px-2"
      />
      {fileName && <p className="text-sm text-green-600">✅ Attached: {fileName}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;
