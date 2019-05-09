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

var ceoMainHeader = document.getElementById('ceo-main-header');
var ceoCeoDesc = document.getElementById('ceo-ceo-desc');
var ceoDesc1 = document.getElementById('ceo-desc1');
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
	window.location="CEO.php";
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



	
ceoMainHeader.innerHTML = "Geschäftsführender";
ceoCeoDesc.innerHTML = "Geschäftsführender Gesellschafter<br> der rimpido GmbH";
ceoDesc1.innerHTML = "<b>Dr. Jan Schuur</b> ist geschäftsführender Gesellschafter der rimpido GmbH. Seit 1993 beschäftigt er sich mit dem Einsatz von Datenbanken in der Chemie und seit 1998 mit der Chemical Compliance im Umfeld der chemischen Industrie.<br><br>"+
"Ein Schwerpunkt seiner Tätigkeit ist die Einführung, Wartung und Pflege unterschiedlichster Installationen des SAP EHSM-Moduls (Environment, Health and Saftey Management) der SAP AG.Bestandteile des SAP-Moduls sind u.a. Produktsicherheit, Arbeitsschutz und Arbeitssicherheit, Gefahrgut und Arbeitsmedizin sowie der SAP Product and REACH Compliance.<br><br>"+
"Dr. Schuur verfügt über langjährige internationale Erfahrung in der Installation, Pflege und Wartung von SAP EHS-Modulen.<br><br>"+
"Im ersten Jahr des Bestehens der rimpido GmbH konnte Dr. Schuur zusammen mit seinen Mitarbeitern bereits die Wartung von 5 EH&S Installationen übernehmen und parrallel dazu Projektarbeit im erheblichen Umfang leisten, wie z.B. Unterstützung eines Hamburger Pharmaunternehmens bei der Einführung von SAP EHSM Produktsicherheit in Verbindung mit SAP EHS Regulatory Content und eigenen EH&S Expert Regelwerken.<br><br>"+
"Zudem ist Dr. Schuur Mitautor des kürzlich erschienen Buches <a href='EHS_manual.php?lang=de'> SAP Environment, Health, and Safety Management - Das umfassende Handbuch</a> von Stephan Eisenacher, Klaus Kammerer, Andreas Riepe und Jan Schuur erschienen bei SAP Press.";

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

ceoMainHeader.innerHTML = "CEO";
ceoCeoDesc.innerHTML = "le directeur générale <br>de rimpido GmbH";
ceoDesc1.innerHTML = "<b>Dr. Jan Schuur</b> et le directeur générale de rimpido GmbH. Depuis 1993 il s'engage à l'utilisation de bases de donnés dans la chimie. Depuis 1998 il travaille dans la domaine de 'Chemical Compliance' principalement pour l'industrie chimie, pharmacie et automobile.<br><br>"+
'Il se concentre sur lintroduction, la maintenance et la prise en charge d installations diverses du module SAP-EHSM ("Enviroment Health and Safety Management") de SAP AG. Composants de cette module sont par example: la sécurité des produits, la hygiène et sécurité industrielle, les marchandises dangereux et la santé au travail, ensemble avec "SAP Product and REACH Compliance"<br><br>'+
"Dr. Schuur a de nombreuses années d'expérience avec l'installation et la maintenance de modules SAP-EHS.<br><br>"+
'À l an premier de rimpido GmbH Dr. Schuur, avec ses employés, était capable de prendre en charge la maintenance de cinq installations de SAP-EHS. Parallèlement une quantité considérable de travail projet était fait, comme l assistance d une entreprise pharmaciel hambourgeoise pour l introduction de "SAP EHSM product safety" ensemble avec "SAP EHS Regulatory Content" et "EHS Expert sets of rules".<br><br>'+
"En addition, Dr. Schuur et le coauteur du livre récemment publié <a href='EHS_manual.php?lang=fr'> SAP Environment, Health, and Safety Management - Das umfassende Handbuch</a> de Stephan Eisenacher, Klaus Kammerer, Andreas Riepe et Jan Schuur, publié par SAP Press.";

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

ceoMainHeader.innerHTML = "المدير التنفيذي";
ceoCeoDesc.innerHTML = "هو الشريك الإداري ل rimpido GmbH";
ceoDesc1.innerHTML = "<b>Dr. Jan Schuur</b> هو الشريك الإداري ل rimpido GmbH. منذ عام 1993، يعمل في مجال استخدام قواعد البيانات في مجال الكيمياء ومنذ عام 1998 مع الامتثال للكيماويات في مجال الصناعة الكيميائية.<br><br>"+
'تركيزه هو إدخال وصيانة ورعاية المنشآت المختلفة من وحدة SAP EHS- وحدة (البيئة والصحة وإدارة والسلامة) من SAP AG. وتشمل مكونات وحدة SAP سلامة المنتجات والصحة والسلامة المهنية، المواد الخطرة والصحة المهنية و منتجات SAP و توافق  REACH."<br><br>'+
"Dr. Schuur  الدكتور شور يمتلك سنوات عديدة من الخبرة الدولية في تركيب واصلاح وصيانة وحدات SAP الصحة والسلامة.<br><br>"+
"ي السنة الأولى من تأسيس شركة rimpido تمكن الدكتور شور جنبا إلى جنب مع موظفيه بالفعل من اتمام 5 تنصيبات لأنظمة EH&S و العمل في مشاريع بشكل متواز وبنجاح إلى حد كبير، مثل دعم شركة Hamburger الدوائية في العمل على نظام SAP EHS للتأكد من سلامة المنتجات بالتزامن مع  SAP EHS والقواعد الخاصة للصحة والسلامة و المحتوى التنظيمي..<br><br>"+
"وبالإضافة إلى ذلك، الدكتور شور هو المؤلف المشارك لكتاب نشر مؤخرا <a href='EHS_manual.php?lang=ar'> SAP Environment, Health, and Safety Management - Das umfassende Handbuch</a>  ل Stephan Eisenacher, Klaus Kammerer, Andreas Riepe و Jan Schuur التي نشرتها SAP Press.";

//CSS

$('#rimpido-page-top').css({'direction': 'rtl'});
$('#ceo-widget').css({'margin-right': '-85px'});

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


ceoMainHeader.innerHTML = "Director";
ceoCeoDesc.innerHTML = "socio y director <br>de rimpido GmbH";
ceoDesc1.innerHTML = '<b>Dr. Jan Schuur</b> es socio y director de rimpido GmbH. Desde 1993 se dedica a la utilización de bases de datos en química y desde 1998, se ocupa de la puesta en práctica del "Chemical Compliance" en el campo de la industria química.<br><br>'+
'Un enfoque de su trabajo es la introducción, el mantenimiento y el cuidado de diversas instalaciones del módulo SAP EHSM (Environment, Health and Saftey Management) de SAP AG. Los componentes del módulo de SAP son entre otros, la seguridad del producto, protección y seguridad en el trabajo, tratamiento de mercancía peligrosa, medicina del trabajo así como "SAP Product and REACH Compliance"<br><br>'+
"El Sr. Schuur tiene muchos años de experiencia internacional en la instalación, asistencia y mantenimiento de los módulos de SAP EHS.<br><br>"+
'En el primer año de trabajo de rimpido GmbH el Dr. Schuur y sus empleados llevaron a cabo el mantenimiento de cinco instalaciones de EHS y en paralelo otros proyectos de trabajo de considerable envergadura, tales como el apoyo a una empresa farmacéutica de Hamburgo en la introducción de la seguridad de los productos SAP EHSM en conexión con "SAP EHS Regulatory Content" y el desarrollo de una herramienta propia de EHS para estructurar conjuntos de reglas de expertos.<br><br>'+
"Además, el Dr. Schuur es co-autor del libro recientemente publicado <a href='EHS_manual.php?lang=es'> SAP Environment, Health, and Safety Management - Das umfassende Handbuch</a> de Stephan Eisenacher, Klaus Kammerer, Andreas Riepe y Jan Schuur publicdo por la editorial SAP Press.";

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

ceoMainHeader.innerHTML = "总经理";
ceoCeoDesc.innerHTML = "rimpido社の社主兼社長である。";
ceoDesc1.innerHTML = "<b>Dr. Jan Schuur</b> はrimpido社の社主兼社長である。1993年から化学におけるデータベースの使用、1998年から化学の環境における化学物質コンプライアンスに取り組んでいる。<br><br>"+
'彼の仕事の焦点は、SAP AGのSAP EHSMモジュール (環境・健康・安全管理) の様々な設備の導入、メンテナンスとケアである。SAPモジュールのコンポーネントは、製品の安全性、労働安全、危険物と産業医学、およびSAP製品とREACHコンプライアンスである。<br><br>'+
"そしてSAP EHSモジュールのインストール、ケアとメンテナンスの幅広い国際的経験を持っている。<br><br>"+
'rimpido社を創業した最初の年には、彼のスタッフと共にすでに5社からEH＆Sインストールのメンテナンスを引き継ぎ、かなりの範囲でプロジェクト作業を行い、同時に、SAP EHS Regulatory Contentと独自のEH&S Expert規制に関して、ハンブルクの製薬会社のSAP EHSM製品の安全性の導入をサポートしている。.<br><br>'+
"さらに、Dr. SchuurはStephan Eisenacher, Klaus Kammerer, Andreas RiepeによってSAP Pressから最近出版された書籍 「 <a href='EHS_manual.php?lang=zh'> SAP Environment, Health, and Safety Management - Das umfassende Handbuch</a> 」の共著者である。";

}


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
footerSubHeader1.innerHTML = "<b>お問い合わせ</b>";
footerSubHeader2.innerHTML = "クイックリンク";
footerSubHeader3.innerHTML = "情報";
footerSubDesc1.innerHTML = "検出ツール";
footerSubDesc2.innerHTML = "SAP押すだけで、ハンドブックSAP®EH＆S";
footerSubDesc3.innerHTML = "インプリント";
footerSubDesc4.innerHTML = "個人情報保護方針";
footerSubDesc5.innerHTML = "サイトマップ";
footerSubSesc6.innerHTML = "キャリア";



	
ceoMainHeader.innerHTML = "代表取締役社長";
ceoCeoDesc.innerHTML = "びrimpidoの創設者";
ceoDesc1.innerHTML = "博士 Jan Schuurはrimpido GmbHのマネージングディレクターです。 1993年以来、彼は化学のデータベースの使用に取り組んでき "+
					 "ました。 "+
					 "彼の研究の焦点は、SAP AGのさまざまな設備（環境、健康、安全管理）の導入、保守、保守です。"+
					 "SAPモジュールのコンポーネントは次のとおりです。 製品安全、労働安全衛生、危険物および作業薬、ならびにSAP製品および "+
					 "REACHコンプライアンス<br><br>"+

					 "彼の研究の焦点は、SAP AGのさまざまな設備（環境、健康、安全管理）の導入、保守、保守です。<br><br>"+

					 "rimpido GmbHの存在の最初の年にDr. Schuurは、従業員とともに、5つのEHの設備の保守を引き継ぎ、並行して、かなりの程度ま "+
					 "でプロジェクトの作業を並行して実施する。 SAP EHSM導入時のハンブルクに基づく製薬会社のサポートSAP EHS規制コンテンツおよびEH＆Sエキス "+
					 "パートルールとの連携による製品安全性。<br><br>"+

					 "また、Dr. Schuurは最近出版された本を共同執筆した <a href='EHS_manual.php?lang=ja'>&#34SAPの環境、健康、および安全管理 - 包括的なマニュアル&#34</a> Stephan Eisenacher、Klaus Kammerer、"+
					 "Andreas Riepe、Jan Schuur氏がSAP Pressから発行されました。";
}