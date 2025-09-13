
'use client';

import Link from 'next/link';

export default function Blog() {
  const articles = [
    {
      title: "كل ما تحتاج لمعرفته عن عمليات تجميل الأنف",
      excerpt: "دليل شامل حول عمليات تجميل الأنف والتقنيات الحديثة المستخدمة",
      date: "15 ديسمبر 2024",
      author: "د. سعد البردوني",
      category: "الجراحة التجميلية",
      image: "https://readdy.ai/api/search-image?query=Rhinoplasty%20nose%20surgery%20medical%20illustration%2C%20before%20and%20after%20comparison%2C%20professional%20medical%20diagram%2C%20clean%20educational%20design&width=400&height=250&seq=blog1&orientation=landscape",
      readTime: "5 دقائق"
    },
    {
      title: "أعراض التهاب الجيوب الأنفية وطرق العلاج",
      excerpt: "كيفية التعرف على أعراض التهاب الجيوب الأنفية والخيارات العلاجية المتاحة",
      date: "12 ديسمبر 2024",
      author: "د. فاطمة أحمد",
      category: "الأنف والأذن والحنجرة",
      image: "https://readdy.ai/api/search-image?query=Sinus%20anatomy%20medical%20illustration%2C%20nasal%20cavity%20diagram%2C%20ENT%20medical%20education%2C%20professional%20healthcare%20visualization&width=400&height=250&seq=blog2&orientation=landscape",
      readTime: "7 دقائق"
    },
    {
      title: "البوتوكس والفيلر: الاختلافات والاستخدامات",
      excerpt: "مقارنة شاملة بين البوتوكس والفيلر وأي منهما مناسب لحالتك",
      date: "10 ديسمبر 2024",
      author: "د. سعد البردوني",
      category: "التجميل غير الجراحي",
      image: "https://readdy.ai/api/search-image?query=Botox%20injection%20procedure%2C%20aesthetic%20medicine%20treatment%2C%20cosmetic%20dermatology%2C%20professional%20medical%20procedure&width=400&height=250&seq=blog3&orientation=landscape",
      readTime: "4 دقائق"
    },
    {
      title: "متى تحتاج لزيارة طبيب الأنف والأذن والحنجرة؟",
      excerpt: "العلامات التي تشير إلى ضرورة استشارة طبيب متخصص في الأنف والأذن والحنجرة",
      date: "8 ديسمبر 2024",
      author: "د. محمد علي",
      category: "الرعاية الصحية",
      image: "https://readdy.ai/api/search-image?query=ENT%20doctor%20examination%2C%20otolaryngology%20consultation%2C%20medical%20checkup%2C%20professional%20healthcare%20consultation&width=400&height=250&seq=blog4&orientation=landscape",
      readTime: "6 دقائق"
    },
    {
      title: "شد الوجه بدون جراحة: الخيارات المتاحة",
      excerpt: "تقنيات حديثة لشد الوجه وتحسين مظهر البشرة بدون جراحة",
      date: "5 ديسمبر 2024",
      author: "د. سعد البردوني",
      category: "التجميل غير الجراحي",
      image: "https://readdy.ai/api/search-image?query=Non-surgical%20facial%20rejuvenation%2C%20modern%20aesthetic%20treatment%2C%20facial%20therapy%20procedure%2C%20professional%20skincare%20clinic&width=400&height=250&seq=blog5&orientation=landscape",
      readTime: "8 دقائق"
    },
    {
      title: "أسباب ضعف السمع وطرق العلاج الحديثة",
      excerpt: "الأسباب المختلفة لضعف السمع والحلول العلاجية المتطورة",
      date: "3 ديسمبر 2024",
      author: "د. فاطمة أحمد",
      category: "الأنف والأذن والحنجرة",
      image: "https://readdy.ai/api/search-image?query=Hearing%20test%20audiometry%2C%20ENT%20hearing%20examination%2C%20medical%20hearing%20aid%20consultation%2C%20professional%20audiology%20clinic&width=400&height=250&seq=blog6&orientation=landscape",
      readTime: "7 دقائق"
    }
  ];

  const categories = [
    "جميع المقالات",
    "الجراحة التجميلية",
    "الأنف والأذن والحنجرة",
    "التجميل غير الجراحي",
    "الرعاية الصحية"
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
              <Link href="/services" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">خدماتنا</Link>
              <Link href="/blog" className="text-[#decba2] font-['Cairo'] font-semibold">المدونة</Link>
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
            <h1 className="text-5xl font-bold mb-4 font-['Cairo']">مدونة طبية متخصصة</h1>
            <p className="text-xl text-[#decba2] font-['Cairo']">مقالات ونصائح طبية من خبراء الجراحة التجميلية والأنف والأذن والحنجرة</p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-colors cursor-pointer whitespace-nowrap font-['Cairo'] ${
                  index === 0 
                    ? 'bg-[#decba2] text-[#0A0C13]' 
                    : 'bg-[#F8F6F0] text-[#7A848F] hover:bg-[#decba2] hover:text-[#0A0C13]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#F8F6F0] rounded-2xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 space-x-reverse mb-4">
                  <span className="bg-[#decba2] text-[#0A0C13] px-3 py-1 rounded-full text-sm font-['Cairo']">
                    {articles[0].category}
                  </span>
                  <span className="text-[#7A848F] text-sm font-['Cairo']">{articles[0].date}</span>
                </div>
                <h2 className="text-3xl font-bold text-[#0A0C13] mb-4 font-['Cairo']">{articles[0].title}</h2>
                <p className="text-[#7A848F] mb-6 font-['Cairo'] leading-relaxed">{articles[0].excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-10 h-10 bg-[#decba2] rounded-full flex items-center justify-center">
                      <i className="ri-user-line text-[#0A0C13]"></i>
                    </div>
                    <div>
                      <p className="text-[#0A0C13] font-semibold font-['Cairo']">{articles[0].author}</p>
                      <p className="text-[#7A848F] text-sm font-['Cairo']">{articles[0].readTime}</p>
                    </div>
                  </div>
                  <button className="bg-[#decba2] text-[#0A0C13] px-6 py-2 rounded-full hover:bg-[#d4c199] transition-colors cursor-pointer whitespace-nowrap font-['Cairo'] font-semibold">
                    اقرأ المقال
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12 bg-[#F8F6F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A0C13] mb-4 font-['Cairo']">أحدث المقالات</h2>
            <p className="text-[#7A848F] text-lg font-['Cairo']">تابع آخر المستجدات في عالم الطب والجراحة التجميلية</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <article key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 space-x-reverse mb-3">
                    <span className="bg-[#decba2]/20 text-[#0A0C13] px-3 py-1 rounded-full text-sm font-['Cairo']">
                      {article.category}
                    </span>
                    <span className="text-[#7A848F] text-sm font-['Cairo']">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0C13] mb-3 font-['Cairo'] line-clamp-2">{article.title}</h3>
                  <p className="text-[#7A848F] mb-4 font-['Cairo'] leading-relaxed line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <div className="w-8 h-8 bg-[#decba2] rounded-full flex items-center justify-center">
                        <i className="ri-user-line text-[#0A0C13] text-sm"></i>
                      </div>
                      <div>
                        <p className="text-[#0A0C13] text-sm font-semibold font-['Cairo']">{article.author}</p>
                        <p className="text-[#7A848F] text-xs font-['Cairo']">{article.date}</p>
                      </div>
                    </div>
                    <button className="text-[#decba2] hover:text-[#0A0C13] transition-colors cursor-pointer">
                      <i className="ri-arrow-left-line text-xl"></i>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0A0C13] to-[#7A848F] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4 font-['Cairo']">اشترك في نشرتنا الطبية</h2>
            <p className="text-xl mb-8 text-[#decba2] font-['Cairo']">
              احصل على آخر المقالات والنصائح الطبية مباشرة في بريدك الإلكتروني
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 rounded-full text-[#0A0C13] font-['Cairo'] outline-none"
              />
              <button className="bg-[#decba2] text-[#0A0C13] px-8 py-3 rounded-full hover:bg-[#d4c199] transition-colors cursor-pointer whitespace-nowrap font-['Cairo'] font-semibold">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A0C13] mb-4 font-['Cairo']">المواضيع الأكثر بحثاً</h2>
            <p className="text-[#7A848F] text-lg font-['Cairo']">اكتشف المواضيع التي يبحث عنها المرضى أكثر</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-[#decba2] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-nose-line text-2xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-lg font-bold text-[#0A0C13] mb-2 font-['Cairo']">تجميل الأنف</h3>
              <p className="text-[#7A848F] text-sm font-['Cairo']">25 مقال</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-[#decba2] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-syringe-line text-2xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-lg font-bold text-[#0A0C13] mb-2 font-['Cairo']">البوتوكس والفيلر</h3>
              <p className="text-[#7A848F] text-sm font-['Cairo']">18 مقال</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-[#decba2] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-ear-line text-2xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-lg font-bold text-[#0A0C13] mb-2 font-['Cairo']">مشاكل السمع</h3>
              <p className="text-[#7A848F] text-sm font-['Cairo']">15 مقال</p>
            </div>

            <div className="bg-white p-6 rounded-2xl text-center hover:shadow-lg transition-all cursor-pointer">
              <div className="w-16 h-16 bg-[#decba2] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lungs-line text-2xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-lg font-bold text-[#0A0C13] mb-2 font-['Cairo']">الجيوب الأنفية</h3>
              <p className="text-[#7A848F] text-sm font-['Cairo']">12 مقال</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0C13] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-['Cairo']">لديك سؤال طبي؟</h2>
          <p className="text-xl mb-8 text-[#decba2] font-['Cairo']">
            استشر الدكتور سعد البردوني واحصل على إجابات دقيقة لأسئلتك الطبية
          </p>
          <button className="bg-[#decba2] text-[#0A0C13] px-8 py-4 rounded-full hover:bg-[#d4c199] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap font-['Cairo'] font-semibold text-lg">
            احجز استشارة طبية
          </button>
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