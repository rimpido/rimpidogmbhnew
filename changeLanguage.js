
var url_string = window.location.href;
var url = new URL(url_string);
var getLanguage = url.searchParams.get('lang');


//NAV
var navHome = document.getElementById('nav-home');
var navService = document.getElementById('nav-services');
var navMission = document.getElementById('nav-mission');
var navTeam = document.getElementById('nav-team');
var navTestimonial = document.getElementById('nav-testimonial');
var navService = document.getElementById('nav-services');
var navPrivacy = document.getElementById('nav-privacy');
var currentLanguage = document.getElementById('currentLang');

//INTRO

var dropdownMenu_DE = document.getElementById('de');
var dropdownMenu_EN = document.getElementById('en');


var rimpidoIntro = document.getElementById('rimpido-intro');
var buttonContact = document.getElementById('btn-contact');


//SERVICES

var indexServicesMainheader = document.getElementById('index-services-mainheader');

var indexServicesImplementation = document.getElementById('index-services-implementation');
var indexServicesImplementationDescription = document.getElementById('index-services-implementation-description');

var indexServicesEHSsupportSubheader = document.getElementById('index-services-ehssupport-subheader');
var indexServicesEHSsupportDescription = document.getElementById('index-services-ehssupport-description');

var indexServicesPhrasecatalog = document.getElementById('index-services-phrasecatalog');
var indexServicesPhrasecatalogDescription = document.getElementById('index-services-phrasecatalog-description');

var indexServicesTraining = document.getElementById('index-services-training');
var indexServicesTrainingDescription = document.getElementById('index-services-training-description');

var indexServicesEHStoolsSubheader = document.getElementById('index-services-ehstools-subheader');
var indexServicesEHStoolsDescription = document.getElementById('index-services-ehstools-description');

var indexServicesChemistryserviceSubheader = document.getElementById('index-services-chemistryservice-subheader');
var indexServicesChemistryserviceDescription = document.getElementById('index-services-chemistryservice-description');


var indexServicesEHSmanual = document.getElementById('index-services-ehsmanual');
var indexServicesEHSmanualDescription = document.getElementById('index-services-ehsmanual-description');



//MISSION


var indexMissionMainheader = document.getElementById('index-mission-mainheader');
var indexMissionMainheaderDescription = document.getElementById('index-mission-mainheader-description');
var indexMissionSubheader1 = document.getElementById('index-mission-subheader1');
var indexMissionSubheader2 = document.getElementById('index-mission-subheader2');
var indexMissionSubheader3 = document.getElementById('index-mission-subheader3');
var indexMissionSubheader4 = document.getElementById('index-mission-subheader4');
var indexMissionDescription = document.getElementById('index-mission-description');


//TEAM
var indexTeamMainheader = document.getElementById('index-team-mainheader');
var indexTeamSubheader1Description = document.getElementById('index-team-subheader1-description');
var indexTeamSubheader2Description = document.getElementById('index-team-subheader2-description');
var indexTeamSubheader3Description = document.getElementById('index-team-subheader3-description');
var indexTeamSubheader4Description = document.getElementById('index-team-subheader4-description');
var indexTeamReadmore = document.getElementById('index-team-readmore');

//Partner
var indexPartnerHeader1 = document.getElementById('index-partner-header1');
var indexPartnerHeader2 = document.getElementById('index-partner-header2');


//TESTIMONIAL
var indexTestimonialMainheader = document.getElementById('index-testimonial-mainheader');
var indexTestimonialReadmore1 = document.getElementById('index-testimonial-readmore1');
var indexTestimonialReadmore2 = document.getElementById('index-testimonial-readmore2');
var indexTestimonialReadmore3 = document.getElementById('index-testimonial-readmore3');

//CONTACT
var indexContactusMainheader = document.getElementById('index-contactus-mainheader');
var indexContactusSubheader1 = document.getElementById('index-contactus-subheader1');

var indexContactuslink1 = document.getElementById('index-contactus-link1');
var indexContactuslink2 = document.getElementById('index-contactus-link2');
var indexContactuslink3 = document.getElementById('index-contactus-link3');
var indexContactuslink4 = document.getElementById('index-contactus-link4');
var indexContactuslink5 = document.getElementById('index-contactus-link5');
var indexContactuslink6 = document.getElementById('index-contactus-link6');

//ENGLISH

/*dropdownMenu_EN.onclick = function(){
	window.location="index.php";
}*/


if(getLanguage=="en")
{
	window.location.href="index.php?lang=default";
}


//DEUTCH


//dropdownMenu_DE.onclick = function(){


if(getLanguage=="de")
{
//NAV
navHome.innerHTML = "Startseite";
navService.innerHTML = "Dienstleistungen";
navMission.innerHTML = "Unsere Mission";
navTeam.innerHTML = "Unser Team";
navTestimonial.innerHTML = "Zeugnis";
navPrivacy.innerHTML = "Datenschutz";
currentLanguage.innerHTML = "<b><span>DE </span></b>"+
							"<img src='assets/icon/de-icon.png'>";



//INTRO
rimpidoIntro.innerHTML = "Die rimpido GmbH bietet weltweit SAP-Beratung für das SAP-Modul Environment, Health & Safety (SAP EHS) für mittelständische und große Unternehmen an. Wir verfügen über langjährige Erfahrungen bei der Implementierung und regelmäßigen Wartung von SAP-EHS-Systemen.";
buttonContact.innerHTML = "KONTAKT";

//services function

indexServicesMainheader.innerHTML = "Dienstleistungen";

indexServicesImplementation.innerHTML = "EHS-Implementierung";
indexServicesImplementationDescription.innerHTML = "Wir verfügen über umfangreiche Erfahrungen in der Einführung/Implementierung der SAP EHS Module sowie der Migration nach ECC 6<br>"+
 "<b>Weiterlesen</b>";

indexServicesEHSsupportDescription.innerHTML = "Wir übernehmen für Sie die regelmäßige Anpassung der Dokumente und Datenstrukturen an die laufenden Änderungen der Chemikaliengesetzgebung<br>"+
 "<b>Weiterlesen</b>";

indexServicesPhrasecatalog.innerHTML = "Phrasenkatalog";
indexServicesPhrasecatalogDescription.innerHTML = "Der EHS-Bereich Produktsicherheit beinhaltet auch die Erfassung und Verwaltung der notwendigen Daten zu Stoffen und Produkten für die Erstellung.<br>"+
 "<b>Weiterlesen</b>";

indexServicesTraining.innerHTML = "Schulung";
indexServicesTrainingDescription.innerHTML = "Die SAP EHS bzw. EHSM Schulungen Workshops bzw. Trainings werden grundsätzlich auf Anfrage zu allen Bereichen des SAP EH&S / EHSM angeboten.<br>"+
 "<b>Weiterlesen</b>";

indexServicesEHStoolsDescription.innerHTML = "Erfassungstool für Lieferanten SDB's / Gefahrstoffe, DYN-WWI Tool zur Dynamischen Steuerung und Verwaltung von Massengenerierungen<br>"+
 "<b>Weiterlesen</b>";

indexServicesChemistryserviceDescription.innerHTML = "Diese Seite kann Ihnen helfen Informationen über den Transport von Stoffen, Zubereitungen und Gegenständen zu bekommen, die auf Grund ihrer <br>"+
 "<b>Weiterlesen</b>";


indexServicesEHSmanual.innerHTML = "EHS-Handbuch";
indexServicesEHSmanualDescription.innerHTML = "Schritt für Schritt wird Ihnen gezeigt, wie Sie in den einzelnen Bereichen mit der Software arbeiten.<br>"+
 "<b>Weiterlesen</b>";

//MISSION

indexMissionMainheader.innerHTML = "Unsere Mission";
indexMissionMainheaderDescription.innerHTML = "Um unseren Kunden das Beste zu bieten, bieten wir erschwingliche, effektive und innovative Geschäftslösungen.";
indexMissionSubheader1.innerHTML = "Bieten Sie eine erstklassige und dennoch erschwingliche Geschäftslösung.";
indexMissionSubheader2.innerHTML = "Mindful of ethics while being cost effective <br><br>";
indexMissionSubheader3.innerHTML = "Gleiche Priorität für alle<br><br><br>";
indexMissionSubheader4.innerHTML = "Mit SAP EHS Standards sicher erfüllen";


indexMissionDescription.innerHTML = "Als Unternehmen sind Sie verpflichtet, gesetzliche Vorschriften bezüglich Umweltschutz, Arbeitssicherheit, Abfall- und Gefahrstoffmanagement einzuhalten. "+
									"Mit SAP Environment, Health & Safety (SAP EHS) regeln Sie sämtliche Aufgabenbereiche, um die nationalen und internationalen Standards der Bereiche "+
									"Umweltschutz, Arbeitssicherheit, Arbeitsmedizin, Gefahrstoffmanagement, Gefahrgutmanagement und Abfallmanagement in Ihrem Unternehmen zu erfüllen. "+
									"Wir können Ihnen sowohl bei der <a href='implementation.php?lang=de'>Einführung von SAP EHS</a> als auch bei <a href='support.php?lang=de'>Anpassungen und Updates</a> an bestehenden SAP-EHS-Systemen umfangreiche "+
									"Beratung und Hilfe anbieten.<br><br>"+

									"Durch die <a href='EHS_manual.php?lang=de'>langjährige Erfahrung</a> <a href='index.php?lang=de#team'>unserer Mitarbeiter</a> können wir Sie zuverlässig vor Fallstricken und Problemen bei SAP-EHS-Installation bewahren und "+
									"Ihnen eine wirklich maßgeschneiderte Lösung anbieten. "+
									"Selbstverständlich wird jeder Auftrag entsprechend unserer internen Qualitätsmaßstäbe mit höchster Sorgfalt und Zuverlässigkeit ausgeführt. <br><br>"+
									
									"Mit unserem neuen <a href='phrasencatalog.php?lang=de'>Phrasenkatalog-System</a> können wir Sie außerdem bei Übersetzungen und beim Abgleichen Ihrer Phrasen für das SAP-EHS-System "+
									"unterstützen und eine Plattform zum Austauschen von Phrasen anbieten. Zusätzlich können Sie auch andere Bereiche des SAP-EHS-Systems wie "+
									"Eigenschaftsbäume mit dem <a href='phrasencatalog.php?lang=de'>Phrasenkatalog-System</a> komfortabler und schneller anpassen.";


//TEAM

indexTeamMainheader.innerHTML = "Unser Team";
indexTeamSubheader1Description.innerHTML = "Dr. Schuur ist promovierter Diplom-Chemiker und geschäftsführender Gesellschafter der rimpido GmbH. Seit 1993 beschäftigte "+
											"er sich mit dem Einsatz von Datenbanken in der Chemie und seit 1998...";


//indexTeamSubheader2Description.classList.add("texttosmall");
indexTeamSubheader2Description.innerHTML = "<font size='1px'>Hr. Reinhardt ist ein erfahrener und weithin bekannter SAP-EHS-Gefahrgutberater der ersten Stunde. Seit 1999 hat er viele Kunden in aller Welt betreut und unzählige EHS-Gefahrgutprojekte erfolgreich durchgeführt. Er hat chemischen Hintergrund, fundierte Kenntnisse der SAP-EHS-Gefahrgutabwicklung sowie einer Vielzahl von Gefahrgutvorschriften – somit spricht er sowohl die Sprache der IT als auch die der Gefahrgut-Experten.</font>";




indexTeamSubheader3Description.innerHTML = "<font size='1px>Hr. Bachmann wurde 2015 als CFO der rimpido GmbH eingestellt. Während seines Studiums der Betriebswirtschaftslehre erlangte er bereits ein hohes Maß an Erfahrungen in den Bereichen IMS, Compliance und Auditierung. Seit Beginn seiner Tätigkeit für die rimpido GmbH arbeitet Hr. Bachmann auch im SAP EHS Umfeld und ist aktuell der hauptverantwortliche Entwickler des Erfassungstools.</font>";
indexTeamSubheader4Description.innerHTML = "<font size='2px'>Fr. Dr. Huafang Jin ist promovierte Umweltchemikerin und arbeitet für die rimpido GmbH seit 2012. Sie hat bereits erfolgreich mehrere EHS Projekte begleitet und ist aktuell an der Entwicklung des Erfassungstools beteiligt. Zusätzlich arbeitet Fr. Dr. Jin an der systematischen Erfassung und der chinesischen Übersetzung von EHS Daten.</font>";

indexTeamReadmore.innerHTML = "Weiterlesen";

//TESTIMONIAL

indexTestimonialMainheader.innerHTML = "Zeugnis";
//indexTestimonialReadmore1.innerHTML = "Weiterlesen";
//indexTestimonialReadmore2.innerHTML = "Weiterlesen";
//indexTestimonialReadmore3.innerHTML = "Weiterlesen";


//CONTACT
indexContactusMainheader.innerHTML = "Kontakt";
indexContactusSubheader1.innerHTML = "<b>KONTAKT</b>";

indexContactuslink1.innerHTML = "ERFASSUNGSTOOL";
indexContactuslink2.innerHTML = "Handbuch zu SAP® EH&S bei SAP-Press";
indexContactuslink3.innerHTML = "Impressum";
indexContactuslink4.innerHTML = "Datenschutz";
indexContactuslink6.innerHTML = "Karriere";

}


if(getLanguage=="fr")
{
//NAV
navHome.innerHTML = "Homepage";
navService.innerHTML = "Services";
navMission.innerHTML = "Notre Mission";
navTeam.innerHTML = "NOS EXPERTS";
navTestimonial.innerHTML = "témoignage";
navPrivacy.innerHTML = "Confidentialité";
currentLanguage.innerHTML = "<b><span>FR </span></b>"+
							"<img src='assets/icon/fr-icon.png'>";



//INTRO
rimpidoIntro.innerHTML = "La rimpido GmbH propose un conseil SAP mondial pour le module SAP Environnement, Hygiène et Sécurité (SAP EHS) pour les moyennes et grandes entreprises. Nous avons de nombreuses années d'expérience dans la mise en œuvre et la maintenance régulière des systèmes SAP EHS.";
buttonContact.innerHTML = "CONTACT";


//services function

indexServicesMainheader.innerHTML = "Services";

indexServicesImplementation.innerHTML = "Implémentation EHS";
indexServicesImplementationDescription.innerHTML = "Nous avons une vaste expérience dans les modules SAP EHS et la migration vers ECC 6, y compris la conversion unicode<br>"+
 "<b>Lire la suite</b>";


indexServicesEHSsupportSubheader.innerHTML = "Assistance EHS";
indexServicesEHSsupportDescription.innerHTML = "Nous nous chargeons de la modification régulière des documents et des structures de données pour tenir compte des changements en cours dans la législation<br>"+
 "<b>Lire la suite</b>";

indexServicesPhrasecatalog.innerHTML = "Bibliothèque de phrases";
indexServicesPhrasecatalogDescription.innerHTML = "La sécurité des produits EHS comprend également la collecte et la gestion des données nécessaires sur les substances..<br>"+
 "<b>Lire la suite</b>";

indexServicesTraining.innerHTML = "Training";
indexServicesTrainingDescription.innerHTML = "Nous offrons des formations sur demande à tous les domaines de SAP EHS.<br>"+
 "<b>Lire la suite</b>";

indexServicesEHStoolsSubheader.innerHTML = "Outils EHS";
indexServicesEHStoolsDescription.innerHTML = "Outil d'enregistrement pour le fabricant SDB / substances dangereuses, Outil DYN-WWI pour le contrôle dynamique et la gestion des générations de masse, la gestion des cycles de...<br>"+
 "<b>Lire la suite</b>";


indexServicesChemistryserviceSubheader.innerHTML = "Service chimie"
indexServicesChemistryserviceDescription.innerHTML = " <br>"+
 "<b>Lire la suite</b>";


indexServicesEHSmanual.innerHTML = "Manuel EHS";
indexServicesEHSmanualDescription.innerHTML = "Les auteurs éxpliquent étape par étape comment vous pouvez travailler avec les modules de SAP EHSM.<br>"+
 "<b>Lire la suite</b>";

//MISSION

indexMissionMainheader.innerHTML = "Notre Mission";
indexMissionMainheaderDescription.innerHTML = "Pour offrir le meilleur à nos clients, nous proposons des solutions d’affaires abordables, efficaces et innovantes.";


//indexMissionSubheader1.innerHTML = "Bieten Sie eine erstklassige und dennoch erschwingliche Geschäftslösung.";
//indexMissionSubheader3.innerHTML = "Gleiche Priorität für alle";
indexMissionSubheader4.innerHTML = "Respecter en toute sécurité les normes SAP EHS";
indexMissionDescription.innerHTML = "En tant qu'entreprise, vous êtes tenu aux exigences légales en matière de protection de l'environnement, de sécurité au travail et de gestion des déchets et des matières dangereuses. "+
									"Avec SAP Environment, Health and Safety (SAP EHS), ils règlent tous les domaines de responsabilité afin de répondre aux normes nationales et "+
									"internationales en matière de protection de l'environnement, de sécurité au travail, de médecine du travail, de gestion des substances dangereuses, de "+
									"gestion des déchets dangereux et de gestion dans votre entreprise. Nous pouvons vous aider dans <a href='implementation.php?lang=fr'>l'implémentation du code SAP EHS</a> ainsi que dans "+
									"<a href='support.php?lang=fr'>l'adaptation</a> et la mise à jour des systèmes SAP EHS existants.<br><br>"+

									"Grâce à <a href='EHS_manual.php?lang=fr'>la grande expérience</a> <a href='index.php?lang=fr#team'>de nos employés</a>, nous pouvons vous proposer une solution des meilleures pratiques réellement personnalisée pour votre installation SAP EHS. "+
									"Bien entendu, chaque commande sera exécutée conformément à nos standards de qualité internes avec le plus grand soin et fiabilité.<br><br>"+

									"De plus, avec notre nouvelle <a href='phrasencatalog.php?lang=fr'>système de bibliothèque de phrases</a> nous pouvons vous assister dans la traduction et l'adaptation de vos phrases pour le "+
									"système SAP EHS et vous fournir une plate-forme d'échange de phrases. En outre, vous pouvez également adapter d'autres domaines du système SAP "+
									"EHS en tant qu'arborescences de propriétés avec la <a href='phrasencatalog.php?lang=fr'>système de bibliothèque de phrases</a> plus confortable et plus rapide."


//TEAM

indexTeamMainheader.innerHTML = "Nos Experts";
indexTeamSubheader1Description.innerHTML = "Dr. Schuur est titulaire d'un doctorat en chimie et il est PDG de rimpido GmbH. Depuis 1993 il travaille avec l'utilisation de bases de données dans la chimie et depuis 1998...";

indexTeamSubheader2Description.innerHTML = "Klaus Reinhardt est un expert reconnu en matière de SAP EHS Dangerous Goods Management. Depuis 1999, il a réalisé d'innombrables projets de marchandises dangereuses couronnés de succès dans le monde entier. Il offre un savoir-faire en matière de systèmes, de processus et de réglementation.";

indexTeamSubheader3Description.innerHTML = "Marc Bachman a rejoint la rimpido GmbH en tant que directeur financier en 2015. Il a gagné une expertise forte en conformité réglementaire et audit pendant ses études. Depuis son premier jour il a commence à travailler avec SAP EHS et il en ce jour il et le développeur principal du outil de capture.";

indexTeamSubheader4Description.innerHTML = "<font size='2px'>Dr. Huafang Jin est titulaire d'un doctorat chimie de l'environment de l'université de Oldenburg, en Allemagne. Dr. Jin a rejoint la rimpido GmbH en 2012 sur une base á temps partiel. Elle a participé a trois projets EHS et le développement du outil de capture. En addition elle travaille sur la traduction des données EHS en chinois et la collection des données EHS.</font>";



indexTeamReadmore.innerHTML = "Lire la suite";


//Partner

indexPartnerHeader1.innerHTML = "Partenaire";
indexPartnerHeader2.innerHTML = "Partenaire";
$('#index-partner-header1').css({'font-size': '30px'});
$('#index-partner-header2').css({'font-size': '30px'});

//TESTIMONIAL

indexTestimonialMainheader.innerHTML = "Témoignage";
//indexTestimonialReadmore1.innerHTML = "Lire la suite";
//indexTestimonialReadmore2.innerHTML = "Lire la suite";
//indexTestimonialReadmore3.innerHTML = "Lire la suite";


//CONTACT
indexContactusMainheader.innerHTML = "Contact";
indexContactusSubheader1.innerHTML = "<b>Contact</b>";

indexContactuslink1.innerHTML = "Outil d'enregistrement";
indexContactuslink2.innerHTML = "Manuel sur SAP EHS";
indexContactuslink3.innerHTML = "L'empreint";
indexContactuslink4.innerHTML = "Confidentialité";
indexContactuslink6.innerHTML = "Carrière";

}


if(getLanguage=="ar")
{
//NAV
navHome.innerHTML = "الصفحة الرئيسية";
navService.innerHTML = "خدمات الشركة;";
navMission.innerHTML = "مهمتنا";
navTeam.innerHTML = "فريقنا";
//navTestimonial.innerHTML = "témoignage";
navPrivacy.innerHTML = "سياسات";
currentLanguage.innerHTML = "<b><span>AR </span></b>"+
							"<img src='assets/icon/ar-icon.png'>";



//INTRO
rimpidoIntro.innerHTML = "تقدم شركتنا خدماتها للشركات الكبيرة والمتوسطة حول العالم في مجال الدعم الفني للوحدة المختصة في البيئة, الصحة والأمان ";

buttonContact.innerHTML = "اتصل بنا";



//services function

indexServicesMainheader.innerHTML = "خدمات الشركة;";

indexServicesImplementation.innerHTML = "تطبيقات EHS";
indexServicesImplementationDescription.innerHTML = "حن نمتلك الكثير من الخبرة في إدارة وتشغيل نظام ساب للصحة والسلامة بالإضافة للتحويل لنظام ECC6<br>"+
 "<b>قراءة المزيد</b>";



indexServicesEHSsupportSubheader.innerHTML = "دعم EHS";

indexServicesEHSsupportDescription.innerHTML = "نحن نحمل عنكم عناء التغيير المستمر للمستندات و لشكل البيانات خلال التغييرات المستمرة للتشريعات المتعلقة ب<br>"+
"<b>قراءة المزيد</b>";

indexServicesPhrasecatalog.innerHTML = "مكتبة التعابير";
indexServicesPhrasecatalogDescription.innerHTML = " قسم الصحة والسلامة – أمان المنتج يحتوي أيضا على جمع وإدارة البيانات اللازمة للمنتجات والمواد من  أوراق..<br>"+
 "<b>قراءة المزيد</b>";

indexServicesTraining.innerHTML = "تدريب";
indexServicesTrainingDescription.innerHTML = "يتم تقديم التدريب لجميع أقسام نظام ساب للصحة والسلامة بحسب الطلب ..<br>"+
"<b>قراءة المزيد</b>";

indexServicesEHStoolsSubheader.innerHTML = "أدوات EHS";
indexServicesEHStoolsDescription.innerHTML = " أدوات ساب للصحة والسلامة ,أداة التجميع للموردين SDB's / المواد الخطرة , أداة DYN-WWI لدينامية السيطرة وإدارة التوليد الجماعي...<br>"+
"<b>قراءة المزيد</b>";


indexServicesChemistryserviceSubheader.innerHTML = "خدمات كيميائية"
indexServicesChemistryserviceDescription.innerHTML = " <br>"+
"<b>قراءة المزيد</b>";


indexServicesEHSmanual.innerHTML = "دليل EHS";
indexServicesEHSmanualDescription.innerHTML = "خطوة خطوة يظهر لك كيفية العمل في مناطق مختلفة من البرمجيات. يتم شرح العمليات ووظائف SAP للصحة والسلامة وإعدادات التخصيص المهمة..<br>"+
"<b>قراءة المزيد</b>";

//MISSION

indexMissionMainheader.innerHTML = "مهمتنا";
indexMissionMainheaderDescription.innerHTML = "لخدمة عملائنا أفضل من خلال تقديم حلول أعمال ميسورة التكلفة وفعالة ومبتكرة.";
 $('#index-mission-mainheader-description').css({'float': 'right'});


indexMissionSubheader1.innerHTML = "توفير حلول الأعمال الراقية بأسعار معقولة";
indexMissionSubheader2.innerHTML = "إدراكا من الأخلاق بينما تكون فعالة من حيث التكلفة<br>";
indexMissionSubheader3.innerHTML = "أولوية متساويةلجميع";
indexMissionSubheader4.innerHTML = " حقق الأمان مع مبادئ ساب للصحة والسلامة ";
$('#index-mission-subheader4').css({'float':'right'});
indexMissionDescription.innerHTML = " كشركة أنتم مرتبطون بالالتزام بمتطلبات قانونية فيما يتعلق بحماية البيئة, أمان بيئة العمل و إدارة المخلفات والمواد الخطرة  "+
									"مع بيئة ساب للصحة والسلامة يمكنكم إدارة جميع المسؤوليات لمطابقة المعايير المحلية والعالمية فيما يخص حماية البيئة, سلامة بيئة العمل, صحة بيئة العمل, إدارة المواد "+
									"الكيميائية, إدارة المخلفات الكيميائية والإدارة في شركتكم. يمكننا مساعدتكم في<a href='implementation.php?lang=ar'> تركيب وتنفيذ نظام ساب للصحة والسلامة</a> وأيضا في <a href='support.php?lang=ar'>الإعداد و التطوير</a> لأنظمة ساب  "+
									"الموجودة سابقا لديكم بالإضافة للاستشارة والدعم  "+
									"من خلال <a href='EHS_manual.php?lang=ar'>خبرتنا الطويلة</a> <a href='index.php?lang=ar#team'>وفريقنا المختص</a> بإمكاننا تقديم الحلول المثلى والمتوافقة مع نسختكم من نظام الساب."+
									" نضمن لكم بالطبع أعلى درجات الاحترافية بالتعامل مع طلباتكم. كل طلب سيتم التعامل معه بحسب معايير الجودة الخاصة بشركتنا مع العتاية الأمثل والوثوقية الأعلى. "+
									"مع موقعنا الجدبد <a href='phrasencatalog.php?lang=ar'>نظام مكتبة التعابير</a> يمكننا من خلاله تقديم الدعم لكم في ترجمة ومطابقة العبارات في نظام ساب للصحة والسلامة و نقدم من خلاله منصة لتبادل العبارات."+
									"بالإضافة لذلك يمكنكم ضبط مجالات أخرى في نظام ساب للصحة والسلامة من خلال نظام <a href='phrasencatalog.php?lang=ar'>مكتبة العبارات</a> مثل أشجار المزايا. ";
$('#index-mission-description').css({'float':'right'});
//TEAM

indexTeamMainheader.innerHTML = "فريقنا";
indexTeamSubheader1Description.innerHTML = "Dr. Schuur حاصل على شهادة الدوكتوراة في الكيمياء و هو الشريك اللإداري للشركة. منذ عام 1993 يعمل الدكتور في مجال تطبيقات قواعد البيانات في مجال الكيمياء ومنذ العام 1998 يعمل في مجال الامتثالات الكيميائية في مجالات الصناعات الكيميائية والصيدلانية وخارجها. ";

//indexTeamSubheader2Description.classList.add("texttosmall");
indexTeamSubheader2Description.innerHTML = "كلاوس راينهارت هو خبير بارز في إدارة البضائع الخطرة إهس ساب. منذ عام 1999 قام بعدد لا يحصى من مشاريع البضائع الخطرة الناجحة في جميع أنحاء العالم. انه يقدم نظام الدراية، عملية الدراية، بالإضافة إلى المعرفة التنظيمية العميقة.";


indexTeamSubheader3Description.innerHTML = "انضم مارك بشمان إلى ريمبيدو غمب كمدير مالي في عام 2015. واكتسب خبرة قوية في الامتثال التنظيمي والتدقيق خلال دراسته. منذ أول يوم له في ريمبيدو غمب بدأ العمل مع ساب إهس وهو حاليا المطور الرئيسي لأداة تسجيل سدز المورد.";
indexTeamSubheader4Description.innerHTML = "الدكتور هافانغ جين يحمل درجة الدكتوراه. في الكيمياء البيئية لجامعة أولدنبورغ، ألمانيا. انضم الدكتور جين ريميبيدو غمب في عام 2012 على أساس دوام جزئي. شاركت في 3 مشاريع البيئة والصحة والسلامة وتطوير المورد أداة تسجيل سدز. وعلاوة على ذلك تعمل على ترجمة البيانات إهس إلى الصينية وجمع البيانات إهس.";

indexTeamReadmore.innerHTML = "قراءة المزيد<";



//PARTNER
indexPartnerHeader1.innerHTML = "شريك";
indexPartnerHeader2.innerHTML = "شريك";



//TESTIMONIAL

//indexTestimonialMainheader.innerHTML = "Témoignage";
//indexTestimonialReadmore1.innerHTML = "قراءة المزيد<";
//indexTestimonialReadmore2.innerHTML = "قراءة المزيد<";
//indexTestimonialReadmore3.innerHTML = "قراءة المزيد<";


//CONTACT
indexContactusMainheader.innerHTML = "اتصل بنا";
indexContactusSubheader1.innerHTML = "<b>اتصل بنا</b>";

indexContactuslink1.innerHTML = "أداة كشف";
indexContactuslink2.innerHTML = "كتيب SAP® EH&S في SAP الصحافة";
indexContactuslink3.innerHTML = "هيئة التحرير";
indexContactuslink4.innerHTML = "سياسات";
indexContactuslink5.innerHTML = "خريطة الموقع";
indexContactuslink6.innerHTML = "فرص عمل";
}



if(getLanguage=="es")
{
//NAV
navHome.innerHTML = "Inicio";
navService.innerHTML = "Servicios";
navMission.innerHTML = "Misión";
navTeam.innerHTML = "Nuestro equipo";
//navTestimonial.innerHTML = "témoignage";
navPrivacy.innerHTML = "Política de privacidad";
currentLanguage.innerHTML = "<b><span>ES </span></b>"+
							"<img src='assets/icon/es-icon.png'>";



//INTRO
rimpidoIntro.innerHTML = "rimpido GmbH ofrece servisios de consejería para el módulo-SAP Environment, Health & Safety (SAP EHS). Estos servicios son prestados a medianas y grandes a nivel mundial.Nosotros poseemos años de experiencia en la implementación y actualización sistemática del sistema SAP-EHS.";
buttonContact.innerHTML = "Contacto";


//services function

indexServicesMainheader.innerHTML = "Servicios";

indexServicesImplementation.innerHTML = "EHS-Implementacin";
indexServicesImplementationDescription.innerHTML = "Tenemos una amplia experiencia en la introducción / implementación de módulos de SAP EHS y la migración a ECC 6<br>"+
 "<b>Lee mas</b>";


indexServicesEHSsupportSubheader.innerHTML = "EHS-Soporte";
indexServicesEHSsupportDescription.innerHTML = "Nos ocupamos de la modificación periódica de los documentos y estructuras de datos a los cambios en curso en la legislación<br>"+
"<b>Lee mas</b>";

indexServicesPhrasecatalog.innerHTML = "Catlogo de frases";
indexServicesPhrasecatalogDescription.innerHTML = "El campo de acción de seguridad de los productos usando EHS incluye también la recogida y gestión de los datos necesarios sobre las sustancias y productos para la creación <br>"+
"<b>Lee mas</b>";

indexServicesTraining.innerHTML = "Cursos";
indexServicesTrainingDescription.innerHTML = "Los cursos en cualquiera de los temas de SAP EH&S serán preparados básicamente en función de las necesisades del cliente.<br>"+
"<b>Lee mas</b>";

indexServicesEHStoolsSubheader.innerHTML = "EHS-Herramientas";
indexServicesEHStoolsDescription.innerHTML = "Herramienta de detección para MSDS de Proveedores / Sustancias peligrosas, Herramienta DYN-WWI para el control y gestión dinámica de generacion de informes en masa,  gest...<br>"+
"<b>Lee mas</b>";


indexServicesChemistryserviceSubheader.innerHTML = "Servicios qumicos";
indexServicesChemistryserviceDescription.innerHTML = " <br>"+
"<b>Lee mas</b>";


//indexServicesEHSmanual.innerHTML = "دليل EHS";
indexServicesEHSmanualDescription.innerHTML = "Se muestra de forma cuidadosa cómo trabajar en las diversas áreas del software. Se presentan los procesos y funciones de SAP EHS..<br>"+
"<b>Lee mas</b>";

//MISSION

indexMissionMainheader.innerHTML = "Nuestra Misión";
//indexMissionMainheaderDescription.innerHTML = "لخدمة عملائنا أفضل من خلال تقديم حلول أعمال ميسورة التكلفة وفعالة ومبتكرة.";

//indexMissionSubheader1.innerHTML = "توفير حلول الأعمال الراقية بأسعار معقولة";
//indexMissionSubheader2.innerHTML = "إدراكا من الأخلاق بينما تكون فعالة من حيث التكلفة<br>";
//indexMissionSubheader3.innerHTML = "أولوية متساويةلجميع";

indexMissionSubheader4.innerHTML = "Siéntase seguro gestionando su empresa con el uso de SAP EHS Standards";
indexMissionDescription.innerHTML = "Como empresa esta usted obliglado a cumplir los reglamentos legales acorde al cuidado del médio ambiente, la seguriad del trabajo, gestión de desechos "+
									"y productos peligrosos, entre otros. "+
									"Con SAP Environment, Health & Safety (SAP EHS) resuelve usted una amplia gama de tareas ensu empresa que facilitan el ajuste las actividades cuidado "+
									"del medio ambiente, seguridad y medicina del trabajo asi como la gestión de desechos, de materiales peligrosos y su transporte con los estadares legales "+
									"nacionales e internacionales. Nosotros podemos ayudarle en ambos, <a href='implementation.php?lang=es'>la introducción de SAP EHS</a> y también <a href='support.php?lang=es'>en ajustes regulares y actualizaciones</a> "+
									"en los sistemas SAP-EHS a travéz de ofrecerles consejería y ayuda.<br><br>"+

									"Debido al <a href='EHS_manual.php?lang=es'>los años de experiencia</a> <a href='index.php?lang=es#team'>nuestros empleados</a> nosotros poseemos exelentes soluciones para encausarle una instalacion de SAP-EHS "+
									"ahorrandole problemas o encrusijadas.<br><br>"+

									"Naturalmente, cada tarea asignada a rimpido GmbH será tomada y ejecutada acorde a nuestro sistema de calidad interno con la mayor eficiencia y"+
									"efectividad.<br><br>"+

									"Mit unserem neuen <a href='phrasencatalog.php?lang=es'>Phrasenkatalog-System</a> können wir Sie außerdem bei Übersetzungen und beim Abgleichen Ihrer Phrasen für das SAP-EHS-System "+
									"unterstützen und eine Plattform zum Austauschen von Phrasen anbieten. Zusätzlich können Sie auch andere Bereiche des SAP-EHS-Systems wie "+
									"Eigenschaftsbäume mit dem <a href='phrasencatalog.php?lang=es'>Phrasenkatalog-System</a> komfortabler und schneller anpassen.";


//TEAM

indexTeamMainheader.innerHTML = "Nuestro Equipo";
indexTeamSubheader1Description.innerHTML = "El señor Schuur es Doctor en Ciencias (Química) y gerente y propietario de rimpido GmbH. El se ocupa desde 1993 del diseño, uso e implementación de Bases de Datos en química y desde 1998 se ancarga de implementar las normativas y regulaciones para el uso de productos...";
//indexTeamSubheader2Description.classList.add("texttosmall");
indexTeamSubheader2Description.innerHTML = "Klaus Reinhardt es un experto líder en SAP EHS Gestión de Mercancías Peligrosas. Desde 1999 hizo innumerables proyectos de Mercancías Peligrosas con éxito en todo el mundo. Ofrece know-how del sistema, know-how del proceso, más profundos conocimientos regulatorios.";

indexTeamSubheader3Description.innerHTML = "Marc Bachman se unió a la rimpido GmbH como CFO en 2015. Obtuvo una sólida experiencia en cumplimiento normativo y auditoría durante sus estudios. Desde su primer día en la rimpido GmbH ha comenzado a trabajar con SAP EHS y actualmente es el desarrollador líder de la herramienta de grabación SDS del proveedor.";
indexTeamSubheader4Description.innerHTML = "<font size='2px'>Dr. Huafang Jin tiene un Ph.D. en química ambiental de la Universidad de Oldenburg, Alemania. Dr. Jin se unió a la rimpido GmbH en 2012 a tiempo parcial. Participó en 3 proyectos EHS y en el desarrollo de la herramienta de grabación SDS del proveedor. Además, trabaja en la traducción de datos EHS en chino y en la recopilación de datos EHS.</font>";
indexTeamReadmore.innerHTML = "Lee mas";


//PARTNER
indexPartnerHeader1.innerHTML = "Socio";
indexPartnerHeader2.innerHTML = "Socio";



//TESTIMONIAL

//indexTestimonialMainheader.innerHTML = "Témoignage";
//indexTestimonialReadmore1.innerHTML = "Lee mas";
//indexTestimonialReadmore2.innerHTML = "Lee mas";
//indexTestimonialReadmore3.innerHTML = "Lee mas";


//CONTACT
indexContactusMainheader.innerHTML = "Contacto";
indexContactusSubheader1.innerHTML = "<b>Contacto</b>";

indexContactuslink1.innerHTML = "Herramienta de Detección";
indexContactuslink2.innerHTML = "Manual SAP EH & S de SAP Press";
indexContactuslink3.innerHTML = "Huella";
indexContactuslink4.innerHTML = "Política de Privacidad";
indexContactuslink5.innerHTML = "Mapa del Sitio";
indexContactuslink6.innerHTML = "Carrera";
}



if(getLanguage=="zh")
{
//NAV
navHome.innerHTML = "首页";
navService.innerHTML = "的服务";
navMission.innerHTML = "我们的任务";
navTeam.innerHTML = "我们的团队";
//navTestimonial.innerHTML = "témoignage";
navPrivacy.innerHTML = "隐私政策";
currentLanguage.innerHTML = "<b><span>ZH </span></b>"+
							"<img src='assets/icon/zh-icon.png'>";



//INTRO
rimpidoIntro.innerHTML = "rimpido GmbH 为世界各地不同的中等和大型企业提供SAP 模式下环境，健康和安全（SAP EHS）的咨询和服务。在SAP EHS系统的建立和定期维护方面我们具备几十年的丰富经验。 ";
buttonContact.innerHTML = "联系方式";


//services function

indexServicesMainheader.innerHTML = "的服务";

indexServicesImplementation.innerHTML = "EHS-实施";
indexServicesImplementationDescription.innerHTML = "我们在引进/实施SAP EHS模式和依照ECC6迁移方面拥有丰富的经验，也很<br>"+
 "<b>阅读更多</b>";


indexServicesEHSsupportSubheader.innerHTML = "EHS-支援工具";
indexServicesEHSsupportDescription.innerHTML = "我们能为您对文件和数据结构进行定期的调整，使其符合当前化学品法规的变动，比如REACH　规则和GHS/CLP法规。<br>"+
"<b>阅读更多</b>";

indexServicesPhrasecatalog.innerHTML = "短句目录";
indexServicesPhrasecatalogDescription.innerHTML = "EHS产品安全还包括收集和管理生产例如物质和产品的必要数据：材料安全数据表（MSDS）。<br>"+
"<b>阅读更多</b>";

indexServicesTraining.innerHTML = "培训";
indexServicesTrainingDescription.innerHTML = "原则上我们提供所有SAP EHS 领域内客户所需要的培训。<br>"+
"<b>阅读更多</b>";

indexServicesEHStoolsSubheader.innerHTML = "EH&S 工具";
indexServicesEHStoolsDescription.innerHTML = "供应商SDB /有害物质记录工具,  DYN-WWI用于批量生成的动态控制和管理工具,  管理SAP EH＆S专家批量运行的专家工具";
"<b>阅读更多</b>";


indexServicesChemistryserviceSubheader.innerHTML = "化学服务";
indexServicesChemistryserviceDescription.innerHTML = " <br>"+
"<b>阅读更多</b>";


indexServicesEHSmanual.innerHTML = "EHS-手册";
//indexServicesEHSmanualDescription.innerHTML = "Se muestra de forma cuidadosa cómo trabajar en las diversas áreas del software. Se presentan los procesos y funciones de SAP EHS..<br>"+
"<b>阅读更多</b>";

//MISSION

indexMissionMainheader.innerHTML = "我们的任务";
//indexMissionMainheaderDescription.innerHTML = "لخدمة عملائنا أفضل من خلال تقديم حلول أعمال ميسورة التكلفة وفعالة ومبتكرة.";

//indexMissionSubheader1.innerHTML = "توفير حلول الأعمال الراقية بأسعار معقولة";
//indexMissionSubheader2.innerHTML = "إدراكا من الأخلاق بينما تكون فعالة من حيث التكلفة<br>";
//indexMissionSubheader3.innerHTML = "أولوية متساويةلجميع";

indexMissionSubheader4.innerHTML = "SAP EHS 确保实现标准化";
indexMissionDescription.innerHTML = "生产企业有义务遵守环境保护，工作安全，废料和危险品管理方面的法律法规。 "+
									"通过SAP的环境，健康和安全（SAP EHS）系统您可以调控整个工作领域，使您的企业符合国内和国际标准在环境保护，工作安全，职业病，危险材料管 "+
									"理，危险品管理和废料管理方面的要求。我们不仅能为您在<a href='implementation.php?lang=zh'>建立SAP EHS系统</a>时提供咨询和帮助，在对已有SAP EHS系统的<a href='support.php?lang=zh'>调整和升级更新</a>上也能提供全面 "+
									"的咨询和服务。 <br><br>"+

									"我们的技术员具备<a href='index.php?lang=zh#team'>多年的工作经验</a>，能够确保您在建立SAP EHS系统时避免障碍和麻烦，为您提供一个量身定制的方案。当然 ，每一项来自客户的委任我们 "+
									"都会依照本公司内部的质量标准尽心尽力尽责的完成。 <br><br>"+

									"通过使用本公司最新的<a href='phrasencatalog.php?lang=zh'>短句目录体系</a>我们还能为您翻译和核对修改短句，使其符合SAP EHS系统，同时为您提供一个短句交换的平台。此外，您也可以让 "+
									"SAP EHS系统的其他领域，比如性质树，更方便更快地调整并融入到<a href='phrasencatalog.php?lang=zh'>短句目录体系</a>。";
//TEAM

indexTeamMainheader.innerHTML = "我们的团队";
indexTeamSubheader1Description.innerHTML = "Schuur 化学博士是rimpido GmbH 的总经理。1993年以来他 致力于数据库在化学领域的应用。1998年以后开始从事于化学/药品等工业的化学品法制监管。";
//indexTeamSubheader2Description.classList.add("texttosmall");

indexTeamSubheader2Description.innerHTML = "Klaus Reinhardt是SAP EHS危险品管理的领先专家。 自1999年以来，他在世界各地成功完成了危险品项目。 他提供系统知识，流程知识，以及深厚的监管知识。";

indexTeamSubheader3Description.innerHTML = "Marc Bachman于2015年加入rimpido GmbH担任首席财务官。他在学习期间获得了强大的法规遵从和审计专业知识。 自从他在rimpido有限公司的第一天，他开始与SAP EHS合作，他目前是供应商SDS记录工具的主要开发商。";

indexTeamSubheader4Description.innerHTML = "金华方博士拥有博士学位。 在德国奥登堡大学的环境化学学士学位。 金博士于2012年加入了rimpido有限公司。 她参加了3个EHS项目，并开发了供应商SDS记录工具。 此外，她致力于将EHS数据翻译成中文和收集EHS数据。";
indexTeamReadmore.innerHTML = "阅读更多";

//PARTNER
indexPartnerHeader1.innerHTML = "伙伴";
indexPartnerHeader2.innerHTML = "伙伴";


//TESTIMONIAL

//indexTestimonialMainheader.innerHTML = "Témoignage";
//indexTestimonialReadmore1.innerHTML = "阅读更多";
//indexTestimonialReadmore2.innerHTML = "阅读更多";
//indexTestimonialReadmore3.innerHTML = "阅读更多";


//CONTACT
indexContactusMainheader.innerHTML = "联系方式";
indexContactusSubheader1.innerHTML = "<b>联系方式</b>";

indexContactuslink1.innerHTML = "检测工具";
indexContactuslink2.innerHTML = "手册SAP®EH＆S在SAP新闻";
indexContactuslink3.innerHTML = "版权声明";
indexContactuslink4.innerHTML = "隐私政策";
indexContactuslink5.innerHTML = "网站地图";
indexContactuslink6.innerHTML = "人才招聘";
}


if(getLanguage=="ja")
{
//NAV
navHome.innerHTML = "トップページ";
navService.innerHTML = "サービス内容";
navMission.innerHTML = "我々の使命";
navTeam.innerHTML = "私たちのチーム";
navTestimonial.innerHTML = "証言";
navPrivacy.innerHTML = "個人情報保護方針";
currentLanguage.innerHTML = "<b><span>JA </span></b>"+
							"<img src='assets/icon/ja-icon.png'>";



//INTRO
rimpidoIntro.innerHTML = "rimpido社は、中規模および大規模企業に向けSAPモジュール環境・衛生・安全（SAP EHS）のSAPコンサルティングを世界中で提供しています。弊社はSAP EHSシステムのインプリメントと定期メンテナンスにおいて長年の経験と実績があります。";
buttonContact.innerHTML = "お問い合わせ";


//services function

indexServicesMainheader.innerHTML = "サービス内容";

indexServicesImplementation.innerHTML = "EHSインプリメント";
indexServicesImplementationDescription.innerHTML = "弊社は、SAP EHSモジュールの導入/インプリメントとUnicode（ユニコード）変換を含むECC6への移行に関して豊富な経験がありま<br>"+
 "<b>続きを読む</b>";


indexServicesEHSsupportSubheader.innerHTML = "EHSサポート";
indexServicesEHSsupportDescription.innerHTML = "弊社では、REACH指令、GHS/CLP指令のような化学物質の法規制の文書やデータ構造の定期的な変更に対応します。<br>"+
"<b>続きを読む</b>";

indexServicesPhrasecatalog.innerHTML = "フレーズライブラリ";
indexServicesPhrasecatalogDescription.innerHTML = "EHS製品の安全性は、例えば安全データシートを作成するための物質や製品に必要なデータの記録と管理も含まれます。<br>"+
"<b>続きを読む</b>";

indexServicesTraining.innerHTML = "基礎トレーニング";
indexServicesTrainingDescription.innerHTML = "弊社ではSAP EH&Sのあらゆる分野へのお問い合わせに関し、以下の研修を行っています。。<br>"+
"<b>続きを読む</b>";

indexServicesEHStoolsSubheader.innerHTML = "EH&Sツール";
indexServicesEHStoolsDescription.innerHTML = "サプライヤーSDB’s / 有害物質の記録ツール, ダイナミックコントロールとバルク生成の管理のためのDYN-WWIツール, ダイナミックコントロールとSAP EH&Sエキスパートのバルク実行の管理<br>"+
"<b>続きを読む</b>";


indexServicesChemistryserviceSubheader.innerHTML = "化学サービス";
//indexServicesChemistryserviceDescription.innerHTML = " <br>"+
"<b>続きを読む</b>";


indexServicesEHSmanual.innerHTML = "EHS-マニュアル";
indexServicesEHSmanualDescription.innerHTML = "どのようにソフトウェアのさまざまな領域で作業を行っているかを段階的に説明しています。<br>"+
"<b>続きを読む</b>";

//MISSION

indexMissionMainheader.innerHTML = "我々の使命";
//indexMissionMainheaderDescription.innerHTML = "لخدمة عملائنا أفضل من خلال تقديم حلول أعمال ميسورة التكلفة وفعالة ومبتكرة.";

//indexMissionSubheader1.innerHTML = "توفير حلول الأعمال الراقية بأسعار معقولة";
//indexMissionSubheader2.innerHTML = "إدراكا من الأخلاق بينما تكون فعالة من حيث التكلفة<br>";
//indexMissionSubheader3.innerHTML = "أولوية متساويةلجميع";

indexMissionSubheader4.innerHTML = "SAP EHS Standardsに基づいて安全に対応";
indexMissionDescription.innerHTML = "企業として、環境保護、労働安全、廃棄物や有害物質の管理に関する法的規制を遵守する義務があります。 "+
									"SAP 環境・衛生・安全 (SAP EHS) と環境保護、労働安全、産業医学、有害物質管理、危険物管理や廃棄物管理の国内、および国際的な基準を満たすため "+
									"にすべてのタスク領域を調節します。弊社は<a href='implementation.php?lang=ja'>SAP EHSのインプリメント</a>だけでなく、既存のSAP EHSシステムの<a href='support.php?lang=ja'>調整とアップデート</a>両方の包括的なアド "+
									"バイスや支援を提供いたします。<br><br>"+

									"弊社<a href='index.php?lang=ja#team'>スタッフ</a>の<a href='EHS_manual.php?lang=ja'>長年の経験</a>によって、SAP EHSインストールでの落とし穴や問題に対し確実に対応、カスタマイズされたソリューションを提供すること "+
									"ができます。 "+
									"すべてのご依頼に対して細心の注意と信頼性とともに、社内品質基準に従って行います。<br><br>"+

									"弊社の新しい<a href='phrasencatalog.php?lang=ja'>フレーズライブラリシステム</a>ではさらに翻訳、およびあなたのフレーズがSAP EHSシステムと一致するかサポートすることができ、フレー "+
									"ズを交換するためのプラットフォームを提供することができます。また、<a href='phrasencatalog.php?lang=ja'>フレーズライブラリシステム</a>のプロパティツリーに、より快適で速くSAP EHS "+
									"システムの他の領域を適応させることができます。";

//TEAM

indexTeamMainheader.innerHTML = "私たちのチーム";
indexTeamSubheader1Description.innerHTML = "Dr.Schuurは、化学博士号を取得し、rimpido社の社主兼社長である。1993年から化学におけるデータベースの使用、1998年から化学/製薬業界の分野における化学物質（規制）コンプライアンスにさらに取り組んでいる。";
//indexTeamSubheader2Description.classList.add("texttosmall");

indexTeamSubheader2Description.innerHTML = "Klaus Reinhardtは、SAP EHS危険物管理の専門家です。 1999年以来、彼は世界中で無数の成功した危険物プロジェクトを行ってきました。 彼はシステムノウハウ、プロセスノウハウ、深刻な規制知識を提供しています。";

indexTeamSubheader3Description.innerHTML = "Marc Bachmanは、2015年に最高財務責任者（CFO）としてrimpido社に入社。在学中、企業コンプライアンスの高度な専門知識を得た。rimpido社で彼の最初の日以来、SAP EHSによる作業を始め、現在はサプライヤーSDS記録ツールのリード開発者である。";

indexTeamSubheader4Description.innerHTML = "Dr. Huafang Jinは、オルデンブルク大学 (ドイツ)で環境化学博士号を取得し、2012年よりrimpido社に非常勤として入社。彼女は3つのEHSプロジェクトとサプライヤーSDS記録ツールの開発に参加、さらにEHSデータを中国語への翻訳、EHSデータの収集に取り組んでいる。";
indexTeamReadmore.innerHTML = "続きを読む";


//PARTNER
indexPartnerHeader1.innerHTML = "パートナー";
indexPartnerHeader2.innerHTML = "パートナー";
$('#index-partner-header1').css({'font-size': '30px'});
$('#index-partner-header2').css({'font-size': '30px'});



//TESTIMONIAL

indexTestimonialMainheader.innerHTML = "証言";
//indexTestimonialReadmore1.innerHTML = "続きを読む";
//indexTestimonialReadmore2.innerHTML = "続きを読む";
//indexTestimonialReadmore3.innerHTML = "続きを読む";


//CONTACT
indexContactusMainheader.innerHTML = "お問い合わせ";
indexContactusSubheader1.innerHTML = "<b>お問い合わせ</b>";

indexContactuslink1.innerHTML = "検出ツール";
indexContactuslink2.innerHTML = "SAP押すだけで、ハンドブックSAP®EH＆S";
indexContactuslink3.innerHTML = "インプリント";
indexContactuslink4.innerHTML = "個人情報保護方針";
indexContactuslink5.innerHTML = "サイトマップ";
indexContactuslink6.innerHTML = "キャリア";
}