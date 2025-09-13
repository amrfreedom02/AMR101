
'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "تجميل الأنف",
      description: "عمليات تجميل الأنف لتحسين الشكل والوظيفة",
      icon: "ri-nose-line",
      image: "https://readdy.ai/api/search-image?query=Professional%20rhinoplasty%20surgery%20procedure%2C%20modern%20operating%20room%2C%20surgical%20instruments%2C%20clean%20medical%20environment%2C%20ENT%20surgery%20equipment&width=400&height=250&seq=service1&orientation=landscape",
      features: ["تجميل شكل الأنف", "تحسين التنفس", "تصحيح الانحراف", "نتائج طبيعية"]
    },
    {
      title: "جراحة الأذن",
      description: "علاج مشاكل الأذن وتحسين السمع",
      icon: "ri-ear-line",
      image: "https://readdy.ai/api/search-image?query=ENT%20ear%20surgery%20procedure%2C%20otolaryngology%20equipment%2C%20modern%20medical%20facility%2C%20professional%20surgical%20environment%2C%20ear%20examination%20tools&width=400&height=250&seq=service2&orientation=landscape",
      features: ["علاج ضعف السمع", "إزالة الأورام", "تصحيح التشوهات", "جراحة الأذن الوسطى"]
    },
    {
      title: "جراحة الحنجرة",
      description: "علاج مشاكل الصوت والبلع",
      icon: "ri-mic-line",
      image: "https://readdy.ai/api/search-image?query=Throat%20surgery%20laryngoscopy%20procedure%2C%20ENT%20surgical%20instruments%2C%20modern%20medical%20equipment%2C%20professional%20healthcare%20environment&width=400&height=250&seq=service3&orientation=landscape",
      features: ["علاج بحة الصوت", "إزالة الأورام", "جراحة الأحبال الصوتية", "علاج صعوبة البلع"]
    },
    {
      title: "شد الوجه",
      description: "عمليات تجميل وشد الوجه والرقبة",
      icon: "ri-user-smile-line",
      image: "https://readdy.ai/api/search-image?query=Facial%20plastic%20surgery%20consultation%2C%20cosmetic%20surgery%20planning%2C%20modern%20aesthetic%20clinic%2C%20professional%20medical%20environment&width=400&height=250&seq=service4&orientation=landscape",
      features: ["شد الوجه والرقبة", "إزالة التجاعيد", "نتائج طبيعية", "تقنيات متقدمة"]
    },
    {
      title: "حقن البوتوكس والفيلر",
      description: "علاجات تجميلية غير جراحية",
      icon: "ri-syringe-line",
      image: "https://readdy.ai/api/search-image?query=Botox%20injection%20procedure%2C%20aesthetic%20medicine%2C%20cosmetic%20dermatology%2C%20modern%20medical%20clinic%2C%20professional%20treatment&width=400&height=250&seq=service5&orientation=landscape",
      features: ["حقن البوتوكس", "حقن الفيلر", "علاج التجاعيد", "نتائج فورية"]
    },
    {
      title: "جراحة الجيوب الأنفية",
      description: "علاج مشاكل الجيوب الأنفية المزمنة",
      icon: "ri-lungs-line",
      image: "https://readdy.ai/api/search-image?query=Sinus%20surgery%20endoscopic%20procedure%2C%20ENT%20surgical%20equipment%2C%20modern%20medical%20facility%2C%20nasal%20surgery%20instruments&width=400&height=250&seq=service6&orientation=landscape",
      features: ["منظار الجيوب الأنفية", "علاج الالتهابات المزمنة", "تحسين التنفس", "تقنيات طفيفة التوغل"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F0]" dir="rtl">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 space-x-reverse">
              <h1 className="text-2xl font-bold text-[#0A0C13] font-['Cairo']">
                د. سعد البردوني
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              <Link href="/" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">الرئيسية</Link>
              <Link href="/about" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">من نحن</Link>
              <Link href="/services" className="text-[#decba2] font-['Cairo'] font-semibold">خدماتنا</Link>
              <Link href="/blog" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">المدونة</Link>
              <Link href="/contact" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">اتصل بنا</Link>
            </nav>
            <button className="bg-[#decba2] text-[#0A0C13] px-6 py-2 rounded-full hover:bg-[#d4c199] transition-colors cursor-pointer whitespace-nowrap font-['Cairo'] font-semibold">
              احجز استشارتك الآن
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 mt-20 bg-gradient-to-r from-[#0A0C13] to-[#7A848F] flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4 font-['Cairo']">خدماتنا المتخصصة</h1>
            <p className="text-xl text-[#decba2] font-['Cairo']">نقدم مجموعة شاملة من الخدمات الطبية المتخصصة</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#F8F6F0] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#decba2] rounded-full flex items-center justify-center mb-4">
                    <i className={`${service.icon} text-xl text-[#0A0C13]`}></i>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0C13] mb-3 font-['Cairo']">{service.title}</h3>
                  <p className="text-[#7A848F] mb-4 font-['Cairo'] leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 space-x-reverse text-[#7A848F] font-['Cairo']">
                        <i className="ri-check-line text-[#decba2]"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-[#decba2] text-[#0A0C13] py-3 rounded-full hover:bg-[#d4c199] transition-colors cursor-pointer whitespace-nowrap font-['Cairo'] font-semibold">
                    اعرف أكثر
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A0C13] mb-4 font-['Cairo']">خطوات العلاج</h2>
            <p className="text-[#7A848F] text-lg font-['Cairo']">نتبع منهجية علمية دقيقة في كل مرحلة</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto relative">
                <span className="text-2xl font-bold text-[#0A0C13] font-['Cairo']">1</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0A0C13] rounded-full flex items-center justify-center">
                  <i className="ri-calendar-line text-white text-sm"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0A0C13] mb-3 font-['Cairo']">الاستشارة الأولية</h3>
              <p className="text-[#7A848F] font-['Cairo']">تقييم شامل لحالتك ومناقشة الخيارات المتاحة</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto relative">
                <span className="text-2xl font-bold text-[#0A0C13] font-['Cairo']">2</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0A0C13] rounded-full flex items-center justify-center">
                  <i className="ri-search-line text-white text-sm"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0A0C13] mb-3 font-['Cairo']">التشخيص الدقيق</h3>
              <p className="text-[#7A848F] font-['Cairo']">فحوصات شاملة باستخدام أحدث الأجهزة الطبية</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto relative">
                <span className="text-2xl font-bold text-[#0A0C13] font-['Cairo']">3</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0A0C13] rounded-full flex items-center justify-center">
                  <i className="ri-surgical-mask-line text-white text-sm"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0A0C13] mb-3 font-['Cairo']">العلاج أو الجراحة</h3>
              <p className="text-[#7A848F] font-['Cairo']">تنفيذ الخطة العلاجية بأعلى معايير الجودة</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto relative">
                <span className="text-2xl font-bold text-[#0A0C13] font-['Cairo']">4</span>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#0A0C13] rounded-full flex items-center justify-center">
                  <i className="ri-heart-pulse-line text-white text-sm"></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0A0C13] mb-3 font-['Cairo']">المتابعة والرعاية</h3>
              <p className="text-[#7A848F] font-['Cairo']">متابعة مستمرة للتأكد من التعافي الأمثل</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#0A0C13] mb-6 font-['Cairo']">أحدث التقنيات الطبية</h2>
              <p className="text-[#7A848F] text-lg mb-8 font-['Cairo'] leading-relaxed">
                نستخدم أحدث الأجهزة والتقنيات الطبية العالمية لضمان أفضل النتائج وأعلى معايير السلامة لمرضانا.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-[#decba2] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-microscope-line text-xl text-[#0A0C13]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0A0C13] mb-2 font-['Cairo']">الجراحة بالمنظار</h3>
                    <p className="text-[#7A848F] font-['Cairo']">تقنيات طفيفة التوغل لتقليل الألم وسرعة التعافي</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-[#decba2] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-scan-line text-xl text-[#0A0C13]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0A0C13] mb-2 font-['Cairo']">التشخيص ثلاثي الأبعاد</h3>
                    <p className="text-[#7A848F] font-['Cairo']">تقنيات متقدمة للتشخيص الدقيق والتخطيط الجراحي</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="w-12 h-12 bg-[#decba2] rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-robot-line text-xl text-[#0A0C13]"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0A0C13] mb-2 font-['Cairo']">الجراحة بالليزر</h3>
                    <p className="text-[#7A848F] font-['Cairo']">تقنيات الليزر المتطورة للعمليات الدقيقة</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20medical%20equipment%2C%20advanced%20surgical%20technology%2C%20ENT%20medical%20devices%2C%20high-tech%20medical%20facility%2C%20surgical%20instruments%20display&width=600&height=400&seq=technology1&orientation=landscape"
                alt="أحدث التقنيات الطبية"
                className="rounded-2xl shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0C13] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-['Cairo']">احجز استشارتك المجانية</h2>
          <p className="text-xl mb-8 text-[#decba2] font-['Cairo']">
            استشر طبيبك المختص واحصل على خطة علاجية مخصصة لحالتك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#decba2] text-[#0A0C13] px-8 py-4 rounded-full hover:bg-[#d4c199] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap font-['Cairo'] font-semibold text-lg">
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
    </div>
  );
}