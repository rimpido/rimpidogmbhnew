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




var trainingMainHeader = document.getElementById('training-main-header');
var trainingSubHeader1 = document.getElementById('training-sub-header1');
var trainingSubDesc1 = document.getElementById('training-sub-desc1');
var trainingSubDesc2 = document.getElementById('training-sub-desc2');
var trainingSubDesc3 = document.getElementById('training-sub-desc3');
var trainingSubDesc4 = document.getElementById('training-sub-desc4');
var trainingSubDesc5 = document.getElementById('training-sub-desc5');
var trainingSubHeader2 = document.getElementById('training-sub-header2');
var trainingDesc1 = document.getElementById('training-desc1');
var trainingSubDesc6 = document.getElementById('training-sub-desc6');
var trainingSubDesc7 = document.getElementById('training-sub-desc7');
var trainingSubDesc8 = document.getElementById('training-sub-desc8');
var trainingSubDesc9 = document.getElementById('training-sub-desc9');
var trainingDesc2 = document.getElementById('training-desc2');
var trainingHeader1 = document.getElementById('training-header1');
var trainingDesc3 = document.getElementById('training-desc3');

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
	window.location="training.php";
}




else if(getLanguage=="de")
{
/////GERMAN/////////
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




trainingMainHeader.innerHTML = "SAP EHS / EHSM Schulungsangebot und Workshops";
trainingSubHeader1.innerHTML = "Die SAP EHS bzw. EHSM Schulungen Workshops bzw. Trainings werden grundsätzlich auf Anfrage zu allen Bereichen des SAP EH&S / EHSM angeboten.";
trainingSubDesc1.innerHTML = "Produktsicherheit – SAP EH&S PS";
trainingSubDesc2.innerHTML = "Gefahrstoffmanagement – SAP EH&S HSM";
trainingSubDesc3.innerHTML = "Arbeitsschutz / Arbeitssicherheit – SAP EH&S IHS";
trainingSubDesc4.innerHTML = "Gefahrgut - SAP EH&S DG";
trainingSubDesc5.innerHTML = "Arbeitsmedizin – SAP EH&S OH";
trainingSubHeader2.innerHTML = "Hinzu kommen Schulung für spezielle Themen wie WWI. Fertige Schulungen/Trainings gibt es für die Bereiche:";
trainingDesc1.innerHTML = "";
trainingSubDesc6.innerHTML = "Einführung in SAP EHS";
trainingSubDesc7.innerHTML = "Die Datenpflege in der SAP EHS Spezifikationsdatenbank ";
trainingSubDesc8.innerHTML = "SAP EHS Produktsicherheit";
trainingSubDesc9.innerHTML = "SAP EHS Gefahrgut und WWI";
trainingDesc2.innerHTML = 'Als Beispiel für unsere Schulungsfolien finden sie <a data-target="#trainingvid-modal" data-toggle="modal">hier</a> die Folien der Schulung Einführung in <br><b>"EH&S und die Datenpflege in der Spezifikationsdatenbank"</b><br>'
trainingHeader1.innerHTML = "Kunden Statement André Engelmeier, COMPO Expert GmbH";
trainingDesc3.innerHTML = "Als Mitarbeiter im SAP Support ist es für mich wichtig, die gefahrguttechnischen Hintergründe und Regelungen zu verstehen, die Abläufe der"+
" SAP EHS Lösung zu kennen und einen Überblick über das relevante Customizing zu haben. Die Schulung durch Klaus Reinhardt war strukturiert und Übersichtlich."+
" Trotz der großen Anzahl an Themen war immer noch Zeit aktuelle Probleme anzusprechen und mitunter direkt zu lösen."

}

////FRENCH////////
else if(getLanguage=="fr")
{

//var dropdownMenuFR = document.getElementById('fr');
//dropdownMenuFR.onclick = function(){
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


trainingMainHeader.innerHTML = "Formations EHS";
trainingSubHeader1.innerHTML = "Nous offrons des formations sur demande à tous les domaines de SAP EHS. Ce sont:";
trainingSubDesc1.innerHTML = "Sécurité des produits - SAP EHS PS";
trainingSubDesc2.innerHTML = "Gestion des substances dangereuses - SAP EHS HSM";
trainingSubDesc3.innerHTML = "Protection du travail / sécurité au travail - SAP EHS IHS";
trainingSubDesc4.innerHTML = "Matières dangereuses - SAP EHS DG";
trainingSubDesc5.innerHTML = "Médecine du travail - SAP EHS OH";
trainingSubHeader2.innerHTML = "En plus, nous offrons des formations pour des sujets spéciaux comme WWI. Ce sont les formations complètes que nous pouvons vous offrir:";
trainingDesc1.innerHTML = "";
trainingSubDesc6.innerHTML = "Commencer avec EHS";
trainingSubDesc7.innerHTML = "Gestion des données dans la base de données des spécifications";
trainingSubDesc8.innerHTML = "Sécurité des produits";
trainingSubDesc9.innerHTML = "Matières dangereuses et WWI";
trainingDesc2.innerHTML = 'Comme exemple pour notre matériel de formation <a data-target="#trainingvid-modal" data-toggle="modal"><b>ici</b></a> vous trouverez notre présentation pour la formation <br><b>"EH&S und die Datenpflege in der Spezifikationsdatenbank"</b><br>';
trainingHeader1.innerHTML = "";
trainingDesc3.innerHTML = "";


}

////ARABIC////////
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

trainingMainHeader.innerHTML = "عروض التدريب لنظام ساب للصحة والسلامة";
trainingSubHeader1.innerHTML = "يتم تقديم التدريب لجميع أقسام نظام ساب للصحة والسلامة بحسب الطلب . التي هي: ";
trainingSubDesc1.innerHTML = "أمان المنتح –SAP EH&S PS";
trainingSubDesc2.innerHTML = "إدارة المواد الخطرة –SAP EH&S -HSM";
trainingSubDesc3.innerHTML = "حماية العمل/أمان العمل –SAP EH&S IHS";
trainingSubDesc4.innerHTML = "المواد الخطرة - SAP EH&S DG";
trainingSubDesc5.innerHTML = "طب العمل –SAP EH&S OH";
trainingSubHeader2.innerHTML = "بالإضافة لذلك نقدم لكم تدريبا للمواضيع الخاصة مثل WWI. يوجد تدريب جاهز للمواضيع التالية:";
trainingDesc1.innerHTML = "";
trainingSubDesc6.innerHTML = "مدخل إلى EH&S";
trainingSubDesc7.innerHTML = "معالجة البيانات في قاعدة بيانات التوصيفات";
trainingSubDesc8.innerHTML = "أمان المنتج";
trainingSubDesc9.innerHTML = "المواد الخطرة و  WWI";
trainingDesc2.innerHTML = 'كمثال على أوراق التدريب المقدمة من طرفتا يمكنكم إيجادها على <a data-target="#trainingvid-modal" data-toggle="modal"><b> الرابط</b></a>  أوراق التدريب الخاصة في "مدخل إلى EH&S و معالجة البيانات في قاعدة بيانات التوصيفات" <br><br>';
trainingHeader1.innerHTML = "";
trainingDesc3.innerHTML = "";
$('#rimpido-page-top').css({'direction': 'rtl'});
$('#training-sub-header1').css({'text-align': 'right'});
$('#training-sub-desc1').css({'text-align': 'right'});
$('#training-sub-desc2').css({'text-align': 'right'});
$('#training-sub-desc3').css({'text-align': 'right'});
$('#training-sub-desc4').css({'text-align': 'right'});
$('#training-sub-desc5').css({'text-align': 'right'});

$('#training-sub-header2').css({'text-align': 'right'});
$('#training-sub-desc6').css({'text-align': 'right'});
$('#training-sub-desc7').css({'text-align': 'right'});
$('#training-sub-desc8').css({'text-align': 'right'});
$('#training-sub-desc9').css({'text-align': 'right'});

$('#training-desc2').css({'text-align': 'right'});
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


trainingMainHeader.innerHTML = "EHS, Propuestas de Cursos";
trainingSubHeader1.innerHTML = "Los cursos en cualquiera de los temas de SAP EH&S serán preparados básicamente en función de las necesisades del cliente. Temas:";
trainingSubDesc1.innerHTML = "Seguridad del Producto - SAP EH&S PS";
trainingSubDesc2.innerHTML = "Gestión de sustancias peligrosas - SAP EHS -HSM";
trainingSubDesc3.innerHTML = "Arbeitsschutz / Arbeitssicherheit - SAP EHS IHS";
trainingSubDesc4.innerHTML = "Gestión de mercancías peligrosas - SAP EHS DG";
trainingSubDesc5.innerHTML = "Medicina del trabajo - SAP EH&S OH";
trainingSubHeader2.innerHTML = "Adicionalmente hay cursos para temas especiales como WWI. Cursos ya preparados son los siguientes:";
trainingDesc1.innerHTML = "";
trainingSubDesc6.innerHTML = "Introducción EH&S ";
trainingSubDesc7.innerHTML = "Actualización de datos en especificaciones de la Base de datos.";
trainingSubDesc8.innerHTML = "Seguridad del Producto";
trainingSubDesc9.innerHTML = "Gestión de mercancías peligrosas y WWI";
trainingDesc2.innerHTML = 'Ejemplos de presentaciones de nuetros cursos puede encntrar <a data-target="#trainingvid-modal" data-toggle="modal"><b>aqui</b></a> para los cursos "Introducción a EHS" y <br><b>"Actualización de datos en especificaciones de la base de datos"</b><br>';
trainingHeader1.innerHTML = "";
trainingDesc3.innerHTML = "";

}



//japanese
else if(getLanguage=="ja")
{

navHome.innerHTML = "トップページ";  
navMission.innerHTML = "我々の使命"; 
navServices.innerHTML = "サービス内容";
navTeam.innerHTML = "私たちのチーム";
navTestimonial.innerHTML = "証言"; 
navContact.innerHTML = "お問い合わせ";
navPrivacy.innerHTML = "個人情報保護方針"; //privacy
currentLang.innerHTML = "<b><span>JA</span></b>&nbsp;"+
			"<img src='assets/icon/ja-icon.png'>";

footerMainHeader.innerHTML = "お問い合わせ";
footerSubHeader1.innerHTML = "<b>お問い合わせ</b>";
//footerSubHeader2.innerHTML = "QUICK LINKS";
//footerSubHeader3.innerHTML = "INFOS";
footerSubDesc1.innerHTML = "検出ツール";
footerSubDesc2.innerHTML = "SAP押すだけで、ハンドブックSAP®EH＆S";
footerSubDesc3.innerHTML = "インプリント"; //imprint
footerSubDesc4.innerHTML = "個人情報保護方針"; //privacy
footerSubDesc5.innerHTML = "サイトマップ";
footerSubSesc6.innerHTML = "キャリア";




trainingMainHeader.innerHTML = "EHS研修";
trainingSubHeader1.innerHTML = "弊社ではSAP EH&Sのあらゆる分野へのお問い合わせに関し、以下の研修を行っています。。";
trainingSubDesc1.innerHTML = "製品の安全性– SAP EH&S PS";
trainingSubDesc2.innerHTML = "有害物質管理 – SAP EH&S -HSM";
trainingSubDesc3.innerHTML = "労働安全 – SAP EH&S IHS";
trainingSubDesc4.innerHTML = "危険物 – SAP EH&S DG";
trainingSubDesc5.innerHTML = "産業医学 – SAP EH&S OH";
trainingSubHeader2.innerHTML = "さらに、WWIなどの専門科目においても下記内容の研修を行っております。";
trainingDesc1.innerHTML = "";
trainingSubDesc6.innerHTML = "EH&Sの導入";
trainingSubDesc7.innerHTML = "仕様データベースでのデータ管理";
trainingSubDesc8.innerHTML = "製品の安全性";
trainingSubDesc9.innerHTML = "危険物とWWI";
trainingDesc2.innerHTML = '弊社のトレーニングの例として、トレーニング「EH&Sの導入と仕様データバンクのデータメンテナンス」は<a data-target="#trainingvid-modal" data-toggle="modal">こちら</a> をご覧ください';
trainingHeader1.innerHTML = "";
trainingDesc3.innerHTML = " ";

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

trainingMainHeader.innerHTML = "EHS 培训服务";
trainingSubHeader1.innerHTML = "原则上我们提供所有SAP EHS 领域内客户所需要的培训。内容如下：";
trainingSubDesc1.innerHTML = "产品安全 – SAP EHS PS";
trainingSubDesc2.innerHTML = "危险材料管理 - SAP EHS HSM";
trainingSubDesc3.innerHTML = "劳动保护 / 工作安全 - SAP EHS IHS";
trainingSubDesc4.innerHTML = "危险品 - SAP EHS DG";
trainingSubDesc5.innerHTML = "职业病 - SAP EHS OH";
trainingSubHeader2.innerHTML = "此外还有特殊主题的培训，比如 WWI。 现已提供过的培训有以下方面：";
trainingDesc1.innerHTML = "";
trainingSubDesc6.innerHTML = "SEHS 入门 ";
trainingSubDesc7.innerHTML = "化学品数据库的数据管理 ";
trainingSubDesc8.innerHTML = "产品安全 ";
trainingSubDesc9.innerHTML = "危险品和WWI";
trainingDesc2.innerHTML = '作为例子，您可以参考 <a data-target="#trainingvid-modal" data-toggle="modal"><b> 上我</b></a> 们的PPT培训材料“EHS入门以及化学品数据库的数据管理“。</b><br>';
trainingHeader1.innerHTML = "";
trainingDesc3.innerHTML = "";
}