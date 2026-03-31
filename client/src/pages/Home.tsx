import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Mail, Phone, MapPin, Globe, Star, Users, Briefcase, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Ganush Restaurant Website
 * Design Philosophy: Warm Spice Market Aesthetic
 * 
 * Color Palette:
 * - Parchment/Cream: #F5F1D5 (primary background)
 * - Burnt Sienna: #A64B29 (primary accent, arches, dark details)
 * - Steel Blue: #8DB1C4 (light accents, flower petals)
 * - Deep Charcoal: #333333 (typography, small accents)
 * - Terracotta: #D98C72 (warm accents, camel body)
 * - Sky Blue: #C7DCE7 (background elements, arch outlines)
 * 
 * Typography:
 * - Playfair Display: Display headings (elegant, sophisticated)
 * - Open Sans: Body text (readable, modern)
 * - Cormorant Garamond: Special callouts and restaurant name
 */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    {
      name: "menu.chicken",
      description: "menu.chicken_desc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663496893429/SeEZeXfhndNspwnmsdFYSJ/hero-shawarma-kYq3QqbUwbVfznxaSXQgZM.webp",
      price: "$12.99",
      size: "col-span-1 md:col-span-2 row-span-2",
    },
    {
      name: "menu.lamb",
      description: "menu.lamb_desc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663496893429/SeEZeXfhndNspwnmsdFYSJ/lamb-shawarma-detail-n3ksfv6fvSiGMJNnbi8i.webp",
      price: "$14.99",
      size: "col-span-1 md:col-span-2 row-span-2",
    },
    {
      name: "menu.bomb",
      description: "menu.bomb_desc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663496893429/SeEZeXfhndNspwnmsdFYSJ/hero-shawarma-kYq3QqbUwbVfznxaSXQgZM.webp",
      price: "$15.99",
      size: "col-span-1 md:col-span-1 row-span-1",
    },
    {
      name: "menu.falafel",
      description: "menu.falafel_desc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663496893429/SeEZeXfhndNspwnmsdFYSJ/spices-close-up-mg49zALTvUvJczewkFGbWJ.webp",
      price: "$9.99",
      size: "col-span-1 md:col-span-1 row-span-1",
    },
    {
      name: "menu.hummus",
      description: "menu.hummus_desc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663496893429/SeEZeXfhndNspwnmsdFYSJ/spices-close-up-mg49zALTvUvJczewkFGbWJ.webp",
      price: "$8.99",
      size: "col-span-1 md:col-span-1 row-span-1",
    },
    {
      name: "menu.tabbouleh",
      description: "menu.tabbouleh_desc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663496893429/SeEZeXfhndNspwnmsdFYSJ/spice-pattern-UVGwTveFJhAJ3iWxtqmSec.webp",
      price: "$10.99",
      size: "col-span-1 md:col-span-1 row-span-1",
    },
    {
      name: "menu.kebab",
      description: "menu.kebab_desc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663496893429/SeEZeXfhndNspwnmsdFYSJ/lamb-shawarma-detail-n3ksfv6fvSiGMJNnbi8i.webp",
      price: "$13.99",
      size: "col-span-1 md:col-span-2 row-span-1",
    },
    {
      name: "menu.baklava",
      description: "menu.baklava_desc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663496893429/SeEZeXfhndNspwnmsdFYSJ/spice-pattern-UVGwTveFJhAJ3iWxtqmSec.webp",
      price: "$6.99",
      size: "col-span-1 md:col-span-1 row-span-1",
    },
    {
      name: "menu.coffee",
      description: "menu.coffee_desc",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663496893429/SeEZeXfhndNspwnmsdFYSJ/spices-close-up-mg49zALTvUvJczewkFGbWJ.webp",
      price: "$4.99",
      size: "col-span-1 md:col-span-1 row-span-1",
    },
  ];

  const jobs = [
    {
      title: "careers.kitchen",
      description: "careers.kitchen_desc",
    },
    {
      title: "careers.front",
      description: "careers.front_desc",
    },
    {
      title: "careers.delivery",
      description: "careers.delivery_desc",
    },
    {
      title: "careers.management",
      description: "careers.management_desc",
    },
  ];

  const contacts = [
    {
      icon: <Phone size={32} />,
      title: "contact.phone",
      content: "contact.phone_number",
    },
    {
      icon: <Mail size={32} />,
      title: "contact.email",
      content: "contact.email_address",
    },
    {
      icon: <MapPin size={32} />,
      title: "contact.address",
      content: "contact.address_text",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F1D5] text-[#333333]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#FDFAF0]/96 backdrop-blur-sm shadow-sm border-b border-[#D98C72]/25">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#A64B29] rounded-full flex items-center justify-center ring-2 ring-[#D98C72]/50 ring-offset-1 ring-offset-[#FDFAF0]">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "Cormorant Garamond" }}>G</span>
            </div>
            <h1 className="text-2xl font-bold text-[#A64B29] tracking-widest" style={{ fontFamily: "Cormorant Garamond" }}>
              Ganush
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {[
              { id: "home", label: "nav.home" },
              { id: "menu", label: "nav.menu" },
              { id: "about", label: "nav.about" },
              { id: "careers", label: "nav.careers" },
              { id: "contact", label: "nav.contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-[#A64B29] border-b-2 border-[#A64B29]"
                    : "text-[#333333] hover:text-[#A64B29]"
                }`}
              >
                {t(item.label)}
              </button>
            ))}
            {/* Language Switcher */}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-[#D98C72]">
              <Globe size={18} className="text-[#A64B29]" />
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === "en"
                    ? "bg-[#A64B29] text-white"
                    : "text-[#333333] hover:bg-[#F5F1D5]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === "es"
                    ? "bg-[#A64B29] text-white"
                    : "text-[#333333] hover:bg-[#F5F1D5]"
                }`}
              >
                ES
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#A64B29]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#D98C72] p-4 space-y-3">
            {[
              { id: "home", label: "nav.home" },
              { id: "menu", label: "nav.menu" },
              { id: "about", label: "nav.about" },
              { id: "careers", label: "nav.careers" },
              { id: "contact", label: "nav.contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-[#333333] hover:bg-[#F5F1D5] rounded"
              >
                {t(item.label)}
              </button>
            ))}
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 px-4 py-2 border-t border-[#D98C72] mt-3">
              <Globe size={18} className="text-[#A64B29]" />
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === "en"
                    ? "bg-[#A64B29] text-white"
                    : "text-[#333333] hover:bg-[#F5F1D5]"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                  language === "es"
                    ? "bg-[#A64B29] text-white"
                    : "text-[#333333] hover:bg-[#F5F1D5]"
                }`}
              >
                ES
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663496893429/SeEZeXfhndNspwnmsdFYSJ/hero-shawarma-kYq3QqbUwbVfznxaSXQgZM.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/65"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
          <h2
            className="text-7xl md:text-9xl font-bold mb-3 tracking-[0.18em]"
            style={{ fontFamily: "Cormorant Garamond", textShadow: "0 2px 30px rgba(0,0,0,0.45)" }}
          >
            {t("hero.title")}
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16 bg-[#D98C72]/70" />
            <svg className="shrink-0" width="12" height="12" viewBox="0 0 14 14" fill="#D98C72">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5Z"/>
            </svg>
            <div className="h-px w-16 bg-[#D98C72]/70" />
          </div>
          <p className="text-xl md:text-2xl mb-6 tracking-wide" style={{ fontFamily: "Open Sans" }}>
            {t("hero.subtitle")}
          </p>
          <p className="text-lg mb-8 opacity-90" style={{ fontFamily: "Open Sans" }}>
            {t("hero.description")}
          </p>
          <Button
            onClick={() => scrollToSection("menu")}
            className="bg-[#A64B29] hover:bg-[#8B3D1F] text-white px-8 py-3 text-lg"
          >
            {t("hero.cta")}
          </Button>
        </div>
      </section>

      {/* Menu Section - Bento Box Layout */}
      <section id="menu" className="py-20 bg-white arabesque-bg">
        <div className="container mx-auto px-4">
          <h2
            className="text-5xl font-bold text-center mb-4 text-[#A64B29]"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t("menu.title")}
          </h2>
          <p className="text-center text-[#666666] mb-6 text-lg" style={{ fontFamily: "Open Sans" }}>
            {t("menu.subtitle")}
          </p>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-20 bg-[#D98C72]/50" />
            <svg className="shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="#A64B29">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5Z"/>
            </svg>
            <div className="h-px w-20 bg-[#D98C72]/50" />
          </div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`${item.size} bg-[#F5F1D5] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer group relative`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "Cormorant Garamond" }}
                  >
                    {t(item.name)}
                  </h3>
                  <p className="text-sm opacity-90 mb-3" style={{ fontFamily: "Open Sans" }}>
                    {t(item.description)}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">{item.price}</span>
                    <Button className="bg-[#A64B29] hover:bg-[#8B3D1F] text-white text-sm h-8">
                      {t("menu.order")}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#A64B29]">
        <div className="container mx-auto px-4">
          <h2
            className="text-5xl font-bold text-center mb-4 text-white"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t("testimonials.title")}
          </h2>
          <p className="text-center text-white/90 mb-6 text-lg" style={{ fontFamily: "Open Sans" }}>
            {t("testimonials.subtitle")}
          </p>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-20 bg-white/30" />
            <svg className="shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="white" opacity="0.6">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5Z"/>
            </svg>
            <div className="h-px w-20 bg-white/30" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "testimonials.review1_name",
                text: "testimonials.review1_text",
                rating: 5,
              },
              {
                name: "testimonials.review2_name",
                text: "testimonials.review2_text",
                rating: 5,
              },
              {
                name: "testimonials.review3_name",
                text: "testimonials.review3_text",
                rating: 5,
              },
              {
                name: "testimonials.review4_name",
                text: "testimonials.review4_text",
                rating: 5,
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:border-white/40 transition-all hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-2 right-4 text-7xl leading-none text-white/10 select-none pointer-events-none" style={{ fontFamily: "Georgia, serif" }}>"</div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white mb-6 text-lg" style={{ fontFamily: "Open Sans" }}>
                  "{t(review.text)}"
                </p>
                <p className="text-white/80 font-semibold" style={{ fontFamily: "Cormorant Garamond" }}>
                  — {t(review.name)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-[#F5F1D5] arabesque-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-5xl font-bold mb-4 text-[#A64B29]"
                style={{ fontFamily: "Playfair Display" }}
              >
                {t("about.title")}
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-20 bg-[#D98C72]/60" />
                <svg className="shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="#A64B29">
                  <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5Z"/>
                </svg>
                <div className="h-px w-20 bg-[#D98C72]/60" />
              </div>
              <p className="text-lg text-[#333333] mb-4" style={{ fontFamily: "Open Sans" }}>
                {t("about.text1")}
              </p>
              <p className="text-lg text-[#333333] mb-4" style={{ fontFamily: "Open Sans" }}>
                {t("about.text2")}
              </p>
              <p className="text-lg text-[#333333]" style={{ fontFamily: "Open Sans" }}>
                {t("about.text3")}
              </p>
            </div>
            <div
              className="h-96 rounded-lg shadow-lg bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663496893429/SeEZeXfhndNspwnmsdFYSJ/restaurant-interior-8yuhvj8VGMJ7xoVDvaTBC7.webp')",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section id="careers" className="py-20 bg-gradient-to-b from-white to-[#F5F1D5]">
        <div className="container mx-auto px-4">
          <h2
            className="text-5xl font-bold text-center mb-4 text-[#A64B29]"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t("careers.title")}
          </h2>
          <p className="text-center text-[#666666] mb-6 text-lg" style={{ fontFamily: "Open Sans" }}>
            {t("careers.subtitle")}
          </p>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-20 bg-[#D98C72]/50" />
            <svg className="shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="#A64B29">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5Z"/>
            </svg>
            <div className="h-px w-20 bg-[#D98C72]/50" />
          </div>

          {/* Job Cards with Icons */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                title: "careers.kitchen",
                description: "careers.kitchen_desc",
                icon: <Briefcase size={40} />,
              },
              {
                title: "careers.front",
                description: "careers.front_desc",
                icon: <Users size={40} />,
              },
              {
                title: "careers.delivery",
                description: "careers.delivery_desc",
                icon: <Award size={40} />,
              },
              {
                title: "careers.management",
                description: "careers.management_desc",
                icon: <Briefcase size={40} />,
              },
            ].map((job, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border-l-4 border-[#A64B29]"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-[#F5F1D5] rounded-lg text-[#A64B29] group-hover:bg-[#A64B29] group-hover:text-white transition-colors">
                    {job.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold text-[#A64B29] flex-1"
                    style={{ fontFamily: "Cormorant Garamond" }}
                  >
                    {t(job.title)}
                  </h3>
                </div>
                <p className="text-[#333333] mb-6 text-sm leading-relaxed" style={{ fontFamily: "Open Sans" }}>
                  {t(job.description)}
                </p>
                <Button className="bg-[#A64B29] hover:bg-[#8B3D1F] text-white w-full group-hover:shadow-lg transition-all">
                  {t("careers.apply")}
                </Button>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-[#A64B29] to-[#8B3D1F] rounded-xl p-8 text-center text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Playfair Display" }}>
              Ready to Join Our Team?
            </h3>
            <p className="mb-6 opacity-90" style={{ fontFamily: "Open Sans" }}>
              {t("careers.cta")}
            </p>
            <Button className="bg-white text-[#A64B29] hover:bg-gray-100 px-8 py-3 font-semibold">
              {t("careers.resume")}
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#A64B29] text-white">
        <div className="container mx-auto px-4">
          <h2
            className="text-5xl font-bold text-center mb-4"
            style={{ fontFamily: "Playfair Display" }}
          >
            {t("contact.title")}
          </h2>
          <p className="text-center mb-6 text-lg opacity-90" style={{ fontFamily: "Open Sans" }}>
            {t("contact.subtitle")}
          </p>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-20 bg-white/30" />
            <svg className="shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="white" opacity="0.6">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5Z"/>
            </svg>
            <div className="h-px w-20 bg-white/30" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {contacts.map((contact, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 opacity-90">{contact.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "Cormorant Garamond" }}>
                  {t(contact.title)}
                </h3>
                <p style={{ fontFamily: "Open Sans" }}>{t(contact.content)}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-8 rounded-lg">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder={t("contact.name")}
                  className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white"
                  style={{ fontFamily: "Open Sans" }}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder={t("contact.email")}
                  className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white"
                  style={{ fontFamily: "Open Sans" }}
                />
              </div>
              <div>
                <textarea
                  placeholder={t("contact.message")}
                  rows={5}
                  className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:border-white"
                  style={{ fontFamily: "Open Sans" }}
                ></textarea>
              </div>
              <Button className="w-full bg-white text-[#A64B29] hover:bg-gray-100">
                {t("contact.send")}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333333] text-white py-10 border-t-4 border-[#A64B29]">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-20 bg-[#D98C72]/30" />
            <div className="w-8 h-8 bg-[#A64B29] rounded-full flex items-center justify-center ring-2 ring-[#D98C72]/40">
              <span className="text-white font-bold text-sm" style={{ fontFamily: "Cormorant Garamond" }}>G</span>
            </div>
            <div className="h-px w-20 bg-[#D98C72]/30" />
          </div>
          <p style={{ fontFamily: "Open Sans" }}>
            {t("footer.copyright")}
          </p>
          <p className="text-sm opacity-60 mt-2" style={{ fontFamily: "Open Sans" }}>
            {t("footer.tagline")}
          </p>
        </div>
      </footer>
    </div>
  );
}
