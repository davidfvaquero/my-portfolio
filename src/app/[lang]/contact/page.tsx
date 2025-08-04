"use client";

import { useState } from "react";
import { useTranslations } from "../../hooks/useTranslations";
import { useTheme } from "../../contexts/ThemeContext";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  AlertCircle,
  User,
  MessageSquare,
  Github,
  Linkedin,
  Download
} from "lucide-react";

const contactInfo = {
  es: {
    title: "Ponte en Contacto",
    subtitle: "¿Tienes un proyecto en mente? ¡Me encantaría escucharlo!",
    description: "Estoy siempre abierto a nuevas oportunidades y colaboraciones. Si tienes alguna pregunta o quieres trabajar juntos, no dudes en contactarme.",
    form: {
      name: "Nombre completo",
      email: "Correo electrónico",
      subject: "Asunto",
      message: "Tu mensaje",
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado correctamente!",
      error: "Error al enviar el mensaje. Intenta de nuevo más tarde."
    },
    contact: {
      title: "Información de Contacto",
      email: "davidfvaquero@gmail.com",
      location: "Logroño, España",
      availability: "Disponible para proyectos"
    }
  },
  en: {
    title: "Get in Touch",
    subtitle: "Have a project in mind? I'd love to hear about it!",
    description: "I'm always open to new opportunities and collaborations. If you have any questions or want to work together, don't hesitate to contact me.",
    form: {
      name: "Full name",
      email: "Email address",
      subject: "Subject",
      message: "Your message",
      send: "Send message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending the message. Please try again later."
    },
    contact: {
      title: "Contact Information",
      email: "davidfvaquero@gmail.com",
      location: "Logroño, Spain",
      availability: "Available for projects"
    }
  }
};

export default function Contact() {
  const { language } = useTranslations();
  const { isDark } = useTheme();
  const info = contactInfo[language];
  
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    subject: "", 
    message: "" 
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (touched[e.target.name as keyof typeof touched]) {
      setError("");
    }
  };

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  const validateForm = () => {
    const errors = [];
    if (!form.name.trim()) errors.push("name");
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errors.push("email");
    if (!form.subject.trim()) errors.push("subject");
    if (!form.message.trim()) errors.push("message");
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (errors.length > 0) {
      setTouched({
        name: errors.includes("name"),
        email: errors.includes("email"),
        subject: errors.includes("subject"),
        message: errors.includes("message")
      });
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      
      if (data.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTouched({ name: false, email: false, subject: false, message: false });
      } else {
        setError(info.form.error);
      }
    } catch {
      setError(info.form.error);
    } finally {
      setLoading(false);
    }
  };

  const getFieldError = (field: string) => {
    if (!touched[field as keyof typeof touched]) return "";
    
    const value = form[field as keyof typeof form];
    if (!value.trim()) {
      return language === 'es' ? 'Este campo es requerido' : 'This field is required';
    }
    
    if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      return language === 'es' ? 'Email inválido' : 'Invalid email';
    }
    
    return "";
  };

  return (
    <main className="max-w-6xl mx-auto px-4 pt-32 pb-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {info.title}
        </h1>
        <p className={`text-xl mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {info.subtitle}
        </p>
        <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
          isDark ? 'text-gray-400' : 'text-gray-700'
        }`}>
          {info.description}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className={`p-8 rounded-xl border ${
          isDark 
            ? 'border-gray-700 bg-gray-800' 
            : 'border-gray-200 bg-white shadow-lg'
        }`}>
          <h2 className={`text-2xl font-bold mb-6 ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}>
            {language === 'es' ? 'Enviar Mensaje' : 'Send Message'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {info.form.name}
                </label>
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } ${getFieldError('name') ? 'border-red-500' : ''}`}
                    placeholder={info.form.name}
                  />
                </div>
                {getFieldError('name') && (
                  <p className="text-red-500 text-sm mt-1">{getFieldError('name')}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {info.form.email}
                </label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                    isDark ? 'text-gray-400' : 'text-gray-500'
                  }`} />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                    } ${getFieldError('email') ? 'border-red-500' : ''}`}
                    placeholder={info.form.email}
                  />
                </div>
                {getFieldError('email') && (
                  <p className="text-red-500 text-sm mt-1">{getFieldError('email')}</p>
                )}
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {info.form.subject}
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                onBlur={() => handleBlur('subject')}
                className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                } ${getFieldError('subject') ? 'border-red-500' : ''}`}
                placeholder={info.form.subject}
              />
              {getFieldError('subject') && (
                <p className="text-red-500 text-sm mt-1">{getFieldError('subject')}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {info.form.message}
              </label>
              <div className="relative">
                <MessageSquare className={`absolute left-3 top-3 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={() => handleBlur('message')}
                  rows={6}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors resize-none ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400 focus:border-blue-500' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  } ${getFieldError('message') ? 'border-red-500' : ''}`}
                  placeholder={info.form.message}
                />
              </div>
              {getFieldError('message') && (
                <p className="text-red-500 text-sm mt-1">{getFieldError('message')}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                loading 
                  ? 'opacity-60 cursor-not-allowed' 
                  : 'hover:scale-105'
              } ${
                isDark 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  {info.form.sending}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {info.form.send}
                </>
              )}
            </button>

            {/* Success/Error Messages */}
            {success && (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-green-100 border border-green-300">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <p className="text-green-800 font-medium">{info.form.success}</p>
              </div>
            )}
            
            {error && (
              <div className="flex items-center gap-2 p-4 rounded-lg bg-red-100 border border-red-300">
                <AlertCircle className="w-5 h-5 text-red-600" />
                <p className="text-red-800 font-medium">{error}</p>
              </div>
            )}
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className={`p-8 rounded-xl border ${
            isDark 
              ? 'border-gray-700 bg-gray-800' 
              : 'border-gray-200 bg-white shadow-lg'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}>
              {info.contact.title}
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className={`font-semibold ${
                    isDark ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    Email
                  </p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {info.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className={`font-semibold ${
                    isDark ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {language === 'es' ? 'Ubicación' : 'Location'}
                  </p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {info.contact.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                }`}>
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className={`font-semibold ${
                    isDark ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {language === 'es' ? 'Disponibilidad' : 'Availability'}
                  </p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {info.contact.availability}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`p-8 rounded-xl border ${
            isDark 
              ? 'border-gray-700 bg-gray-800' 
              : 'border-gray-200 bg-white shadow-lg'
          }`}>
            <h3 className={`text-xl font-bold mb-6 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}>
              {language === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
            </h3>
            
            <div className="space-y-4">
              <a
                href="https://github.com/davidfvaquero"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-200 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              
              <a
                href="https://www.linkedin.com/in/david-fernández-vaquero-15b8b8346"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-200 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              
              <a
                href="/cvDavidFernandezVaquero.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-200 hover:scale-105 ${
                  isDark 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Download className="w-5 h-5" />
                <span>{language === 'es' ? 'Descargar CV' : 'Download CV'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 