import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Award, Users, Target, Sparkles } from 'lucide-react';
import {Link} from 'react-router-dom'

const AboutPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "50K+", label: "Happy Clients" },
    { number: "100K+", label: "Cars Washed" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in every service we provide, ensuring your vehicle receives premium care."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer First",
      description: "Your satisfaction drives everything we do. We listen, we care, and we deliver beyond expectations."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "We use cutting-edge techniques and eco-friendly products to give your car the best possible shine."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Quality",
      description: "From detailing to finishing touches, we ensure every inch of your vehicle sparkles with perfection."
    }
  ];

  const team = [
    {
      name: "Alex Rodriguez",
      role: "Founder & CEO",
      description: "25 years of automotive care expertise"
    },
    {
      name: "Sarah Mitchell",
      role: "Operations Director",
      description: "Ensuring excellence in every service"
    },
    {
      name: "Mike Chen",
      role: "Lead Detailing Specialist",
      description: "Master of automotive perfection"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-black"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content Box */}
            <div className="text-center md:text-left">
              <span className="tracking-widest text-purple-500 text-sm sm:text-base">// ABOUT US //</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4">
                Passion for Cars,{" "}
                <span className="text-purple-500">Commitment to Quality</span>
              </h1>
              <p className="text-gray-400 mt-6 text-base sm:text-lg leading-relaxed">
                We are a premium auto detailing service dedicated to delivering
                showroom-level perfection. Every vehicle we work on reflects our
                passion, precision, and promise of excellence.
              </p>
            </div>

            {/* Image Box */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
              <div className="h-[400px] relative rounded-3xl overflow-hidden border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
                <img src="/images/about.jpg" alt="Premium Auto Detailing" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 border-t border-purple-500/10 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-purple-500 tracking-widest text-sm">// OUR STORY //</span>
              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                Built on Trust & Craftsmanship
              </h2>

              <p className="text-gray-400 mb-4 leading-relaxed">
                Our journey began with a simple goal — to provide car owners
                with detailing services that go beyond the ordinary.
              </p>

              <p className="text-gray-400 leading-relaxed">
                Over the years, we've refined our techniques, invested in
                premium products, and built lasting relationships with
                thousands of satisfied clients.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative rounded-2xl bg-gradient-to-br from-purple-500/20 to-black p-8 border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-300">
                <p className="text-gray-300 text-lg leading-relaxed">
                  "We don't just clean cars — we restore pride, protect value,
                  and deliver an experience our customers can trust."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-purple-500 text-sm font-semibold mb-4 tracking-wider">// OUR VALUES //</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              What <span className="text-purple-500">Drives</span> Us
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 sm:p-8 hover:border-purple-500/40 transition-all duration-300">
                  <div className="text-purple-500 mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-purple-500 text-sm font-semibold mb-4 tracking-wider">// MEET THE TEAM //</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              The <span className="text-purple-500">Experts</span> Behind The Shine
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300">
                  <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-blue-600/20">
                    <img src="/images/men.jpg" alt={member.name} className="w-full h-[420px] object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-purple-500 text-sm mb-2">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default AboutPage;