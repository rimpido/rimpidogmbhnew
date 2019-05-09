var url_string = window.location.href;
var url = new URL(url_string);
var getLanguage = url.searchParams.get('lang');

////Nav BAr///////
var navHome = document.getElementById('nav-home');
var navMission = document.getElementById('nav-mission');
var navServices = document.getElementById('nav-services');
var navTeam = document.getElementById('nav-team');
var navTestimonial = document.getElementById('nav-testimonial');
var navContact = document.getElementById('nav-contact');
var navPrivacy = document.getElementById('nav-privacy');
var currentLang = document.getElementById('currentLang');

//////EHS Support Sub page//////
var supportMainHeader = document.getElementById('support-main-header');
var supportSubHeader1 = document.getElementById('support-sub-header1');
var supportDesc1 = document.getElementById('support-desc1');
var supportSubDesc1 = document.getElementById('support-sub-desc1');
var supportSubDesc2 = document.getElementById('support-sub-desc2');
var supportSubDesc3 = document.getElementById('support-sub-desc3');
var supportSubDesc4 = document.getElementById('support-sub-desc4');
var supportSubDesc5 = document.getElementById('support-sub-desc5');
var supportSubDesc6 = document.getElementById('support-sub-desc6');
//////end EHS Support Sub page//////

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


if(getLanguage=="en")
{
	window.location="support.php";
}



/////GERMAN/////
else if(getLanguage=="de")
{
//var dropdownMenuDE = document.getElementById('de');
//dropdownMenuDE.onclick = function(){
//////////////////Support//////////////////
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





supportMainHeader.innerHTML = "EHS Support";
supportSubHeader1.innerHTML = "Mit Dem SAP EHS Support Auf Der Sicheren Seite Sein";
supportDesc1.innerHTML = "SAP EHS zeichnet sich durch eine hohe Flexibilität, Zuverlässigkeit und Integrationsfähigkeit aus, aber auch durch eine große,"+
"sich häufig ändernde Regelungsdichte, die schnelle und oft spezielle Anpassungen erfordert. Wir übernehmen für Sie die regelmäßige Anpassung der Dokumente"+
" und Datenstrukturen an die laufenden Änderungen der Chemikaliengesetzgebung wie z.B. REACH-Verordnung, GHS/CLP Verordnung. Im Rahmen des SAP EHS Supports"+
" können wir Sie durch folgende Leistungen unterstützen:";
supportSubDesc1.innerHTML = "Sicherstellung der Compliance mit Verordnungen zur Handelskontrolle";
supportSubDesc2.innerHTML = "Prozessgestaltung bezüglich des Versands von Sicherheitsdatenblättern sowie des Versands von technischen Merkblättern mit Logistikintegration";
supportSubDesc3.innerHTML = "Gefahrengutprüfungen in der Logistik";
supportSubDesc4.innerHTML = "Anpassung der Ausgabe von Gefahrgutdaten auf Lieferschein, Auftragsbestätigung oder Packliste";
supportSubDesc5.innerHTML = "Erstellung und Anpassung von Etikettenlayouts";
supportSubDesc6.innerHTML = "Schnittstellenentwicklung von EH&S zu non-SAP Systemen";

}



//////FRENCH//////
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


supportMainHeader.innerHTML = "Assistance EHS";
supportSubHeader1.innerHTML = "Soyez en sécurité avec le support SAP EHS";
supportDesc1.innerHTML = "SAP EHS se caractérise par une grande flexibilité, fiabilité et capacité d'intégration, mais aussi par une législation et des réglementations importantes et en constante évolution, qui nécessitent des adaptations rapides et souvent spéciales."+
"Nous nous chargeons de la modification régulière des documents et des structures de données pour tenir compte des changements en cours dans la législation sur les produits chimiques, tels que REACH, GHS / CLP Regulation." + 
"Dans le cadre du support SAP EHS, nous pouvons vous assister avec les services suivants:";
supportSubDesc1.innerHTML = "Assurer le respect de la réglementation sur le contrôle du commerce";
supportSubDesc2.innerHTML = "Conception de processus concernant l'envoi des fiches de données de sécurité des matériaux ainsi que l'envoi des fiches techniques avec intégration logistique";
supportSubDesc3.innerHTML = "Contrôle des marchandises dangereuses en logistique";
supportSubDesc4.innerHTML = "Ajustement de l'édition des données relatives aux marchandises dangereuses lors de la livraison, de la confirmation de commande ou de la liste d'emballage";
supportSubDesc5.innerHTML = "Construire et personnaliser les modèles d'étiquettes";
supportSubDesc6.innerHTML = "Développement d'interfaces EHS vers des systèmes non-SAP";

}

//////ARABIC//////
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

supportMainHeader.innerHTML = "دعم EHS";
supportSubHeader1.innerHTML = "كن بأمان مع دعم ساب للصحة والسلامة ";
 //$('#support-sub-header1').css({'text-align': 'right'});
supportDesc1.innerHTML = "نظام ساب للصحة والسلامة بقدم نفسه من خلال الوثوقية العالية والمرونة والقدرة على التأقلم, ومن خلال كمية كبيرة من القوانين والأنظمة والتي تتطلب الكثير من القدرة والمرونة على التأقلم."+
"نحن نحمل عنكم عناء التغيير المستمر للمستندات و لشكل البيانات خلال التغييرات المستمرة للتشريعات المتعلقة بالمواد الكيميائية كأنظمة REACH و GHS/CLP " + 
"في إطار دعم نظام ساب للصحة والسلامة يمكننا دعمكم من خلال الخدمات التالية: ";
 //$('#support-desc1').css({'text-align': 'right'});
supportSubDesc1.innerHTML = "ضمان الامتثال للوائح الرقابة التجارية ";
 //$('#support-sub-desc1').css({'float': 'right'});
supportSubDesc2.innerHTML = "تصميم العمليات المتعلقة بإرسال أوراق بيانات سلامة المواد وارسال النشرات الفنية مع تكامل الخدمات اللوجستية ";
 //$('#support-sub-desc2').css({'float': 'right'});
supportSubDesc3.innerHTML = "فحص المواد الخطرة فيما يتعلق بالخدمات اللوجستية ";
supportSubDesc4.innerHTML = "ضبط إخراج بيانات البضائع الخطرة على شهادات التسليم، تأكيد الطلب أو قائمة التعبئة ";
supportSubDesc5.innerHTML = "بناء وتخصيص مخططات الملصقات ";
supportSubDesc6.innerHTML = "تطوير نقاط اتصال مع الأنظمة التي لا تدعم نظام ساب ";
$('#rimpido-page-top').css({'direction': 'rtl'});
$('#support-sub-header1').css({'text-align': 'right'});
$('#support-desc1').css({'text-align': 'right'});
$('#support-sub-desc1').css({'text-align': 'right'});
$('#support-sub-desc2').css({'text-align': 'right'});
$('#support-sub-desc3').css({'text-align': 'right'});
$('#support-sub-desc4').css({'text-align': 'right'});
$('#support-sub-desc5').css({'text-align': 'right'});
$('#support-sub-desc6').css({'text-align': 'right'});
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


supportMainHeader.innerHTML = "EHS-Soporte";
supportSubHeader1.innerHTML = "Estar del lado seguro con el soporte SAP EHS";
supportDesc1.innerHTML = "SAP EHS se caracteriza no solo por un alto grado de flexibilidad, fiabilidad e integración, sino también esta constituido por un gran leyes y reglamentos que cambian con frecuencia, lo que requiere adaptaciones, rápidos y con frecuencia especiales."+
"Nos ocupamos de la modificación periódica de los documentos y estructuras de datos a los cambios en curso en la legislación sobre sustancias químicas, tales como REACH y GHS / CLP Reglamento." + 
"Como parte del soporte de SAP EHS podemos apoyarle con los siguientes servicios:";
supportSubDesc1.innerHTML = "Asegurar el cumplimiento de las regulaciones de comercio";
supportSubDesc2.innerHTML = "El diseño del proceso sobre el envío de fichas de datos de seguridad así como folletos técnicos que integren la logística";
supportSubDesc3.innerHTML = "Chequeo de mercancías peligrosas en la logística";
supportSubDesc4.innerHTML = "Ajuste de la salida de datos de mercancía peligrosa en las facturas, confirmación de pedidos y en la hoja de embalaje";
supportSubDesc5.innerHTML = "Construir y personalizar diseños para etiquetas de mecancias";
supportSubDesc6.innerHTML = "El desarrollo de interfaces de EH&S para sistemas no SAP";

}



//////japanese//////
else if(getLanguage=="ja")
{
navHome.innerHTML = "サイトマップ";
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
//footerSubHeader3.innerHTML = "معلومات"; //INFOS
footerSubDesc1.innerHTML = "検出ツール" //ERFASUNG
footerSubDesc2.innerHTML = "SAP押すだけで、ハンドブックSAP®EH＆S"; //EHS SAP
footerSubDesc3.innerHTML = "インプリント"; //IMPRINT
footerSubDesc4.innerHTML = "個人情報保護方針"; //PRIVACY
footerSubDesc5.innerHTML = "サイトマップ"; //SITEMAP
footerSubSesc6.innerHTML = "キャリア";

supportMainHeader.innerHTML = "EHSサポート"; //SUPPORT
supportSubHeader1.innerHTML = "念のためにSAP EHSサポート"; //BE SAFE SIDE
supportDesc1.innerHTML = "SAP EHSは高い柔軟性、信頼性、および統合機能を特徴とし、しかしまた大規模、頻繁に変更される法律や規制により、迅速かつ特別な対応を必要とします。 "+
						 "弊社では、REACH指令、GHS/CLP指令のような化学物質の法規制の文書やデータ構造の定期的な変更に対応します。 "+
						 "SAP EHSサポートの一端として、弊社は以下のサービスをお手伝いいたします: ";
supportSubDesc1.innerHTML = "貿易管理上の規制の遵守";
supportSubDesc2.innerHTML = "安全データシートの発送に関する加工工程設計、およびロジスティクス統合とテクニカルデータシートの発送";
supportSubDesc3.innerHTML = "物流での危険物のチェック";
supportSubDesc4.innerHTML = "納品書の危険物データの出力、注文確認やパッキングリストを調整";
supportSubDesc5.innerHTML = "ラベルレイアウトの作成とカスタマイズ";
supportSubDesc6.innerHTML = "非SAPシステムにEH＆Sのインターフェース開発";

}

else if(getLanguage=="zh")
{
navHome.innerHTML = "首页";
navMission.innerHTML = "我们的任务"; 
navServices.innerHTML = "的服务";
navTeam.innerHTML = "我们的团队";
navTestimonial.innerHTML = "Testimonial";
navContact.innerHTML = "联系方式";
navPrivacy.innerHTML = "隐私政策";
currentLang.innerHTML = "<b><span>ZH </span></b>&nbsp;"+
			"<img src='assets/icon/zh-icon.png'>";

footerMainHeader.innerHTML = "联系方式"; //CONTACT
footerSubHeader1.innerHTML = "联系方式"; //CONTACT
//footerSubHeader2.innerHTML = "الروابط"; //QUICK LINKS
//footerSubHeader3.innerHTML = "معلومات"; //INFOS
footerSubDesc1.innerHTML = "检测工具" //ERFASUNG
footerSubDesc2.innerHTML = "手册SAP®EH＆S在SAP新闻"; //EHS SAP
footerSubDesc3.innerHTML = "版权声明"; //IMPRINT
footerSubDesc4.innerHTML = "隐私政策"; //PRIVACY
footerSubDesc5.innerHTML = "网站地图"; //SITEMAP
footerSubSesc6.innerHTML = "人才招聘";

supportMainHeader.innerHTML = "EHS-支援工具"; //SUPPORT
supportSubHeader1.innerHTML = "SAP EHS 支援工具确保万无一失"; //BE SAFE SIDE
supportDesc1.innerHTML = "SAP EHS　的特殊性不仅因为其高度的灵活性，可靠性和互联网能力，还因为它与大量的，经常变动的法规制度密切相关。这些法规制度要求ＳＡＰ　ＥＨＳ　要及时并且有针对性地进行调整。 "+
						 "我们能为您对文件和数据结构进行定期的调整，使其符合当前化学品法规的变动，比如REACH　规则和GHS/CLP法规。 "+
						 "通过SAP EHS支援工具我们能为您在以下业务中提供服务：";
supportSubDesc1.innerHTML = "实现对贸易监管法规的绝对遵守。";
supportSubDesc2.innerHTML = "对材料安全数据表的发送和技术说明书的发送进行物流一体化的流程设计";
supportSubDesc3.innerHTML = "物流过程中的危险品检查";
supportSubDesc4.innerHTML = "对发货单，订单确认书或者装箱单上危险品的数据说明进行调整";
supportSubDesc5.innerHTML = "完成或者调整标签的设计";
supportSubDesc6.innerHTML = " 实现EH&S 到非SAP系统的借口转换";

}