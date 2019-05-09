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



var sitemapMainHeader = document.getElementById('sitemap-main-header');
var sitemapHeader1 = document.getElementById('sitemap-header1');
var sitemapHeader2 = document.getElementById('sitemap-header2');
var sitemapSubHeader1 = document.getElementById('sitemap-sub-header1');
var sitemapSubHeader2 = document.getElementById('sitemap-sub-header2');
var sitemapSubHeader3 = document.getElementById('sitemap-sub-header3');
var sitemapSubHeader4 = document.getElementById('sitemap-sub-header4');
var sitemapDesc1 = document.getElementById('sitemap-desc1');
var sitemapDesc2 = document.getElementById('sitemap-desc2');
var sitemapDesc3 = document.getElementById('sitemap-desc3');
var sitemapDesc4 = document.getElementById('sitemap-desc4');
var sitemapDesc5 = document.getElementById('sitemap-desc5');
var sitemapDesc6 = document.getElementById('sitemap-desc6');
var sitemapDesc7 = document.getElementById('sitemap-desc7');
var sitemapDesc8 = document.getElementById('sitemap-desc8');
var sitemapDesc9 = document.getElementById('sitemap-desc9');
var sitemapDesc10 = document.getElementById('sitemap-desc10');
var sitemapDesc11 = document.getElementById('sitemap-desc11');
var sitemapDesc12 = document.getElementById('sitemap-desc12');
var sitemapDesc13 = document.getElementById('sitemap-desc13');
var sitemapDesc14 = document.getElementById('sitemap-desc14');
var sitemapDesc15 = document.getElementById('sitemap-desc15');
var sitemapDesc16 = document.getElementById('sitemap-desc16');



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
	window.location="sitemap.php";
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

sitemapMainHeader.innerHTML = "Sitemap";
sitemapHeader1.innerHTML = "Hauptmenü";
sitemapHeader2.innerHTML = "Infos";
sitemapSubHeader1.innerHTML = "<a href='index.php?lang=de' >Starteseite</a>";
sitemapSubHeader2.innerHTML = "<a href='index.php?lang=de#services' >Services von Rimpido</a>";
sitemapSubHeader3.innerHTML = "<a href='index.php?lang=de#team' >Unser Team</a>";
sitemapSubHeader4.innerHTML = "<a href='index.php?lang=de#contact' >Kontakt</a>";
sitemapDesc1.innerHTML = "<a href='implementation.php?lang=de' >EHS-Implementierung</a>";
sitemapDesc2.innerHTML = "<a href='support.php?lang=de' >EHS-Support</a>";
sitemapDesc3.innerHTML = "<a href='phrasencatalog.php?lang=de' >Phrasenkatalog</a>";
sitemapDesc4.innerHTML = "<a href='training.php?lang=de' >Schulung</a>";
sitemapDesc5.innerHTML = "<a href='EHS_tools.php?lang=de' >EH&S Tools</a>";
sitemapDesc6.innerHTML = "<a href='http://chemistry-service.de' >Chemistry-Service</a>";
sitemapDesc7.innerHTML = "<a href='substancevolumetracking.php?lang=de' >Stoffmengenverfolgung</a>";
sitemapDesc8.innerHTML = "<a href='EHS_manual.php?lang=de' >EHS-Handbuch</a>";
sitemapDesc9.innerHTML = "<a href='cert.php?lang=de' >38.3 Zertifizierung</a>";
sitemapDesc10.innerHTML = "<a href='index.php?lang=de#team' >EHS-Experten</a>";
sitemapDesc11.innerHTML = "<a href='CEO.php?lang=de' >Geschäftsführer</a>";
sitemapDesc12.innerHTML = "<a href='career.php?lang=de' >Karriere</a>";
sitemapDesc13.innerHTML = "<a href='imprint.php?lang=de' >Impressum</a>";
sitemapDesc14.innerHTML = "<a href='imprint.php?lang=de' >Impressum</a>";
sitemapDesc15.innerHTML = "<a href='privacy.php?lang=de' >Datenschutzerklärung</a>";
sitemapDesc16.innerHTML = "<a href='sitemap.php?lang=de' >Sitemap</a>";
}

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


sitemapMainHeader.innerHTML = "Sitemap";
sitemapHeader1.innerHTML = "Menu principal";
sitemapHeader2.innerHTML = "Informations";
sitemapSubHeader1.innerHTML = "<a href='index.php?lang=fr' >Homepage</a>";
sitemapSubHeader2.innerHTML = "<a href='index.php#services' >Services de rimpido</a>";
sitemapSubHeader3.innerHTML = "<a href='index.php#team' >Nos experts</a>";
sitemapSubHeader4.innerHTML = "<a href='index.php#contact' >Contact</a>";
sitemapDesc1.innerHTML = "<a href='implementation.php?lang=fr' >Implémentation EHS</a>";
sitemapDesc2.innerHTML = "<a href='support.php?lang=fr' >Assistance EHS</a>";
sitemapDesc3.innerHTML = "<a href='phrasencatalog.php?lang=fr' >Bibliothèque de phrases</a>";
sitemapDesc4.innerHTML = "<a href='training.php?lang=fr' >Training</a>";
sitemapDesc5.innerHTML = "<a href='EHS_tools.php?lang=fr' >Outils EHS</a>";
sitemapDesc6.innerHTML = "<a href='http://chemistry-service.de' >Service chimie</a>";
sitemapDesc7.innerHTML = "<a href='substancevolumetracking.php?lang=fr' >Suivi du volume de substances</a>";
sitemapDesc8.innerHTML = "<a href='EHS_manual.php?lang=fr' >Manuel EHS</a>";
sitemapDesc9.innerHTML = "<a href='cert.php?lang=fr' >38.3 Certification</a>";
sitemapDesc10.innerHTML = "<a href='index.php#team' >Experts EHS</a>";
sitemapDesc11.innerHTML = "<a href='CEO.php?lang=fr' >CEO</a>";
sitemapDesc12.innerHTML = "<a href='career.php?lang=fr' >Carrière</a>";
sitemapDesc13.innerHTML = "<a href='imprint.php?lang=fr' >L'empreinte</a>";
sitemapDesc14.innerHTML = "<a href='imprint.php?lang=fr' >L'empreinte</a>";
sitemapDesc15.innerHTML = "<a href='privacy.php?lang=fr' >Confidentialité</a>";
sitemapDesc16.innerHTML = "<a href='sitemap.php?lang=fr' >Sitemap</a>";
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

sitemapMainHeader.innerHTML = "خريطة الموقع";
sitemapHeader1.innerHTML = "القائمة الرئيسية";
sitemapHeader2.innerHTML = "معلومات";
sitemapSubHeader1.innerHTML = "<a href='index.php?lang=ar' >الصفحة الرئيسية</a>";
sitemapSubHeader2.innerHTML = "<a href='index.php#services' >خدمات الشركة</a>";
sitemapSubHeader3.innerHTML = "<a href='index.php#team' >فريقنا</a>";
sitemapSubHeader4.innerHTML = "<a href='index.php#contact' >اتصل بنا</a>";
sitemapDesc1.innerHTML = "<a href='implementation.php?lang=ar' >تطبيقات EHS</a>";
sitemapDesc2.innerHTML = "<a href='support.php?lang=ar' >دعم EHS</a>";
sitemapDesc3.innerHTML = "<a href='phrasencatalog.php?lang=ar' >مكتبة التعابير</a>";
sitemapDesc4.innerHTML = "<a href='training.php?lang=ar' >تدريب</a>";
sitemapDesc5.innerHTML = "<a href='EHS_tools.php?lang=ar' >أدوات EHS</a>";
sitemapDesc6.innerHTML = "<a href='http://chemistry-service.de' >خدمات كيميائية</a>";
sitemapDesc7.innerHTML = "<a href='substancevolumetracking.php?lang=ar' >Substance Volume Tracking</a>";
sitemapDesc8.innerHTML = "<a href='EHS_manual.php?lang=ar' >دليل EHS</a>";
sitemapDesc9.innerHTML = "<a href='cert.php?lang=ar' >38.3 Certification</a>";
sitemapDesc10.innerHTML = "<a href='index.php#team' >خبراء EHS</a>";
sitemapDesc11.innerHTML = "<a href='CEO.php?lang=ar' >المدير التنفيذي</a>";
sitemapDesc12.innerHTML = "<a href='career.php?lang=ar' >فرص عمل</a>";
sitemapDesc13.innerHTML = "<a href='imprint.php?lang=ar' >هيئة التحرير</a>";
sitemapDesc14.innerHTML = "<a href='imprint.php?lang=ar' >هيئة التحرير</a>";
sitemapDesc15.innerHTML = "<a href='privacy.php?lang=ar' >سياسات</a>";
sitemapDesc16.innerHTML = "<a href='sitemap.php?lang=fr' >خريطة الموقع</a>";

//CSS
$('#rimpido-page-top').css({'direction': 'rtl'});
$('#sitemap-header1').css({'text-align': 'right'});
$('#sitemap-header2').css({'text-align': 'right'});
$('#sitemap-sub-header1').css({'text-align': 'right'});
$('#sitemap-sub-header2').css({'text-align': 'right'});
$('#sitemap-sub-header3').css({'text-align': 'right'});
$('#sitemap-sub-header4').css({'text-align': 'right'});
$('#sitemap-desc1').css({'text-align': 'right',
						 'margin-right':'52px'});
$('#sitemap-desc2').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc3').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc4').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc5').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc6').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc7').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc8').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc9').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc10').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc11').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc12').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc13').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc14').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc15').css({'text-align': 'right',
						'margin-right':'52px'});
$('#sitemap-desc16').css({'text-align': 'right',
						'margin-right':'52px'});



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

sitemapMainHeader.innerHTML = "Sitemap";
sitemapHeader1.innerHTML = "Main Menu ";
sitemapHeader2.innerHTML = "Info";
sitemapSubHeader1.innerHTML = "<a href='index.php?lang=es' >Inicio</a>";
sitemapSubHeader2.innerHTML = "<a href='index.php#services' >Servicios de Rimpido</a>";
sitemapSubHeader3.innerHTML = "<a href='index.php#team' >Nuestro equipo</a>";
sitemapSubHeader4.innerHTML = "<a href='index.php#contact' >Contacto</a>";
sitemapDesc1.innerHTML = "<a href='implementation.php?lang=es' >EHS-Implementacin</a>";
sitemapDesc2.innerHTML = "<a href='support.php?lang=es' >EHS-Soporte</a>";
sitemapDesc3.innerHTML = "<a href='phrasencatalog.php?lang=es' >Catlogo de frases</a>";
sitemapDesc4.innerHTML = "<a href='training.php?lang=es' >Cursos</a>";
sitemapDesc5.innerHTML = "<a href='EHS_tools.php?lang=es' >EHS-Herramientas</a>";
sitemapDesc6.innerHTML = "<a href='http://chemistry-service.de' >Servicios qumicos</a>";
sitemapDesc7.innerHTML = "<a href='substancevolumetracking.php?lang=es' >Substance Volume Tracking</a>";
sitemapDesc8.innerHTML = "<a href='EHS_manual.php?lang=es' >EHS-Manual</a>";
sitemapDesc9.innerHTML = "<a href='cert.php?lang=es' >38.3 Certification</a>";
sitemapDesc10.innerHTML = "<a href='index.php#team' >EHS-Expertos</a>";
sitemapDesc11.innerHTML = "<a href='CEO.php?lang=es' >Director</a>";
sitemapDesc12.innerHTML = "<a href='career.php?lang=es' >Carrera</a>";
sitemapDesc13.innerHTML = "<a href='imprint.php?lang=es' >Impressum</a>";
sitemapDesc14.innerHTML = "<a href='imprint.php?lang=es' >Impressum</a>";
sitemapDesc15.innerHTML = "<a href='privacy.php?lang=es' >Política de privacidad</a>";
sitemapDesc16.innerHTML = "<a href='sitemap.php?lang=es' >mapa del sitio</a>";


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


sitemapMainHeader.innerHTML = "网站地图";
sitemapHeader1.innerHTML = "Main Menu";
sitemapHeader2.innerHTML = "信息";
sitemapSubHeader1.innerHTML = "<a href='index.php?lang=zh' >首页</a>";
sitemapSubHeader2.innerHTML = "<a href='index.php#services' >Rimpido的服务</a>";
sitemapSubHeader3.innerHTML = "<a href='index.php#team' >我们的团队</a>";
sitemapSubHeader4.innerHTML = "<a href='index.php#contact' >联系方式</a>";
sitemapDesc1.innerHTML = "<a href='implementation.php?lang=zh' >EHS-实施</a>";
sitemapDesc2.innerHTML = "<a href='support.php?lang=zh' >EHS-支援工具</a>";
sitemapDesc3.innerHTML = "<a href='phrasencatalog.php?lang=zh' >短句目录</a>";
sitemapDesc4.innerHTML = "<a href='training.php?lang=zh' >培训</a>";
sitemapDesc5.innerHTML = "<a href='EHS_tools.php?lang=zh' >EH&S 工具</a>";
sitemapDesc6.innerHTML = "<a href='http://chemistry-service.de' >化学服务</a>";
sitemapDesc7.innerHTML = "<a href='substancevolumetracking.php?lang=zh' >Substance Volume Tracking</a>";
sitemapDesc8.innerHTML = "<a href='EHS_manual.php?lang=zh' >EHS-手册</a>";
sitemapDesc9.innerHTML = "<a href='cert.php?lang=zh' >38.3 Certification</a>";
sitemapDesc10.innerHTML = "<a href='index.php#team' >EHS-专家</a>";
sitemapDesc11.innerHTML = "<a href='CEO.php?lang=zh' >总经理</a>";
sitemapDesc12.innerHTML = "<a href='career.php?lang=zh' >人才招聘</a>";
sitemapDesc13.innerHTML = "<a href='imprint.php?lang=zh' >版权声明</a>";
sitemapDesc14.innerHTML = "<a href='imprint.php?lang=zh' >版权声明</a>";
sitemapDesc15.innerHTML = "<a href='privacy.php?lang=zh' >Privacy Policy</a>";
sitemapDesc16.innerHTML = "<a href='sitemap.php?lang=zh' >网站地图</a>";

}

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

sitemapMainHeader.innerHTML = "サイトマップ";
sitemapHeader1.innerHTML = "メインメニュー";
sitemapHeader2.innerHTML = "Infos";
sitemapSubHeader1.innerHTML = "<a href='index.php?lang=ja' >トップページ</a>";
sitemapSubHeader2.innerHTML = "<a href='index.php?lang=ja#services' >サービス内容</a>";
sitemapSubHeader3.innerHTML = "<a href='index.php?lang=ja#team' >私たちのチーム</a>";
sitemapSubHeader4.innerHTML = "<a href='index.php?lang=ja#contact' >お問い合わせ</a>";
sitemapDesc1.innerHTML = "<a href='implementation.php?lang=ja' >EHSインプリメント</a>";
sitemapDesc2.innerHTML = "<a href='support.php?lang=ja' >EHSサポート</a>";
sitemapDesc3.innerHTML = "<a href='phrasencatalog.php?lang=ja' >フレーズライブラリ</a>";
sitemapDesc4.innerHTML = "<a href='training.php?lang=ja' >基礎トレーニング</a>";
sitemapDesc5.innerHTML = "<a href='EHS_tools.php?lang=ja' >EH&Sツール</a>";
sitemapDesc6.innerHTML = "<a href='http://chemistry-service.de' >化学サービス</a>";
//sitemapDesc7.innerHTML = "<a href='substancevolumetracking.php?lang=de' >Substance Volume Tracking</a>";
sitemapDesc8.innerHTML = "<a href='EHS_manual.php?lang=ja' >EHS-マニュアル</a>";
//sitemapDesc9.innerHTML = "<a href='cert.php?lang=de' >38.3 Zertifizierung</a>";
sitemapDesc10.innerHTML = "<a href='index.php?lang=de#team' >私たちのチーム</a>";
sitemapDesc11.innerHTML = "<a href='CEO.php?lang=de' >代表取締役社長</a>";
sitemapDesc12.innerHTML = "<a href='career.php?lang=de' >キャリア</a>";
sitemapDesc13.innerHTML = "<a href='imprint.php?lang=de' >インプリント</a>";
sitemapDesc14.innerHTML = "<a href='imprint.php?lang=de' >インプリント</a>";
sitemapDesc15.innerHTML = "<a href='privacy.php?lang=de' >個人情報保護方針</a>";
sitemapDesc16.innerHTML = "<a href='sitemap.php?lang=de' >サイトマップ</a>";

}