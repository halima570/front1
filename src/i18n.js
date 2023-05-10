import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources: {
      en: {
        translation: {
          "ABOUT US":"ABOUT US","SERVICES":"SERVICES","Frequently Asked Questions":"Frequently Asked Questions",
          "new":'Welcome to NewsPilot, Our platform uses advanced algorithms to curate the latest and most relevant news storiesfrom around the world.Stay informed and engaged with our comprehensive news article recommendations, available to you anytime, anywhere.',
          "websites":"websites","How it works?":"How it works?","Contact us":"Contact us","Who are we ?":"Who are we ?",
          "Travel and tourism":"Travel and tourism","moving from one place to another,or experiencing different locations and environments":"moving from one place to another,or experiencing different locations and environments",
          "Science and environment":"Science and environment","the systematic study of the natural world through observation, experimentation, and analysis":"the systematic study of the natural world through observation, experimentation, and analysis",
          "Fashion and beauty":"Fashion and beauty","History and culture":"History and culture","the study of past events,and the interpretation of those events to understand the present":"the study of past events,and the interpretation of those events to understand the present",
          "Food and dining":"Food and dining","the styles, trends, and clothing designs that are popular at a particular time and place.It includes clothing, accessories..":"the styles, trends, and clothing designs that are popular at a particular time and place.It includes clothing, accessories..",
          "Sports":"Sports","physical activities that involve skill, strategy, and competition, often played individually or in teams":"physical activities that involve skill, strategy, and competition, often played individually or in teams","provides nutrition, and the act of eating and drinking in a social setting, such as a restaurant or home":"provides nutrition, and the act of eating and drinking in a social setting, such as a restaurant or home",
          "Entertainment":"Entertainment","activities or events that are designed to provide enjoyment, amusement, or pleasure to an audience":"activities or events that are designed to provide enjoyment, amusement, or pleasure to an audience",
          "Technology":"Technology","the collection of techniques,methods,and processes used in the creation and other products to improve our life":"the collection of techniques,methods,and processes used in the creation and other products to improve our life",
          
          "Business and finance":"Business and finance","the activities involved in the production, buying,selling, or trading of goods or services in exchange for money":"the activities involved in the production, buying,selling, or trading of goods or services in exchange for money",
          "refers to the activities and decisions associated with governing a country, organization, or community":"refers to the activities and decisions associated with governing a country, organization, or community",
          'categories':'categories','newspilot give you ten differents categorie that you will like to read':'newspilot give you ten differents categorie that you will like to read',
          "HOME": "HOME","CHATBOOT": "CHATBOOT","POLITIC":"POLITIC",
          "FQA":"FQA","GUIDE":"GUIDE","LOG IN":"LOG IN","SIGN IN":"SIGN IN","trends":'trends',"news":"news","world":"world",
          "why newspilot":"why newspilot",
          "welcome":`Welcome to our news article recommendation website! We believe that you should choose our website because we offer a unique and personalized experience for all of our users. Here are just a few reasons why you should give us a try:

          1-Personalization: Our website uses advanced algorithms to recommend news articles that are tailored to your interests. We take into account your reading history, search history, and other factors to deliver the most relevant and interesting articles to you.
          
          Diverse Content: Our website offers a wide range of news articles from different sources and on different topics. We believe that it's important to provide our users with a diverse range of perspectives and viewpoints, so you can make informed decisions and stay up-to-date on the latest news and events.
          
          2-Easy to Use: Our website is designed with user experience in mind. It's easy to navigate and find the articles you're interested in, and our recommendation engine does the heavy lifting for you.
          
          3-Time-Saving: With so many news articles out there, it can be overwhelming to try to keep up with everything. Our website makes it easy to stay informed without having to spend hours scouring the internet for the latest news.
          
          4-Ad-Free: We believe that news should be accessible to everyone, without the interference of ads. That's why our website is completely ad-free, so you can focus on reading and learning without any distractions.`,
        }
      },
      fr: {
        translation: {"you're followed this websites:":"vous êtes suivi ces sites :","HI":"Bonjour",
          "the answer":"la réponse","write a topic":"écris un sujet","Page Follow":"Page de suivie",
          "here you can search for any topic that you want to read":"ici, vous pouvez rechercher n'importe quel sujet que vous souhaitez lire",
          "Send to me":"Envoie moi","Logout":"déconnecter","follow":"suivi","unfollow":"ne suive plus",
          "have an exellent Option that is you can write any question and send it to me ,you will recieve your answer in your email.":"Avoir une excellente option, c'est-à-dire que vous pouvez écrire n'importe quelle question et me l'envoyer, vous recevrez votre réponse dans votre e-mail.",
          "Yes, you can follow us on Facebook,Twitter, and Instagram for updates on new articles and other news-related content.":"Oui, vous pouvez nous suivre sur Facebook, Twitter et Instagram pour des mises à jour sur les nouveaux articles et autres contenus liés à l'actualité.",
          "Do you have any social media presence that I can follow?":"Avez-vous une présence sur les réseaux sociaux que je peux suivre ?",
          "Once you've signed up for our service, you can access your recommended articles by logging in to your account on our website.":"Une fois que vous vous êtes inscrit à notre service, vous pouvez accéder à vos articles recommandés en vous connectant à votre compte sur notre site Web.",
          "How do I access the recommended articles?":"Comment accéder aux articles recommandés ?",
          "Our recommendation algorithm pulls articles from a wide range of sources,including traditional news outlets, independent media, and blogs.":"Notre algorithme de recommandation extrait des articles d'un large éventail de sources, y compris des médias traditionnels, des médias indépendants et des blogs.",
          "What kind of sources do you pull and get this news articles from?":"De quel type de sources tirez-vous et obtenez-vous ces articles de presse ?",
          "Yes, you can customize your preferences by selecting specific topics or keywords that interest you.You can also rate articles to help our algorithm better understand your preferences.":"Oui, vous pouvez personnaliser vos préférences en sélectionnant des sujets ou des mots-clés spécifiques qui vous intéressent. Vous pouvez également noter des articles pour aider notre algorithme à mieux comprendre vos préférences.",
          "Can I customize the types of articles that are recommended to me?":"Puis-je personnaliser les types d'articles qui me sont recommandés ?",
          "We add new articles to our recommendation pool on a daily basis, so there's always fresh content for you to discover.":"Nous ajoutons quotidiennement de nouveaux articles à notre pool de recommandations, il y a donc toujours du nouveau contenu à découvrir.",
          "How often are new articles added to the recommendation pool in NewsPilot?":"À quelle fréquence de nouveaux articles sont-ils ajoutés au pool de recommandations dans NewsPilot ?",
          "No, NewsPilot recommendation service is completely free to use just have fun with your reading.":"Non, le service de recommandation NewsPilot est entièrement gratuit, amusez-vous simplement avec votre lecture.",
          "Is there a cost to using the services of this website NewsPilot or not?":"Y a-t-il un coût pour utiliser les services de ce site Web NewsPilot ou non ?",
          "Our recommendation algorithm uses a combination of factors,article popularity, and relevance to your interests, to determine which articles to recommend to you.":"Notre algorithme de recommandation utilise une combinaison de facteurs, de popularité des articles et de pertinence par rapport à vos intérêts, pour déterminer les articles à vous recommander.",
          
          "How does your NewsPilot determine which articles to recommend?":"Comment votre NewsPilot détermine-t-il les articles à recommander ?",
          "NewsPilot pulls news articles from a variety of sources, including major news outlets and independent media.You can expect to see a diverse range of topics, including politics, technology, sports,entertainment, and more":"NewsPilot extrait des articles d'actualité de diverses sources, y compris les principaux organes d'information et les médias indépendants. Vous pouvez vous attendre à voir un large éventail de sujets, notamment la politique, la technologie, le sport, le divertissement, etc.",
          "What kind of news articles can I expect to see recommended on this website?":"Quel genre d'articles de presse puis-je m'attendre à voir recommandé sur ce site ?",
          "ABOUT US":"À PROPOS DE NOUS","SERVICES":"SERVICES","Frequently Asked Questions":"Questions fréquemment posées",
          "How it works?":"Comment ça fonctionne?","Contact us":"Contactez-nous","Who are we ?":"Qui sommes nous ?",
          "new":"Bienvenue sur NewsPilot, notre plateforme utilise des algorithmes avancés pour organiser les nouvelles les plus récentes et les plus pertinentes histoires du monde entier.Restez informé et engagé avec notre article de presse complet recommandations, disponibles à tout moment, n'importe où.",
          "Travel and tourism":"Voyage et tourisme","moving from one place to another,or experiencing different locations and environments":"se déplacer d'un endroit à un autre, ou faire l'expérience de différents endroits et environnements",
          "Science and environment":"Sciences et environnement","the systematic study of the natural world through observation, experimentation, and analysis":"l'étude systématique du monde naturel par l'observation, l'expérimentation et l'analyse",
          "the styles, trends, and clothing designs that are popular at a particular time and place.It includes clothing, accessories..":"les styles, les tendances et les modèles de vêtements qui sont populaires à un moment et à un endroit donnés. Cela comprend les vêtements, les accessoires.",
          "Fashion and beauty":"Mode et beauté","History and culture":"Histoire et culture","the study of past events,and the interpretation of those events to understand the present":"l'étude des événements passés, et l'interprétation de ces événements pour comprendre le présent",
          "Food and dining":"Nourriture et repas","provides nutrition, and the act of eating and drinking in a social setting, such as a restaurant or home":"fournit la nutrition, et l'acte de manger et de boire dans un cadre social, comme un restaurant ou à la maison",
          "Sports":"Des sports","physical activities that involve skill, strategy, and competition, often played individually or in teams":"activités physiques qui impliquent des compétences, de la stratégie et de la compétition, souvent pratiquées individuellement ou en équipe",
          "Entertainment":"Divertissement","activities or events that are designed to provide enjoyment, amusement, or pleasure to an audience":"activités ou événements conçus pour procurer du plaisir, de l'amusement ou du plaisir à un public",
          "Technology":"Technologie","the collection of techniques,methods,and processes used in the creation and other products to improve our life":"la collection de techniques, méthodes et processus utilisés dans la création et d'autres produits pour améliorer notre vie",
          "Business and finance":"Affaires et finances","the activities involved in the production, buying,selling, or trading of goods or services in exchange for money":"les activités impliquées dans la production, l'achat, la vente ou le commerce de biens ou de services en échange d'argent",
          "refers to the activities and decisions associated with governing a country, organization, or community":"fait référence aux activités et aux décisions associées à la gouvernance d'un pays, d'une organisation ou d'une communauté",
          'categories':'catégories','newspilot give you ten differents categorie that you will like to read':'newspilot vous donne dix catégories différentes que vous aimerez lire',
            "HOME": "accueille","CHATBOT": "CHATBOT","FQA":"FQA","GUIDE":"GUIDE","POLITIC":"POLITIQUE",
            "LOG IN":"connexion","SIGN IN":"s'identifier","trends":"les tendances","news":"les nouvelles","world":" du monde"
        ,"why newspilot":"pourquoi newspilot",
        "welcome":`Bienvenue sur notre site de recommandation d'articles de presse ! Nous croyons que vous devriez choisir notre site Web car nous offrons une expérience unique et personnalisée à tous nos utilisateurs. Voici quelques raisons pour lesquelles vous devriez nous donner un essai :

        1-Personnalisation : Notre site Web utilise des algorithmes avancés pour vous recommander des articles d'actualité adaptés à vos centres d'intérêt. Nous prenons en compte votre historique de lecture, votre historique de recherche et d'autres facteurs pour vous proposer les articles les plus pertinents et les plus intéressants.
        
        Contenu diversifié : notre site Web propose une large gamme d'articles d'actualité provenant de différentes sources et sur différents sujets. Nous pensons qu'il est important de fournir à nos utilisateurs un large éventail de perspectives et de points de vue, afin que vous puissiez prendre des décisions éclairées et rester au courant des dernières nouvelles et événements.
        
        2-Facile à utiliser : notre site Web est conçu en pensant à l'expérience utilisateur. Il est facile de naviguer et de trouver les articles qui vous intéressent, et notre moteur de recommandation fait le gros du travail pour vous.
        
        3-Gain de temps : Avec autant d'articles d'actualités, il peut être écrasant d'essayer de tout suivre. Notre site Web permet de rester facilement informé sans avoir à passer des heures à parcourir Internet pour les dernières nouvelles.
        
        4-Sans publicité : nous pensons que les actualités doivent être accessibles à tous, sans l'interférence des publicités. C'est pourquoi notre site Web est entièrement sans publicité, afin que vous puissiez vous concentrer sur la lecture et l'apprentissage sans aucune distraction.`
        ,"send":"Envoie", "Enter your Name...":"Entrez votre nom..." ,"Enter a Message":"Entrez un message","Enter your Email...":"Entrer votre Email..."}
      },
      ar:{
        translation: {"you're followed this websites:":"أنت تتابع هذه المواقع","HI":"السلام عليكم",
          
          "the answer":"الاجابة","write a topic":"اكتب موضوع","Page Follow":"صفحة المتابعة",
          "here you can search for any topic that you want to read":"هنا يمكنك البحث عن أي موضوع تريد قراءته",
          "Logout":"تسجيل خروج","follow":"تتابع","unfollow":"الغاء المتابعة",
          "Send to me":"ارسل لي","send":"ارسل","Enter your Name...":"أدخل أسمك...","Enter your Email...":"أدخل بريدك الإلكتروني ...","Enter a Message":"أدخل الرسالة",
          "have an exellent Option that is you can write any question and send it to me ,you will recieve your answer in your email.":"لديك خيار ممتاز وهو أنه يمكنك كتابة أي سؤال وإرساله إليّ ، وستتلقى إجابتك في بريدك الإلكتروني.",
          "Yes, you can follow us on Facebook,Twitter, and Instagram for updates on new articles and other news-related content.":"نعم ، يمكنك متابعتنا على مواقع التواصل الإجتماعي للحصول على تحديثات حول المقالات الجديدة والمحتويات الأخرى ذات الصلة بالأخبار.",
          "Do you have any social media presence that I can follow?":"هل لديك أي حضور على وسائل التواصل الاجتماعي يمكنني متابعته؟",
          "Once you've signed up for our service, you can access your recommended articles by logging in to your account on our website.":"بمجرد الاشتراك في خدمتنا ، يمكنك الوصول إلى المقالات الموصى بها عن طريق تسجيل الدخول إلى حسابك على موقعنا على الإنترنت.",
          "How do I access the recommended articles?":"كيف يمكنني الوصول إلى المقالات الموصى بها؟",
          "Our recommendation algorithm pulls articles from a wide range of sources,including traditional news outlets, independent media, and blogs.":"تقوم خوارزمية التوصية الخاصة بنا بسحب المقالات من مجموعة واسعة من المصادر ، بما في ذلك المنافذ الإخبارية التقليدية ووسائل الإعلام المستقلة والمدونات.",
          "What kind of sources do you pull and get this news articles from?":"ما نوع المصادر التي تسحبها وتحصل منها على هذه المقالات الإخبارية؟",
          "Yes, you can customize your preferences by selecting specific topics or keywords that interest you.You can also rate articles to help our algorithm better understand your preferences.":"نعم ، يمكنك تخصيص تفضيلاتك عن طريق تحديد مواضيع معينة أو كلمات رئيسية تهمك ، كما يمكنك تقييم المقالات لمساعدة خوارزميتنا على فهم تفضيلاتك بشكل أفضل.",
          "Can I customize the types of articles that are recommended to me?":"هل يمكنني تخصيص أنواع المقالات الموصى بها لي؟",
          "We add new articles to our recommendation pool on a daily basis, so there's always fresh content for you to discover.":"نضيف مقالات جديدة إلى مجموعة التوصيات الخاصة بنا على أساس يومي ، لذلك هناك دائمًا محتوى جديد لتكتشفه.",
          "How often are new articles added to the recommendation pool in NewsPilot?":"كم مرة يتم إضافة المقالات الجديدة إلى مجموعة التوصيات في ؟",
          "No, NewsPilot recommendation service is completely free to use just have fun with your reading.":"لا ، خدمة توصية  مجانية تمامًا للاستخدام فقط استمتع بقراءتك",
          "Is there a cost to using the services of this website NewsPilot or not?":"هل هناك تكلفة لاستخدام خدمات هذا الموقع أم لا؟",
          "Our recommendation algorithm uses a combination of factors,article popularity, and relevance to your interests, to determine which articles to recommend to you.":"تستخدم خوارزمية التوصيات الخاصة بنا مجموعة من العوامل وشعبية المقالة ومدى صلتها باهتماماتك لتحديد المقالات التي ننصحك بها.",
          "How does your NewsPilot determine which articles to recommend?":"كيف يحدد برنامج  الخاص بك المقالات التي يجب التوصية بها؟",
"NewsPilot pulls news articles from a variety of sources, including major news outlets and independent media.You can expect to see a diverse range of topics, including politics, technology, sports,entertainment, and more":"يسحب  المقالات الإخبارية من مجموعة متنوعة من المصادر ، بما في ذلك المنافذ الإخبارية الرئيسية ووسائل الإعلام المستقلة. يمكنك توقع رؤية مجموعة متنوعة من الموضوعات ، بما في ذلك السياسة والتكنولوجيا والرياضة والترفيه والمزيد",
          "SERVICES":"خدمات","Frequently Asked Questions":"أسئلة مكررة","What kind of news articles can I expect to see recommended on this website?":"ما نوع المقالات الإخبارية التي يمكن أن أتوقع رؤيتها على هذا الموقع؟",
          "How it works?":"كيف تعمل؟","Contact us":"اتصل بنا","Who are we ?":"من نحن ؟","ABOUT US":"معلومات عنا",
          "websites":"المواقع","new":"مرحبًا بك في موقعنا، تستخدم منصتنا خوارزميات متقدمة لتنظيم آخر الأخبار وأكثرها صلة قصص من جميع أنحاء العالم.ابق على اطلاع وتفاعل مع مقالتنا الإخبارية الشاملة التوصيات ، متاحة لك في أي وقت وفي أي مكان",
          "Science and environment":"العلم والبيئة","Travel and tourism":"سياحة و سفر","moving from one place to another,or experiencing different locations and environments":"الانتقال من مكان إلى آخر ، أو تجربة مواقع وبيئات مختلفة",
          "History and culture":"التاريخ والثقافة","the study of past events,and the interpretation of those events to understand the present":"دراسة الأحداث الماضية ، وتفسير تلك الأحداث لفهم الحاضر","the systematic study of the natural world through observation, experimentation, and analysis":"الدراسة المنهجية للعالم الطبيعي من خلال الملاحظة والتجريب والتحليل",
          "Fashion and beauty":"الموضة والجمال","the styles, trends, and clothing designs that are popular at a particular time and place.It includes clothing, accessories..":"الأنماط والاتجاهات وتصاميم الملابس الشائعة في زمان ومكان معينين وتشمل الملابس والإكسسوارات ..",
          "Food and dining":"الاطعمة","provides nutrition, and the act of eating and drinking in a social setting, such as a restaurant or home":"يوفر التغذية ، وفعل الأكل والشرب في محيط اجتماعي ، مثل مطعم أو منزل",
          "Sports":"أنشطة رياضية","physical activities that involve skill, strategy, and competition, often played individually or in teams":"الأنشطة البدنية التي تنطوي على مهارة واستراتيجية ومنافسة ، وغالبًا ما يتم لعبها بشكل فردي أو في فرق",
          "activities or events that are designed to provide enjoyment, amusement, or pleasure to an audience":"الأنشطة أو الأحداث المصممة لتوفير المتعة أو التسلية أو المتعة للجمهور",
          "Technology":"تكنولوجيا","the collection of techniques,methods,and processes used in the creation and other products to improve our life":"مجموعة التقنيات والأساليب والعمليات المستخدمة في الإنشاء والمنتجات الأخرى لتحسين حياتنا",
          "the activities involved in the production, buying,selling, or trading of goods or services in exchange for money":"الأنشطة التي ينطوي عليها إنتاج أو شراء أو بيع أو تداول السلع أو الخدمات مقابل المال",
          "Business and finance":"الأعمال التجارية والمالية","Entertainment":"ترفيه",
          "refers to the activities and decisions associated with governing a country, organization, or community":"يشير إلى الأنشطة والقرارات المرتبطة بإدارة بلد أو منظمة أو مجتمع",
          'categories':'فئات','newspilot give you ten differents categorie that you will like to read':"يوفر لك موقعنا عشرة فئات مختلفة ترغب في قراءتها",
          "HOME": "الصفحة الرئيسية","CHATBOT": "الدردشة","FQA":"أسئلة مكررة","POLITIC":"سياسي",
          "GUIDE":"مرشد","LOG IN":"تسجيل الدخول","SIGN IN":"تسجيل","trends":"الاحداث","news":"الاكثر مشاهده","world":"في العالم"
          ,"why newspilot":"لماذا موقعنا"
          ,"welcome":`مرحبًا بكم في موقع توصيات المقالات الإخبارية لدينا! نعتقد أنه يجب عليك اختيار موقعنا الإلكتروني لأننا نقدم تجربة فريدة وشخصية لجميع مستخدمينا. فيما يلي بعض الأسباب التي تجعلك تجربنا:

          1-التخصيص: يستخدم موقعنا خوارزميات متقدمة للتوصية بالمقالات الإخبارية المصممة حسب اهتماماتك. نحن نأخذ في الاعتبار سجل القراءة وسجل البحث والعوامل الأخرى لتقديم المقالات الأكثر صلة وإثارة للاهتمام لك.
          
          محتوى متنوع: يقدم موقعنا الإلكتروني مجموعة واسعة من المقالات الإخبارية من مصادر مختلفة وفي مواضيع مختلفة. نعتقد أنه من المهم تزويد مستخدمينا بمجموعة متنوعة من وجهات النظر ووجهات النظر ، حتى تتمكن من اتخاذ قرارات مستنيرة والبقاء على اطلاع على آخر الأخبار والأحداث.
          
          2-سهل الاستخدام: تم تصميم موقعنا مع وضع تجربة المستخدم في الاعتبار. من السهل التنقل والعثور على المقالات التي تهتم بها ، ويقوم محرك التوصيات الخاص بنا بالرفع الثقيل نيابة عنك.
          
          3-توفير الوقت: مع وجود العديد من المقالات الإخبارية ، قد يكون من الصعب محاولة مواكبة كل شيء. يجعل موقعنا الإلكتروني من السهل البقاء على اطلاع دون الحاجة إلى قضاء ساعات في البحث على الإنترنت عن آخر الأخبار.
          
          4-خالية من الاعلانات: نعتقد أن الأخبار يجب أن تكون في متناول الجميع ، دون تدخل من الإعلانات. هذا هو السبب في أن موقعنا الإلكتروني خالٍ تمامًا من الإعلانات ، لذا يمكنك التركيز على القراءة والتعلم دون أي إلهاء.`
        }
      }
    },
    lng: 'en', // Set the default language to English
    fallbackLng: 'en', // If a translation is missing, fallback to English
    interpolation: {
      escapeValue: false // React already escapes all strings
    }
  });
  export default i18n;