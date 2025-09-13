
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const slides = [
    {
      title: "مركز الدكتور سعد البردوني",
      subtitle: "للتجميل وجراحة الأنف والأذن والحنجرة",
      description: "نقدم أفضل الخدمات الطبية المتخصصة بأحدث التقنيات العالمية",
      image: "https://readdy.ai/api/search-image?query=Modern%20medical%20center%20interior%20with%20advanced%20ENT%20equipment%2C%20clean%20white%20and%20beige%20environment%2C%20professional%20healthcare%20facility%2C%20natural%20lighting%2C%20minimalist%20design%2C%20medical%20instruments%2C%20sterile%20environment&width=1200&height=600&seq=hero1&orientation=landscape"
    },
    {
      title: "خبرة وتميز في الجراحة التجميلية",
      subtitle: "أحدث التقنيات الطبية",
      description: "فريق طبي متخصص ومؤهل لتقديم أفضل النتائج",
      image: "https://readdy.ai/api/search-image?query=Professional%20surgeon%20in%20modern%20operating%20room%2C%20ENT%20surgical%20equipment%2C%20clean%20medical%20environment%2C%20advanced%20technology%2C%20beige%20and%20white%20color%20scheme%2C%20sterile%20surgical%20setting&width=1200&height=600&seq=hero2&orientation=landscape"
    },
    {
      title: "رعاية شاملة ومتكاملة",
      subtitle: "من التشخيص إلى التعافي",
      description: "نرافقك في كل خطوة من رحلتك العلاجية",
      image: "https://readdy.ai/api/search-image?query=Patient%20consultation%20room%20with%20doctor%2C%20modern%20medical%20facility%2C%20comfortable%20environment%2C%20professional%20healthcare%20setting%2C%20warm%20beige%20tones%2C%20clean%20design%2C%20medical%20consultation&width=1200&height=600&seq=hero3&orientation=landscape"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-[#F8F6F0]" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <h1 className="text-xl md:text-2xl font-bold text-[#0A0C13] font-['Cairo']">
                د. سعد البردوني
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
              <Link href="/" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">الرئيسية</Link>
              <Link href="/about" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">من نحن</Link>
              <Link href="/services" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">خدماتنا</Link>
              <Link href="/blog" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">المدونة</Link>
              <Link href="/contact" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">اتصل بنا</Link>
            </nav>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4 space-x-reverse">
              <button className="hidden sm:block bg-[#decba2] text-[#0A0C13] px-4 md:px-6 py-2 rounded-full hover:bg-[#d4c199] transition-colors cursor-pointer whitespace-nowrap font-['Cairo'] font-semibold text-sm md:text-base">
                احجز استشارتك الآن
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden w-10 h-10 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-[#0A0C13]`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <nav className="pt-4 pb-2 border-t border-[#decba2]/20 mt-4">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo'] py-2" onClick={() => setIsMobileMenuOpen(false)}>الرئيسية</Link>
                <Link href="/about" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo'] py-2" onClick={() => setIsMobileMenuOpen(false)}>من نحن</Link>
                <Link href="/services" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo'] py-2" onClick={() => setIsMobileMenuOpen(false)}>خدماتنا</Link>
                <Link href="/blog" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo'] py-2" onClick={() => setIsMobileMenuOpen(false)}>المدونة</Link>
                <Link href="/contact" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo'] py-2" onClick={() => setIsMobileMenuOpen(false)}>اتصل بنا</Link>
                <button className="sm:hidden bg-[#decba2] text-[#0A0C13] px-6 py-3 rounded-full hover:bg-[#d4c199] transition-colors cursor-pointer whitespace-nowrap font-['Cairo'] font-semibold mt-4 self-start">
                  احجز استشارتك الآن
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <section className="relative h-screen overflow-hidden mt-16 md:mt-20">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <div
              className="relative h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-[#0A0C13]/40"></div>
              <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
                <div className="w-full max-w-2xl text-white">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-['Cairo'] animate-fade-in-up">
                    {slide.title}
                  </h2>
                  <h3 className="text-lg md:text-xl lg:text-2xl mb-6 text-[#decba2] font-['Cairo'] animate-fade-in-up animation-delay-200">
                    {slide.subtitle}
                  </h3>
                  <p className="text-base md:text-lg lg:text-xl mb-8 font-['Cairo'] leading-relaxed animate-fade-in-up animation-delay-400">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse animate-fade-in-up animation-delay-600">
                    <button className="bg-[#decba2] text-[#0A0C13] px-6 md:px-8 py-3 rounded-full hover:bg-[#d4c199] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap font-['Cairo'] font-semibold">
                      احجز موعد
                    </button>
                    <button className="border-2 border-white text-white px-6 md:px-8 py-3 rounded-full hover:bg-white hover:text-[#0A0C13] transition-all cursor-pointer whitespace-nowrap font-['Cairo']">
                      تعرف أكثر
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? 'bg-[#decba2] scale-125' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0C13] mb-4 font-['Cairo']">خدماتنا المتخصصة</h2>
            <p className="text-[#7A848F] text-base md:text-lg font-['Cairo']">نقدم مجموعة شاملة من الخدمات الطبية المتخصصة</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[#F8F6F0] p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all transform hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-scissors-line text-2xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#0A0C13] mb-4 text-center font-['Cairo']">الجراحة التجميلية</h3>
              <p className="text-[#7A848F] text-center font-['Cairo'] leading-relaxed text-sm md:text-base">
                عمليات تجميل الوجه والجسم بأحدث التقنيات العالمية
              </p>
            </div>
            
            <div className="bg-[#F8F6F0] p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all transform hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-hospital-line text-2xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#0A0C13] mb-4 text-center font-['Cairo']">جراحة الأنف والأذن والحنجرة</h3>
              <p className="text-[#7A848F] text-center font-['Cairo'] leading-relaxed text-sm md:text-base">
                تشخيص وعلاج جميع مشاكل الأنف والأذن والحنجرة
              </p>
            </div>
            
            <div className="bg-[#F8F6F0] p-6 md:p-8 rounded-2xl hover:shadow-lg transition-all transform hover:-translate-y-2 cursor-pointer sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-user-heart-line text-2xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#0A0C13] mb-4 text-center font-['Cairo']">الاستشارات الطبية</h3>
              <p className="text-[#7A848F] text-center font-['Cairo'] leading-relaxed text-sm md:text-base">
                استشارات طبية متخصصة وخطط علاجية مخصصة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-20 bg-[#F8F6F0]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A0C13] mb-6 font-['Cairo']">لماذا تختارنا؟</h2>
              <p className="text-[#7A848F] text-base md:text-lg mb-8 font-['Cairo'] leading-relaxed">
                نحن نقدم أعلى مستويات الرعاية الطبية المتخصصة في مجال الجراحة التجميلية وجراحة الأنف والأذن والحنجرة
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-[#decba2] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-award-line text-xl text-[#0A0C13]"></i>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#0A0C13] mb-2 font-['Cairo']">خبرة وتميز</h3>
                    <p className="text-[#7A848F] font-['Cairo'] text-sm md:text-base">سنوات من الخبرة في المجال الطبي</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-[#decba2] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-star-line text-xl text-[#0A0C13]"></i>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#0A0C13] mb-2 font-['Cairo']">أحدث التقنيات</h3>
                    <p className="text-[#7A848F] font-['Cairo'] text-sm md:text-base">نستخدم أحدث الأجهزة والتقنيات الطبية</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-[#decba2] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-heart-line text-xl text-[#0A0C13]"></i>
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-[#0A0C13] mb-2 font-['Cairo']">رعاية شخصية</h3>
                    <p className="text-[#7A848F] font-['Cairo'] text-sm md:text-base">اهتمام خاص بكل مريض ومتابعة مستمرة</p>
                  </div>
                </div>
              </div>
              
              <Link href="/about">
                <button className="mt-8 bg-[#decba2] text-[#0A0C13] px-6 md:px-8 py-3 rounded-full hover:bg-[#d4c199] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap font-['Cairo'] font-semibold">
                  اعرف المزيد عنا
                </button>
              </Link>
            </div>
            
            <div className="relative order-1 lg:order-2">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20medical%20doctor%20in%20modern%20clinic%2C%20friendly%20smile%2C%20white%20coat%2C%20stethoscope%2C%20clean%20medical%20environment%2C%20beige%20and%20white%20interior%2C%20professional%20healthcare%20portrait&width=600&height=400&seq=doctor1&orientation=landscape"
                alt="الدكتور سعد البردوني"
                className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-96"
              />
              <div className="absolute -bottom-6 -right-6 w-20 md:w-24 h-20 md:h-24 bg-[#decba2] rounded-full flex items-center justify-center">
                <i className="ri-user-heart-fill text-2xl md:text-3xl text-[#0A0C13]"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[#0A0C13] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Cairo']">احجز استشارتك الآن</h2>
          <p className="text-lg md:text-xl mb-8 text-[#decba2] font-['Cairo']">
            ابدأ رحلتك نحو الصحة والجمال مع فريقنا المتخصص
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#decba2] text-[#0A0C13] px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-[#d4c199] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap font-['Cairo'] font-semibold text-base md:text-lg">
              احجز موعد الآن
            </button>
            <div className="flex items-center space-x-2 space-x-reverse text-[#decba2]">
              <i className="ri-phone-line text-xl"></i>
              <span className="font-['Cairo']">+967 123 456 789</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8F6F0] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-[#0A0C13] mb-4 font-['Cairo']">د. سعد البردوني</h3>
              <p className="text-[#7A848F] font-['Cairo'] leading-relaxed mb-4">
                مركز متخصص في الجراحة التجميلية وجراحة الأنف والأذن والحنجرة
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <i className="ri-facebook-fill text-2xl text-[#decba2] cursor-pointer hover:text-[#0A0C13] transition-colors"></i>
                <i className="ri-instagram-line text-2xl text-[#decba2] cursor-pointer hover:text-[#0A0C13] transition-colors"></i>
                <i className="ri-twitter-line text-2xl text-[#decba2] cursor-pointer hover:text-[#0A0C13] transition-colors"></i>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-[#0A0C13] mb-4 font-['Cairo']">روابط سريعة</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-[#7A848F] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">الرئيسية</Link></li>
                <li><Link href="/about" className="text-[#7A848F] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">من نحن</Link></li>
                <li><Link href="/services" className="text-[#7A848F] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">خدماتنا</Link></li>
                <li><Link href="/blog" className="text-[#7A848F] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">المدونة</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-[#0A0C13] mb-4 font-['Cairo']">خدماتنا</h4>
              <ul className="space-y-2">
                <li className="text-[#7A848F] font-['Cairo']">الجراحة التجميلية</li>
                <li className="text-[#7A848F] font-['Cairo']">جراحة الأنف</li>
                <li className="text-[#7A848F] font-['Cairo']">جراحة الأذن</li>
                <li className="text-[#7A848F] font-['Cairo']">جراحة الحنجرة</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-[#0A0C13] mb-4 font-['Cairo']">تواصل معنا</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <i className="ri-map-pin-line text-[#decba2]"></i>
                  <span className="text-[#7A848F] font-['Cairo']">صنعاء - اليمن</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <i className="ri-phone-line text-[#decba2]"></i>
                  <span className="text-[#7A848F] font-['Cairo']">+967 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <i className="ri-mail-line text-[#decba2]"></i>
                  <span className="text-[#7A848F] font-['Cairo']">info@drsaad.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#decba2]/20 mt-8 pt-8 text-center">
            <p className="text-[#7A848F] font-['Cairo']">
              جميع الحقوق محفوظة © 2024 مركز الدكتور سعد البردوني
            </p>
            <div className="mt-2">
              <Link href="https://readdy.ai/?origin=logo" className="text-[#decba2] hover:text-[#0A0C13] transition-colors cursor-pointer font-['Cairo'] text-sm">
                Made with Readdy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}