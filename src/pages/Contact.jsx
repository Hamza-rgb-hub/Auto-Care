// import React, { useState } from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
//   CheckCircle,
//   Send,
// } from "lucide-react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     service: "",
//     message: "",
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     await new Promise((resolve) => setTimeout(resolve, 1200));

//     alert("Thanks for reaching out! Our team will contact you shortly.");
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       service: "",
//       message: "",
//     });
//     setIsSubmitting(false);
//   };

//   const services = [
//     "Select a Service",
//     "Exterior Hand Washing",
//     "Interior Detailing",
//     "Full Detailing Package",
//     "Engine Bay Cleaning",
//     "Ceramic Coating",
//     "Paint Correction",
//     "Other",
//   ];

//   return (
//     <section className="bg-black text-white pt-28 pb-20 px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-20">
//           <p className="text-purple-500 font-mono tracking-widest mb-3">
//             // CONTACT US //
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold mb-5">
//             Let’s Talk About Your{" "}
//             <span className="text-purple-500">Car Shine</span>
//           </h1>
//           <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
//             Book premium auto detailing services or ask anything about
//             Convertible Auto Care.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16">

//           {/* LEFT INFO */}
//           <div className="space-y-10">

//             {[
//               {
//                 icon: <MapPin />,
//                 title: "Visit Our Studio",
//                 text: "Los Angeles, California\n5 St. Angelo’s Lakewood Road",
//               },
//               {
//                 icon: <Phone />,
//                 title: "Call Anytime",
//                 text: "+92 4253358253\n+92 4253358",
//               },
//               {
//                 icon: <Mail />,
//                 title: "Email Support",
//                 text: "reservedauto@gmail.com\nsupport@reservedauto.com",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="flex gap-5 bg-gradient-to-br from-purple-900/30 to-black border border-purple-700/30 p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition"
//               >
//                 <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
//                   {item.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-1">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-400 whitespace-pre-line">
//                     {item.text}
//                   </p>
//                 </div>
//               </div>
//             ))}

//             {/* Response */}
//             <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6">
//               <div className="flex items-center gap-4 mb-4">
//                 <Clock className="text-purple-500" />
//                 <h4 className="text-lg font-semibold">
//                   Fast Response Guaranteed
//                 </h4>
//               </div>
//               <div className="space-y-2 text-gray-400">
//                 <p className="flex items-center gap-2">
//                   <CheckCircle size={16} className="text-green-500" />
//                   Replies within 1–2 hours
//                 </p>
//                 <p className="flex items-center gap-2">
//                   <CheckCircle size={16} className="text-green-500" />
//                   Available 7 days a week
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT FORM */}
//           <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-700/30 rounded-3xl p-8 shadow-xl">
//             <h2 className="text-2xl font-bold mb-6">
//               Send Us a Message
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-4">
//                 <input
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Full Name"
//                   required
//                   className="input"
//                 />
//                 <input
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Email Address"
//                   required
//                   className="input"
//                 />
//               </div>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <input
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Phone Number"
//                   className="input"
//                 />
//                 <select
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   required
//                   className="input"
//                 >
//                   {services.map((s, i) => (
//                     <option key={i}>{s}</option>
//                   ))}
//                 </select>
//               </div>

//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="5"
//                 placeholder="Tell us about your car..."
//                 required
//                 className="input"
//               />

//               <button
//                 disabled={isSubmitting}
//                 className="w-full flex items-center justify-center gap-3 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-purple-400 hover:opacity-90 transition"
//               >
//                 <Send size={18} />
//                 {isSubmitting ? "Sending..." : "Send Message"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* INPUT STYLE */}
//       <style>
//         {`
//           .input {
//             width: 100%;
//             padding: 14px;
//             border-radius: 12px;
//             background: rgba(88,28,135,0.2);
//             border: 1px solid rgba(168,85,247,0.4);
//             outline: none;
//             color: white;
//           }
//           .input:focus {
//             box-shadow: 0 0 0 2px rgba(168,85,247,0.6);
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Send,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1200));

    alert("Thanks for reaching out! Our team will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const services = [
    "Select a Service",
    "Exterior Hand Washing",
    "Interior Detailing",
    "Full Detailing Package",
    "Engine Bay Cleaning",
    "Ceramic Coating",
    "Paint Correction",
    "Other",
  ];

  return (
    <section className="bg-black text-white pt-28 pb-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-purple-500 font-mono tracking-widest mb-3">
            // CONTACT US //
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Let’s Talk About Your{" "}
            <span className="text-purple-500">Car Shine</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Book premium auto detailing services or ask anything about
            Convertible Auto Care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT INFO */}
          <div className="space-y-10">
            {[
              {
                icon: <MapPin />,
                title: "Visit Our Studio",
                text: "Los Angeles, California\n5 St. Angelo’s Lakewood Road",
              },
              {
                icon: <Phone />,
                title: "Call Anytime",
                text: "+92 4253358253\n+92 4253358",
              },
              {
                icon: <Mail />,
                title: "Email Support",
                text: "reservedauto@gmail.com\nsupport@reservedauto.com",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 bg-gradient-to-br from-purple-900/30 to-black border border-purple-700/30 p-6 rounded-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] transition"
              >
                <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-gray-400 whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-purple-900/20 border border-purple-700/30 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="text-purple-500" />
                <h4 className="text-lg font-semibold">
                  Fast Response Guaranteed
                </h4>
              </div>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  Replies within 1–2 hours
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-500" />
                  Available 7 days a week
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-700/30 rounded-3xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="input"
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="input"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="input"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="input bg-purple-900/40 text-white"
                >
                  {services.map((s, i) => (
                    <option
                      key={i}
                      value={s}
                      className="bg-black text-white"
                    >
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell us about your car..."
                required
                className="input"
              />

              <button
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-3 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-purple-400 hover:opacity-90 transition"
              >
                <Send size={18} />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* INPUT + SELECT FIX */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 14px;
            border-radius: 12px;
            background-color: rgba(88, 28, 135, 0.25) !important;
            border: 1px solid rgba(168, 85, 247, 0.45);
            outline: none;
            color: white;
            appearance: none;
          }

          .input::placeholder {
            color: #c4b5fd;
          }

          .input:focus {
            background-color: rgba(88, 28, 135, 0.35) !important;
            box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.6);
          }

          input:-webkit-autofill,
          input:-webkit-autofill:hover,
          input:-webkit-autofill:focus,
          textarea:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px rgba(88, 28, 135, 0.35) inset !important;
            -webkit-text-fill-color: white !important;
          }

          select.input {
            background-image: url("data:image/svg+xml,%3Csvg fill='white' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.25 7.5L10 12.25L14.75 7.5'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 1rem center;
            background-size: 1.2em;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
