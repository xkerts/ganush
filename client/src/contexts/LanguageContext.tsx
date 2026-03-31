import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.about": "About Us",
    "nav.careers": "Job Opportunities",
    "nav.contact": "Contact",

    "hero.title": "Ganush",
    "hero.subtitle": "Authentic Middle Eastern Kitchen",
    "hero.description": "Experience the warmth and flavors of traditional shawarma",
    "hero.cta": "Explore Our Menu",

    "menu.title": "Our Menu",
    "menu.subtitle": "Handcrafted shawarmas and Middle Eastern specialties",
    "menu.chicken": "Chicken Shawarma",
    "menu.chicken_desc": "Tender, marinated chicken with warm spices",
    "menu.lamb": "Lamb Shawarma",
    "menu.lamb_desc": "Succulent lamb with aromatic spices",
    "menu.bomb": "Bomb Shawarma",
    "menu.bomb_desc": "Chicken & lamb combo",
    "menu.falafel": "Falafel Wrap",
    "menu.falafel_desc": "Crispy chickpea fritters",
    "menu.hummus": "Hummus Plate",
    "menu.hummus_desc": "Creamy chickpea dip",
    "menu.tabbouleh": "Tabbouleh Salad",
    "menu.tabbouleh_desc": "Fresh parsley & bulgur",
    "menu.kebab": "Kebab Skewers",
    "menu.kebab_desc": "Grilled meat perfection",
    "menu.baklava": "Baklava",
    "menu.baklava_desc": "Sweet honey pastry",
    "menu.coffee": "Turkish Coffee",
    "menu.coffee_desc": "Rich & aromatic",
    "menu.order": "Order",

    "about.title": "About Ganush",
    "about.text1":
      "Ganush is a family-owned restaurant dedicated to bringing authentic Middle Eastern cuisine to your table. With over 15 years of culinary tradition, we prepare every shawarma with the same care and passion that has been passed down through generations.",
    "about.text2":
      "Our commitment to quality means we source only the finest ingredients and use traditional cooking methods to ensure every bite is an authentic taste of the Middle East.",
    "about.text3":
      "Whether you're a longtime fan of Middle Eastern cuisine or trying it for the first time, we invite you to experience the warmth and flavor that defines Ganush.",

    "careers.title": "Join Our Team",
    "careers.subtitle": "We're always looking for passionate individuals to join the Ganush family",
    "careers.kitchen": "Kitchen Staff",
    "careers.kitchen_desc":
      "Help us prepare authentic Middle Eastern dishes. Experience with shawarma preparation preferred but not required. We provide full training.",
    "careers.front": "Front of House",
    "careers.front_desc":
      "Join our welcoming team as a server or host. Excellent customer service skills and a passion for hospitality are essential.",
    "careers.delivery": "Delivery Driver",
    "careers.delivery_desc":
      "Deliver our delicious shawarmas to customers throughout the city. Must have a valid driver's license and reliable transportation.",
    "careers.management": "Management",
    "careers.management_desc":
      "Help lead our growing restaurant. Experience in food service management and a passion for our mission are required.",
    "careers.apply": "Apply Now",
    "careers.cta": "Don't see a position that fits? We'd still love to hear from you!",
    "careers.resume": "Send Your Resume",

    "contact.title": "Get In Touch",
    "contact.subtitle": "We'd love to hear from you. Reach out with any questions or reservations.",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.address": "Address",
    "contact.phone_number": "(555) 123-4567",
    "contact.email_address": "info@ganush.com",
    "contact.address_text": "123 Middle East Ave, Downtown",
    "contact.name": "Your Name",
    "contact.message": "Your Message",
    "contact.send": "Send Message",

    "testimonials.title": "What Our Customers Say",
    "testimonials.subtitle": "Join thousands of satisfied customers who love Ganush",
    "testimonials.review1_name": "Sarah Johnson",
    "testimonials.review1_text": "The best shawarma I've ever had! The flavors are authentic and the service is exceptional. I visit Ganush at least twice a week.",
    "testimonials.review2_name": "Ahmed Hassan",
    "testimonials.review2_text": "Finally found a restaurant that does Middle Eastern cuisine justice. Every bite tastes like home. Highly recommended!",
    "testimonials.review3_name": "Maria Rodriguez",
    "testimonials.review3_text": "Incredible food and amazing atmosphere. The staff is so friendly and welcoming. This is now my favorite restaurant in the city.",
    "testimonials.review4_name": "James Chen",
    "testimonials.review4_text": "Tried the Bomb Shawarma and it lived up to its name! Explosive flavors and perfect execution. Will definitely be back.",

    "footer.copyright": "© 2024 Ganush — Middle Eastern Kitchen. All rights reserved.",
    "footer.tagline": "Crafted with passion for authentic flavors",
  },
  es: {
    "nav.home": "Inicio",
    "nav.menu": "Menú",
    "nav.about": "Sobre Nosotros",
    "nav.careers": "Oportunidades de Trabajo",
    "nav.contact": "Contacto",

    "hero.title": "Ganush",
    "hero.subtitle": "Auténtica Cocina de Oriente Medio",
    "hero.description": "Experimenta la calidez y los sabores del shawarma tradicional",
    "hero.cta": "Explorar Nuestro Menú",

    "menu.title": "Nuestro Menú",
    "menu.subtitle": "Shawarmas artesanales y especialidades de Oriente Medio",
    "menu.chicken": "Shawarma de Pollo",
    "menu.chicken_desc": "Pollo tierno marinado con especias cálidas",
    "menu.lamb": "Shawarma de Cordero",
    "menu.lamb_desc": "Cordero suculento con especias aromáticas",
    "menu.bomb": "Shawarma Bomba",
    "menu.bomb_desc": "Combinación de pollo y cordero",
    "menu.falafel": "Envoltorio de Falafel",
    "menu.falafel_desc": "Croquetas de garbanzos crujientes",
    "menu.hummus": "Plato de Hummus",
    "menu.hummus_desc": "Dip cremoso de garbanzos",
    "menu.tabbouleh": "Ensalada Tabbouleh",
    "menu.tabbouleh_desc": "Perejil fresco y bulgur",
    "menu.kebab": "Pinchos de Kebab",
    "menu.kebab_desc": "Carne a la parrilla perfecta",
    "menu.baklava": "Baklava",
    "menu.baklava_desc": "Pastel dulce con miel",
    "menu.coffee": "Café Turco",
    "menu.coffee_desc": "Rico y aromático",
    "menu.order": "Ordenar",

    "about.title": "Sobre Ganush",
    "about.text1":
      "Ganush es un restaurante de propiedad familiar dedicado a traer la auténtica cocina de Oriente Medio a tu mesa. Con más de 15 años de tradición culinaria, preparamos cada shawarma con el mismo cuidado y pasión que se ha transmitido de generación en generación.",
    "about.text2":
      "Nuestro compromiso con la calidad significa que solo utilizamos los mejores ingredientes y empleamos métodos de cocina tradicionales para garantizar que cada bocado sea un auténtico sabor de Oriente Medio.",
    "about.text3":
      "Ya seas un admirador de toda la vida de la cocina de Oriente Medio o lo estés probando por primera vez, te invitamos a experimentar la calidez y el sabor que define a Ganush.",

    "careers.title": "Únete a Nuestro Equipo",
    "careers.subtitle": "Siempre estamos buscando individuos apasionados para unirse a la familia Ganush",
    "careers.kitchen": "Personal de Cocina",
    "careers.kitchen_desc":
      "Ayúdanos a preparar auténticos platos de Oriente Medio. Se prefiere experiencia en la preparación de shawarma pero no es obligatoria. Proporcionamos capacitación completa.",
    "careers.front": "Personal de Atención al Cliente",
    "careers.front_desc":
      "Únete a nuestro equipo acogedor como mesero o anfitrión. Se requieren excelentes habilidades de servicio al cliente y pasión por la hospitalidad.",
    "careers.delivery": "Conductor de Entrega",
    "careers.delivery_desc":
      "Entrega nuestros deliciosos shawarmas a clientes en toda la ciudad. Debes tener una licencia de conducir válida y transporte confiable.",
    "careers.management": "Gestión",
    "careers.management_desc":
      "Ayuda a liderar nuestro restaurante en crecimiento. Se requiere experiencia en gestión de servicios de alimentos y pasión por nuestra misión.",
    "careers.apply": "Solicitar Ahora",
    "careers.cta": "¿No ves una posición que se ajuste? ¡Aún nos encantaría saber de ti!",
    "careers.resume": "Enviar Tu Currículum",

    "contact.title": "Ponte en Contacto",
    "contact.subtitle": "Nos encantaría saber de ti. Comunícate con cualquier pregunta o reserva.",
    "contact.phone": "Teléfono",
    "contact.email": "Correo Electrónico",
    "contact.address": "Dirección",
    "contact.phone_number": "(555) 123-4567",
    "contact.email_address": "info@ganush.com",
    "contact.address_text": "123 Middle East Ave, Downtown",
    "contact.name": "Tu Nombre",
    "contact.message": "Tu Mensaje",
    "contact.send": "Enviar Mensaje",

    "testimonials.title": "Lo Que Dicen Nuestros Clientes",
    "testimonials.subtitle": "Únete a miles de clientes satisfechos que aman Ganush",
    "testimonials.review1_name": "Sarah Johnson",
    "testimonials.review1_text": "¡El mejor shawarma que he probado! Los sabores son auténticos y el servicio es excepcional. Visito Ganush al menos dos veces a la semana.",
    "testimonials.review2_name": "Ahmed Hassan",
    "testimonials.review2_text": "Finalmente encontré un restaurante que hace justicia a la cocina de Oriente Medio. Cada bocado sabe a hogar. ¡Altamente recomendado!",
    "testimonials.review3_name": "Maria Rodriguez",
    "testimonials.review3_text": "Comida increíble y atmósfera asombrosa. El personal es muy amable y acogedor. Este es ahora mi restaurante favorito de la ciudad.",
    "testimonials.review4_name": "James Chen",
    "testimonials.review4_text": "Probé el Shawarma Bomba y ¡vivió a la altura de su nombre! Sabores explosivos y ejecución perfecta. Definitivamente volveré.",

    "footer.copyright": "© 2024 Ganush — Auténtica Cocina de Oriente Medio. Todos los derechos reservados.",
    "footer.tagline": "Elaborado con pasión por sabores auténticos",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
