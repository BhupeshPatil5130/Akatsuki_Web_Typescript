
import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  loading: boolean;
  error: string;
  success: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    loading: false,
    error: "",
    success: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, loading: true });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormStatus({
        loading: false,
        error: "",
        success: "Your message has been sent. Thank you!",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        loading: false,
        error: "There was an error sending your message. Please try again.",
        success: "",
      });
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="max-w-7xl mx-auto text-4xl md:text-5xl font-bold text-black font-sans">
            Get in touch with <span className="text-red-500">Akatsuki</span>
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            "Contact us for any queries, help or guidance from expert, we always ready for you!"
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <i className="bx bx-map text-4xl text-red-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Our Address</h3>
              <p className="text-gray-600">
                Shirpur Education Society's R. C. Patel Institute of Technology,
                Shirpur
                <br />
                Near Nimzari Naka, Shahada Road, Shirpur Dist. Dhule (M.S.)
                Maharashtra, India - 425405
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <a href="mailto:akatsuki.rcpit@gmail.com" className="text-red-600">
                <i className="bx bx-envelope text-4xl mb-4"></i>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-600">akatsuki@rcpit.ac.in</p>
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <i className="bx bx-phone-call text-4xl text-red-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">+91 8080511069</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <a
                href="https://instagram.com/akatsuki_codingclub?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D"
                className="text-red-600"
              >
                <i className="iconify text-4xl mb-4" data-icon="mdi:instagram"></i>
                <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                <p className="text-gray-600">@akatsuki_codingclub</p>
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="lg:col-span-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.7130973147446!2d74.87659731488918!3d21.36180898581892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdf3203969b41c7%3A0xb4050432d04ef5b8!2sR.%20C.%20Patel%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1641411494541!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="lg:col-span-1">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control w-full p-3 border border-gray-300 rounded"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control w-full p-3 border border-gray-300 rounded"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mb-4">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-control w-full p-3 border border-gray-300 rounded"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="form-control w-full p-3 border border-gray-300 rounded"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              {formStatus.loading && (
                <div className="text-center text-gray-600">Loading...</div>
              )}
              {formStatus.error && (
                <div className="bg-red-600 text-white p-3 mb-4 rounded">
                  {formStatus.error}
                </div>
              )}
              {formStatus.success && (
                <div className="bg-green-600 text-white p-3 mb-4 rounded">
                  {formStatus.success}
                </div>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
