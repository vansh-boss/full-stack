import { useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

     emailjs
      .sendForm(
        "service_yn1kmmg",   // Replace with your EmailJS Service ID
        "template_og94fxj",                // Replace with your EmailJS Template ID
        formRef.current,
        "XtOaqWy0Qi_Zcf7Fu"    // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          formRef.current.reset();
          setSending(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Message failed ❌");
          setSending(false);
        }
      );
  };

  return (
    <footer className="relative z-20 bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* ===== BRAND ===== */}
        <div>
          <h2 className="text-2xl font-bold text-white">
           E- Note<span className="text-indigo-400">Web</span>
          </h2>
          <p className="text-sm mt-3 text-gray-400">
           Write the best version of your dreams 💫, grow every day 🚀
          </p>

          <div className="flex gap-4 mt-4">
            <a href="https://github.com/vansh-boss" className="hover:text-white transition">
              <Github />
            </a>
            <a href="linkedin.com/in/vanshpanchal12345" className="hover:text-white transition">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-white transition">
              <Mail />
            </a>
          </div>
        </div>

        {/* ===== QUICK LINKS ===== */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
           <a href="/Home"> <li className="hover:text-white cursor-pointer"  >Home</li></a><br />

          <a href="/Notes"> <li className="hover:text-white cursor-pointer">Notes</li></a><br />
          
           <a href="/AddNote"> <li className="hover:text-white cursor-pointer">Add Note</li><br /></a>
          
          <a href="/profile">  <li className="hover:text-white cursor-pointer">Profile</li></a><br />
          </ul>
        </div>

        {/* ===== CONTACT FORM ===== */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 outline-none focus:border-indigo-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 outline-none focus:border-indigo-400"
            />

            <textarea
              name="message"
              rows="3"
              placeholder="Your Message"
              required
              className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 outline-none focus:border-indigo-400"
            ></textarea>

            <button
              type="submit"
              disabled={sending}
              className={`w-full py-2 rounded bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition ${
                sending ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

      </div>

      {/* ===== BOTTOM ===== */}
      <div className="border-t border-gray-800 text-center text-sm py-4 text-gray-400">
        © {new Date().getFullYear()} NoteWeb. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
