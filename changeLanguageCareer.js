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

var careerMainHeader = document.getElementById('career-main-header');
var careerSubHeader = document.getElementById('career-sub-header');

var careerSubDesc1 = document.getElementById('career-sub-desc1');
var careerSubDesc2 = document.getElementById('career-sub-desc2');
var careerSubDesc3 = document.getElementById('career-sub-desc3');
var careerSubDesc4 = document.getElementById('career-sub-desc4');
var careerSubDesc5 = document.getElementById('career-sub-desc5');
var careerSubDesc6 = document.getElementById('career-sub-desc6');

var careerDesc1 = document.getElementById('career-desc1');

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
	window.location="career.php";
}

///////GERMAN/////
//var dropdownMenuDE = document.getElementById('de');
//dropdownMenuDE.onclick = function(){
else if(getLanguage=="de")
{

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



	
careerMainHeader.innerHTML = "Karriere";
careerSubHeader.innerHTML = "SAP EHS Experten gesucht";




careerDesc1.innerHTML = "Da wir immer wieder neue Projektanfragen bekommen und damit das Unternehmen weiter wachsen kann, haben wir ein großes Interesse an Mitarbeitern, die Lust haben, in unserem motivierten Team mitzuarbeiten und Spaß an der Arbeit im Umfeld von Umweltschutz, Arbeitsschutz, Arbeitsmedizin, Chemie, Informatik, SAP und Sprachen mitbringen.<br><br>"+
"Wenn sie fundierte Kenntnisse in einem Bereich mitbringen und willens sind das andere zu lernen, bewerben sie sich bei uns. Ob als Freiberufler, Angestellter oder Praktikant bei Interesse rufen Sie einfach an oder <a href='contact.php?lang=de'>schicken uns eine Mail!</a> Wir nehmen dann mit Ihnen Kontakt auf.<br><br>"+
"Sie sind herzlich willkommen.";
}

/////FRENCH//////
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


careerMainHeader.innerHTML = "Carrière";
careerSubHeader.innerHTML = "Experts SAP EHS cherchés";




careerDesc1.innerHTML = "Nous cherchons vous! Car nous avons un flux continu de projets nouveaux et pour être capable à grandir, nous embaucheons continuemment. Vous êtes intéressé à travailler avec un bon équipe dans les domaines de 'Environment Health and Safety', la chimie, la programmation, SAP et les langues? Envoyez-nous votre application. La connaissance d'une de ces domaines est assez pour nous, nous allons vous entraîner dans les autres.<br><br>"+
"Soit comme pigiste, employé ou stagiaire, si vous êtes interéssé, appellez nous ou envoyez-nous un <a href='contact.php?lang=fr'>eMail!</a> <br><br>"+
"Nous allons vous contacter ensuite. ";

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



careerMainHeader.innerHTML = "فرص عمل";
careerSubHeader.innerHTML = "نبحث عن خبراء SAP EHS";


careerDesc1.innerHTML = "بسبب الطلبات المتزايدة والمشاريع الجديدة, لدينا الرغبة بضم أعضاء جدد لفريقنا, ممن يملكون الرغبة ويجدون المتعة بالعمل على نظام SAP.<br><br>"+
"كمتعاقد حر أو كموظف ضمن فريقنا, في حال لديكم الرغبة الرجاء الاتصال أو ارسال  <a href='contact.php?lang=ar'>رسالة !</a> <br><br>"+
"سنعاود الاتصال بكم.<br><br>أنتم دائما على الرحب والسعة  ";



//CSS

$('#rimpido-page-top').css({'direction': 'rtl'});
$('#career-sub-header').css({'text-align': 'right'});


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

careerMainHeader.innerHTML = "Carrera";
careerSubHeader.innerHTML = "Búsqueda de expertos en SAP EHS";


careerDesc1.innerHTML = "Teniendo en cuenta la cotinua demanda de proyectos, tenemos un gran interés en empleados motivados a participar en nuestro equipo y llevar adelante el trabajo con EHS SAP de forma entusiasta.<br><br>"+
"Ya sea como trabajador independiente o empleado, si está interesado llámenos +49 4181 - 13 86 456 o <a href='contact.php?lang=es'> envienos un Mail!</a> <br><br>"+
"Su llamada / E-mail serán atendidos y procesados de inmediato.<br><br> Bienvenido. ";

}


///chinese
else if(getLanguage=="zh")
{

navHome.innerHTML = "首页";
navMission.innerHTML = "我们的任务"; 
navServices.innerHTML = "的服务";
navTeam.innerHTML = "我们的团队";
navTestimonial.innerHTML = "Testimonial";
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


careerMainHeader.innerHTML = "人才招聘";
careerSubHeader.innerHTML = "SAP EHS 人才招聘";

careerDesc1.innerHTML = "由于公司不断接到新的项目委托，目前我们急需新的员工。欢迎对SAP工作有意向的人才加入到我们这个充满活力和工作热情的团队中。<br><br>"+
"无论是作为自由职业者还是普通的职位应聘者，请拨打我们的电话或者发 <a href='contact.php?lang=zh'>邮件联系我们</a>我们会尽快给您回复。 <br><br>"+
"诚挚期盼您的加入！";

}

//JAPANESE


else if(getLanguage=="ja")
{

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



	
careerMainHeader.innerHTML = "キャリア";
careerSubHeader.innerHTML = "SAP EHSエキスパートの募集";




careerDesc1.innerHTML = "弊社は多くの新規プロジェクトの依頼を受け、それにより企業としても個々の社員としても成長し続けています。モチベーションの高い私たちのチームの "+
						"一員として、環境保護、労働安全、産業医学、化学、コンピュータサイエンス、SAPや言語の分野において、作業を楽しみながらできる方を募集していま "+
						"す。<BR><BR>"+

						"1つの専門分野の知識だけで十分です。私たちがあなたを他の分野において育成します。<br><br>"+

						"フリーランサー、現在お仕事をされている方またはインターンでも、この仕事にご興味のある方は、お電話またはメールにてお問い合わせください!! "+
						"その後、こちらからご連絡をいたします。<br><br>"+

						"皆様からのご応募お待ちしております。";

}