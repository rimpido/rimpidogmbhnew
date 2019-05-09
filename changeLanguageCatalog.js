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

var catalogMainHeader = document.getElementById('catalog-main-header');
var catalogSubHeader1 = document.getElementById('catalog-sub-header1');
var catalogDesc1 = document.getElementById('catalog-desc1');
var catalogSubDesc1 = document.getElementById('catalog-sub-desc1');
var catalogSubDesc2 = document.getElementById('catalog-sub-desc2');
var catalogSubDesc3 = document.getElementById('catalog-sub-desc3');
var catalogSubDesc4 = document.getElementById('catalog-sub-desc4');
var catalogSubHeader2 = document.getElementById('catalog-sub-header2');
var catalogDesc2 = document.getElementById('catalog-desc2');


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
	window.location="phrasencatalog.php";
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



	
catalogMainHeader.innerHTML = "Phrasenkatalog";

catalogSubHeader1.innerHTML = "Der EHS-Bereich Produktsicherheit";
catalogDesc1.innerHTML = "Der EHS-Bereich Produktsicherheit beinhaltet auch die Erfassung und Verwaltung der notwendigen Daten zu Stoffen und Produkten für die Erstellung von z.B. Sicherheitsdatenblättern."+
" Die Verwaltung dieser mehrsprachigen Texte erfolgt in Form sogenannter Phrasen. Phrasen werden in Phrasenkatalogen erfasst und zu Phrasengruppen zusammengefasst. Ein fundierter Phrasenkatalog stellt"+
" die Basis für vollständige und korrekte Sicherheitsdatenblätter dar.<br><br>"+
"Der standardmäßig zur Verfügung stehende Phrasenkatalog EuPhraC enthält die wesentlichen Phrasen. Individuelle Erweiterungen wie z.B. das Aufnehmen und Übersetzen von zusätzlichen Phrasen können unter "+
"Umständen die Kosten für Ihre Sicherheitsdatenblätter erheblich steigern.<br><br>"+
"Die rimpido GmbH hat hier eine Möglichkeit geschaffen, den Standardphrasenkatalog einfach um eigene Phrasen zu ergänzen. Das Phrasentool kann Ihnen helfen, Phrasen für SAP EHS zu übersetzen und zuzuordnen."+
" Sie können:";
catalogSubDesc1.innerHTML = "In jeder bekannten Sprache Übersetzungen für Ihre Phrasen anlegen";
catalogSubDesc2.innerHTML = "Katalogdaten in SAP (.dat-Format) importieren";
catalogSubDesc3.innerHTML = "Ihren Katalog in allen oder ausgewählten Sprachen als SAP-Datei herunterladen";
catalogSubDesc4.innerHTML = "Übersetzungen kaufen";
catalogSubHeader2.innerHTML = "Zugriff auf den Phrasenkatalog";
catalogDesc2.innerHTML = "Haben Sie Fragen? Rufen Sie uns einfach an: +49 (0) 4181 – 13 86 456.<br>"+
"Eine erste Testinstallation finden Sie unter <a href='http://phrase-catalog.com/' target='_blank'>phrase-catalog.com</a>.";

}

/////FRENCH//////
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


catalogMainHeader.innerHTML = "Catalogue de phrases";
catalogSubHeader1.innerHTML = "La sécurité des produits EHS";
catalogDesc1.innerHTML = "La sécurité des produits EHS comprend également la collecte et la gestion des données nécessaires sur les substances et les produits pour la production, par exemple: Fiches de données de sécurité des matériaux (FDSM)."+
" La gestion de ces textes multilingues se fait sous forme de phrases. Les phrases types sont enregistrées dans les librairies de phrases types et regroupées en groupes de phrases types. Un catalogue de phrases sonores fournit la base d'une "+
"MSDS complète et correcte.<br><br>"+
"La bibliothèque de phrases par défaut EuPhraC contient les phrases essentielles. Les extensions individuelles telles que la réception et la traduction de phrases supplémentaires peuvent augmenter considérablement le coût de vos fiches de données"+
" de sécurité.<br><br>"+
"La rimpido GmbH vous offre la possibilité d'organiser le catalogue de phrases types dans vos propres phrases. L'outil de phrases types peut vous aider à traduire et organiser les phrases types pour SAP EHS. Vous pouvez";
catalogSubDesc1.innerHTML = "Créer une traduction de vos phrases dans n'importe quelle langue connue";
catalogSubDesc2.innerHTML = "Importer les données de catalogue au format SAP (.dat)";
catalogSubDesc3.innerHTML = "Télécharger votre catalogue dans toutes les langues ou dans certaines langues comme fichier SAP";
catalogSubDesc4.innerHTML = "Acheter une traduction";
catalogSubHeader2.innerHTML = "Accès au catalogue de phrases types";
catalogDesc2.innerHTML = "Vous avez des questions? Appelez-nous au +49 (0)4181 - 13 86 456. <br>"+
"Vous trouverez une première installation test sous <a href='http://phrase-catalog.com/' target='_blank'>phrase-catalog.com</a>.";

}

/////ARABIC//////
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

catalogMainHeader.innerHTML = "مكتبة التعابير ";
catalogSubHeader1.innerHTML = "SAP سلامة المنتج EHS";
catalogDesc1.innerHTML = "قسم الصحة والسلامة – أمان المنتج يحتوي أيضا على جمع وإدارة البيانات اللازمة للمنتجات والمواد من أجل خلق على سبيل المثال أوراق بياتات الأمان. إدارة هذه النصوص المتعددة اللغات تأخذ شكل ما يسمى العبارات. العبارات يتم جمعها في مكتبات للعبارات ويتم دمجها في مجموعات للعبارات. مكتبة العبارات الثابتة تمثل القاعدة لأوراق بيانات كاملة وصحيحة. <br><br>"+
"تحتوي على العبارات الأساسية. الملحقات الفردية مثل استقبال وترجمة عبارات إضافية قد تؤثر على تكلفة ورقة بيانات السلامة الخاصة بك وتزيدها بشكل كبير. <br><br>"+
"شركتنا قامت بخلق الفرصة, لإضافة عباراتكم الخاصة لمكتبة العبارات الأساسية. يمكن لأداة العبارات مساعدتكم بترجمة وترتيب عبارات ساب للصحة والسلامة, يمكنكم: ";
catalogSubDesc1.innerHTML = "إضافة ترجمة لعباراتكم في كل لغة معروفة ";
catalogSubDesc2.innerHTML = "استيراد بيانات الكاتالوج بتنسيق ساب المعروف ";
catalogSubDesc3.innerHTML = "تنزيل الكاتالوج الخاص بكم باللغة المختارة كملفات ساب";
catalogSubDesc4.innerHTML = "شراء ترجمة ";
catalogSubHeader2.innerHTML = "الوصول لكتالوج العبارات";
catalogDesc2.innerHTML = "هل لديكم أي سؤال؟ اتصلو بنا على الرقم +49 (0) 4181 – 13 86 456 <br>"+
"للحصول على تنصيب أولي اضغط على الرابط <a href='http://phrase-catalog.com/' target='_blank'>phrase-catalog.com</a>.";

$('#rimpido-page-top').css({'direction': 'rtl'});
$('#catalog-desc1').css({'text-align': 'right'});
$('#catalog-sub-desc1').css({'text-align': 'right'});
$('#catalog-sub-desc2').css({'text-align': 'right'});
$('#catalog-sub-desc3').css({'text-align': 'right'});
$('#catalog-sub-desc4').css({'text-align': 'right'});
$('#catalog-desc2').css({'text-align': 'right'});
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


catalogMainHeader.innerHTML = "Catálogo de frases";
catalogSubHeader1.innerHTML = "Seguridad del producto SAP EHS";
catalogDesc1.innerHTML = "El campo de acción de seguridad de los productos usando EHS incluye también la recogida y gestión de los datos necesarios sobre las sustancias y productos para la creación, por ejemplo, de MSDS. La gestión de diferentes textos multilingües es consecuencia de la concatenación de frases. Las frases se registran en catálogos o bibliotecas y se combinan en grupos. Un catálogo de frases proporciona los principios para elaborar MSDS completas y correctas.<br><br>"+
"EuPhraC es un catalogo estandard de frases disponible para el uso que contiene frases básicas. Extensiones individuales tales como recepción y traducción de frases adicionales pueden aumentar significativamente bajo ciertas circunstancias, el coste de las hojas de seguridad."+
"rimpido GmbH ha creado un catálogo de frases estándar que complementa sus propias frases. La herramienta de frases puede ayudar a traducir y asignar frases para SAP EHS. Se puede:";
catalogSubDesc1.innerHTML = "Crear frases traducudas en las diferentes lenguas conocidas";
catalogSubDesc2.innerHTML = "Importar catalogos de datos (.dat-Format) en SAP";
catalogSubDesc3.innerHTML = "Su catálogo en todos o determinados lenguajes elejidos pueden ser descargados como formato SAP";
catalogSubDesc4.innerHTML = "Compra de traducciones";
catalogSubHeader2.innerHTML = "Acceso al catálogo de frases";
catalogDesc2.innerHTML = "Para preguntas: por favor llame al número: +49 (0) 4181 − 13 86 456. <br>"+
"Una instalación de prueba puede ser encontrada en la web <a href='http://phrase-catalog.com/' target='_blank'>phrase-catalog.com</a>.";

}


///japanese
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

footerMainHeader.innerHTML = "お問い合わせ"; //CONTACT
footerSubHeader1.innerHTML = "お問い合わせ"; //CONTACT
//footerSubHeader2.innerHTML = "الروابط"; //QUICK LINKS
//footerSubHeader3.innerHTML = "معلومات"; //INFOS
footerSubDesc1.innerHTML = "検出ツール"; //RECORDING TOOL
footerSubDesc2.innerHTML = "SAP押すだけで、ハンドブックSAP®EH＆S"; //SAP EHS
footerSubDesc3.innerHTML = "インプリント"; //IMPRINT
footerSubDesc4.innerHTML = "個人情報保護方針"; //PRIVACY POLICY
footerSubDesc5.innerHTML = "サイトマップ"; //SITEMAP
footerSubSesc6.innerHTML = "キャリア";

catalogMainHeader.innerHTML = "フレーズライブラリ"; //PHRASE CATALOG
//catalogSubHeader1.innerHTML = "SAP سلامة المنتج EHS"; //SAP EHS PRODUCT SAFETY
catalogDesc1.innerHTML = "EHS製品の安全性は、例えば安全データシートを作成するための物質や製品に必要なデータの記録と管理も含まれます。これらの多言語テキストの管理は、いわゆるフレーズの形態になります。フレーズはフレーズライブラリに記録され、フレーズグループにグループ化されます。サウンドフレーズライブラリは、完全かつ正確な安全データシートの基礎を提供します。<br><br>"+
						  "デフォルトの使用可能なフレーズライブラリEuPhraCは、重要なフレーズが含まれています。例えば個々の拡張し受信、追加のフレーズを翻訳すると、特定の状況下で安全データシートのコストを大幅に向上させることができます。<br><br>"+
						  "rimpido社は、あなた自身のフレーズで、標準フレーズライブラリに追加する機会を設けました。フレーズツールは、SAP EHSのフレーズを翻訳し割り当てることができます。以下の項目について行うことが可能です。<br><br>";

catalogSubDesc1.innerHTML = "あらゆる既知の言語でのフレーズの翻訳を作成";
catalogSubDesc2.innerHTML = "SAP（.dat）形式で、ライブラリデータをインポート";
catalogSubDesc3.innerHTML = "SAPファイルより、すべてまたは選択した言語でライブラリをダウンロード";
catalogSubDesc4.innerHTML = "翻訳を購入";
catalogSubHeader2.innerHTML = "フレーズライブラリへのアクセス"; //ACCESS TO THE PHRASE CATALOG
catalogDesc2.innerHTML = "ご質問等がございましたら、お気軽にお問い合わせ下さい：+49 (0) 4181-13 86 456<br>"+
						 "最初のテストインストールは、<a href='http://phrase-catalog.com/' target='_blank'>phrase-catalog.com</a>を参照してください。";


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


catalogMainHeader.innerHTML = "短句目录"; //PHRASE CATALOG
//catalogSubHeader1.innerHTML = "SAP سلامة المنتج EHS"; //SAP EHS PRODUCT SAFETY
catalogDesc1.innerHTML = "EHS产品安全还包括收集和管理生产例如物质和产品的必要数据：材料安全数据表（MSDS）。这些多语言文本的管理以所谓的短语的形式完成。词组记录在短语库中，并分组成短语组。声音目录提供完整和正确的MSDS的基础。<br><br>"+
						  "默认的短语库EuPhraC包含基本短语。单独的扩展，如接收和翻译其他短语可能会大大增加安全数据表的成本。<br><br>"+
 						  "rimpido GmbH创造了一个机会，让您以自己的语言组织标准短语目录。短语工具可以帮助您翻译和组织SAP EHS的短语。您可以：";
catalogSubDesc1.innerHTML = "以任何已知的语言为您的短语创建一个透视";
catalogSubDesc2.innerHTML = "以SAP（.dat）格式导入目录数据";
catalogSubDesc3.innerHTML = "将所有或所选语言的目录下载为SAP文件";
catalogSubDesc4.innerHTML = "购买一个transaltion";
catalogSubHeader2.innerHTML = "访问短语目录"; //ACCESS TO THE PHRASE CATALOG
catalogDesc2.innerHTML = "你有问题吗？请致电：+49（0）4181 - 13 86 456.<br>"+
						 "您可以在 <a href='http://phrase-catalog.com/' target='_blank'>phrase-catalog.com</a>";
						
}