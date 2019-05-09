var url_string = window.location.href;
var url = new URL(url_string);
var getLanguage = url.searchParams.get('lang');

///////////////Nav Bar//////////////////
var navHome = document.getElementById('nav-home');
var navMission = document.getElementById('nav-mission');
var navServices = document.getElementById('nav-services');
var navTeam = document.getElementById('nav-team');
var navTestimonial = document.getElementById('nav-testimonial');
var navContact = document.getElementById('nav-contact');
var navPrivacy = document.getElementById('nav-privacy');
var currentLang = document.getElementById('currentLang');



var manualMainHeader = document.getElementById('manual-main-header');
var manualSubHeader1 = document.getElementById('manual-sub-header1');
var manualDesc1 = document.getElementById('manual-desc1');
var manualSubDesc1 = document.getElementById('manual-sub-desc1');
var manualSubDesc2 = document.getElementById('manual-sub-desc2');
var manualSubDesc3 = document.getElementById('manual-sub-desc3');
var manualSubDesc4 = document.getElementById('manual-sub-desc4');
var manualSubDesc5 = document.getElementById('manual-sub-desc5');
var manualSubDesc6 = document.getElementById('manual-sub-desc6');
var manualSubDesc7 = document.getElementById('manual-sub-desc7');
var manualSubDesc8 = document.getElementById('manual-sub-desc8');
var manualSubDesc9 = document.getElementById('manual-sub-desc9');
var manualDesc2 = document.getElementById('manual-desc2');
var manualSubHeader2 = document.getElementById('manual-sub-header2');
var manualDesc3 = document.getElementById('manual-desc3');
var manualDesc4 = document.getElementById('manual-desc4');


//footer
var footerMainHeader = document.getElementById('footer-main-header');
var footerSubHeader1 = document.getElementById('footer-sub-header1');
var footerSubHeader2 = document.getElementById('footer-sub-header2');
var footerSubHeader3 = document.getElementById('footer-sub-header3');
var footerSubDesc1 = document.getElementById('footer-sub-desc1');
var footerSubDesc2 = document.getElementById('footer-sub-desc2');
var footerSubDesc3 = document.getElementById('footer-sub-desc3');
var footerSubDesc4 = document.getElementById('footer-sub-desc4');
var footerSubDesc5 = document.getElementById('footer-sub-desc5');
var footerSubSesc6 = document.getElementById('footer-sub-desc6');





//////ENGLISH///////

if(getLanguage=="en")
{
	window.location="EHS_manual.php";
}



///GERMAN///
else if(getLanguage=="de")
{
//var dropdownMenuDE = document.getElementById('de');
//dropdownMenuDE.onclick = function(){

navHome.innerHTML = "Startseite";
navMission.innerHTML = "Unsere Mission"; 
navServices.innerHTML = "Dienstleistungen";
navTeam.innerHTML = "Unser Team";
navTestimonial.innerHTML = "Zeugnis";
navContact.innerHTML = "Kontakt";
navPrivacy.innerHTML = "Datenschutz";
currentLang.innerHTML = "<b><span>DE</span></b>&nbsp;"+
			"<img src='assets/icon/de-icon.png'>";

footerMainHeader.innerHTML = "Kontakt";
footerSubHeader1.innerHTML = "KONTAKT";
footerSubHeader2.innerHTML = "QUICK LINKS";
footerSubHeader3.innerHTML = "INFOS";
footerSubDesc1.innerHTML = "Erfassungstool";
footerSubDesc2.innerHTML = "Handbuch Zu SAP EH&S ";
footerSubDesc3.innerHTML = "Impressum";
footerSubDesc4.innerHTML = "Datenschutz";
footerSubDesc5.innerHTML = "Sitemap";
footerSubSesc6.innerHTML = "Karriere";

	
manualMainHeader.innerHTML = "EHS Handbuch";
manualSubHeader1.innerHTML = "Das umfassende Handbuch zu SAP Environment, Health and Safety Management";
manualDesc1.innerHTML = "<a href='CEO.php?lang=de'>Der Geschäftsführer der rimpido GmbH, Dr. Jan Schuur</a>, ist Mitautor des Buches 'SAP Environment, Health, and Safety Management - Das umfassende Handbuch', erschienen bei SAP Press. Dieses Handbuch gibt einen umfassenden Einblick in die umfangreichen Themen der SAP EHS Bereiche:";
manualSubDesc1.innerHTML = "Spezifikationsverwaltung";
manualSubDesc2.innerHTML = "Produktsicherheit";
manualSubDesc3.innerHTML = "Substance Volume Tracking";
manualSubDesc4.innerHTML = "Gefahrgutabwicklung";
manualSubDesc5.innerHTML = "Arbeitsbereichsverwaltung";
manualSubDesc6.innerHTML = "Gefahrstoffmanagement";
manualSubDesc7.innerHTML = "Unfallmanagement";
manualSubDesc8.innerHTML = "Vorfallmanagement";
manualSubDesc9.innerHTML = "Arbeitsmedizin";

manualDesc2.innerHTML = "Schritt für Schritt wird Ihnen gezeigt, wie Sie in den einzelnen Bereichen mit der Software arbeiten. Die Prozesse und Funktionen des SAP EHS sowie wichtige Customizing-Einstellungen werden erläutert. Hierzu gehört auch eine ausführliche Beschreibung der Spezifikationsverwaltung, die eine wesentliche Basis des SAP EHS Managements darstellt.";
manualSubHeader2.innerHTML = "";
manualDesc3.innerHTML = " Eine <a href='https://s3-eu-west-1.amazonaws.com/gxmedia.galileo-press.de/leseproben/2557/sappress_sap_environment_health_safety_mngmt.pdf' target='_blank'> Leseprobe </a>gefällig?";
manualDesc4.innerHTML = "Weitere Informationen finden Sie hier:<a href='https://www.rheinwerk-verlag.de/sap-environment-health-and-safety-management_2557/' target='_blank'>Handbuch zu SAP® EH&S bei SAP-Press</a>";
}


////FRENCH////
else if(getLanguage=="fr")
{

navHome.innerHTML = "Homepage";
navMission.innerHTML = "Notre Mission"; 
navServices.innerHTML = "Services";
navTeam.innerHTML = "Nos Experts";
navTestimonial.innerHTML = "Témoignage";
navContact.innerHTML = "Contact";
navPrivacy.innerHTML = "Confidentialité";
currentLang.innerHTML = "<b><span>FR</span></b>&nbsp;"+
			"<img src='assets/icon/fr-icon.png'>";

footerMainHeader.innerHTML = "Contact";
footerSubHeader1.innerHTML = "CONTACT";
footerSubHeader2.innerHTML = "QUICK LINKS";
footerSubHeader3.innerHTML = "INFOS";
footerSubDesc1.innerHTML = "L'outil d'enregistrement";
footerSubDesc2.innerHTML = "Handbuch Zu SAP EH&S ";
footerSubDesc3.innerHTML = "L'empreint";
footerSubDesc4.innerHTML = "Confidentialité";
footerSubDesc5.innerHTML = "Sitemap";
footerSubSesc6.innerHTML = "Carrière";

	
manualMainHeader.innerHTML = "Manual EHS";
manualSubHeader1.innerHTML = "Le manuel complet du SAP Environment, Health and Safety Management";
manualDesc1.innerHTML = '<a href="CEO.php?lang=fr">Dr Jan Schuur, le président directeur générale du rimpido GmbH</a>, et co-auteur du livre "SAP Environment, Health, and Safety Management - Das umfassende Handbuch" publié par SAP Press. Ce manuel donne un aperçu complet des sujets SAP EHS suivants:';
manualSubDesc1.innerHTML = "Gestion des spécifications";
manualSubDesc2.innerHTML = "Sécurité des produits";
manualSubDesc3.innerHTML = "Suivi du volume de substances";
manualSubDesc4.innerHTML = "Gestion des marchandises dangereuses";
manualSubDesc5.innerHTML = "Gestion des zones de travail";
manualSubDesc6.innerHTML = "Gestion des substances dangereuses";
manualSubDesc7.innerHTML = "Enregistrement des incidents/accidents";
manualSubDesc8.innerHTML = "Santé au travail";
manualSubDesc9.innerHTML = "Gestion des déchets";

manualDesc2.innerHTML = "Les auteurs éxpliquent étape par étape comment vous pouvez travailler avec les modules de SAP EHSM. Les processus et les fonctions de SAP EHS sont expliqués ainsi que les options importantes du Customizing. Cela inclut également une description détaillée de la gestion des spécifications, qui constitue une base essentielle de SAP EHS Management.";
manualSubHeader2.innerHTML = "<a href='https://s3-eu-west-1.amazonaws.com/gxmedia.galileo-press.de/leseproben/2557/sappress_sap_environment_health_safety_mngmt.pdf' target='_blank'>Un extrait</a>.";
manualDesc3.innerHTML = "Vous trouvez plus d'informations sur le livre ici:<a href='https://www.rheinwerk-verlag.de/sap-environment-health-and-safety-management_2557/' target='_blank'>Handbuch zu SAP® EH&S bei SAP-Press</a>";
manualDesc4.innerHTML = "À ce moment le livre n'est disponible qu'en allemand, alternativement rimpido GmbH propose des séminaires détaillés au moins en allemand, anglais, et chinois. Voyez <a href='training.php?lang=fr'> ici </a>";

}

////ARABIC////
else if(getLanguage=="ar")
{

navHome.innerHTML = "الصفحة الرئيسية";
navMission.innerHTML = "مهمة"; 
navServices.innerHTML = "خدمات الشركة";
navTeam.innerHTML = "فريقنا";
navTestimonial.innerHTML = "Testimonial";
navContact.innerHTML = "اتصل بنا";
navPrivacy.innerHTML = "سياسات";
currentLang.innerHTML = "<b><span>AR</span></b>&nbsp;"+
			"<img src='assets/icon/ar-icon.png'>";

footerMainHeader.innerHTML = "اتصل بنا";
footerSubHeader1.innerHTML = "اتصل بنا";
footerSubHeader2.innerHTML = "الروابط";
footerSubHeader3.innerHTML = "معلومات";
footerSubDesc1.innerHTML = "أداة كشف";
footerSubDesc2.innerHTML = "كتيب SAP® EH&S في SAP الصحافة";
footerSubDesc3.innerHTML = "هيئة التحرير";
footerSubDesc4.innerHTML = "سياسات";
footerSubDesc5.innerHTML = "خريطة الموقع";
footerSubSesc6.innerHTML = "فرص عمل";

manualMainHeader.innerHTML = "دليل EHS";
manualSubHeader1.innerHTML = "الدليل الشامل لنظام ساب للصحة والسلامة";
manualDesc1.innerHTML = '<a href="CEO.php?lang=ar">المدير التنفيذي لشركة rimpido GmbH, Dr. Jan Schuur </a>,  هو المؤلف المشارك لكتاب "SAP Environment, Health, and Safety Management - Das umfassende Handbuch , المنشور من قبل SAP Press. ويقدم هذا الدليل نظرة شاملة على موضوعات واسعة من مجالات نظام ساب للصحة والسلامة:';
manualSubDesc1.innerHTML = "إدارة المواصفات";
manualSubDesc2.innerHTML = "سلامة المنتجات";
manualSubDesc3.innerHTML = "تتبع حجم المادة";
manualSubDesc4.innerHTML = "السلع الخطرة";
manualSubDesc5.innerHTML = "إدارة مساحة العمل";
manualSubDesc6.innerHTML = "إدارة المواد الخطرة";
manualSubDesc7.innerHTML = "إدارة الحوادث";
manualSubDesc8.innerHTML = "صحة العمل";
manualSubDesc9.innerHTML = "إدارة المخلفات";

manualDesc2.innerHTML = "خطوة خطوة يظهر لك كيفية العمل في مناطق مختلفة من البرمجيات. يتم شرح العمليات ووظائف SAP للصحة والسلامة وإعدادات التخصيص المهمة. وهذا يشمل أيضا  وصفا مفصلا لإدارة المواصفات، والتي هي أساس لا غنى عنه للإدارة SAP للصحة والسلامة.";
manualSubHeader2.innerHTML = "يمكنكم قراءة<a href='https://s3-eu-west-1.amazonaws.com/gxmedia.galileo-press.de/leseproben/2557/sappress_sap_environment_health_safety_mngmt.pdf' target='_blank'> مقتطفات</a> و في حال أنها نالت رضاكم.";
manualDesc3.innerHTML = "يمكنم الحصول على المزيد من المعلومات عبر الرابط:<a href='https://www.rheinwerk-verlag.de/sap-environment-health-and-safety-management_2557/' target='_blank'>Handbuch zu SAP® EH&S bei SAP-Press</a>";
manualDesc4.innerHTML = "";

$('#rimpido-page-top').css({'direction': 'rtl'});
$('#manual-desc1').css({'text-align': 'right'});
$('#manual-sub-desc1').css({'text-align': 'right'});
$('#manual-sub-desc2').css({'text-align': 'right'});
$('#manual-sub-desc3').css({'text-align': 'right'});
$('#manual-sub-desc4').css({'text-align': 'right'});
$('#manual-sub-desc5').css({'text-align': 'right'});
$('#manual-sub-desc6').css({'text-align': 'right'});
$('#manual-sub-desc7').css({'text-align': 'right'});
$('#manual-sub-desc8').css({'text-align': 'right'});
$('#manual-sub-desc9').css({'text-align': 'right'});
$('#manual-desc2').css({'text-align': 'right'});
$('#manual-sub-header2').css({'text-align': 'right'});
$('#manual-desc3').css({'text-align': 'right'});
$('#manual-desc4').css({'text-align': 'right'});
$('#fb').css({'margin-right': '17px'});
$('#linkedin').css({'margin-right': '15px'});
$('#mail').css({'margin-right': '15px'});
$('#twitter').css({'margin-right': '15px'});

}

/////Spanish////
else if(getLanguage=="es")
{

navHome.innerHTML = "Inicio";
navMission.innerHTML = "Misión"; 
navServices.innerHTML = "Servicios";
navTeam.innerHTML = "Nuestro equipo";
navTestimonial.innerHTML = "Testimonial";
navContact.innerHTML = "Contacto";
navPrivacy.innerHTML = "Política de privacidad";
currentLang.innerHTML = "<b><span>ES</span></b>&nbsp;"+
			"<img src='assets/icon/es-icon.png'>";

footerMainHeader.innerHTML = "Contáctenos";
footerSubHeader1.innerHTML = "CONTACTO";
footerSubHeader2.innerHTML = "ENLACES RÁPIDOS";
footerSubHeader3.innerHTML = "INFOS";
footerSubDesc1.innerHTML = "Phrasetool";
footerSubDesc2.innerHTML = "Handbuch Zu SAP EH&S ";
footerSubDesc3.innerHTML = "Huella";
footerSubDesc4.innerHTML = "Política de privacidad";
footerSubDesc5.innerHTML = "mapa del sitio";
footerSubSesc6.innerHTML = "Carrera";

manualMainHeader.innerHTML = "EHS Manual";
manualSubHeader1.innerHTML = "Una guia exhaustive para SAP Environment, Health and Safety Management";
manualDesc1.innerHTML = 'El <a href="CEO.php?lang=es">Director de rimpido GmbH, Dr. Jan Schuur</a>, es coautor del libro "SAP Environment, Health, and Safety Management - Das umfassende Handbuch", publicado en alemán por SAP Press. Este manual proporciona una visión exhaustive y completa de los siguientes temas de SAP EHS:';
manualSubDesc1.innerHTML = "Gestión de especificaciones";
manualSubDesc2.innerHTML = "Seguridad del producto";
manualSubDesc3.innerHTML = "Substance Volume Tracking";
manualSubDesc4.innerHTML = "Gestión de mercancías peligrosas";
manualSubDesc5.innerHTML = "Gestión de espacio de trabajo";
manualSubDesc6.innerHTML = "Gestión de sustancias peligrosas";
manualSubDesc7.innerHTML = "Gestión de accidentes de trabajo";
manualSubDesc8.innerHTML = "Medicina del trabajo";
manualSubDesc9.innerHTML = "Gestión de residuos";

manualDesc2.innerHTML = "Se muestra de forma cuidadosa cómo trabajar en las diversas áreas del software. Se presentan los procesos y funciones de SAP EHS así como las personalizaciones y configuraciones más importantes. También se incluye una descripción detallada de la gestión de especificaciones, que es una base esencial de la SAP EHS Management.";
manualSubHeader2.innerHTML = "Se ofrece una <a href='https://s3-eu-west-1.amazonaws.com/gxmedia.galileo-press.de/leseproben/2557/sappress_sap_environment_health_safety_mngmt.pdf' target='_blank'>lectura de prueba</a>.";
manualDesc3.innerHTML = "Informacióadicional puede ser encontrada en la siguiente referencia:<a href='https://www.rheinwerk-verlag.de/sap-environment-health-and-safety-management_2557/' target='_blank'>Handbuch zu SAP® EH&S bei SAP-Press</a>";
manualDesc4.innerHTML = "";

}


///chinese
else if(getLanguage=="zh")
{

navHome.innerHTML = "首页";
navMission.innerHTML = "我们的任务"; 
navServices.innerHTML = "的服务";
navTeam.innerHTML = "我们的团队";
//navTestimonial.innerHTML = "証言";
navContact.innerHTML = "联系方式";
navPrivacy.innerHTML = "隐私政策";
currentLang.innerHTML = "<b><span>ZH</span></b>&nbsp;"+
			"<img src='assets/icon/zh-icon.png'>";

footerMainHeader.innerHTML = "联系方式"; //CONTACT
footerSubHeader1.innerHTML = "联系方式"; //CONTACT
footerSubHeader2.innerHTML = "链接"; //QUICK LINKS - NS
footerSubHeader3.innerHTML = "信息"; //INFOS - NS
footerSubDesc1.innerHTML = "检测工具"; //RECORDING TOOL
footerSubDesc2.innerHTML = "手册SAP®EH＆S在SAP新闻"; //SAP EHS
footerSubDesc3.innerHTML = "版权声明"; //IMPRINT
footerSubDesc4.innerHTML = "隐私政策"; //PRIVACY POLICY
footerSubDesc5.innerHTML = "网站地图"; //SITEMAP
footerSubSesc6.innerHTML = "人才招聘";

manualMainHeader.innerHTML = "EHS-手册";
manualSubHeader1.innerHTML = "SAP Environment, Health and Safety Managementの総合マニュアル";
manualDesc1.innerHTML = '<a href="CEO.php?lang=zh">rimpido社の代表取締役社長、Dr. Jan Schuur</a>, は、SAP Pressから出版された書籍「SAP Environment, Health, and Safety Management - Das umfassende Handbuch」の共著者であり、このハンドブックは、SAP EHS分野の広範囲な問題に対して総合的に洞察し、その結果をまとめたものです。';
manualSubDesc1.innerHTML = "仕様管理";
manualSubDesc2.innerHTML = "製品の安全性";
manualSubDesc3.innerHTML = "物質量追跡機能";
manualSubDesc4.innerHTML = "危険物管理";
manualSubDesc5.innerHTML = "ワークスペース管理";
manualSubDesc6.innerHTML = "有害物質管理";
manualSubDesc7.innerHTML = "事故管理";
manualSubDesc8.innerHTML = "産業医学";
manualSubDesc9.innerHTML = "廃棄物管理";

manualDesc2.innerHTML = "どのようにソフトウェアのさまざまな領域で作業を行っているかを段階的に説明しています。プロセスとSAP EHS、重要な初期設定の機能について、またSAP EHS管理の重要な基礎である仕様管理の詳細な説明が含まれています。";
manualSubHeader2.innerHTML = "この <a href='https://s3-eu-west-1.amazonaws.com/gxmedia.galileo-press.de/leseproben/2557/sappress_sap_environment_health_safety_mngmt.pdf' target='_blank'>本</a> の試し読みはいかかですか?.";
manualDesc3.innerHTML = "さらに詳しい情報はこちら:<a href='https://www.rheinwerk-verlag.de/sap-environment-health-and-safety-management_2557/' target='_blank'>Handbuch zu SAP® EH&S bei SAP-Press</a>";
manualDesc4.innerHTML = "";


}

///JAPANESE///
else if(getLanguage=="ja")
{
//var dropdownMenuDE = document.getElementById('de');
//dropdownMenuDE.onclick = function(){

navHome.innerHTML = "トップページ";
navMission.innerHTML = "我々の使命"; 
navServices.innerHTML = "サービス内容";
navTeam.innerHTML = "私たちのチーム";
navTestimonial.innerHTML = "証言";
navContact.innerHTML = "お問い合わせ";
navPrivacy.innerHTML = "個人情報保護方針";
currentLang.innerHTML = "<b><span>JA</span></b>&nbsp;"+
			"<img src='assets/icon/ja-icon.png'>";

footerMainHeader.innerHTML = "お問い合わせ";
footerSubHeader1.innerHTML = "お問い合わせ";
footerSubHeader2.innerHTML = "クイックリンク";
footerSubHeader3.innerHTML = "情報";
footerSubDesc1.innerHTML = "検出ツール";
footerSubDesc2.innerHTML = "SAP押すだけで、ハンドブックSAP®EH＆S";
footerSubDesc3.innerHTML = "インプリント";
footerSubDesc4.innerHTML = "個人情報保護方針";
footerSubDesc5.innerHTML = "サイトマップ";
footerSubSesc6.innerHTML = "キャリア";

	
manualMainHeader.innerHTML = "EHS-マニュアル";
manualSubHeader1.innerHTML = "SAP Environment, Health and Safety Managementの総合マニュアル";
manualDesc1.innerHTML = "<a href='CEO.php?lang=ja'>rimpido社の代表取締役社長、Dr. Jan Schuur</a>は、SAP Pressから出版された書籍「SAP Environment, Health, and "+
						"Safety Management - Das umfassende Handbuch」の共著者であり、このハンドブックは、SAP EHS分野の広範囲な問 "+
						"題に対して総合的に洞察し、その結果をまとめたものです。";
manualSubDesc1.innerHTML = "仕様管理";
manualSubDesc2.innerHTML = "製品の安全性";
manualSubDesc3.innerHTML = "物質量追跡機能";
manualSubDesc4.innerHTML = "危険物管理";
manualSubDesc5.innerHTML = "ワークスペース管理";
manualSubDesc6.innerHTML = "有害物質管理";
manualSubDesc7.innerHTML = "事故管理";
manualSubDesc8.innerHTML = "産業医学";
manualSubDesc9.innerHTML = "廃棄物管理";

manualDesc2.innerHTML = "どのようにソフトウェアのさまざまな領域で作業を行っているかを段階的に説明しています。プロセスとSAP EHS、重要な初期設定の機能について、ま "+
						"たSAP EHS管理の重要な基礎である仕様管理の詳細な説明が含まれています。";
manualSubHeader2.innerHTML = "";
manualDesc3.innerHTML = "この<a href='https://s3-eu-west-1.amazonaws.com/gxmedia.galileo-press.de/leseproben/2557/sappress_sap_environment_health_safety_mngmt.pdf'>本</a>の試し読みはいかかですか?";

manualDesc4.innerHTML = "さらに詳しい情報はこちら:<a href='https://www.rheinwerk-verlag.de/sap-environment-health-and-safety-management_2557/'>Handbuch zu SAP® EH&S bei SAP-Press</a>";
}



