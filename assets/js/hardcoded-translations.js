(function () {
  "use strict";

  const same = (text) => ({ en: text, de: text, es: text, fr: text, ar: text });

  window.EGA_TRANSLATIONS = {
    phrases: {
      "English": { en: "English", de: "Englisch", es: "Ingles", fr: "Anglais", ar: "الإنجليزية" },
      "German": { en: "German", de: "Deutsch", es: "Aleman", fr: "Allemand", ar: "الألمانية" },
      "Spanish": { en: "Spanish", de: "Spanisch", es: "Espanol", fr: "Espagnol", ar: "الإسبانية" },
      "French": { en: "French", de: "Franzosisch", es: "Frances", fr: "Francais", ar: "الفرنسية" },
      "Arabic": { en: "Arabic", de: "Arabisch", es: "Arabe", fr: "Arabe", ar: "العربية" },
      "Language": { en: "Language", de: "Sprache", es: "Idioma", fr: "Langue", ar: "اللغة" },
      "Select website language": {
        en: "Select website language",
        de: "Webseitensprache auswahlen",
        es: "Seleccionar idioma del sitio web",
        fr: "Selectionner la langue du site",
        ar: "اختر لغة الموقع"
      },
      "Home": { en: "Home", de: "Startseite", es: "Inicio", fr: "Accueil", ar: "الرئيسية" },
      "About": { en: "About", de: "Uber uns", es: "Acerca de", fr: "A propos", ar: "من نحن" },
      "About us": { en: "About us", de: "Uber uns", es: "Sobre nosotros", fr: "A propos de nous", ar: "من نحن" },
      "Courses": { en: "Courses", de: "Kurse", es: "Cursos", fr: "Cours", ar: "الدورات" },
      "Services": { en: "Services", de: "Dienstleistungen", es: "Servicios", fr: "Services", ar: "الخدمات" },
      "Gallery": { en: "Gallery", de: "Galerie", es: "Galeria", fr: "Galerie", ar: "المعرض" },
      "Contact": { en: "Contact", de: "Kontakt", es: "Contacto", fr: "Contact", ar: "اتصل بنا" },
      "Contact Us": { en: "Contact Us", de: "Kontaktieren Sie uns", es: "Contactenos", fr: "Contactez-nous", ar: "اتصل بنا" },
      "Useful Links": { en: "Useful Links", de: "Nutzliche Links", es: "Enlaces utiles", fr: "Liens utiles", ar: "روابط مفيدة" },
      "Our Courses": { en: "Our Courses", de: "Unsere Kurse", es: "Nuestros cursos", fr: "Nos cours", ar: "دوراتنا" },
      "Follow Us": { en: "Follow Us", de: "Folgen Sie uns", es: "Siganos", fr: "Suivez-nous", ar: "تابعونا" },
      "Phone:": { en: "Phone:", de: "Telefon:", es: "Telefono:", fr: "Telephone :", ar: "الهاتف:" },
      "Mail:": { en: "Mail:", de: "E-Mail:", es: "Correo:", fr: "E-mail :", ar: "البريد:" },
      "All Rights Reserved": {
        en: "All Rights Reserved",
        de: "Alle Rechte vorbehalten",
        es: "Todos los derechos reservados",
        fr: "Tous droits reserves",
        ar: "جميع الحقوق محفوظة"
      },
      "Designed by": { en: "Designed by", de: "Entworfen von", es: "Disenado por", fr: "Concu par", ar: "تصميم" },
      "Proud idp Referral Partner": {
        en: "Proud idp Referral Partner",
        de: "Stolzer IDP-Empfehlungspartner",
        es: "Orgulloso socio de referencia de IDP",
        fr: "Fier partenaire de recommandation IDP",
        ar: "شريك إحالة IDP بفخر"
      },
      "Official Partner of DeutschPro for TELC German Examinations": {
        en: "Official Partner of DeutschPro for TELC German Examinations",
        de: "Offizieller Partner von DeutschPro fur TELC Deutschprufungen",
        es: "Socio oficial de DeutschPro para examenes TELC de aleman",
        fr: "Partenaire officiel de DeutschPro pour les examens allemands TELC",
        ar: "الشريك الرسمي لـ DeutschPro لاختبارات TELC الألمانية"
      },
      "Official Partner of G-TEC Global Campus Study abroad.": {
        en: "Official Partner of G-TEC Global Campus Study abroad.",
        de: "Offizieller Partner von G-TEC Global Campus Study Abroad.",
        es: "Socio oficial de G-TEC Global Campus Study Abroad.",
        fr: "Partenaire officiel de G-TEC Global Campus Study Abroad.",
        ar: "الشريك الرسمي لـ G-TEC Global Campus للدراسة في الخارج."
      },
      "Unlock a world of languages with our diverse foreign language courses.": {
        en: "Unlock a world of languages with our diverse foreign language courses.",
        de: "Erschliessen Sie eine Welt der Sprachen mit unseren vielfaltigen Fremdsprachenkursen.",
        es: "Descubra un mundo de idiomas con nuestros diversos cursos de lenguas extranjeras.",
        fr: "Decouvrez un monde de langues avec nos cours varies de langues etrangeres.",
        ar: "اكتشف عالما من اللغات مع دوراتنا المتنوعة في اللغات الأجنبية."
      },
      "Learn More": { en: "Learn More", de: "Mehr erfahren", es: "Saber mas", fr: "En savoir plus", ar: "اعرف المزيد" },
      "Read More": { en: "Read More", de: "Mehr lesen", es: "Leer mas", fr: "Lire la suite", ar: "اقرأ المزيد" },
      "Get Started": { en: "Get Started", de: "Loslegen", es: "Comenzar", fr: "Commencer", ar: "ابدأ الآن" },
      "Send Message": { en: "Send Message", de: "Nachricht senden", es: "Enviar mensaje", fr: "Envoyer le message", ar: "إرسال الرسالة" },
      "Submit": { en: "Submit", de: "Absenden", es: "Enviar", fr: "Soumettre", ar: "إرسال" },
      "Your Name": { en: "Your Name", de: "Ihr Name", es: "Su nombre", fr: "Votre nom", ar: "اسمك" },
      "Your Email": { en: "Your Email", de: "Ihre E-Mail", es: "Su correo electronico", fr: "Votre e-mail", ar: "بريدك الإلكتروني" },
      "Subject": { en: "Subject", de: "Betreff", es: "Asunto", fr: "Sujet", ar: "الموضوع" },
      "Message": { en: "Message", de: "Nachricht", es: "Mensaje", fr: "Message", ar: "الرسالة" },
      "Enter your full name": {
        en: "Enter your full name",
        de: "Geben Sie Ihren vollstandigen Namen ein",
        es: "Ingrese su nombre completo",
        fr: "Entrez votre nom complet",
        ar: "أدخل اسمك الكامل"
      },
      "Enter your contact number": {
        en: "Enter your contact number",
        de: "Geben Sie Ihre Kontaktnummer ein",
        es: "Ingrese su numero de contacto",
        fr: "Entrez votre numero de contact",
        ar: "أدخل رقم التواصل الخاص بك"
      },
      "Enter your email id": {
        en: "Enter your email id",
        de: "Geben Sie Ihre E-Mail-ID ein",
        es: "Ingrese su correo electronico",
        fr: "Entrez votre adresse e-mail",
        ar: "أدخل بريدك الإلكتروني"
      },
      "Enter your location": {
        en: "Enter your location",
        de: "Geben Sie Ihren Standort ein",
        es: "Ingrese su ubicacion",
        fr: "Entrez votre emplacement",
        ar: "أدخل موقعك"
      },
      "Enter language course your interested in": {
        en: "Enter language course your interested in",
        de: "Geben Sie den Sprachkurs ein, der Sie interessiert",
        es: "Ingrese el curso de idioma que le interesa",
        fr: "Entrez le cours de langue qui vous interesse",
        ar: "أدخل دورة اللغة التي تهتم بها"
      },
      "Enter message if anything to tell/ask us": {
        en: "Enter message if anything to tell/ask us",
        de: "Geben Sie eine Nachricht ein, wenn Sie uns etwas mitteilen oder fragen mochten",
        es: "Ingrese un mensaje si desea decirnos o preguntarnos algo",
        fr: "Entrez un message si vous souhaitez nous dire ou demander quelque chose",
        ar: "أدخل رسالة إذا كنت تريد إخبارنا أو سؤالنا عن أي شيء"
      },
      "Chat with Elevate Global Academy on WhatsApp": {
        en: "Chat with Elevate Global Academy on WhatsApp",
        de: "Chatten Sie mit Elevate Global Academy auf WhatsApp",
        es: "Chatee con Elevate Global Academy en WhatsApp",
        fr: "Discutez avec Elevate Global Academy sur WhatsApp",
        ar: "تواصل مع Elevate Global Academy على واتساب"
      },
      "German Language": { en: "German Language", de: "Deutsche Sprache", es: "Idioma aleman", fr: "Langue allemande", ar: "اللغة الألمانية" },
      "French Language": { en: "French Language", de: "Franzosische Sprache", es: "Idioma frances", fr: "Langue francaise", ar: "اللغة الفرنسية" },
      "Spanish Language": { en: "Spanish Language", de: "Spanische Sprache", es: "Idioma espanol", fr: "Langue espagnole", ar: "اللغة الإسبانية" },
      "English Language": { en: "English Language", de: "Englische Sprache", es: "Idioma ingles", fr: "Langue anglaise", ar: "اللغة الإنجليزية" },
      "IT Courses": { en: "IT Courses", de: "IT-Kurse", es: "Cursos de TI", fr: "Cours d'informatique", ar: "دورات تقنية المعلومات" },
      "Best German Classes in Malleshwaram Bangalore": {
        en: "Best German Classes in Malleshwaram Bangalore",
        de: "Beste Deutschkurse in Malleshwaram Bangalore",
        es: "Mejores clases de aleman en Malleshwaram Bangalore",
        fr: "Meilleurs cours d'allemand a Malleshwaram Bangalore",
        ar: "أفضل دروس اللغة الألمانية في ماليشوارام بنغالور"
      },
      "French Language Course for beginners in Bangalore": {
        en: "French Language Course for beginners in Bangalore",
        de: "Franzosischkurs fur Anfanger in Bangalore",
        es: "Curso de frances para principiantes en Bangalore",
        fr: "Cours de francais pour debutants a Bangalore",
        ar: "دورة اللغة الفرنسية للمبتدئين في بنغالور"
      },
      "Spanish Language Learning in Bangalore": {
        en: "Spanish Language Learning in Bangalore",
        de: "Spanischlernen in Bangalore",
        es: "Aprendizaje de espanol en Bangalore",
        fr: "Apprentissage de l'espagnol a Bangalore",
        ar: "تعلم اللغة الإسبانية في بنغالور"
      },
      "Application Form": { en: "Application Form", de: "Anmeldeformular", es: "Formulario de solicitud", fr: "Formulaire de candidature", ar: "نموذج الطلب" },
      "Elevate Global Academy": same("Elevate Global Academy"),
      "IELTS": same("IELTS"),
      "OET": same("OET"),
      "PTE": same("PTE"),
      "TOEIC": same("TOEIC"),
      "TELC": same("TELC"),
      "IDP": same("IDP"),
      "Learning Today,": {
        en: "Learning Today,",
        de: "Heute lernen,",
        es: "Aprender hoy,",
        fr: "Apprendre aujourd'hui,",
        ar: "نتعلم اليوم،"
      },
      "Leading Tomorrow": {
        en: "Leading Tomorrow",
        de: "morgen fuhren",
        es: "liderar manana",
        fr: "diriger demain",
        ar: "نقود الغد"
      },
      "Embrace Diversity Through Language: Learn, Connect, and Flourish Worldwide": {
        en: "Embrace Diversity Through Language: Learn, Connect, and Flourish Worldwide",
        de: "Vielfalt durch Sprache erleben: lernen, verbinden und weltweit wachsen",
        es: "Abraza la diversidad a traves del idioma: aprende, conecta y prospera en todo el mundo",
        fr: "Adoptez la diversite par la langue : apprenez, connectez-vous et epanouissez-vous dans le monde",
        ar: "احتضن التنوع من خلال اللغة: تعلم وتواصل وازدهر عالميا"
      },
      "Contact Now": { en: "Contact Now", de: "Jetzt kontaktieren", es: "Contactar ahora", fr: "Contactez maintenant", ar: "تواصل الآن" },
      "Courses and Services we Offer": {
        en: "Courses and Services we Offer",
        de: "Kurse und Dienstleistungen, die wir anbieten",
        es: "Cursos y servicios que ofrecemos",
        fr: "Cours et services que nous proposons",
        ar: "الدورات والخدمات التي نقدمها"
      },
      "At Elevate Global Academy, our foundation rests on the principles of quality and inclusiveness. We provide a diverse range of courses and services designed to meet the unique needs of our students. Our uniqueness lies in our flexibility and versatility, allowing us to tailor courses according to individual requirements.": {
        en: "At Elevate Global Academy, our foundation rests on the principles of quality and inclusiveness. We provide a diverse range of courses and services designed to meet the unique needs of our students. Our uniqueness lies in our flexibility and versatility, allowing us to tailor courses according to individual requirements.",
        de: "Bei Elevate Global Academy basiert unser Fundament auf Qualitat und Inklusion. Wir bieten eine vielfaltige Auswahl an Kursen und Dienstleistungen, die auf die besonderen Bedurfnisse unserer Schuler zugeschnitten sind. Unsere Starke liegt in Flexibilitat und Vielseitigkeit, wodurch wir Kurse an individuelle Anforderungen anpassen konnen.",
        es: "En Elevate Global Academy, nuestra base se apoya en los principios de calidad e inclusion. Ofrecemos una amplia variedad de cursos y servicios disenados para satisfacer las necesidades unicas de nuestros estudiantes. Nuestra singularidad esta en la flexibilidad y versatilidad, lo que nos permite adaptar los cursos a requisitos individuales.",
        fr: "Chez Elevate Global Academy, notre base repose sur les principes de qualite et d'inclusion. Nous proposons une gamme variee de cours et de services concus pour repondre aux besoins uniques de nos etudiants. Notre particularite reside dans notre flexibilite et notre polyvalence, ce qui nous permet d'adapter les cours aux exigences individuelles.",
        ar: "في Elevate Global Academy، يقوم أساسنا على مبادئ الجودة والشمول. نقدم مجموعة متنوعة من الدورات والخدمات المصممة لتلبية الاحتياجات الفريدة لطلابنا. تكمن ميزتنا في المرونة والتنوع، مما يسمح لنا بتخصيص الدورات حسب المتطلبات الفردية."
      },
      "Our institute specializes in teaching foreign languages like French, German, Spanish, and English. Tailoring courses to students' unique needs is a cornerstone of our approach, showcasing our flexibility. Elevate Global Academy stands out for its commitment to adaptability.": {
        en: "Our institute specializes in teaching foreign languages like French, German, Spanish, and English. Tailoring courses to students' unique needs is a cornerstone of our approach, showcasing our flexibility. Elevate Global Academy stands out for its commitment to adaptability.",
        de: "Unser Institut ist auf den Unterricht von Fremdsprachen wie Franzosisch, Deutsch, Spanisch und Englisch spezialisiert. Kurse an die individuellen Bedurfnisse der Schuler anzupassen, ist ein Grundpfeiler unseres Ansatzes und zeigt unsere Flexibilitat. Elevate Global Academy zeichnet sich durch Anpassungsfahigkeit aus.",
        es: "Nuestro instituto se especializa en ensenar idiomas extranjeros como frances, aleman, espanol e ingles. Adaptar los cursos a las necesidades unicas de los estudiantes es una base de nuestro enfoque y demuestra nuestra flexibilidad. Elevate Global Academy destaca por su compromiso con la adaptabilidad.",
        fr: "Notre institut est specialise dans l'enseignement des langues etrangeres comme le francais, l'allemand, l'espagnol et l'anglais. Adapter les cours aux besoins uniques des etudiants est au coeur de notre approche et montre notre flexibilite. Elevate Global Academy se distingue par son engagement envers l'adaptabilite.",
        ar: "يتخصص معهدنا في تدريس اللغات الأجنبية مثل الفرنسية والألمانية والإسبانية والإنجليزية. يعد تخصيص الدورات حسب احتياجات الطلاب الفريدة أساسا في نهجنا ويظهر مرونتنا. تتميز Elevate Global Academy بالتزامها بالتكيف."
      },
      "Learn French, German, Spanish, English from experienced instructors.": {
        en: "Learn French, German, Spanish, English from experienced instructors.",
        de: "Lernen Sie Franzosisch, Deutsch, Spanisch und Englisch von erfahrenen Lehrkraften.",
        es: "Aprenda frances, aleman, espanol e ingles con instructores experimentados.",
        fr: "Apprenez le francais, l'allemand, l'espagnol et l'anglais avec des formateurs experimentes.",
        ar: "تعلم الفرنسية والألمانية والإسبانية والإنجليزية مع مدربين ذوي خبرة."
      },
      "Follow the Common European Framework of Reference for Languages (CEFR).": {
        en: "Follow the Common European Framework of Reference for Languages (CEFR).",
        de: "Wir folgen dem Gemeinsamen Europaischen Referenzrahmen fur Sprachen (CEFR).",
        es: "Seguimos el Marco Comun Europeo de Referencia para las Lenguas (CEFR).",
        fr: "Nous suivons le Cadre europeen commun de reference pour les langues (CEFR).",
        ar: "نتبع الإطار الأوروبي المرجعي المشترك للغات (CEFR)."
      },
      "Expert preparation for IELTS, PTE, OET, TOEIC exams.": {
        en: "Expert preparation for IELTS, PTE, OET, TOEIC exams.",
        de: "Fachkundige Vorbereitung auf IELTS-, PTE-, OET- und TOEIC-Prufungen.",
        es: "Preparacion experta para los examenes IELTS, PTE, OET y TOEIC.",
        fr: "Preparation experte aux examens IELTS, PTE, OET et TOEIC.",
        ar: "تحضير متخصص لاختبارات IELTS وPTE وOET وTOEIC."
      },
      "Proven track record of achieving excellent results.": {
        en: "Proven track record of achieving excellent results.",
        de: "Nachweisliche Erfolgsbilanz mit hervorragenden Ergebnissen.",
        es: "Historial comprobado de excelentes resultados.",
        fr: "Resultats excellents prouves au fil du temps.",
        ar: "سجل مثبت في تحقيق نتائج ممتازة."
      },
      "Choose Elevate Global Academy for tailored education that fosters growth and success.": {
        en: "Choose Elevate Global Academy for tailored education that fosters growth and success.",
        de: "Wahlen Sie Elevate Global Academy fur massgeschneiderte Bildung, die Wachstum und Erfolg fordert.",
        es: "Elija Elevate Global Academy para una educacion personalizada que impulsa el crecimiento y el exito.",
        fr: "Choisissez Elevate Global Academy pour une education personnalisee qui favorise la croissance et la reussite.",
        ar: "اختر Elevate Global Academy لتعليم مخصص يعزز النمو والنجاح."
      },
      "Why Choose Elevate Global?": {
        en: "Why Choose Elevate Global?",
        de: "Warum Elevate Global wahlen?",
        es: "Por que elegir Elevate Global?",
        fr: "Pourquoi choisir Elevate Global ?",
        ar: "لماذا تختار Elevate Global؟"
      },
      "Choosing Elevate Global means embracing a transformative language learning journey. With expert instructors, immersive experiences, and a rich tapestry of cultures. Join us to elevate your skills, expand your horizons, and thrive in a diverse world.": {
        en: "Choosing Elevate Global means embracing a transformative language learning journey. With expert instructors, immersive experiences, and a rich tapestry of cultures. Join us to elevate your skills, expand your horizons, and thrive in a diverse world.",
        de: "Elevate Global zu wahlen bedeutet, eine transformative Sprachlernreise zu beginnen. Mit fachkundigen Lehrkraften, intensiven Erfahrungen und einer reichen Vielfalt an Kulturen. Schliessen Sie sich uns an, um Ihre Fahigkeiten zu verbessern, Ihren Horizont zu erweitern und in einer vielfaltigen Welt erfolgreich zu sein.",
        es: "Elegir Elevate Global significa iniciar un viaje transformador de aprendizaje de idiomas. Con instructores expertos, experiencias inmersivas y una rica variedad de culturas. Unase a nosotros para elevar sus habilidades, ampliar sus horizontes y prosperar en un mundo diverso.",
        fr: "Choisir Elevate Global, c'est commencer un parcours transformateur d'apprentissage des langues. Avec des formateurs experts, des experiences immersives et une riche diversite culturelle. Rejoignez-nous pour ameliorer vos competences, elargir vos horizons et reussir dans un monde diversifie.",
        ar: "اختيار Elevate Global يعني خوض رحلة تعلم لغة تحولية. مع مدربين خبراء وتجارب تفاعلية ونسيج غني من الثقافات. انضم إلينا لتطوير مهاراتك وتوسيع آفاقك والنجاح في عالم متنوع."
      },
      "Language Proficiency Framework": {
        en: "Language Proficiency Framework",
        de: "Rahmen fur Sprachkompetenz",
        es: "Marco de competencia linguistica",
        fr: "Cadre de competence linguistique",
        ar: "إطار إتقان اللغة"
      },
      "We follow CEFR, a Council of Europe standard, promoting consistent language learning, teaching, and assessment globally.": {
        en: "We follow CEFR, a Council of Europe standard, promoting consistent language learning, teaching, and assessment globally.",
        de: "Wir folgen dem CEFR, einem Standard des Europarats, der weltweit einheitliches Sprachenlernen, Lehren und Bewerten fordert.",
        es: "Seguimos el CEFR, un estandar del Consejo de Europa que promueve el aprendizaje, la ensenanza y la evaluacion coherentes de idiomas a nivel mundial.",
        fr: "Nous suivons le CEFR, une norme du Conseil de l'Europe qui favorise un apprentissage, un enseignement et une evaluation coherents des langues dans le monde.",
        ar: "نتبع CEFR، وهو معيار لمجلس أوروبا يعزز تعلم اللغات وتعليمها وتقييمها بشكل موحد عالميا."
      },
      "Exam Preparation": { en: "Exam Preparation", de: "Prufungsvorbereitung", es: "Preparacion de examenes", fr: "Preparation aux examens", ar: "التحضير للاختبارات" },
      "Elevate Global Academy is your destination for comprehensive exam training.": {
        en: "Elevate Global Academy is your destination for comprehensive exam training.",
        de: "Elevate Global Academy ist Ihr Ziel fur umfassendes Prufungstraining.",
        es: "Elevate Global Academy es su destino para una preparacion integral de examenes.",
        fr: "Elevate Global Academy est votre destination pour une formation complete aux examens.",
        ar: "Elevate Global Academy هي وجهتك للتدريب الشامل على الاختبارات."
      },
      "Excel in exams like IELTS, PTE, OET, and TOEIC with our proven strategies and guidance.": {
        en: "Excel in exams like IELTS, PTE, OET, and TOEIC with our proven strategies and guidance.",
        de: "Erzielen Sie Bestleistungen in Prufungen wie IELTS, PTE, OET und TOEIC mit unseren bewahrten Strategien und unserer Betreuung.",
        es: "Sobresalga en examenes como IELTS, PTE, OET y TOEIC con nuestras estrategias y orientacion comprobadas.",
        fr: "Reussissez les examens comme IELTS, PTE, OET et TOEIC grace a nos strategies et conseils eprouves.",
        ar: "تميز في اختبارات مثل IELTS وPTE وOET وTOEIC من خلال استراتيجياتنا وإرشادنا المثبت."
      },
      "Outstanding Results": { en: "Outstanding Results", de: "Hervorragende Ergebnisse", es: "Resultados destacados", fr: "Resultats remarquables", ar: "نتائج متميزة" },
      "Our commitment to excellence is evident in the outstanding results we consistently achieve in various academic exams.": {
        en: "Our commitment to excellence is evident in the outstanding results we consistently achieve in various academic exams.",
        de: "Unser Engagement fur Exzellenz zeigt sich in den hervorragenden Ergebnissen, die wir regelmassig in verschiedenen akademischen Prufungen erzielen.",
        es: "Nuestro compromiso con la excelencia se refleja en los excelentes resultados que logramos constantemente en diversos examenes academicos.",
        fr: "Notre engagement envers l'excellence se voit dans les resultats remarquables que nous obtenons regulierement dans divers examens academiques.",
        ar: "يتضح التزامنا بالتميز في النتائج المتميزة التي نحققها باستمرار في مختلف الاختبارات الأكاديمية."
      },
      "Popular Courses": { en: "Popular Courses", de: "Beliebte Kurse", es: "Cursos populares", fr: "Cours populaires", ar: "الدورات الشائعة" },
      "Several German companies are situated in international locations. A good knowledge of German definitely boosts one’s chances of a career with a German company in one’s own country.": {
        en: "Several German companies are situated in international locations. A good knowledge of German definitely boosts one’s chances of a career with a German company in one’s own country.",
        de: "Viele deutsche Unternehmen sind an internationalen Standorten vertreten. Gute Deutschkenntnisse erhohen eindeutig die Chancen auf eine Karriere bei einem deutschen Unternehmen im eigenen Land.",
        es: "Varias empresas alemanas estan ubicadas en lugares internacionales. Un buen conocimiento del aleman aumenta claramente las oportunidades de carrera con una empresa alemana en el propio pais.",
        fr: "Plusieurs entreprises allemandes sont presentes dans des sites internationaux. Une bonne connaissance de l'allemand augmente clairement les chances de carriere dans une entreprise allemande dans son propre pays.",
        ar: "توجد عدة شركات ألمانية في مواقع دولية. إن المعرفة الجيدة باللغة الألمانية تعزز بالتأكيد فرص العمل مع شركة ألمانية في بلدك."
      },
      "To start off, French is a mellifluous language, with a smooth musical flow.": {
        en: "To start off, French is a mellifluous language, with a smooth musical flow.",
        de: "Zunachst ist Franzosisch eine wohlklingende Sprache mit einem sanften musikalischen Klang.",
        es: "Para empezar, el frances es un idioma melodioso, con un flujo musical suave.",
        fr: "Pour commencer, le francais est une langue melodieuse, avec un rythme musical doux.",
        ar: "في البداية، الفرنسية لغة عذبة ذات إيقاع موسيقي سلس."
      },
      "It is one of the romantic languages of the world and belongs to the Indo-European family.": {
        en: "It is one of the romantic languages of the world and belongs to the Indo-European family.",
        de: "Sie ist eine der romanischen Sprachen der Welt und gehort zur indoeuropaischen Sprachfamilie.",
        es: "Es una de las lenguas romances del mundo y pertenece a la familia indoeuropea.",
        fr: "C'est l'une des langues romanes du monde et elle appartient a la famille indo-europeenne.",
        ar: "إنها إحدى اللغات الرومانسية في العالم وتنتمي إلى العائلة الهندو أوروبية."
      },
      "There are over 400 million Spanish speakers world-wide.": {
        en: "There are over 400 million Spanish speakers world-wide.",
        de: "Weltweit gibt es uber 400 Millionen Spanischsprecher.",
        es: "Hay mas de 400 millones de hablantes de espanol en todo el mundo.",
        fr: "Il y a plus de 400 millions de locuteurs espagnols dans le monde.",
        ar: "يوجد أكثر من 400 مليون متحدث بالإسبانية حول العالم."
      },
      "With more than 33 million speakers, Spanish is the second largest language in the United States.": {
        en: "With more than 33 million speakers, Spanish is the second largest language in the United States.",
        de: "Mit mehr als 33 Millionen Sprechern ist Spanisch die zweitgrosste Sprache in den Vereinigten Staaten.",
        es: "Con mas de 33 millones de hablantes, el espanol es el segundo idioma mas hablado en Estados Unidos.",
        fr: "Avec plus de 33 millions de locuteurs, l'espagnol est la deuxieme langue la plus parlee aux Etats-Unis.",
        ar: "مع أكثر من 33 مليون متحدث، تعد الإسبانية ثاني أكبر لغة في الولايات المتحدة."
      },
      "Need anything be said about English? If one hails from a place where people do not know English, learning this enormously popular language would undoubtedly unlock a whole new world of opportunity.": {
        en: "Need anything be said about English? If one hails from a place where people do not know English, learning this enormously popular language would undoubtedly unlock a whole new world of opportunity.",
        de: "Muss man uber Englisch noch etwas sagen? Wer aus einem Ort kommt, an dem Menschen kein Englisch sprechen, dem eroffnet das Lernen dieser enorm beliebten Sprache zweifellos eine ganz neue Welt voller Moglichkeiten.",
        es: "Hace falta decir algo sobre el ingles? Si alguien viene de un lugar donde la gente no sabe ingles, aprender este idioma enormemente popular sin duda abre un mundo completamente nuevo de oportunidades.",
        fr: "Faut-il encore parler de l'anglais ? Pour une personne venant d'un endroit ou l'on ne connait pas l'anglais, apprendre cette langue extremement populaire ouvre sans aucun doute un tout nouveau monde d'opportunites.",
        ar: "هل يحتاج الأمر إلى قول شيء عن الإنجليزية؟ إذا كان الشخص من مكان لا يعرف الناس فيه الإنجليزية، فإن تعلم هذه اللغة الشائعة جدا يفتح بلا شك عالما جديدا من الفرص."
      },
      "The International English Language Testing System, or IELTS™ is an international standardized test of English language proficiency for non-native English language speakers.": {
        en: "The International English Language Testing System, or IELTS™ is an international standardized test of English language proficiency for non-native English language speakers.",
        de: "Das International English Language Testing System, oder IELTS™, ist ein international standardisierter Test der Englischkompetenz fur Nicht-Muttersprachler.",
        es: "El International English Language Testing System, o IELTS™, es una prueba internacional estandarizada de competencia en ingles para hablantes no nativos.",
        fr: "L'International English Language Testing System, ou IELTS™, est un test international standardise de competence en anglais pour les non-anglophones.",
        ar: "نظام اختبار اللغة الإنجليزية الدولي، أو IELTS™، هو اختبار دولي موحد لكفاءة اللغة الإنجليزية لغير الناطقين بها."
      },
      "The International English Language Testing System, or IELTS™, is an international standardized test of English language proficiency for non-native English language speakers.": {
        en: "The International English Language Testing System, or IELTS™, is an international standardized test of English language proficiency for non-native English language speakers.",
        de: "Das International English Language Testing System, oder IELTS™, ist ein international standardisierter Test der Englischkompetenz fur Nicht-Muttersprachler.",
        es: "El International English Language Testing System, o IELTS™, es una prueba internacional estandarizada de competencia en ingles para hablantes no nativos.",
        fr: "L'International English Language Testing System, ou IELTS™, est un test international standardise de competence en anglais pour les non-anglophones.",
        ar: "نظام اختبار اللغة الإنجليزية الدولي، أو IELTS™، هو اختبار دولي موحد لكفاءة اللغة الإنجليزية لغير الناطقين بها."
      },
      "The Pearson Test of English Academic (PTE) is the world's predominant computer-based test of English for those who want to study abroad and for the purpose of immigration.": {
        en: "The Pearson Test of English Academic (PTE) is the world's predominant computer-based test of English for those who want to study abroad and for the purpose of immigration.",
        de: "Der Pearson Test of English Academic (PTE) ist der weltweit fuhrende computerbasierte Englischtest fur alle, die im Ausland studieren oder einwandern mochten.",
        es: "El Pearson Test of English Academic (PTE) es la prueba de ingles por computadora predominante en el mundo para quienes desean estudiar en el extranjero o con fines de inmigracion.",
        fr: "Le Pearson Test of English Academic (PTE) est le principal test d'anglais informatise au monde pour ceux qui souhaitent etudier a l'etranger ou pour l'immigration.",
        ar: "اختبار Pearson Test of English Academic (PTE) هو الاختبار الحاسوبي الرائد عالميا للغة الإنجليزية لمن يرغبون في الدراسة بالخارج أو لأغراض الهجرة."
      },
      "OET (Occupational English Test) is designed to meet the specific English language needs of the healthcare domain. It assesses the language proficiency of healthcare professionals who wish to practice in an English-speaking environment.": {
        en: "OET (Occupational English Test) is designed to meet the specific English language needs of the healthcare domain. It assesses the language proficiency of healthcare professionals who wish to practice in an English-speaking environment.",
        de: "OET (Occupational English Test) wurde entwickelt, um die speziellen englischen Sprachbedurfnisse im Gesundheitswesen zu erfullen. Er bewertet die Sprachkompetenz von Gesundheitsfachkraften, die in einem englischsprachigen Umfeld arbeiten mochten.",
        es: "OET (Occupational English Test) esta disenado para satisfacer las necesidades especificas de ingles del sector sanitario. Evalua la competencia linguistica de profesionales de la salud que desean ejercer en un entorno de habla inglesa.",
        fr: "L'OET (Occupational English Test) est concu pour repondre aux besoins particuliers en anglais du domaine de la sante. Il evalue la competence linguistique des professionnels de sante qui souhaitent exercer dans un environnement anglophone.",
        ar: "تم تصميم OET (اختبار اللغة الإنجليزية المهنية) لتلبية الاحتياجات اللغوية الإنجليزية الخاصة بمجال الرعاية الصحية. ويقيم كفاءة اللغة لدى المتخصصين الصحيين الذين يرغبون في العمل في بيئة ناطقة بالإنجليزية."
      },
      "The Test of English for International Communication (TOEIC) is an international standardized test of English language proficiency for non-native speakers.": {
        en: "The Test of English for International Communication (TOEIC) is an international standardized test of English language proficiency for non-native speakers.",
        de: "Der Test of English for International Communication (TOEIC) ist ein international standardisierter Test der Englischkompetenz fur Nicht-Muttersprachler.",
        es: "El Test of English for International Communication (TOEIC) es una prueba internacional estandarizada de competencia en ingles para hablantes no nativos.",
        fr: "Le Test of English for International Communication (TOEIC) est un test international standardise de competence en anglais pour les non-anglophones.",
        ar: "اختبار TOEIC هو اختبار دولي موحد لكفاءة اللغة الإنجليزية لغير الناطقين بها."
      },
      "Testimonials": { en: "Testimonials", de: "Erfahrungsberichte", es: "Testimonios", fr: "Temoignages", ar: "الشهادات" },
      "Voices of Satisfaction": { en: "Voices of Satisfaction", de: "Stimmen der Zufriedenheit", es: "Voces de satisfaccion", fr: "Voix de satisfaction", ar: "آراء الرضا" },
      "4.6 rated on Google": { en: "4.6 rated on Google", de: "Mit 4,6 auf Google bewertet", es: "Calificacion 4.6 en Google", fr: "Note 4,6 sur Google", ar: "تقييم 4.6 على Google" },
      "Elevate Global Academy Where Quality Education Meets Individual Excellence.": {
        en: "Elevate Global Academy Where Quality Education Meets Individual Excellence.",
        de: "Elevate Global Academy, wo hochwertige Bildung auf individuelle Exzellenz trifft.",
        es: "Elevate Global Academy, donde la educacion de calidad se une con la excelencia individual.",
        fr: "Elevate Global Academy, ou l'education de qualite rencontre l'excellence individuelle.",
        ar: "Elevate Global Academy حيث يلتقي التعليم عالي الجودة بالتميز الفردي."
      },
      "About Elevate Global Academy": {
        en: "About Elevate Global Academy",
        de: "Uber Elevate Global Academy",
        es: "Acerca de Elevate Global Academy",
        fr: "A propos de Elevate Global Academy",
        ar: "حول Elevate Global Academy"
      },
      "Established in 2015, Elevate Global Academy is a Foreign Language Institute dedicated to advancing foreign language education in Bangalore. Our mission is to equip students with a robust foundation, enabling them to independently pursue careers abroad. With interactive teaching tools and passionate educators, we cater to diverse student backgrounds and offer customized courses. We serve three main student groups:": {
        en: "Established in 2015, Elevate Global Academy is a Foreign Language Institute dedicated to advancing foreign language education in Bangalore. Our mission is to equip students with a robust foundation, enabling them to independently pursue careers abroad. With interactive teaching tools and passionate educators, we cater to diverse student backgrounds and offer customized courses. We serve three main student groups:",
        de: "Gegrundet im Jahr 2015, ist Elevate Global Academy ein Fremdspracheninstitut, das sich der Forderung der Fremdsprachenausbildung in Bangalore widmet. Unsere Mission ist es, Schuler mit einer starken Grundlage auszustatten, damit sie eigenstandig Karrieren im Ausland verfolgen konnen. Mit interaktiven Lehrmitteln und engagierten Lehrkraften betreuen wir unterschiedliche studentische Hintergrunde und bieten massgeschneiderte Kurse. Wir bedienen drei Hauptgruppen von Schulerinnen und Schulern:",
        es: "Fundada en 2015, Elevate Global Academy es un instituto de lenguas extranjeras dedicado a impulsar la educacion en idiomas en Bangalore. Nuestra mision es brindar a los estudiantes una base solida que les permita seguir carreras en el extranjero de forma independiente. Con herramientas interactivas y educadores apasionados, atendemos diversos perfiles estudiantiles y ofrecemos cursos personalizados. Servimos a tres grupos principales de estudiantes:",
        fr: "Fondee en 2015, Elevate Global Academy est un institut de langues etrangeres consacre au developpement de l'enseignement des langues a Bangalore. Notre mission est de donner aux etudiants une base solide pour poursuivre de maniere autonome des carrieres a l'etranger. Avec des outils pedagogiques interactifs et des enseignants passionnes, nous accompagnons des profils varies et proposons des cours personnalises. Nous servons trois principaux groupes d'etudiants :",
        ar: "تأسست Elevate Global Academy في عام 2015، وهي معهد للغات الأجنبية مكرس لتطوير تعليم اللغات الأجنبية في بنغالور. مهمتنا هي تزويد الطلاب بأساس قوي يمكنهم من متابعة مساراتهم المهنية في الخارج بشكل مستقل. من خلال أدوات تعليم تفاعلية ومعلمين شغوفين، نخدم خلفيات طلابية متنوعة ونقدم دورات مخصصة. نخدم ثلاث مجموعات رئيسية من الطلاب:"
      },
      "those aiming for Master's Degrees abroad": {
        en: "those aiming for Master's Degrees abroad",
        de: "diejenigen, die einen Masterabschluss im Ausland anstreben",
        es: "quienes aspiran a obtener una maestria en el extranjero",
        fr: "ceux qui visent un master a l'etranger",
        ar: "الذين يهدفون إلى الحصول على درجة الماجستير في الخارج"
      },
      "career builders in India or overseas": {
        en: "career builders in India or overseas",
        de: "Karriereaufbauende in Indien oder im Ausland",
        es: "personas que construyen su carrera en India o en el extranjero",
        fr: "ceux qui construisent leur carriere en Inde ou a l'etranger",
        ar: "بناة المسار المهني في الهند أو الخارج"
      },
      "and students seeking French and German tuition": {
        en: "and students seeking French and German tuition",
        de: "und Schuler, die Franzosisch- und Deutschunterricht suchen",
        es: "y estudiantes que buscan clases de frances y aleman",
        fr: "et les etudiants qui recherchent des cours de francais et d'allemand",
        ar: "والطلاب الذين يبحثون عن دروس في الفرنسية والألمانية"
      },
      "Recognized with 100+ positive reviews on platforms like Just Dial and Google.": {
        en: "Recognized with 100+ positive reviews on platforms like Just Dial and Google.",
        de: "Anerkannt mit uber 100 positiven Bewertungen auf Plattformen wie Just Dial und Google.",
        es: "Reconocida con mas de 100 resenas positivas en plataformas como Just Dial y Google.",
        fr: "Reconnue avec plus de 100 avis positifs sur des plateformes comme Just Dial et Google.",
        ar: "معترف بها بأكثر من 100 تقييم إيجابي على منصات مثل Just Dial وGoogle."
      },
      "Proud partners of the International Development Program (IDP) for IELTS.": {
        en: "Proud partners of the International Development Program (IDP) for IELTS.",
        de: "Stolze Partner des International Development Program (IDP) fur IELTS.",
        es: "Orgullosos socios del International Development Program (IDP) para IELTS.",
        fr: "Fiers partenaires de l'International Development Program (IDP) pour IELTS.",
        ar: "شركاء فخورون ببرنامج International Development Program (IDP) لاختبار IELTS."
      },
      "Elevate Global Academy: Bridging Indian roots with international aspirations.": {
        en: "Elevate Global Academy: Bridging Indian roots with international aspirations.",
        de: "Elevate Global Academy: Indische Wurzeln mit internationalen Ambitionen verbinden.",
        es: "Elevate Global Academy: uniendo raices indias con aspiraciones internacionales.",
        fr: "Elevate Global Academy : relier les racines indiennes aux aspirations internationales.",
        ar: "Elevate Global Academy: جسر بين الجذور الهندية والطموحات الدولية."
      },
      "Backed by 100+ positive reviews on platforms like Just Dial and Google, we are proud partners of the International Development Program (IDP) for IELTS. Elevate Global Academy: Your Gateway to Worldwide Opportunities.": {
        en: "Backed by 100+ positive reviews on platforms like Just Dial and Google, we are proud partners of the International Development Program (IDP) for IELTS. Elevate Global Academy: Your Gateway to Worldwide Opportunities.",
        de: "Gestutzt durch uber 100 positive Bewertungen auf Plattformen wie Just Dial und Google sind wir stolze Partner des International Development Program (IDP) fur IELTS. Elevate Global Academy: Ihr Tor zu weltweiten Moglichkeiten.",
        es: "Respaldados por mas de 100 resenas positivas en plataformas como Just Dial y Google, somos orgullosos socios del International Development Program (IDP) para IELTS. Elevate Global Academy: su puerta de entrada a oportunidades mundiales.",
        fr: "Soutenus par plus de 100 avis positifs sur des plateformes comme Just Dial et Google, nous sommes fiers partenaires de l'International Development Program (IDP) pour IELTS. Elevate Global Academy : votre passerelle vers des opportunites mondiales.",
        ar: "مدعومون بأكثر من 100 تقييم إيجابي على منصات مثل Just Dial وGoogle، ونحن شركاء فخورون ببرنامج International Development Program (IDP) لاختبار IELTS. Elevate Global Academy: بوابتك إلى الفرص العالمية."
      },
      "Our Mission": { en: "Our Mission", de: "Unsere Mission", es: "Nuestra mision", fr: "Notre mission", ar: "مهمتنا" },
      "Our mission at Elevate Global Academy is multifold: to be a leader in foreign language training at the national level and to be in the forefront of assisting our students to come out with flying colours in competitive exams such as IELTS, PTE, OET and TOEIC. We aim to instill a sense of competency along with cultural sensitivity emerging from the study of foreign languages of different European countries.": {
        en: "Our mission at Elevate Global Academy is multifold: to be a leader in foreign language training at the national level and to be in the forefront of assisting our students to come out with flying colours in competitive exams such as IELTS, PTE, OET and TOEIC. We aim to instill a sense of competency along with cultural sensitivity emerging from the study of foreign languages of different European countries.",
        de: "Unsere Mission bei Elevate Global Academy ist vielfaltig: Wir mochten auf nationaler Ebene fuhrend in der Fremdsprachenausbildung sein und unsere Schuler dabei unterstutzen, in Wettbewerbsprufungen wie IELTS, PTE, OET und TOEIC hervorragend abzuschneiden. Wir wollen Kompetenz und kulturelle Sensibilitat vermitteln, die aus dem Studium von Fremdsprachen verschiedener europaischer Lander entsteht.",
        es: "Nuestra mision en Elevate Global Academy es multiple: ser lideres en formacion de lenguas extranjeras a nivel nacional y estar al frente para ayudar a nuestros estudiantes a obtener excelentes resultados en examenes competitivos como IELTS, PTE, OET y TOEIC. Buscamos inculcar competencia junto con sensibilidad cultural derivada del estudio de idiomas extranjeros de distintos paises europeos.",
        fr: "Notre mission chez Elevate Global Academy est multiple : etre un leader national de la formation en langues etrangeres et accompagner nos etudiants vers d'excellents resultats aux examens competitifs tels que IELTS, PTE, OET et TOEIC. Nous voulons transmettre un sentiment de competence ainsi qu'une sensibilite culturelle issue de l'etude des langues etrangeres de differents pays europeens.",
        ar: "مهمتنا في Elevate Global Academy متعددة: أن نكون روادا في تدريب اللغات الأجنبية على المستوى الوطني، وأن نكون في المقدمة في مساعدة طلابنا على تحقيق نتائج متميزة في الاختبارات التنافسية مثل IELTS وPTE وOET وTOEIC. نهدف إلى غرس الكفاءة مع الحساسية الثقافية الناتجة عن دراسة لغات أجنبية من دول أوروبية مختلفة."
      },
      "Our Vision": { en: "Our Vision", de: "Unsere Vision", es: "Nuestra vision", fr: "Notre vision", ar: "رؤيتنا" },
      "At Elevate Global Academy, we focus on the learner who is of utmost importance to us. We staunchly believe in building clientele through our work, our flexible teaching hours, and creative methods of instruction. Our versatile quality clubbed with cordiality makes Elevate Global Academy a one-stop destination for foreign languages and for acing competitive exams.": {
        en: "At Elevate Global Academy, we focus on the learner who is of utmost importance to us. We staunchly believe in building clientele through our work, our flexible teaching hours, and creative methods of instruction. Our versatile quality clubbed with cordiality makes Elevate Global Academy a one-stop destination for foreign languages and for acing competitive exams.",
        de: "Bei Elevate Global Academy konzentrieren wir uns auf den Lernenden, der fur uns von grosster Bedeutung ist. Wir glauben fest daran, unsere Kundschaft durch unsere Arbeit, flexible Unterrichtszeiten und kreative Lehrmethoden aufzubauen. Unsere vielseitige Qualitat verbunden mit Herzlichkeit macht Elevate Global Academy zu einer zentralen Anlaufstelle fur Fremdsprachen und fur das Bestehen von Wettbewerbsprufungen.",
        es: "En Elevate Global Academy nos centramos en el alumno, que es de maxima importancia para nosotros. Creemos firmemente en construir nuestra comunidad mediante nuestro trabajo, horarios flexibles y metodos creativos de ensenanza. Nuestra calidad versatil unida a la cordialidad convierte a Elevate Global Academy en un destino integral para idiomas extranjeros y para superar examenes competitivos.",
        fr: "Chez Elevate Global Academy, nous nous concentrons sur l'apprenant, qui est d'une importance capitale pour nous. Nous croyons fermement au developpement de notre clientele grace a notre travail, nos horaires flexibles et nos methodes d'enseignement creatives. Notre qualite polyvalente associee a la cordialite fait de Elevate Global Academy une destination unique pour les langues etrangeres et la reussite aux examens competitifs.",
        ar: "في Elevate Global Academy نركز على المتعلم الذي يمثل لنا أهمية قصوى. نؤمن بقوة ببناء ثقة العملاء من خلال عملنا وساعات التدريس المرنة وطرق التعليم الإبداعية. إن جودتنا المتنوعة مع الود تجعل Elevate Global Academy وجهة واحدة للغات الأجنبية وللتفوق في الاختبارات التنافسية."
      },
      "IT Courses with 100% Job Assurance for IT or Non-IT Graduates/Engineeers who want to get into the IT industry then you can choose the following courses (Online/Offline)": {
        en: "IT Courses with 100% Job Assurance for IT or Non-IT Graduates/Engineeers who want to get into the IT industry then you can choose the following courses (Online/Offline)",
        de: "IT-Kurse mit 100% Jobzusage fur IT- oder Nicht-IT-Absolventen/Ingenieure, die in die IT-Branche einsteigen mochten. Sie konnen die folgenden Kurse wahlen (online/offline).",
        es: "Cursos de TI con 100% garantia laboral para graduados o ingenieros de TI y no TI que desean ingresar a la industria de TI. Puede elegir los siguientes cursos (en linea/presencial).",
        fr: "Cours d'informatique avec 100 % d'assurance emploi pour les diplomes/ingenieurs IT ou non-IT qui souhaitent entrer dans l'industrie informatique. Vous pouvez choisir les cours suivants (en ligne/hors ligne).",
        ar: "دورات تقنية معلومات مع ضمان وظيفي 100% لخريجي أو مهندسي تقنية المعلومات وغير تقنية المعلومات الذين يرغبون في دخول صناعة التقنية. يمكنكم اختيار الدورات التالية (عبر الإنترنت/حضوري)."
      },
      "Our Trainers and Students": {
        en: "Our Trainers and Students",
        de: "Unsere Trainer und Schuler",
        es: "Nuestros formadores y estudiantes",
        fr: "Nos formateurs et etudiants",
        ar: "مدربونا وطلابنا"
      },
      "\"Capturing Moments of Success: Trainer and Student Gallery\"": {
        en: "\"Capturing Moments of Success: Trainer and Student Gallery\"",
        de: "\"Momente des Erfolgs festhalten: Trainer- und Schuler-Galerie\"",
        es: "\"Capturando momentos de exito: galeria de formadores y estudiantes\"",
        fr: "\"Capturer les moments de reussite : galerie des formateurs et des etudiants\"",
        ar: "\"توثيق لحظات النجاح: معرض المدربين والطلاب\""
      },
      "Elevate Global Academy is located in the heart of Malleswaram, which makes it easy for first-time visitors to locate.": {
        en: "Elevate Global Academy is located in the heart of Malleswaram, which makes it easy for first-time visitors to locate.",
        de: "Elevate Global Academy befindet sich im Herzen von Malleswaram und ist daher fur Erstbesucher leicht zu finden.",
        es: "Elevate Global Academy esta ubicada en el corazon de Malleswaram, lo que facilita que los visitantes primerizos la encuentren.",
        fr: "Elevate Global Academy est situee au coeur de Malleswaram, ce qui la rend facile a trouver pour les nouveaux visiteurs.",
        ar: "تقع Elevate Global Academy في قلب ماليسوارام، مما يسهل على الزوار لأول مرة العثور عليها."
      },
      "Location:": { en: "Location:", de: "Standort:", es: "Ubicacion:", fr: "Emplacement :", ar: "الموقع:" },
      "Call:": { en: "Call:", de: "Anruf:", es: "Llamar:", fr: "Appel :", ar: "اتصال:" },
      "Loading": { en: "Loading", de: "Wird geladen", es: "Cargando", fr: "Chargement", ar: "جار التحميل" },
      "Your message has been sent. Thank you!": {
        en: "Your message has been sent. Thank you!",
        de: "Ihre Nachricht wurde gesendet. Vielen Dank!",
        es: "Su mensaje ha sido enviado. Gracias!",
        fr: "Votre message a ete envoye. Merci !",
        ar: "تم إرسال رسالتك. شكرا لك!"
      }
    },
    words: {
      a: { de: "ein", es: "un", fr: "un", ar: "واحد" },
      about: { de: "uber", es: "acerca", fr: "a propos", ar: "عن" },
      academy: { de: "akademie", es: "academia", fr: "academie", ar: "أكاديمية" },
      accepted: { de: "anerkannt", es: "aceptado", fr: "accepte", ar: "مقبول" },
      access: { de: "zugang", es: "acceso", fr: "acces", ar: "وصول" },
      abroad: { de: "ausland", es: "extranjero", fr: "etranger", ar: "الخارج" },
      academic: { de: "akademisch", es: "academico", fr: "academique", ar: "أكاديمي" },
      across: { de: "uber", es: "a traves de", fr: "a travers", ar: "عبر" },
      addition: { de: "erganzung", es: "adicion", fr: "ajout", ar: "إضافة" },
      advantage: { de: "vorteil", es: "ventaja", fr: "avantage", ar: "ميزة" },
      advantages: { de: "vorteile", es: "ventajas", fr: "avantages", ar: "مزايا" },
      all: { de: "alle", es: "todo", fr: "tout", ar: "كل" },
      an: { de: "ein", es: "un", fr: "un", ar: "واحد" },
      analytical: { de: "analytisch", es: "analitico", fr: "analytique", ar: "تحليلي" },
      and: { de: "und", es: "y", fr: "et", ar: "و" },
      application: { de: "bewerbung", es: "solicitud", fr: "candidature", ar: "طلب" },
      aptitude: { de: "eignung", es: "aptitud", fr: "aptitude", ar: "كفاءة" },
      arabic: { de: "arabisch", es: "arabe", fr: "arabe", ar: "العربية" },
      areas: { de: "bereiche", es: "areas", fr: "domaines", ar: "مجالات" },
      around: { de: "rund um", es: "alrededor", fr: "autour", ar: "حول" },
      aspiring: { de: "angehend", es: "aspirante", fr: "aspirant", ar: "طموح" },
      assessment: { de: "bewertung", es: "evaluacion", fr: "evaluation", ar: "تقييم" },
      assesses: { de: "bewertet", es: "evalua", fr: "evalue", ar: "يقيم" },
      basic: { de: "grundlegend", es: "basico", fr: "de base", ar: "أساسي" },
      be: { de: "sein", es: "ser", fr: "etre", ar: "يكون" },
      beginners: { de: "anfanger", es: "principiantes", fr: "debutants", ar: "مبتدئون" },
      bengaluru: same("Bengaluru"),
      bangalore: same("Bangalore"),
      best: { de: "beste", es: "mejor", fr: "meilleur", ar: "أفضل" },
      benefits: { de: "vorteile", es: "beneficios", fr: "avantages", ar: "فوائد" },
      business: { de: "geschaft", es: "negocio", fr: "affaires", ar: "أعمال" },
      by: { de: "von", es: "por", fr: "par", ar: "بواسطة" },
      career: { de: "karriere", es: "carrera", fr: "carriere", ar: "مهنة" },
      classes: { de: "klassen", es: "clases", fr: "cours", ar: "دروس" },
      communication: { de: "kommunikation", es: "comunicacion", fr: "communication", ar: "تواصل" },
      completed: { de: "abgeschlossen", es: "completado", fr: "termine", ar: "مكتمل" },
      computers: { de: "computer", es: "computadoras", fr: "ordinateurs", ar: "حاسوب" },
      contact: { de: "kontakt", es: "contacto", fr: "contact", ar: "اتصال" },
      countries: { de: "lander", es: "paises", fr: "pays", ar: "دول" },
      course: { de: "kurs", es: "curso", fr: "cours", ar: "دورة" },
      courses: { de: "kurse", es: "cursos", fr: "cours", ar: "دورات" },
      critical: { de: "kritisch", es: "critico", fr: "critique", ar: "نقدي" },
      cultural: { de: "kulturell", es: "cultural", fr: "culturel", ar: "ثقافي" },
      data: same("Data"),
      designed: { de: "entworfen", es: "disenado", fr: "concu", ar: "مصمم" },
      diverse: { de: "vielfaltig", es: "diverso", fr: "varie", ar: "متنوع" },
      education: { de: "bildung", es: "educacion", fr: "education", ar: "تعليم" },
      english: { de: "englisch", es: "ingles", fr: "anglais", ar: "الإنجليزية" },
      exam: { de: "prufung", es: "examen", fr: "examen", ar: "امتحان" },
      examinations: { de: "prufungen", es: "examenes", fr: "examens", ar: "اختبارات" },
      experience: { de: "erfahrung", es: "experiencia", fr: "experience", ar: "خبرة" },
      expert: { de: "experte", es: "experto", fr: "expert", ar: "خبير" },
      field: { de: "feld", es: "campo", fr: "domaine", ar: "مجال" },
      foreign: { de: "fremd", es: "extranjero", fr: "etranger", ar: "أجنبي" },
      form: { de: "formular", es: "formulario", fr: "formulaire", ar: "نموذج" },
      four: { de: "vier", es: "cuatro", fr: "quatre", ar: "أربعة" },
      french: { de: "franzosisch", es: "frances", fr: "francais", ar: "الفرنسية" },
      gallery: { de: "galerie", es: "galeria", fr: "galerie", ar: "معرض" },
      german: { de: "deutsch", es: "aleman", fr: "allemand", ar: "الألمانية" },
      global: { de: "global", es: "global", fr: "mondial", ar: "عالمي" },
      healthcare: { de: "gesundheitswesen", es: "salud", fr: "sante", ar: "الرعاية الصحية" },
      help: { de: "hilfe", es: "ayuda", fr: "aide", ar: "مساعدة" },
      home: { de: "startseite", es: "inicio", fr: "accueil", ar: "الرئيسية" },
      immigration: { de: "einwanderung", es: "inmigracion", fr: "immigration", ar: "هجرة" },
      important: { de: "wichtig", es: "importante", fr: "important", ar: "مهم" },
      in: { de: "in", es: "en", fr: "dans", ar: "في" },
      institute: { de: "institut", es: "instituto", fr: "institut", ar: "معهد" },
      international: { de: "international", es: "internacional", fr: "international", ar: "دولي" },
      it: { de: "IT", es: "TI", fr: "informatique", ar: "تقنية المعلومات" },
      journey: { de: "reise", es: "viaje", fr: "parcours", ar: "رحلة" },
      karnataka: same("Karnataka"),
      language: { de: "sprache", es: "idioma", fr: "langue", ar: "لغة" },
      languages: { de: "sprachen", es: "idiomas", fr: "langues", ar: "لغات" },
      learn: { de: "lernen", es: "aprender", fr: "apprendre", ar: "تعلم" },
      learning: { de: "lernen", es: "aprendizaje", fr: "apprentissage", ar: "تعلم" },
      listening: { de: "horen", es: "escucha", fr: "ecoute", ar: "استماع" },
      mail: { de: "e-mail", es: "correo", fr: "e-mail", ar: "بريد" },
      malleshwaram: same("Malleshwaram"),
      message: { de: "nachricht", es: "mensaje", fr: "message", ar: "رسالة" },
      name: { de: "name", es: "nombre", fr: "nom", ar: "اسم" },
      needs: { de: "bedurfnisse", es: "necesidades", fr: "besoins", ar: "احتياجات" },
      of: { de: "von", es: "de", fr: "de", ar: "من" },
      official: { de: "offiziell", es: "oficial", fr: "officiel", ar: "رسمي" },
      on: { de: "auf", es: "en", fr: "sur", ar: "على" },
      opportunities: { de: "moglichkeiten", es: "oportunidades", fr: "opportunites", ar: "فرص" },
      our: { de: "unser", es: "nuestro", fr: "notre", ar: "لدينا" },
      partner: { de: "partner", es: "socio", fr: "partenaire", ar: "شريك" },
      phone: { de: "telefon", es: "telefono", fr: "telephone", ar: "هاتف" },
      preparation: { de: "vorbereitung", es: "preparacion", fr: "preparation", ar: "تحضير" },
      professional: { de: "professionell", es: "profesional", fr: "professionnel", ar: "مهني" },
      proficiency: { de: "kompetenz", es: "competencia", fr: "competence", ar: "إتقان" },
      programming: { de: "programmierung", es: "programacion", fr: "programmation", ar: "برمجة" },
      reading: { de: "lesen", es: "lectura", fr: "lecture", ar: "قراءة" },
      referral: { de: "empfehlung", es: "referencia", fr: "recommandation", ar: "إحالة" },
      science: { de: "wissenschaft", es: "ciencia", fr: "science", ar: "علوم" },
      send: { de: "senden", es: "enviar", fr: "envoyer", ar: "إرسال" },
      skills: { de: "fahigkeiten", es: "habilidades", fr: "competences", ar: "مهارات" },
      speaking: { de: "sprechen", es: "habla", fr: "expression orale", ar: "تحدث" },
      spanish: { de: "spanisch", es: "espanol", fr: "espagnol", ar: "الإسبانية" },
      standard: { de: "standard", es: "estandar", fr: "standard", ar: "معيار" },
      students: { de: "studenten", es: "estudiantes", fr: "etudiants", ar: "طلاب" },
      study: { de: "studium", es: "estudio", fr: "etude", ar: "دراسة" },
      submit: { de: "absenden", es: "enviar", fr: "soumettre", ar: "إرسال" },
      system: { de: "system", es: "sistema", fr: "systeme", ar: "نظام" },
      teaching: { de: "unterricht", es: "ensenanza", fr: "enseignement", ar: "تعليم" },
      telc: same("TELC"),
      test: { de: "test", es: "prueba", fr: "test", ar: "اختبار" },
      the: { de: "der", es: "el", fr: "le", ar: "ال" },
      to: { de: "zu", es: "a", fr: "a", ar: "إلى" },
      training: { de: "training", es: "formacion", fr: "formation", ar: "تدريب" },
      unlock: { de: "erschliessen", es: "desbloquear", fr: "debloquer", ar: "اكتشف" },
      us: { de: "uns", es: "nosotros", fr: "nous", ar: "نحن" },
      valuable: { de: "wertvoll", es: "valioso", fr: "precieux", ar: "قيّم" },
      website: { de: "webseite", es: "sitio web", fr: "site web", ar: "موقع" },
      with: { de: "mit", es: "con", fr: "avec", ar: "مع" },
      work: { de: "arbeiten", es: "trabajar", fr: "travailler", ar: "عمل" },
      world: { de: "welt", es: "mundo", fr: "monde", ar: "عالم" },
      writing: { de: "schreiben", es: "escritura", fr: "ecriture", ar: "كتابة" },
      your: { de: "ihr", es: "su", fr: "votre", ar: "الخاص بك" }
    }
  };
})();
