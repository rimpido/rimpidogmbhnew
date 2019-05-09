
var url_string = window.location.href;
var url = new URL(url_string);
var getLanguage = url.searchParams.get('lang');

//var missionHeader = document.getElementById('mission-header');
//var missionParagraph = document.getElementById('mission-paragraph');

///////////////Nav Bar//////////////////
var navHome = document.getElementById('nav-home');
var navMission = document.getElementById('nav-mission');
var navServices = document.getElementById('nav-services');
var navTeam = document.getElementById('nav-team');
var navTestimonial = document.getElementById('nav-testimonial');
var navContact = document.getElementById('nav-contact');
var navPrivacy = document.getElementById('nav-privacy');
var currentLang = document.getElementById('currentLang');



////////EHS Implementation Sub page////
var implementationMainHeader = document.getElementById('implementation-main-header');
var implementationHeader = document.getElementById('implementation-header');
var implementationSubHeader1 = document.getElementById('implementation-sub-header1');
var implementationDesc1 = document.getElementById('implementation-desc1');
var implementationSubHeader2 = document.getElementById('implementation-sub-header2');
var implementationDesc2 = document.getElementById('implementation-desc2');
var implementationSubHeader3 = document.getElementById('implementation-sub-header3');
var implementationDesc3 = document.getElementById('implementation-desc3');
var implementationSubHeader4 = document.getElementById('implementation-sub-header4');
var implementationDesc4 = document.getElementById('implementation-desc4');
var implementationSubHeader5 = document.getElementById('implementation-sub-header5');
var implementationDesc5 = document.getElementById('implementation-desc5');
var implementationSubHeader6 = document.getElementById('implementation-sub-header6');
var implementationDesc6 = document.getElementById('implementation-desc6');
var implementationSubDesc1 = document.getElementById('implementation-sub-desc1');
var implementationSubDesc2 = document.getElementById('implementation-sub-desc2');
var implementationSubDesc3 = document.getElementById('implementation-sub-desc3');

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

///////end Implementation Sub page////////

////ENGLISH/////
if(getLanguage=="en")
{
	window.location="implementation.php";
}


/////GERMAN/////
//var dropdownMenuDE = document.getElementById('de');
//dropdownMenuDE.onclick = function(){


//Comment test by Kevin
else if(getLanguage=="de")
{	
navHome.innerHTML = "Startseite";
navServices.innerHTML = "Dienstleistungen";
navMission.innerHTML = "Unsere Mission"; 
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

implementationMainHeader.innerHTML = "EHS Implentierung";
implementationHeader.innerHTML = "Mit SAP EHS Ihr Risikomanagement optimieren";
implementationSubHeader1.innerHTML = "SAP EHS Product safety";
implementationDesc1.innerHTML = "Gefahrstoffmanagement / Sicherheitsdatenblatterstellung";
implementationSubHeader2.innerHTML = "SAP EHS DG Dangerous goods";
implementationDesc2.innerHTML = "Gefahrgutmanagent / Versandpapiere";
implementationSubHeader3.innerHTML = "SAP EHS GLM Global label management";
implementationDesc3.innerHTML = "Druck von (Gefahrstoff- / Gefahrgut-) Etiketten";
implementationSubHeader4.innerHTML = "SAP EHS HSM Hazardous Substance Management";
implementationDesc4.innerHTML = "Gefahrstoffmanagement";
implementationSubHeader5.innerHTML = "SAP OH Occupational health";
implementationDesc5.innerHTML = "Arbeitsmedizin";
implementationSubHeader6.innerHTML = "SAP SPRC/SRC Product and REACH compliance";
implementationDesc6.innerHTML = "Anpassung an Produkt- und REACH-Vorgaben So werden Sie bei der EHS Implentierung durch rimpido unterstützt:";
implementationSubDesc1.innerHTML = "Beratung im Vorhinein und während der (Erst-) Installation eines SAP EHS-Systems";
implementationSubDesc2.innerHTML = "Entwicklung individueller Lösungen für die Integration von EHS- und Logistikanwendungen";
implementationSubDesc3.innerHTML = "Unterstützung des bestehenden Systems bei individuellen Anpassungen oder der Durchführung von Updates";


}




///////FRENCH//////
//var dropdownMenuFR = document.getElementById('fr');
//dropdownMenuFR.onclick = function(){
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
		
implementationMainHeader.innerHTML = "Implémentation EHS";
implementationHeader.innerHTML = "Optimisez votre gestion des risques avec SAP EHS";
implementationSubHeader1.innerHTML = "SAP EHS Product Safety";
implementationDesc1.innerHTML =  "gestion des substances dangereuses / création de fiches de données de sécurité";
implementationSubHeader2.innerHTML = "SAP EHS Dangerous Goods";
implementationDesc2.innerHTML = "gestion des marchandises dangereuses / documents d'expédition";
implementationSubHeader3.innerHTML = "SAP EHS Global Label Management";
implementationDesc3.innerHTML = "impression d'étiquettes (matières dangereuses / marchandises dangereuses)";
implementationSubHeader4.innerHTML = "SAP EHS Hazardous Substance Management";
implementationDesc4.innerHTML = "gestion des substances dangereuses";
implementationSubHeader5.innerHTML = "SAP Santé au travail";
implementationDesc5.innerHTML = "Médecine du travail";
implementationSubHeader6.innerHTML = "Conformité des produits SAP et REACH";
implementationDesc6.innerHTML = "adaptation aux exigences des produits et de REACH De cette façon, vous serez soutenu par l'implémentation EHS:";
implementationSubDesc1.innerHTML = "Conseil en amont et lors de la (première) installation du système SAP EHS";
implementationSubDesc2.innerHTML = "Développement de solutions sur mesure pour l'intégration d'applications EHS et logistiques";
implementationSubDesc3.innerHTML = "Prise en charge du système existant avec des réglages individuels ou des mises à jour.";

}

///Arabic////
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

implementationMainHeader.innerHTML = "تطبيقات EHS";
implementationHeader.innerHTML = "أمثلة إدارة المخاطر مع نظام ساب للصحة والسلامة ";
implementationSubHeader1.innerHTML = "نظام ساب لسلامة المنتج";

implementationDesc1.innerHTML =  "إدارة المواد الخطرة/إنشاء ورقة بيانات السلامة ";
implementationSubHeader2.innerHTML = "نظام ساب للصحة والسلامة ";
implementationDesc2.innerHTML = " المنتجات الخطرة: إدارة المواد الخطرة/أوراق الإرسال";
implementationSubHeader3.innerHTML = "نظام ساب للصحة والسلامة ";
implementationDesc3.innerHTML = " إدارة الملصقات العالمية: طباعة ملصقات المواد والمنتجات الخطرة ";
implementationSubHeader4.innerHTML = "نظام ساب للصحة والسلامة";
implementationDesc4.innerHTML = " إدارة المواد السامة: إدارة المواد الخطرة ";
implementationSubHeader5.innerHTML = "نظام ساب للصحة والسلامة ";
implementationDesc5.innerHTML = " الصحة المهنية: الصحة ";
implementationSubHeader6.innerHTML = "SAP SPRC/SRC";
implementationDesc6.innerHTML = " ملائمة المنتجات على مزايا ال REACHهكذا سيتم دعمكم عن طريق شركتنا:";
implementationSubDesc1.innerHTML = "تقديم النصح قبل وأثناء التنصيب لنظام ساب للصحة والسلامة";
implementationSubDesc2.innerHTML = "تطوير حلول شخصية لتطبيق نظام الصحة والسلامة وتطبيقات المستودعات ";
implementationSubDesc3.innerHTML = "دعم النظام الحالي من خلال الملائمة الشخصية أو القيام بالتحديثات";





$('#rimpido-page-top').css({'direction': 'rtl'});
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

implementationMainHeader.innerHTML = "EHS-Implementacin";
implementationHeader.innerHTML = "Optimizar el manejo de riesgos usando SAP EHS";
implementationSubHeader1.innerHTML = "SAP EHS Product Safety";
implementationDesc1.innerHTML =  "Gestión de sustancias peligrosas / Creación Hoja de Datos de Seguridad";
implementationSubHeader2.innerHTML = "SAP EHS Dangerous Goods";
implementationDesc2.innerHTML = "Gestión de mercancías peligrosas / documentos de embarque";
implementationSubHeader3.innerHTML = "SAP EHS Global Label Management";
implementationDesc3.innerHTML = " Impresión de von etiquetas (para sustancias y mercancías peligrosas)";
implementationSubHeader4.innerHTML = "SAP EHS Hazardous Substance Management";
implementationDesc4.innerHTML = " Gestión de sustancias peligrosas";
implementationSubHeader5.innerHTML = "SAP OH Occupational health";
implementationDesc5.innerHTML = "Salud del trabajo";
implementationSubHeader6.innerHTML = "SAP SPRC/SRC Product and REACH compliance";
implementationDesc6.innerHTML = " Adaptarse a las especificaciones del producto y los reglamentos de REACH Usted seráa asistido por rimpido en la implementación de EHS de la siguiente manera:";
implementationSubDesc1.innerHTML = "Asistencia con antelación y durante la instalacióon inicial del sistema SAP EHS";
implementationSubDesc2.innerHTML = "Desarrollo de soluciones individuales para la integración de EHS a las aplicaciones logísticas";
implementationSubDesc3.innerHTML = "Soporte técnico del sistema existente para el desarrollo de actualizaciones en dependencia de las necesidades individuales";


}


///Chinese////
else if(getLanguage=="zh")
{
navHome.innerHTML = "首页";
navMission.innerHTML = "我们的任务"; 
navServices.innerHTML = "的服务";
navTeam.innerHTML = "我们的任务";
//navTestimonial.innerHTML = "証言";
navContact.innerHTML = "联系方式";
navPrivacy.innerHTML = "隐私政策";
currentLang.innerHTML = "<b><span>ZH </span></b>&nbsp;"+
			"<img src='assets/icon/zh-icon.png'>";

footerMainHeader.innerHTML = "联系方式"; //CONTACT
footerSubHeader1.innerHTML = "联系方式"; //CONTACT
footerSubHeader2.innerHTML = "链接"; //QUICK LINKS - NS
footerSubHeader3.innerHTML = "信息"; //INFO - NS
footerSubDesc1.innerHTML = "检测工具"; //ERfasungtool
footerSubDesc2.innerHTML = "手册SAP®EH＆S在SAP新闻"; //EHS SAP
footerSubDesc3.innerHTML = "版权声明"; //imprint
footerSubDesc4.innerHTML = "隐私政策"; //PRIVACY
footerSubDesc5.innerHTML = "网站地图"; //SITEMAP
footerSubSesc6.innerHTML = "人才招聘";

implementationMainHeader.innerHTML = "EHS-实施"; //EHS IMPLEMENTATION
implementationHeader.innerHTML = "运用SAP EHS 优化您的风险管理"; //OPTIMIZE YOUR RISK
implementationSubHeader1.innerHTML = "SAP EHS产品安全"; 
implementationDesc1.innerHTML =  "危险品管理/材料安全数据表的设计";
implementationSubHeader2.innerHTML = "SAP EHS DG 危险品";
implementationDesc2.innerHTML = "危险品管理/运输文件";
implementationSubHeader3.innerHTML = "SAP EHS GLM 全球标识管理";
implementationDesc3.innerHTML = "打印（危险材料-/危险品-）标签";
implementationSubHeader4.innerHTML = "SAP EHS HSM 有害物质管理";
implementationDesc4.innerHTML = "危险品管理";
implementationSubHeader5.innerHTML = "SAP OH 职业健康";
implementationDesc5.innerHTML = "职业病";
implementationSubHeader6.innerHTML = "SAP SPRC/SRC 产品及其与REACH的统一";
implementationDesc6.innerHTML = "    调整产品说明使其符合REACH的说明。对其实施rimpido 会为您提供所有EHS 领域的支持。";
implementationSubDesc1.innerHTML = "事先的咨询服务和（首次-）安装SAP EHS系统期间的咨询服务。";
implementationSubDesc2.innerHTML = "开发针对客户的方案，实现对EHS应用 和物流使用的一体化。";
implementationSubDesc3.innerHTML = "支持和维护现有系统，进行针对客户的调整或者实施数据更新。";
}


///JAP////
else if(getLanguage=="ja")
{
navHome.innerHTML = "トップページ";
navMission.innerHTML = "我々の使命"; 
navServices.innerHTML = "サービス内容";
navTeam.innerHTML = "私たちのチーム";
navTestimonial.innerHTML = "証言";
navContact.innerHTML = "お問い合わせ";
navPrivacy.innerHTML = "個人情報保護方針";
currentLang.innerHTML = "<b><span>JA </span></b>&nbsp;"+
			"<img src='assets/icon/ja-icon.png'>";

footerMainHeader.innerHTML = "お問い合わせ"; //CONTACT
footerSubHeader1.innerHTML = "お問い合わせ"; //CONTACT
//footerSubHeader2.innerHTML = "الروابط"; //QUICK LINKS
//footerSubHeader3.innerHTML = "معلومات"; //INFO
footerSubDesc1.innerHTML = "検出ツール"; //ERfasungtool
footerSubDesc2.innerHTML = "SAP押すだけで、ハンドブックSAP®EH＆S"; //EHS SAP
footerSubDesc3.innerHTML = "インプリント"; //imprint
//footerSubDesc4.innerHTML = "سياسات"; //PRIVACY
footerSubDesc5.innerHTML = "サイトマップ"; //SITEMAP
footerSubSesc6.innerHTML = "キャリア";

implementationMainHeader.innerHTML = "EHSインプリメント"; //EHS IMPLEMENTATION
implementationHeader.innerHTML = "SAP EHSによってリスク管理を最適化"; //OPTIMIZE YOUR RISK
implementationSubHeader1.innerHTML = "SAP EHS 製品の安全性"; 
implementationDesc1.innerHTML =  "有害物質管理/安全データシートの作成";
implementationSubHeader2.innerHTML = "SAP EHS DG危険物";
implementationDesc2.innerHTML = "有害物質管理/出荷書類";
implementationSubHeader3.innerHTML = "SAP EHS GLMグローバルラベル管理";
implementationDesc3.innerHTML = "（有害物質-/危険物-）ラベル印刷";
implementationSubHeader4.innerHTML = "SAP EHS HSM 有害物質管理";
implementationDesc4.innerHTML = "有害物質管理";
implementationSubHeader5.innerHTML = "SAP OH労働衛生";
implementationDesc5.innerHTML = "産業医学";
implementationSubHeader6.innerHTML = "SAP SPRC / SRC製品とREACHコンプライアンス";
implementationDesc6.innerHTML = "    製品への適合、およびREACH規則この方法によってEHSインプリメントをサポートします:";
implementationSubDesc1.innerHTML = "SAP EHSシステムの（最初の）インストール時の事前のアドバイス";
implementationSubDesc2.innerHTML = "EHSと物流のアプリケーションを統合するためのカスタマイズされたソリューションの開発";
implementationSubDesc3.innerHTML = "個々のカスタマイズやアップデートの実行と既存システムのサポート";

}