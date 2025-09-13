
'use client';

import Link from 'next/link';

export default function About() {
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
              <Link href="/about" className="text-[#decba2] font-['Cairo'] font-semibold">من نحن</Link>
              <Link href="/services" className="text-[#0A0C13] hover:text-[#decba2] transition-colors cursor-pointer font-['Cairo']">خدماتنا</Link>
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
            <h1 className="text-5xl font-bold mb-4 font-['Cairo']">من نحن</h1>
            <p className="text-xl text-[#decba2] font-['Cairo']">تعرف على مركزنا وقيمنا ورؤيتنا</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-[#0A0C13] mb-6 font-['Cairo']">الدكتور سعد البردوني</h2>
              <p className="text-[#7A848F] text-lg mb-6 font-['Cairo'] leading-relaxed">
                الدكتور سعد البردوني هو استشاري متخصص في الجراحة التجميلية وجراحة الأنف والأذن والحنجرة، يتمتع بخبرة واسعة تمتد لأكثر من 15 عاماً في هذا المجال الطبي المتخصص.
              </p>
              <p className="text-[#7A848F] text-lg mb-6 font-['Cairo'] leading-relaxed">
                حصل على شهاداته العليا من أرقى الجامعات العالمية، وهو عضو في العديد من الجمعيات الطبية المتخصصة. يؤمن الدكتور سعد بأهمية الجمع بين الخبرة العلمية والتقنيات الحديثة لتقديم أفضل النتائج للمرضى.
              </p>
              <div className="flex items-center space-x-4 space-x-reverse">
                <div className="w-16 h-16 bg-[#decba2] rounded-full flex items-center justify-center">
                  <i className="ri-award-line text-2xl text-[#0A0C13]"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#0A0C13] font-['Cairo']">+15 سنة خبرة</h3>
                  <p className="text-[#7A848F] font-['Cairo']">في المجال الطبي المتخصص</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20medical%20doctor%20portrait%20in%20white%20coat%2C%20stethoscope%20around%20neck%2C%20confident%20smile%2C%20modern%20medical%20facility%20background%2C%20clean%20professional%20appearance%2C%20warm%20lighting&width=600&height=400&seq=doctor2&orientation=landscape"
                alt="الدكتور سعد البردوني"
                className="rounded-2xl shadow-lg object-cover w-full h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A0C13] mb-4 font-['Cairo']">رؤيتنا ورسالتنا وقيمنا</h2>
            <p className="text-[#7A848F] text-lg font-['Cairo']">ما يحركنا ويوجه عملنا اليومي</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-20 h-20 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-eye-line text-3xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#0A0C13] mb-4 font-['Cairo']">رؤيتنا</h3>
              <p className="text-[#7A848F] font-['Cairo'] leading-relaxed">
                أن نكون المركز الطبي الرائد في اليمن والمنطقة في مجال الجراحة التجميلية وجراحة الأنف والأذن والحنجرة، ونقدم خدمات طبية عالية الجودة تضاهي المعايير العالمية.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-20 h-20 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-target-line text-3xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#0A0C13] mb-4 font-['Cairo']">رسالتنا</h3>
              <p className="text-[#7A848F] font-['Cairo'] leading-relaxed">
                نلتزم بتقديم رعاية طبية متميزة ومخصصة لكل مريض، باستخدام أحدث التقنيات الطبية والجراحية، مع التركيز على السلامة والنتائج المثلى والرضا التام للمرضى.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-20 h-20 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-heart-line text-3xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#0A0C13] mb-4 font-['Cairo']">قيمنا</h3>
              <p className="text-[#7A848F] font-['Cairo'] leading-relaxed">
                الأمانة والشفافية في التعامل، الخبرة والمهنية في الممارسة، الرحمة والإنسانية في الرعاية، والتطوير المستمر لخدماتنا لضمان أفضل النتائج.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A0C13] mb-4 font-['Cairo']">لماذا تختارنا؟</h2>
            <p className="text-[#7A848F] text-lg font-['Cairo']">الأسباب التي تجعلنا الخيار الأمثل لرعايتك الطبية</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-user-star-line text-3xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0A0C13] mb-3 font-['Cairo']">خبرة متخصصة</h3>
              <p className="text-[#7A848F] font-['Cairo']">أكثر من 15 عاماً من الخبرة في المجال الطبي المتخصص</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-microscope-line text-3xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0A0C13] mb-3 font-['Cairo']">أحدث التقنيات</h3>
              <p className="text-[#7A848F] font-['Cairo']">نستخدم أحدث الأجهزة والتقنيات الطبية العالمية</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-shield-check-line text-3xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0A0C13] mb-3 font-['Cairo']">معايير السلامة</h3>
              <p className="text-[#7A848F] font-['Cairo']">نطبق أعلى معايير السلامة والتعقيم الطبي</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-[#decba2] rounded-full flex items-center justify-center mb-6 mx-auto">
                <i className="ri-customer-service-2-line text-3xl text-[#0A0C13]"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0A0C13] mb-3 font-['Cairo']">رعاية شخصية</h3>
              <p className="text-[#7A848F] font-['Cairo']">خطة علاجية مخصصة ومتابعة مستمرة لكل مريض</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F8F6F0]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A0C13] mb-4 font-['Cairo']">الفريق الطبي</h2>
            <p className="text-[#7A848F] text-lg font-['Cairo']">فريق من المتخصصين المؤهلين</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20medical%20doctor%20portrait%2C%20male%20surgeon%20in%20white%20coat%2C%20friendly%20expression%2C%20modern%20medical%20facility%20background%2C%20professional%20headshot&width=300&height=300&seq=doctor3&orientation=squarish"
                alt="د. سعد البردوني"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-[#0A0C13] mb-2 font-['Cairo']">د. سعد البردوني</h3>
              <p className="text-[#decba2] mb-3 font-['Cairo']">استشاري الجراحة التجميلية</p>
              <p className="text-[#7A848F] font-['Cairo'] text-sm">متخصص في جراحة الوجه والجسم التجميلية</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20female%20medical%20doctor%20portrait%2C%20white%20coat%2C%20stethoscope%2C%20confident%20smile%2C%20modern%20clinic%20background%2C%20professional%20headshot&width=300&height=300&seq=doctor4&orientation=squarish"
                alt="د. فاطمة أحمد"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-[#0A0C13] mb-2 font-['Cairo']">د. فاطمة أحمد</h3>
              <p className="text-[#decba2] mb-3 font-['Cairo']">أخصائية الأنف والأذن والحنجرة</p>
              <p className="text-[#7A848F] font-['Cairo'] text-sm">متخصصة في تشخيص وعلاج مشاكل الأنف والأذن</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20male%20medical%20doctor%20portrait%2C%20surgeon%20in%20scrubs%2C%20modern%20operating%20room%20background%2C%20confident%20professional%20appearance&width=300&height=300&seq=doctor5&orientation=squarish"
                alt="د. محمد علي"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-[#0A0C13] mb-2 font-['Cairo']">د. محمد علي</h3>
              <p className="text-[#decba2] mb-3 font-['Cairo']">أخصائي التخدير</p>
              <p className="text-[#7A848F] font-['Cairo'] text-sm">متخصص في التخدير الآمن للعمليات الجراحية</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0C13] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-['Cairo']">هل أنت مستعد للبدء؟</h2>
          <p className="text-xl mb-8 text-[#decba2] font-['Cairo']">
            احجز استشارتك الآن واتخذ الخطوة الأولى نحو الحصول على أفضل رعاية طبية
          </p>
          <button className="bg-[#decba2] text-[#0A0C13] px-8 py-4 rounded-full hover:bg-[#d4c199] transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap font-['Cairo'] font-semibold text-lg">
            احجز استشارتك الآن
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