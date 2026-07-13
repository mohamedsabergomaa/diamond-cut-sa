/* ===================================================
   TRANSLATIONS - Arabic ↔ English
   Keys are unique identifiers used in data-i18n attributes
   'ar' = Arabic (default), 'en' = English
   Keys ending in _html contain HTML markup
=================================================== */
var translations = {

  /* --- Nav --- */
  'nav-home':             { ar: 'الرئيسية',              en: 'Home' },
  'nav-services':         { ar: 'خدماتنا',               en: 'Services' },
  'nav-about':            { ar: 'من نحن',                en: 'About Us' },
  'nav-blog':             { ar: 'المدونة',               en: 'Blog' },
  'nav-partners':         { ar: 'شركاؤنا',               en: 'Partners' },
  'nav-faq':              { ar: 'الأسئلة الشائعة',       en: 'FAQ' },
  'nav-contact':          { ar: 'اتصل بنا',              en: 'Contact Us' },
  'nav-cta':              { ar: 'اتصل بنا',              en: 'Call Us' },
  'nav-hamburger':        { ar: 'القائمة',               en: 'Menu' },
  'whatsapp-aria':        { ar: 'تواصل عبر واتساب',      en: 'Contact via WhatsApp' },

  /* --- Dropdown service names (15) --- */
  'service-1':  { ar: 'قص وتخريم الخرسانة',        en: 'Concrete Cutting & Coring' },
  'service-2':  { ar: 'فتح وتوسيع الأبواب',        en: 'Door Opening & Widening' },
  'service-3':  { ar: 'فتح وتوسيع النوافذ',        en: 'Window Opening & Widening' },
  'service-4':  { ar: 'قص الخرسانة بالليزر',       en: 'Laser Concrete Cutting' },
  'service-5':  { ar: 'توسيع المساحات الداخلية',   en: 'Interior Space Expansion' },
  'service-6':  { ar: 'الهدم الجزئي للخرسانة',     en: 'Partial Concrete Demolition' },
  'service-7':  { ar: 'تقطيع الجدران الخرسانية',   en: 'Concrete Wall Slicing' },
  'service-8':  { ar: 'إزالة الجدران الخرسانية',   en: 'Concrete Wall Removal' },
  'service-9':  { ar: 'استشارات قص الخرسانة',      en: 'Concrete Cutting Consulting' },
  'service-10': { ar: 'تخريم الخرسانة بالماء',     en: 'Water Concrete Coring' },
  'service-11': { ar: 'قص الخرسانة السميكة',       en: 'Thick Concrete Cutting' },
  'service-12': { ar: 'قص الأعمدة الخرسانية',      en: 'Concrete Column Cutting' },
  'service-13': { ar: 'معالجة الخرسانة',           en: 'Concrete Treatment' },
  'service-14': { ar: 'قص الخرسانة المسلحة',       en: 'Reinforced Concrete Cutting' },
  'service-15': { ar: 'قص الجدران بالمنشار الماسي', en: 'Diamond Wire Wall Sawing' },
  'service-16': { ar: 'عمل فتحات كور',             en: 'Core Drilling' },

  /* --- Hero (3 slides) --- */
  'hero-badge-1':          { ar: 'الرائد في قطاع المقاولات',      en: 'Leader in Contracting' },
  'hero-title-1_html':     { ar: 'مرحبا في شركة القاطع الماسي<br /><span class="gold">للمقاولات العامة</span>', en: 'Welcome to Diamond Cutting<br /><span class="gold">General Contracting</span>' },
  'hero-desc-1':           { ar: 'نقدم خدمات متكاملة في مجال قص الخرسانة والمقاولات بأحدث المعدات وأعلى معايير الجودة في الرياض', en: 'We provide integrated concrete cutting and contracting services with the latest equipment and highest quality standards in Riyadh.' },
  'hero-btn-1':            { ar: 'خدماتنا',               en: 'Our Services' },
  'hero-btn-out-1':        { ar: 'تواصل معنا',            en: 'Contact Us' },

  'hero-badge-2':          { ar: 'خبرة تمتد لسنوات',       en: 'Years of Expertise' },
  'hero-title-2_html':     { ar: 'احترافية في<br /><span class="gold">قص الخرسانة</span>', en: 'Professionalism in<br /><span class="gold">Concrete Cutting</span>' },
  'hero-desc-2':           { ar: 'نستخدم أحدث التقنيات وأفضل المعدات لضمان دقة عالية وجودة استثنائية في كل مشروع', en: 'We use cutting-edge technology and premium equipment to ensure high precision and exceptional quality in every project.' },
  'hero-btn-2':            { ar: 'اكتشف خدماتنا',          en: 'Discover Services' },
  'hero-btn-out-2':        { ar: 'اتصل الآن',              en: 'Call Now' },

  'hero-badge-3':          { ar: 'شريكك الموثوق',           en: 'Your Trusted Partner' },
  'hero-title-3_html':     { ar: 'مشاريع كبيرة<br /><span class="gold">نفذناها بنجاح</span>', en: 'Large Projects<br /><span class="gold">Successfully Completed</span>' },
  'hero-desc-3':           { ar: 'من المشاريع الصغيرة إلى المشاريع العملاقة، نحن هنا لتلبية جميع احتياجاتكم بكل احترافية', en: 'From small projects to mega-projects, we are here to meet all your needs with the utmost professionalism.' },
  'hero-btn-3':            { ar: 'شركاؤنا',                en: 'Our Partners' },
  'hero-btn-out-3':        { ar: 'احصل على عرض',           en: 'Get a Quote' },

  'slide-prev-aria':       { ar: 'السابق',                en: 'Previous' },
  'slide-next-aria':       { ar: 'التالي',                en: 'Next' },
  'slide-dot-aria':        { ar: 'الشريحة',               en: 'Slide' },

  /* --- About --- */
  'about-badge':           { ar: 'من نحن',                en: 'About Us' },
  'about-title_html':      { ar: 'مؤسسة القاطع الماسي<br />للمقاولات العامة', en: 'Diamond Cut Est.<br />General Contracting' },
  'about-text-1':          { ar: 'مؤسسة القاطع الماسي للمقاولات العامة هي شركة رائدة في مجال قص الخرسانة والمقاولات العامة، مقرها في الرياض. بفضل فريقنا من المحترفين ذوي الخبرة، نستخدم أحدث المعدات والتقنيات لضمان تقديم خدمات دقيقة وعالية الجودة.', en: 'Diamond Cut for General Contracting is a leading company in concrete cutting and general contracting, based in Riyadh. With our team of experienced professionals, we use the latest equipment and techniques to ensure accurate, high-quality services.' },
  'about-text-2':          { ar: 'نحن ملتزمون بتقديم أفضل الحلول الفعالة التي تعزز من جودة العمل وتحقق رضا العملاء، مما يجعلنا الخيار الأمثل للمشاريع الصغيرة والكبيرة على حد سواء.', en: 'We are committed to delivering the most effective solutions that enhance work quality and achieve client satisfaction, making us the ideal choice for both small and large projects.' },
  'about-feat-1':          { ar: '✓ فريق من المحترفين ذوي الخبرة', en: '✓ Team of experienced professionals' },
  'about-feat-2':          { ar: '✓ أحدث المعدات والتقنيات',       en: '✓ Latest equipment & technology' },
  'about-feat-3':          { ar: '✓ معايير الجودة والسلامة العالمية', en: '✓ Global quality & safety standards' },
  'about-feat-4':          { ar: '✓ خدمة عملاء على مدار الساعة',     en: '✓ 24/7 customer service' },
  'about-cert-1':          { ar: 'مرخصون رسمياً',           en: 'Officially Licensed' },
  'about-cert-2':          { ar: 'عضو غرفة الرياض',         en: 'Riyadh Chamber Member' },
  'about-cert-3':          { ar: 'سجل تجاري: 1010594097',   en: 'CR: 1010594097' },
  'about-cta':             { ar: 'تواصل معنا',              en: 'Contact Us' },
  'about-badge-num':       { ar: '15+',                     en: '15+' },
  'about-badge-text':      { ar: 'سنة خبرة',                en: 'Years Exp.' },

  /* --- Gallery --- */
  'gallery-badge':         { ar: 'معرض الصور',              en: 'Photo Gallery' },
  'gallery-title':         { ar: 'صور مشاريعنا',           en: 'Our Projects' },
  'gallery-desc':          { ar: 'نفخر بتنفيذ العديد من المشاريع الناجحة في مجال قص الخرسانة والمقاولات العامة', en: 'We pride ourselves on executing many successful projects in concrete cutting and general contracting.' },
  'gallery-alt':           { ar: 'مشروع قص خرسانة',         en: 'Concrete cutting project' },

  /* --- Services section --- */
  'services-badge':        { ar: 'ما نقدمه',               en: 'What We Offer' },
  'services-title':        { ar: 'خدماتنا المتخصصة',        en: 'Our Specialized Services' },
  'services-desc':         { ar: 'نقدم مجموعة شاملة من خدمات قص الخرسانة والمقاولات العامة بأعلى مستويات الجودة والاحترافية', en: 'We offer a comprehensive range of concrete cutting and general contracting services at the highest levels of quality and professionalism.' },
  'services-card-btn':     { ar: 'احصل على الخدمة',         en: 'Get Service' },

  /* Service descriptions (short - 15) */
  'sdesc-1':  { ar: 'خدمة متخصصة في قص وتخريم الخرسانة بدقة عالية باستخدام أحدث المعدات والتقنيات المتطورة.', en: 'Specialized concrete cutting and coring with high precision using the latest advanced equipment and techniques.' },
  'sdesc-2':  { ar: 'نفتح ونوسع الأبواب في الجدران الخرسانية بأمان تام ودقة متناهية لتلبية احتياجاتكم.', en: 'We open and widen doorways in concrete walls with complete safety and precision to meet your needs.' },
  'sdesc-3':  { ar: 'خدمة متخصصة في فتح وتوسيع النوافذ في الجدران الخرسانية بأعلى معايير الجودة والسلامة.', en: 'Professional window opening and widening in concrete walls with the highest quality and safety standards.' },
  'sdesc-4':  { ar: 'تقنية متطورة لقص الخرسانة بالليزر تضمن أعلى درجات الدقة والكفاءة في الأعمال الهندسية.', en: 'Advanced laser concrete cutting technology ensuring the highest precision and efficiency in engineering work.' },
  'sdesc-5':  { ar: 'نحوّل مساحاتكم الداخلية عبر إزالة الجدران وتوسيعها لمنح مبانيكم مساحة أكبر وتهوية أفضل.', en: 'Transform your interior spaces by removing and widening walls to give your buildings more space and better ventilation.' },
  'sdesc-6':  { ar: 'خدمة متخصصة في الهدم الجزئي للخرسانة بدون اهتزازات أو تصدعات تضر ببقية المنشأة.', en: 'Specialized partial concrete demolition without vibrations or cracks that could damage the rest of the structure.' },
  'sdesc-7':  { ar: 'خدمة احترافية لتقطيع وفصل الجدران الخرسانية بأحدث المعدات وبأعلى دقة وجودة.', en: 'Professional concrete wall slicing and separation with the latest equipment at the highest precision and quality.' },
  'sdesc-8':  { ar: 'نقوم بإزالة الجدران الخرسانية بأمان تام وبدون التأثير على الهيكل العام للمبنى.', en: 'We remove concrete walls with complete safety without affecting the overall structure of the building.' },
  'sdesc-9':  { ar: 'نقدم استشارات هندسية متخصصة في مجال قص الخرسانة لتحديد أفضل الحلول لمشاريعكم.', en: 'We offer specialized engineering consulting in concrete cutting to determine the best solutions for your projects.' },
  'sdesc-10': { ar: 'تقنية متقدمة لتخريم الخرسانة باستخدام ضغط الماء العالي بدون غبار أو اهتزازات.', en: 'Advanced concrete coring using high-pressure water without dust or vibrations.' },
  'sdesc-11': { ar: 'متخصصون في قص الخرسانة السميكة والجدران العازمة باستخدام معدات ذات قدرة عالية.', en: 'Specialists in thick concrete cutting and massive walls using high-capacity equipment.' },
  'sdesc-12': { ar: 'قص وإزالة الأعمدة الخرسانية بدقة متناهية مع الحفاظ على السلامة الهيكلية للمبنى.', en: 'Precise concrete column cutting and removal while maintaining the structural integrity of the building.' },
  'sdesc-13': { ar: 'خدمات متكاملة لمعالجة وإصلاح الخرسانة التالفة والشروخ لاستعادة قوة المنشآت.', en: 'Integrated services for treating and repairing damaged concrete and cracks to restore structural strength.' },
  'sdesc-14': { ar: 'قص وإزالة الخرسانة المسلحة بكفاءة عالية باستخدام أحدث المناشير السلكية والماسية.', en: 'Efficient reinforced concrete cutting and removal using the latest wire and diamond saws.' },
  'sdesc-15': { ar: 'نستخدم المناشير الماسية المتطورة لقص الجدران بدقة عالية مع أقل نسبة اهتزاز وغبار.', en: 'We use advanced diamond saws for precise wall cutting with minimal vibration and dust.' },

  /* --- Why Us --- */
  'why-badge':             { ar: 'لماذا نحن؟',             en: 'Why Us?' },
  'why-title':             { ar: 'مميزاتنا التي تميزنا',    en: 'What Sets Us Apart' },

  'why-title-1':           { ar: 'جودة مضمونة',            en: 'Guaranteed Quality' },
  'why-desc-1':            { ar: 'نلتزم بأعلى معايير الجودة في كل مشروع ونقدم ضماناً على جميع أعمالنا', en: 'We adhere to the highest quality standards in every project and provide a warranty on all our work.' },
  'why-title-2':           { ar: 'التسليم في الوقت المحدد', en: 'On-Time Delivery' },
  'why-desc-2':            { ar: 'نحرص على إنجاز المشاريع في المواعيد المحددة دون التنازل عن جودة العمل', en: 'We ensure projects are completed on schedule without compromising work quality.' },
  'why-title-3':           { ar: 'فريق محترف',             en: 'Professional Team' },
  'why-desc-3':            { ar: 'فريقنا من المهندسين والفنيين المدربين يضمن تنفيذ أعلى مستوى من الاحترافية', en: 'Our team of trained engineers and technicians ensures the highest level of professionalism.' },
  'why-title-4':           { ar: 'أسعار تنافسية',          en: 'Competitive Prices' },
  'why-desc-4':            { ar: 'نقدم أفضل الأسعار في السوق مع الحفاظ على أعلى معايير الجودة والاحترافية', en: 'We offer the best prices in the market while maintaining the highest quality and professionalism.' },
  'why-title-5':           { ar: 'تغطية الرياض',           en: 'Riyadh Coverage' },
  'why-desc-5':            { ar: 'نخدم جميع أحياء ومناطق الرياض ونستطيع التوسع للمناطق المجاورة حسب الحاجة', en: 'We serve all neighborhoods and areas of Riyadh and can expand to adjacent areas as needed.' },
  'why-title-6':           { ar: 'دعم على مدار الساعة',     en: '24/7 Support' },
  'why-desc-6':            { ar: 'فريق دعم العملاء متاح على مدار الساعة للإجابة على استفساراتكم وتلبية احتياجاتكم', en: 'Our customer support team is available around the clock to answer your inquiries.' },

  /* --- Partners --- */
  'partners-badge':        { ar: 'ثقتهم بنا',              en: 'Their Trust' },
  'partners-title':        { ar: 'شركاؤنا ومن خدمناهم',    en: 'Our Partners & Clients' },
  'partners-desc':         { ar: 'نفخر بثقة كبرى الشركات والمؤسسات في المملكة العربية السعودية', en: 'We pride ourselves on the trust of major companies and institutions in Saudi Arabia.' },
  'partner-alt-1':         { ar: 'شريك ١',                 en: 'Partner 1' },
  'partner-alt-2':         { ar: 'شريك ٢',                 en: 'Partner 2' },
  'partner-alt-3':         { ar: 'شريك ٣',                 en: 'Partner 3' },

  /* --- FAQ --- */
  'faq-badge':             { ar: 'لديك سؤال؟',             en: 'Have a Question?' },
  'faq-title':             { ar: 'الأسئلة الشائعة',        en: 'Frequently Asked Questions' },

  'faq-q-1':               { ar: 'ما هي خدمات قص الخرسانة التي تقدمونها؟', en: 'What concrete cutting services do you offer?' },
  'faq-a-1':               { ar: 'نقدم مجموعة متنوعة من خدمات قص الخرسانة، تشمل قص وتخريم الخرسانة، فتح وتوسيع الأبواب والنوافذ، إزالة الخرسانة، قص الخرسانة بالليزر، الهدم الجزئي، وتوسيع المساحات الداخلية، واستشارات قص الخرسانة.', en: 'We offer a variety of concrete cutting services, including cutting and coring, door and window opening, concrete removal, laser cutting, partial demolition, space expansion, and cutting consulting.' },
  'faq-q-2':               { ar: 'هل تقدمون خدماتكم في جميع أحياء الرياض؟', en: 'Do you provide services in all areas of Riyadh?' },
  'faq-a-2':               { ar: 'نعم، نقدم خدماتنا في جميع أحياء ومناطق الرياض، ونستطيع التوسع إلى المناطق المجاورة حسب الحاجة وبعد التنسيق المسبق.', en: 'Yes, we serve all neighborhoods and areas of Riyadh and can expand to neighboring areas as needed with prior coordination.' },
  'faq-q-3':               { ar: 'كيف يمكنني الحصول على تقدير لتكلفة المشروع؟', en: 'How can I get a project cost estimate?' },
  'faq-a-3':               { ar: 'يمكنك الاتصال بنا على الرقم 966549804777+ أو ملء نموذج الاتصال على موقعنا للحصول على تقدير مجاني بناءً على تفاصيل مشروعك.', en: 'You can call us at +966549804777 or fill out the contact form on our website for a free estimate based on your project details.' },
  'faq-q-4':               { ar: 'ما هي المعدات التي تستخدمونها في قص الخرسانة؟', en: 'What equipment do you use for concrete cutting?' },
  'faq-a-4':               { ar: 'نستخدم معدات متطورة وآمنة، مثل آلات القص بالليزر، وأدوات تخريم الخرسانة، وآلات القطع الماسية، مما يضمن دقة وجودة عالية في العمل.', en: 'We use advanced and safe equipment such as laser cutting machines, concrete coring tools, and diamond cutting machines, ensuring high precision and quality.' },
  'faq-q-5':               { ar: 'هل تقدمون ضماناً على الخدمات؟', en: 'Do you offer a warranty on services?' },
  'faq-a-5':               { ar: 'نعم، نقدم ضماناً على خدماتنا لضمان رضا العملاء، ونلتزم بتصحيح أي مشكلات قد تظهر بعد الانتهاء من العمل.', en: 'Yes, we provide a warranty on our services to ensure customer satisfaction and commit to resolving any issues after completion.' },
  'faq-q-6':               { ar: 'هل يمكنكم العمل في المشاريع الكبيرة؟', en: 'Can you handle large projects?' },
  'faq-a-6':               { ar: 'نعم، لدينا الخبرة والموارد اللازمة للتعامل مع المشاريع الكبيرة والمعقدة، كما نضمن إتمامها في الوقت المحدد وضمن الميزانية المتفق عليها.', en: 'Yes, we have the expertise and resources to handle large and complex projects, ensuring completion on time and within budget.' },
  'faq-q-7':               { ar: 'ما هي شروط السلامة التي تتبعونها؟', en: 'What safety standards do you follow?' },
  'faq-a-7':               { ar: 'نلتزم بأعلى معايير السلامة في جميع مشاريعنا، بما في ذلك استخدام معدات الحماية الشخصية والتأكد من سلامة موقع العمل وفق المعايير السعودية والدولية.', en: 'We adhere to the highest safety standards in all our projects, including personal protective equipment and site safety per Saudi and international standards.' },

  /* --- CTA Strip --- */
  'cta-title':             { ar: 'هل لديك مشروع في ذهنك؟',        en: 'Have a Project in Mind?' },
  'cta-desc':              { ar: 'تواصل معنا الآن وسنقدم لك استشارة مجانية وعرض سعر مفصل', en: 'Contact us now for a free consultation and detailed quote.' },
  'cta-btn-call':          { ar: 'اتصل بنا الآن',                 en: 'Call Us Now' },
  'cta-btn-whatsapp':      { ar: 'واتساب',                       en: 'WhatsApp' },

  /* --- Contact Form --- */
  'contact-badge':         { ar: 'تواصل معنا',                  en: 'Get In Touch' },
  'contact-title':         { ar: 'نحن هنا لمساعدتك',            en: 'We Are Here to Help' },
  'form-title':            { ar: 'أرسل رسالتك',                 en: 'Send Your Message' },
  'form-name-label':       { ar: 'الاسم الكريم *',              en: 'Full Name *' },
  'form-name-place':       { ar: 'أكتب اسمك الكريم',            en: 'Enter your full name' },
  'form-phone-label':      { ar: 'رقم الجوال *',                en: 'Phone Number *' },
  'form-phone-place':      { ar: '05XXXXXXXX',                  en: '05XXXXXXXX' },
  'form-email-label':      { ar: 'البريد الإلكتروني',           en: 'Email Address' },
  'form-email-place':      { ar: 'example@gmail.com',           en: 'example@gmail.com' },
  'form-service-label':    { ar: 'نوع الخدمة',                  en: 'Service Type' },
  'form-service-default':  { ar: 'اختر الخدمة المطلوبة',        en: 'Select required service' },
  'form-service-other':    { ar: 'أخرى',                        en: 'Other' },
  'form-msg-label':        { ar: 'تفاصيل الطلب',                en: 'Request Details' },
  'form-msg-place':        { ar: 'أكتب تفاصيل مشروعك...',       en: 'Write your project details...' },
  'form-submit':           { ar: 'إرسال الطلب',                 en: 'Send Request' },
  'form-sending':          { ar: 'جاري الإرسال...',             en: 'Sending...' },
  'form-success':          { ar: '✓ تم إرسال طلبك بنجاح! سنتواصل معك قريباً', en: '✓ Request sent successfully! We will contact you soon.' },

  /* --- Contact Info Sidebar --- */
  'contact-info-title':    { ar: 'معلومات التواصل',             en: 'Contact Information' },
  'ci-location':           { ar: 'الموقع',                      en: 'Location' },
  'ci-address':            { ar: 'حي الدار البيضاء، الرياض 12211، المملكة العربية السعودية', en: 'Al Dar Al Bayda, Riyadh 12211, Saudi Arabia' },
  'ci-phone':              { ar: 'الهاتف',                      en: 'Phone' },
  'ci-whatsapp':           { ar: 'واتساب',                      en: 'WhatsApp' },
  'ci-whatsapp-link':      { ar: 'راسلنا على واتساب',           en: 'Message us on WhatsApp' },
  'ci-hours':              { ar: 'ساعات العمل',                 en: 'Working Hours' },
  'ci-hours-val':          { ar: 'السبت - الخميس: 8 ص - 10 م',  en: 'Sat - Thu: 8 AM - 10 PM' },
  'ci-map-title':          { ar: 'موقع شركة القاطع الماسي - الرياض', en: 'Diamond Cut Location - Riyadh' },

  /* --- Footer --- */
  'footer-about':          { ar: 'مؤسسة القاطع الماسي للمقاولات العامة هي شركة رائدة في مجال قص الخرسانة والمقاولات في الرياض. نلتزم بأعلى معايير الجودة والاحترافية.', en: 'Diamond Cut for General Contracting is a leading company in concrete cutting and contracting in Riyadh. We are committed to the highest quality and professionalism.' },
  'footer-heading-pages':  { ar: 'صفحات هامة',                  en: 'Important Pages' },
  'footer-heading-contact':{ ar: 'معلومات التواصل',             en: 'Contact Information' },
  'footer-privacy':        { ar: 'سياسة الخصوصية',              en: 'Privacy Policy' },
  'footer-terms':          { ar: 'شروط الخدمة',                 en: 'Terms of Service' },
  'footer-copyright':      { ar: '© 2025 مؤسسة القاطع الماسي للمقاولات العامة - جميع الحقوق محفوظة | سجل تجاري: 1010594097', en: '© 2025 Diamond Cut General Contracting - All Rights Reserved | CR: 1010594097' },

  /* --- Blog --- */
  'blog-title':            { ar: 'المدونة - شركة القاطع الماسي للمقاولات العامة', en: 'Blog - Diamond Cut General Contracting' },
  'blog-meta-desc':        { ar: 'مدونة شركة القاطع الماسي للمقاولات العامة - تعرف على أحدث خدماتنا في مجال قص الخرسانة وأعمال المقاولات بالرياض.', en: 'Diamond Cut General Contracting blog - Learn about our latest concrete cutting services and contracting work in Riyadh.' },
  'blog-hero-badge':       { ar: 'آخر المقالات',                en: 'Latest Articles' },
  'blog-hero-title':       { ar: 'المدونة',                     en: 'Blog' },
  'blog-hero-desc':        { ar: 'تعرف على أحدث خدماتنا ومشاريعنا في مجال قص الخرسانة وأعمال المقاولات', en: 'Discover our latest services and projects in concrete cutting and contracting.' },
  'blog-card-btn':         { ar: 'اقرأ المزيد',                 en: 'Read More' },
  'blog-page-next':        { ar: 'التالي ›',                    en: 'Next ›' },
  'blog-modal-whatsapp':   { ar: 'طلب الخدمة عبر واتساب',      en: 'Request via WhatsApp' },
  'blog-modal-call':       { ar: 'اتصل بنا',                    en: 'Call Us' },

  /* Service data-desc (long - 16, for blog modal) */
  'ddesc-1':  { ar: 'نقدم خدمة قص وتخريم الخرسانة المسلحة باستخدام أحدث المعدات والمناشير الماسية عالية الكفاءة. نضمن لكم دقة متناهية في القطع مع أقل نسبة اهتزاز وغبار، مما يحافظ على سلامة المبنى والهيكل العام. فريقنا المدرب يمتلك خبرة واسعة في تنفيذ أصعب مشاريع قص وتخريم الخرسانة في الرياض وجميع أنحاء المملكة.', en: 'We offer reinforced concrete cutting and coring using the latest high-efficiency diamond saws and equipment. We guarantee extreme cutting precision with minimal vibration and dust, maintaining building and structural safety. Our trained team has extensive experience in executing the most difficult concrete cutting projects in Riyadh and across the Kingdom.' },
  'ddesc-2':  { ar: 'نوفر خدمة فتح وتوسيع الأبواب في الجدران الخرسانية الحاملة والغير حاملة بأعلى معايير الأمان. نستخدم تقنيات القص الماسي التي تسمح بتنفيذ الفتحات بالحجم والشكل المطلوب دون إلحاق أي ضرر بالهيكل الخرساني المحيط. مثالي لتجديد المساحات الداخلية أو إضافة مداخل جديدة في المباني السكنية والتجارية.', en: 'We provide door opening and widening in load-bearing and non-load-bearing concrete walls with the highest safety standards. We use diamond cutting techniques to create openings in the required size and shape without damaging the surrounding concrete structure. Ideal for interior renovations or adding new entrances.' },
  'ddesc-3':  { ar: 'خدمة متخصصة في فتح وتوسيع النوافذ في الجدران الخرسانية لتحسين الإضاءة والتهوية في المباني. نستخدم أحدث معدات القص لإجراء القطع بدقة فائقة دون التأثير على سلامة الجدار أو المبنى. ننفذ جميع الأحجام والتصاميم حسب رغبة العميل مع ضمان أعلى مستويات الجودة والسلامة المهنية.', en: 'Specialized window opening and widening in concrete walls to improve lighting and ventilation. We use the latest cutting equipment for ultra-precise cutting without affecting wall or building integrity. We execute all sizes and designs according to client preference with the highest quality and safety standards.' },
  'ddesc-4':  { ar: 'نستخدم أحدث تقنيات قص الخرسانة بالليزر التي توفر أعلى درجات الدقة والنظافة في القطع. تتيح هذه التقنية المتطورة إجراء قص نظيف بدون غبار أو اهتزازات مع سرعة تنفيذ عالية. مثالية للمشاريع التي تتطلب دقة متناهية في القياسات والحواف النظيفة، كما أنها مناسبة للعمل في الأماكن الحساسة والمغلقة.', en: 'We use the latest laser concrete cutting technology providing the highest precision and cleanliness. This advanced technique enables clean cutting without dust or vibrations with high execution speed. Ideal for projects requiring extreme measurement precision and clean edges, suitable for sensitive indoor environments.' },
  'ddesc-5':  { ar: 'نحوّل مساحاتكم الداخلية عبر إزالة الجدران الفاصلة وتوسيع الغرف باحترافية عالية. ندرس الهيكل الإنشائي للمبنى بدقة لنضمن تنفيذ التوسيع بأمان تام دون التأثير على الأحمال والسلامة الهيكلية. حل مثالي لتوحيد المساحات وإنشاء تصاميم داخلية مفتوحة وعصرية في الفلل والشقق والمكاتب التجارية.', en: 'Transform your interior spaces by removing partition walls and expanding rooms with high professionalism. We study the structural system carefully to ensure safe expansion without affecting loads and structural integrity. Perfect for creating open-plan, modern interiors in villas, apartments, and offices.' },
  'ddesc-6':  { ar: 'خدمة متخصصة في الهدم الجزئي للخرسانة بدون اهتزازات أو تصدعات قد تضر ببقية أجزاء المنشأة. نستخدم تقنيات القطع الماسي الدقيق التي تسمح بإزالة الأجزاء المطلوبة فقط مع الحفاظ على سلامة الأجزاء المجاورة. مناسبة لمشاريع التعديلات الإنشائية والتجديدات في المباني القائمة دون الحاجة لهدم كامل.', en: 'Specialized partial concrete demolition without vibrations or cracks that could damage the rest of the structure. We use precise diamond cutting techniques to remove only required parts while preserving adjacent elements. Suitable for structural modifications and renovations without full demolition.' },
  'ddesc-7':  { ar: 'نقدم خدمة احترافية لتقطيع وفصل الجدران الخرسانية باستخدام أحدث المناشير الماسية والمعدات المتطورة. تتم عملية التقطيع بدقة عالية مع التحكم الكامل في أبعاد القطع وفقاً للمخططات الهندسية المعتمدة. مناسبة لتقسيم المساحات الكبيرة أو تهيئة المباني لأعمال التجديد وإعادة التوزيع الداخلي.', en: 'Professional concrete wall slicing and separation using the latest diamond saws and advanced equipment. The cutting process is executed with high precision and full control over dimensions according to approved engineering plans. Ideal for dividing large spaces or preparing buildings for renovation.' },
  'ddesc-8':  { ar: 'نقوم بإزالة الجدران الخرسانية بكفاءة وأمان تام باستخدام تقنيات القص الماسي المتقدمة. نضمن عدم التأثير على الهيكل العام للمبنى أثناء عملية الإزالة، مع الالتزام بمعايير السلامة المهنية. نقدم حلولاً متكاملة لإزالة الجدران الحاملة وغير الحاملة لتهيئة المساحات لأعمال التطوير والتجديد.', en: 'We remove concrete walls efficiently and safely using advanced diamond cutting techniques. We guarantee no impact on the overall building structure during removal, adhering to professional safety standards. Complete solutions for removing load-bearing and non-load-bearing walls.' },
  'ddesc-9':  { ar: 'نقدم استشارات هندسية متخصصة في مجال قص الخرسانة لتحديد أفضل الحلول لمشاريعكم الإنشائية. يشمل ذلك تقييم الحالة الإنشائية للمبنى، واختيار التقنية المناسبة للقص، وتقديم دراسة جدوى تفصيلية. مهندسونا المتخصصون يقدمون توصيات دقيقة تساعدكم على اتخاذ القرار الأمثل لتعديلاتكم الإنشائية بأمان وفعالية.', en: 'We offer specialized engineering consulting in concrete cutting to determine the best solutions for your projects. This includes structural assessment, selecting appropriate cutting techniques, and providing detailed feasibility studies. Our engineers provide precise recommendations for safe and effective structural modifications.' },
  'ddesc-10': { ar: 'تقنية متقدمة لتخريم الخرسانة باستخدام ضغط الماء العالي بدون غبار أو اهتزازات. تعتبر هذه الطريقة صديقة للبيئة ومناسبة للعمل في الأماكن المغلقة والمستشفيات والمباني الحساسة. ننفذ فتحات التخريم بأحجام وأعماق مختلفة حسب متطلبات المشروع مع دقة عالية.', en: 'Advanced concrete coring using high-pressure water without dust or vibrations. This eco-friendly method is suitable for indoor work, hospitals, and sensitive buildings. We execute coring openings in various sizes and depths according to project requirements with high precision.' },
  'ddesc-11': { ar: 'متخصصون في قص الخرسانة السميكة والجدران العازمة باستخدام معدات ذات قدرة عالية وأسلاك ماسية متطورة. نتمكن من قص الخرسانة بسمك يصل إلى متر واحد أو أكثر بدقة متناهية. مناسبة للمشاريع الكبيرة كالجسور والسدود والمنشآت الصناعية التي تتطلب قص خرسانة عالية السمك.', en: 'Specialists in thick concrete and massive wall cutting using high-capacity equipment and advanced diamond wires. We can cut concrete up to one meter thick or more with extreme precision. Suitable for large projects like bridges, dams, and industrial facilities.' },
  'ddesc-12': { ar: 'قص وإزالة الأعمدة الخرسانية بدقة متناهية مع الحفاظ على السلامة الهيكلية للمبنى. نستخدم تقنيات القص الماسي المتطور مع تدعيم مؤقت للأحمال لضمان عدم تأثر المبنى أثناء وبعد عملية القص. يشمل خدماتنا التصميم الإنشائي للبدائل وتنفيذ الإسناد المؤقت اللازم قبل البدء في القص.', en: 'Precise concrete column cutting and removal while maintaining structural integrity. We use advanced diamond cutting techniques with temporary load support to ensure no impact during and after cutting. Includes structural design alternatives and temporary shoring before cutting.' },
  'ddesc-13': { ar: 'خدمات متكاملة لمعالجة وإصلاح الخرسانة التالفة والشروخ لاستعادة قوة ومتانة المنشآت الخرسانية. نستخدم أحدث المنتجات والتقنيات في إصلاح الشروخ وحقن الفجوات وتقوية الخرسانة المتضررة. نطيل عمر المباني والمنشآت ونحسن أدائها الإنشائي بأساليب علمية وهندسية مضمونة.', en: 'Integrated concrete treatment and repair services for damaged concrete and cracks to restore strength and durability. We use the latest products and techniques for crack repair, gap injection, and strengthening damaged concrete. Extending building lifespan with guaranteed scientific and engineering methods.' },
  'ddesc-14': { ar: 'قص وإزالة الخرسانة المسلحة بكفاءة عالية باستخدام أحدث المناشير السلكية والماسية المتخصصة. نتعامل مع أصعب حالات القص للخرسانة المسلحة بقضبان حديدية كثيفة دون التأثير على قوة المبنى. نضمن تنفيذاً دقيقاً ونظيفاً مع التحكم الكامل في الغبار والحطام الناتج عن القص.', en: 'High-efficiency reinforced concrete cutting and removal using the latest specialized wire and diamond saws. We handle the toughest reinforced concrete cutting cases with dense rebar without affecting building strength. Clean, precise execution with full dust and debris control.' },
  'ddesc-15': { ar: 'نستخدم المناشير الماسية المتطورة لقص الجدران بدقة عالية مع أقل نسبة اهتزاز وغبار. المناشير الماسية توفر قدرة قطع عالية مع حواف نظيفة وناعمة دون الحاجة لمعالجة إضافية. مثالية لقص فتحات الأبواب والنوافذ وشيلرات التكييف ومجاري التهوية في جميع أنواع الجدران الخرسانية.', en: 'We use advanced diamond saws for precise wall cutting with minimal vibration and dust. Diamond saws provide high cutting capacity with clean, smooth edges requiring no additional treatment. Ideal for cutting door and window openings, AC chiller slots, and ventilation ducts.' },
  'ddesc-16': { ar: 'خدمة متخصصة في عمل فتحات كور (Core Drilling) في الخرسانة بأحجام مختلفة وبأعلى مستويات الدقة. نستخدم معدات التخريم الأساسية المتطورة لعمل فتحات دائرية نظيفة لتمرير التمديدات الكهربائية والصحية ومجاري التكييف. ننفذ الفتحات بأقطار تتراوح من صغير إلى كبير حسب متطلبات المشروع.', en: 'Specialized core drilling service in concrete in various sizes with the highest precision. We use advanced core drilling equipment to create clean circular openings for electrical, plumbing, and HVAC passages. We execute openings in diameters ranging from small to large according to project requirements.' },

}; window.translations = translations;
