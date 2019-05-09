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





var toolsMainHeader = document.getElementById('tools-main-header');
var toolsSubHeader1 = document.getElementById('tools-sub-header1');
var toolsSubHeader2 = document.getElementById('tools-sub-header2');
var toolsSubHeader3 = document.getElementById('tools-sub-header3');
var toolsSubHeader4 = document.getElementById('tools-sub-header4');
var toolsDesc1 = document.getElementById('tools-desc1');
var toolsDesc2 = document.getElementById('tools-desc2');
var toolsDesc3 = document.getElementById('tools-desc3');
var toolsDesc4 = document.getElementById('tools-desc4');

var toolsModalHeader1 = document.getElementById('tools-modal-header1');
var toolsModalDesc1 = document.getElementById('tools-modal-desc1');
var toolsModalDesc2 = document.getElementById('tools-modal-desc2');

//Recording tool
var toolsModalHeader2 = document.getElementById('tools-modal-header2');
var toolsModalSubHeader1 = document.getElementById('tools-modal-sub-header1');
var toolsModalDesc3 = document.getElementById('tools-modal-desc3');

var toolsModalSubHeader2 = document.getElementById('tools-modal-sub-header2');
//function
var toolsModalHeader3 = document.getElementById('tools-modal-header3');
var toolsModalSubHeader3 = document.getElementById('tools-modal-sub-header3');
var toolsModalSubDesc1 = document.getElementById('tools-modal-sub-desc1');
var toolsModalSubDesc2 = document.getElementById('tools-modal-sub-desc2');
var toolsModalSubDesc3 = document.getElementById('tools-modal-sub-desc3');
var toolsModalSubDesc4 = document.getElementById('tools-modal-sub-desc4');
var toolsModalSubDesc5 = document.getElementById('tools-modal-sub-desc5');
var toolsModalSubDesc6 = document.getElementById('tools-modal-sub-desc6');
//advantages
var toolsModalHeader4 = document.getElementById('tools-modal-header4');
var toolsModalSubDesc7 = document.getElementById('tools-modal-sub-desc7');
var toolsModalSubDesc8 = document.getElementById('tools-modal-sub-desc8');
var toolsModalSubDesc9 = document.getElementById('tools-modal-sub-desc9');
var toolsModalSubDesc10 = document.getElementById('tools-modal-sub-desc10');
var toolsModalSubDesc11 = document.getElementById('tools-modal-sub-desc11');
//features
var toolsModalHeader5 = document.getElementById('tools-modal-header5');
var toolsModalSubHeader4 = document.getElementById('tools-modal-sub-header4');
var toolsModalSubHeader5 = document.getElementById('tools-modal-sub-header5');
var toolsModalSubHeader6 = document.getElementById('tools-modal-sub-header6');
var toolsModalSubHeader7 = document.getElementById('tools-modal-sub-header7');
var toolsModalSubHeader8 = document.getElementById('tools-modal-sub-header8');
var toolsModalDesc4 = document.getElementById('tools-modal-desc4');
var toolsModalDesc5 = document.getElementById('tools-modal-desc5');
var toolsModalDesc6 = document.getElementById('tools-modal-desc6');

//3rd modal DYN-WWI Tool for dynamic control and management of bulk generations
var toolsModalHeader6 = document.getElementById('tools-modal-header6');
var toolsModalDesc7 = document.getElementById('tools-modal-desc7');

//4th modal DYN-Expert tool for dynamic controling and managing of SAP EH&S expert bulk runs
var toolsModalHeader7 = document.getElementById('tools-modal-header7');
var toolsModalDesc8 = document.getElementById('tools-modal-desc8');


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
	window.location="EHS_tools.php";
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




toolsMainHeader.innerHTML = "EHS Tools";
toolsSubHeader1.innerHTML = "Phrasentool";
toolsSubHeader2.innerHTML = "Erfassungstool für Lieferanten SDB's / Gefahrstoffe";
toolsSubHeader3.innerHTML = "DYN-WWI Tool zur Dynamischen Steuerung und Verwaltung von Massengenerierungen";
toolsSubHeader4.innerHTML = "DYN-Expert-Tool zur dynamischen Steuerung und Verwaltung von SAP EH&S Expert Massenläufen";
toolsDesc1.innerHTML = "dafür geeignet ist um Phrasenübersetzungen z.B. aus Excel in das EH&S Importformat zu konvertieren oder auch exportierte Phrasen aus dem EH&S Exportformat in Excel";
toolsDesc2.innerHTML = "bietet die Möglichkeit alle wesentlichen Daten für einen Gefahrstoff auf der Basis des Lieferanten-SDB zu erfassen, bzw...";
toolsDesc3.innerHTML = "zerlegt eine Massengenerierung in kleine Pakete. Diese könne in Minutenschnelle abgearbeitet und dynamisch...";
toolsDesc4.innerHTML = "erlaubt es Ihnen die Auslastung Ihrer Expert-Server-Prozesse zu steuern und stellt die zuverlässige Abarbeitung von Massenläufen auch über Offline Backup...";


//Phrasetools
toolsModalHeader1.innerHTML = "Phrasentools";
toolsModalDesc1.innerHTML = "<a href='http://www.phrase-catalog.com/' target='_blank'>Phrasentool</a> das auch dafür geeignet ist um Phrasenübersetzungen z.B. aus Excel in das EH&S Importformat zu konvertieren oder auch exportierte Phrasen aus dem EH&S Exportformat in Excel zu konvertieren arbeitet die rimpido GmbH noch an den folgenden weiteren Tools:<br>";
toolsModalDesc2.innerHTML = "";

//Recording tool(no recording tool)
toolsModalHeader2.innerHTML = "Erfassungstool für Lieferanten SDB's / Gefahrstoffe";
toolsModalSubHeader1.innerHTML = "<b>EHS Erfassungstool für Gefahrstoffe und Gefahrgutdaten</b>";
toolsModalDesc3.innerHTML = "Das Erfassungstool bietet die Möglichkeit alle wesentlichen Daten für einen Gefahrstoff auf der Basis des Lieferanten-SDB zu erfassen, bzw. im System zu kontrollieren und das Lieferanten-SDB im DMS des SAP-Systems zentral abzulegen in einem Dialog / Transaktionsschritt. Damit wird dieser wichtige Arbeitsschritt erheblich vereinfacht und beschleunigt und das komplexe arbeiten mit den Transaktionen CG02, CG50 und CG36VEN entfällt.";


toolsModalHeader6.innerHTML = "DYN-WWI Tool zur Dynamischen Steuerung und Verwaltung von Massengenerierungen";
toolsModalDesc7.innerHTML = "Die Massengenerierung von WWI-Berichten ist bei großen Datenmengen eine Herausforderung. Einerseits besteht eine Konkurrenz um die WWI-Server, spätestens wenn während einer Massengenerierung von Rohberichten ein Rohbericht für ein spezielles SDB schnell neu generiert werden soll, ist der Standard überfordert. Andererseits bedingt die Zeitdauer und das Datenvolumen einer Massengenerierung oft Probleme. So kann zum Beispiel eine Offline Datensicherung eine Massengenerierung zum Abbruch bringen und in der Regel ist dann nur ein Neustart möglich. Das ist bei den Zeiträumen für die Massengenerierung von Rohberichten von mehr als einer Woche ein echtes Ärgernis."+
"<br><br>DYN-WWI, das wir auf der Basis eines existierenden Prototypen gerne für Sie spezifisch implementieren, zerlegt eine Massengenerierung in kleine Pakete. Diese könne in Minutenschnelle abgearbeitet und dynamisch freien WWI-Servern zugewiesen und überwacht werden. Dies erlaubt das automatische punktgenaue Wiederaufsetzen von Massengenerierungen nach Offline Datensicherungen, übergelaufenen Dokumentenverwaltungssystemenen etc. DYN-WWI erlaubt es somit effizient und unbeaufsichtigt Massengenerierungen durchzuführen, ohne dass das Tagesgeschäft der EHS Abteilung beeinträchtigt wird. Mit Hilfe eines Dialoges kann der Verlauf der Massengenerierung kontrolliert werden.";


toolsModalHeader7.innerHTML = "DYN-Expert-Tool zur dynamischen Steuerung und Verwaltung von SAP EH&S Expert Massenläufen";
toolsModalDesc8.innerHTML = "EH&S Expert Massenläufe unterliegen prinzipiell derselben Problematik wie WWI-Massengenerierungen. Die Kontrolle des Prozesses ist hier sogar noch etwas schwieriger, da Fehlermeldungen aus den im BATCH ausgeführten Regelwerken im Standard nur über das Systemlog zugänglich sind, das aber keine Auswertung zulässt.<br><br>"+
"Das von uns auf der Basis von Erfahrungen eines implementierten Prototypen für Sie erstellte Dyn-Expert-Tool, erlaubt es Ihnen die Auslastung Ihrer Expert-Server-Prozesse zu steuern und stellt die zuverlässige Abarbeitung von Massenläufen auch über Offline Backup Zeiten und Expert Server Ausfälle sicher. Zudem fasst es die Fehlermeldungen der Expert Regelwerke in eine übersichtlichen und informativen Form zusammen.<br><br>"+
"Bei Interesse kontaktieren Sie uns bitte z.B. via Email unter: <a href='mailto:info@rimpido.com'>info@rimpido.com</a>.";

}

///FRENCH///
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


toolsMainHeader.innerHTML = "Les outils EHS";
toolsSubHeader1.innerHTML = "l'outil de phrases";
toolsSubHeader2.innerHTML = "Outil d'enregistrement pour le fabricant SDB / substances dangereuses";
toolsSubHeader3.innerHTML = "Outil DYN-WWI pour le contrôle dynamique et la gestion des générations de masse";
toolsSubHeader4.innerHTML = "Outil DYN-Expert pour le contrôle dynamique et la gestion des cycles de masse experts SAP EHS";
toolsDesc1.innerHTML = "qui est aussi utilisé pour la conversion des traductions de phrases à partir d'Excel au format d'importation EHS ou la conversion des phrases exportées du format d'exportation EHS en Excel";
toolsDesc2.innerHTML = " offre la possibilité d'enregistrer et de vérifier toutes les données essentielles pour une substance dangereuse dans...";
toolsDesc3.innerHTML = "décompose une génération de vrac en petits paquets. Ceux-ci peuvent être traités en quelques minutes, alloués et suivis dynamiquement...";
toolsDesc4.innerHTML = "vous permet de contrôler la charge de travail de vos processus Expert-Server...";


//Phrasetools
toolsModalHeader1.innerHTML = "l'outil de phrases";
toolsModalDesc1.innerHTML = "<a href='http://www.phrase-catalog.com/' target='_blank'>l'outil de phrases</a> qui est aussi utilisé pour la conversion des traductions de phrases à partir d'Excel au format d'importation EHS ou la conversion des phrases exportées du format d'exportation EHS en Excel, rimpido travaille sur d'autres outils:<br>";
toolsModalDesc2.innerHTML = "";

//Recording tool(no recording tool)
toolsModalHeader2.innerHTML = "Outil d'enregistrement pour le fabricant SDB / substances dangereuses";
toolsModalSubHeader1.innerHTML = "<b>Fiche de données de sécurité entrante de l'outil d'enregistrement</b>";
toolsModalDesc3.innerHTML = "L'outil d'enregistrement offre la possibilité d'enregistrer et de vérifier toutes les données essentielles pour une substance dangereuse dans le système sur la base du fournisseur-SDB. Il permet également d'enregistrer le fournisseur-SDB dans le système de gestion des documents du système SAP, en une seule étape de dialogue / transaction. Ainsi, cette étape importante est beaucoup plus facile et rapide. Aussi les transactions CG02, CG50 et CG36VEN dispensent.";


toolsModalHeader6.innerHTML = "Outil DYN-WWI pour le contrôle dynamique et la gestion des générations de masse";
toolsModalDesc7.innerHTML = "La génération en masse de rapports WWI est un défi, si vous avez de grandes quantités de données. D'une part, les serveurs WWI se font concurrence. Puisque, au moins, lorsqu'un rapport brut pour un SDB spécial doit être généré rapidement, pendant le traitement d'une production en vrac, la norme est surchargée. Pour un autre, la durée et le volume de données d'une génération de masse causent des problèmes. Ainsi, une sauvegarde de données hors ligne peut interrompre une génération de masse. Si cela se produit, la seule option est normalement un redémarrage. Si la génération en masse de rapports bruts prend plus d'une semaine, cela peut être un gros inconvénient."+
"<br><br>DYN-WWI, que nous pouvons réaliser avec plaisir pour vous, sur la base d'un prototype existant, décompose une génération de vrac en petits paquets. Ceux-ci peuvent être traités en quelques minutes, alloués et suivis dynamiquement aux serveurs vacants WWI. Cela permet de continuer la génération de masse automatiquement et avec précision après une sauvegarde de données hors ligne, des systèmes de gestion de documents débordés, etc. DYN-WWI permet ainsi d'effectuer une production de masse efficace et sans présence. De cette façon, le département EHS peut se consacrer à ses activités quotidiennes. Le processus de génération de masse peut être contrôlé via une boîte de dialogue à l'écran.";


toolsModalHeader7.innerHTML = "Outil DYN-Expert pour le contrôle dynamique et la gestion des cycles de masse experts SAP EHS";
toolsModalDesc8.innerHTML = "Les séries en vrac d'experts EHS ont les mêmes problèmes que les générations en vrac de WWI. La surveillance du processus est d'ailleurs encore plus compliquée, car les messages d'erreur des réglementations exécutées en BATCH dans la norme ne sont accessibles que via le journal système. Toutefois, cela ne peut pas être utilisé pour générer un état.<br><br>"+
"L'outil Dyn-Expert, que nous avons créé pour vous à partir de l'expérience d'un prototype déjà implémenté, vous permet de contrôler la charge de travail de vos processus Expert-Server. Il assure un processus fiable d'exécutions en vrac même pendant les temps de sauvegarde hors ligne et les temps d'arrêt du serveur Expert Server. En outre, il fusionne les messages d'erreur du règlement d'expert en une structure claire et informative.<br><br>"+
"Si vous êtes intéressés, veuillez nous contacter par exemple via Email at: <a href='mailto:info@rimpido.com'>info@rimpido.com</a>.";

}


///ARABIC///
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

toolsMainHeader.innerHTML = "أدوات ساب للصحة والسلامة ";
toolsSubHeader1.innerHTML = " أداة التعابير";
toolsSubHeader2.innerHTML = "أداة التجميع للموردين SDB's / المواد الخطرة ";
toolsSubHeader3.innerHTML = "أداة DYN-WWI لدينامية السيطرة وإدارة التوليد الجماعي";
toolsSubHeader4.innerHTML = "DYN-Expert tool for dynamic controling and managing of SAP EH&S expert bulk runs";
toolsDesc1.innerHTML = "والتي تمكن من تحويل التعابير المترجمة والمحفوظة كملف  Excel";
toolsDesc2.innerHTML = " بالمورد, أو بمعنى آخر التحقق في النظام و طرح ورقة بيانات السلامة الخاصة بالمورد في ال...";
toolsDesc3.innerHTML = "التوليد الجماعي من تقارير...";
toolsDesc4.innerHTML = "allows you to control the workload of your Expert-Server processes...";


//Phrasetools
toolsModalHeader1.innerHTML = " أداة التعابير";
toolsModalDesc1.innerHTML = "<a href='http://www.phrase-catalog.com/' target='_blank'>l'outil de phrases</a> والتي تمكن من تحويل التعابير المترجمة والمحفوظة كملف Excel إلى صيغة ساب المناسبة أو تحويل العبارات المستخرجة كصيغ ساب إلى  ملف Excel. تعمل شركتنا على الأدوات التالية: <br>";
toolsModalDesc2.innerHTML = "";

//Recording tool(no recording tool)
toolsModalHeader2.innerHTML = "أداة التجميع للموردين SDB's / المواد الخطرة ";
toolsModalSubHeader1.innerHTML = "<b>Inbound Safty Data Sheet Recording Tool</b>";
toolsModalDesc3.innerHTML = "بالمورد, أو بمعنى آخر التحقق في النظام و طرح ورقة بيانات السلامة الخاصة بالمورد في ال DMS الخاص بنظام ساب بشكل مركزي في خطوات العمليات. من المتوقع توفر أداة التحقق في منتصف شهر أيار عام 2016 ";


toolsModalHeader6.innerHTML = "أداة DYN-WWI لدينامية السيطرة وإدارة التوليد الجماعي ";
toolsModalDesc7.innerHTML = "التوليد الجماعي من تقارير WWI تعتبر بالنسبة لكميات البيانات الكبيرة تحد كبير. ";


toolsModalHeader7.innerHTML = "DYN-Expert tool for dynamic controling and managing of SAP EH&S expert bulk runs";
toolsModalDesc8.innerHTML = "EH&S expert bulk runs have the same problems as WWI bulk generations. The process monitoring is in fact even more complicated, as error messages from the regulations that is running in BATCH in the standard is accessable only via the systemlog. That however cannot be used for generating a report.<br><br>" +
"The Dyn-Expert-Tool, that we created for you based on the experiance of an already implemented prototype, allows you to control the workload of your Expert-Server processes. It ensures to reliable process of bulk runs even during offline backup times and Expert Server downtimes. Furthermore it merges error messages from the expert regulation into a clearly represented and informative structure.<br.<br>"+
"If you are interested, please contact us for example via Email at: <a href='mailto:info@rimpido.com'> info@rimpido.com</a>.";

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

toolsMainHeader.innerHTML = "Herramientas EHS";
toolsSubHeader1.innerHTML = "Phrasentool";
toolsSubHeader2.innerHTML = "Herramienta de detección para MSDS de Proveedores / Sustancias peligrosas";
toolsSubHeader3.innerHTML = "Herramienta DYN-WWI para el control y gestión dinámica de generacion de informes en masa";
toolsSubHeader4.innerHTML = 'DYN-Expert-Tool controla y gestiona de forma dinámica la ejeción en masa del "SAP EHS Expert Rules"';
toolsDesc1.innerHTML = "que también es util para la traduccion de frases, por ejemplo, convertir datos de Excel a formato EHS de importación o de reverso convertir datos exportables de frases de EHS en formato Excel";
toolsDesc2.innerHTML = " ofrece la posibilidad de capturar datos esenciales de un material peligroso basado...";
toolsDesc3.innerHTML = "adecuamos a las condiciones específicas del cliente. Este método procesa las diferentes asignaciones a los servidores de WWI en solo minutos de forma dinámicas...";
toolsDesc4.innerHTML = "el cual le permite al cliente el aprovechamiento máximo controlado de los procesos del Expert-Server...";


//Phrasetools
toolsModalHeader1.innerHTML = "Phrasentool";
toolsModalDesc1.innerHTML = "<a href='http://www.phrase-catalog.com/' target='_blank'>Phrasentool</a> que también es util para la traduccion de frases, por ejemplo, convertir datos de Excel a formato EHS de importación o de reverso convertir datos exportables de frases de EHS en formato Excel, rimpido GmbH trabaja adicionalmente en el desarrollo de las siguientes herramientas:<br>";
toolsModalDesc2.innerHTML = "";

//Recording tool(no recording tool)
toolsModalHeader2.innerHTML = "Herramienta de detección para MSDS de Proveedores / Sustancias peligrosas";
toolsModalSubHeader1.innerHTML = "";
toolsModalDesc3.innerHTML = "La herramienta de detección ofrece la posibilidad de capturar datos esenciales de un material peligroso basado en la información de la MSDS del proveedor, o para controlar en el sistema y las MSDS del proveedor con DMS del sistema central de SAP en un cuadro de diálogo / Transacción. Este importante paso simplificará y agilizará considerablemente el trabajo complejo así como suprime el uso de las transacciones CG02, CG50 y CG36VEN.<br><br>"+
"La herramienta de detección estará lista prebiciblemente para mediados de mayo del 2016.";


toolsModalHeader6.innerHTML = "Herramienta DYN-WWI para el control y gestión dinámica de generacion de informes en masa";
toolsModalDesc7.innerHTML = "La generación en masa de informes tipo WWI (Windows Wordprocessor Integration) es un reto para bases de datos con grandes volúmenes de información. Por un lado, existe una competencia por el servidor para WWI, cuando se estan generando informes en masa y se desea o tiene que generar rapidamente una hoja de seguridad específica, la generación estandard de informes esta sobrecargada. Por otra parte, debido al tiempo de duración y el volumen de datos a manejar, una generación en masa frecuentemente ocasiona problemas. Por ejemplo, el hacer una copia de seguridad 'offline' (separado de SAP) trae como consecuencia la interrupcióde la generació masiva y por lo general una solución es sólo posible con el reinicio del sistema. Se convierte en una verdadera contrariedad cuando los plazos para la generación masiva de informes demoran más de una semana."+
"<br><br>DYN-WWI es un prototipo dinámico ya puesto en práctica que fragmenta una generación en masa en paquetes pequeños y adecuamos a las condiciones específicas del cliente. Este método procesa las diferentes asignaciones a los servidores de WWI en solo minutos de forma dinámicas y permite monitoreo adicional. Permite también el reinicio automático preciso de las generaciones en masa después de hacer copias de seguridad 'offline' o colapsacion de la administracion de documentos del sistema etc. De este modo DYN-WWI (Dynamic-WWI) permite realizar las generaciones en masa de manera eficiente y sin supervision, lo cual facilita las operaciones diarias ininterrumpidas del departamento de EHS. La historia de la generación en masa puede ser controlada con la ayuda de un cuadro diálogo.";


toolsModalHeader7.innerHTML = 'DYN-Expert-Tool controla y gestiona de forma dinámica la ejeción en masa del "SAP EHS Expert Rules"';
toolsModalDesc8.innerHTML = 'La ejecución en masa del "EHS Expert" requiere un control más preciso y a su vez dificultoso que la problemática de la generación en masa de documentos - WWI. La causa esencial es que los mensajes de error sólo son accesibles a través del registro del ejecuciones en el sistema (log files), esto sin permitir evaluación.<br><br>'+
"Basado en las experiencias acumuladas por rimpido GmbH hemos desarrollado un prototipo nominado Dyn-Expert-Tool, el cual le permite al cliente el aprovechamiento máximo controlado de los procesos del Expert-Server asi como asegura que la ejecución fiable en masa se lleve a cabo en los tiempos de copia de seguridad offline y fallas en el mismo servidor. También se resumen los mensajes de error de reglas de experto juntos en una forma concisa e informativa.<br><br>"+
"En caso de haber despertado su interes, por favor contactenos via Email: <a href='mailto:info@rimpido.com'>info@rimpido.com</a>/ Tel. +49 (0) 4181 - 1386 456 .";

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
currentLang.innerHTML = "<b><span>JA </span></b>&nbsp;"+
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





toolsMainHeader.innerHTML = "EH&Sツール";
toolsSubHeader1.innerHTML = "フレーズツール<br><br><br><br>";
toolsSubHeader2.innerHTML = "サプライヤーSDB’s / 有害物質の記録ツール<br><br><br>";
toolsSubHeader3.innerHTML = "ダイナミックコントロールとバルク生成の管理のためのDYN-WWIツール<br><br>";
toolsSubHeader4.innerHTML = "<font size='2px'>ダイナミックコントロールとSAP EH&Sエキスパートのバルク実行の管理のためのDYN-WWIエキスパートツール</font>";
toolsDesc1.innerHTML = "EH＆Sのインポート形式にExcelからフレーズの翻訳を変換、またはExcelにEH＆Sエクスポート形式からエクスポートフレーズを変換するために、弊社ではさらに別のツールに取り組んでいます。";
toolsDesc2.innerHTML = "すべての有害物質の重要なデータを記録しチェックすることが可能です。";
toolsDesc3.innerHTML = "あなたのために特別にインプリントすることができ、小型パッケージへバルク生成を分類します。これらは数分で処理され、空いているWWIサーバーに動的に割り当ておよびモニターすることができます。";
toolsDesc4.innerHTML = "あなたのエキスパートサーバープロセスの負担を制御することができ、オフラインのバックアップ時間とエキスパートサーバのダウンタイム中でも、信頼性の高いプロセスを保証します。";
//Phrasetools
toolsModalHeader1.innerHTML = "フレーズツール";
toolsModalDesc1.innerHTML = "<a href='http://www.phrase-catalog.com/' target='_blank'>フレーズツール</a> に加え、EH＆Sのインポート形式にExcelからフレーズの翻訳を変換、またはExcelにEH＆Sエクスポート形式からエクスポートフレーズを変換するために、弊社ではさらに別のツールに取り組んでいます。<br>";
toolsModalDesc2.innerHTML = "";

//Recording tool(no recording tool)
toolsModalHeader2.innerHTML = "サプライヤーSDB’s / 有害物質の記録ツール";
toolsModalSubHeader1.innerHTML = "<b>有害物質や危険物データ用EHS検出ツール</b>";
toolsModalDesc3.innerHTML = "<a href='assets/docs/Erfassungstool.pdf'>記録ツール</a>はサプライヤーSDBに基づいたシステムで、すべての有害物質の重要なデータを記録しチェックすることが可能です。また、1つのダイアログ/ "+
							"トランザクションステップで、SAPシステムのドキュメント管理システムにサプライヤーSDBを格納することを可能にします。それによって、この重要な "+
							"段階は格段に簡単かつ迅速になり、さらにトランザクションCG02、CG50、およびCG36VENの複雑な作業が省かれます。";

						

toolsModalHeader6.innerHTML = "ダイナミックコントロールとバルク生成の管理のためのDYN-WWIツール";

toolsModalDesc7.innerHTML = "大量のデータがある場合、WWI-レポートのバルク生成が課題になっています。その理由の一つは、WWIサーバが互いに競合していることです。少なくと "+
							"も特別なSDBの原レポートが高速に生成する必要がある時に、バルク生成が処理中、その規格に無理が生じ、さらにバルク生成の継続とデータ量に問題が "+
							"発生します。そのため、オフラインのデータバックアップは、バルク生成を中止することができます。この問題が発生した場合、通常は再起動が唯一のオ "+
							"プションです。原レポートのバルク生成が一週間以上かかる場合、これが大きな邪魔になることがあります。 <br><br>"+

							"弊社ではDYN-WWIの既存のプロトタイプに基づいて、あなたのために特別にインプリントすることができ、小型パッケージへバルク生成を分類します。 "+
							"これらは数分で処理され、空いているWWIサーバーに動的に割り当ておよびモニターすることができます。このためオフラインデータバックアップ後に自 "+
							"動で正確にバルク生成を継続することができ、ドキュメント管理システムなどをオーバーフローしました。それに関してDYN-WWIは、効率的かつアテン "+
							"ダンスせずにバルク生成を行うことができます。そのようにEHS部は、日常業務を専用にすることができます。バルク生成のプロセスは、画面上のダイア "+
							"ログボックスによって制御することができます。";


toolsModalHeader7.innerHTML = "ダイナミックコントロールとSAP EH&Sエキスパートのバルク実行の管理のためのDYN-WWIエキスパートツール";

toolsModalDesc8.innerHTML = "EH&Sエキスパートのバルク実行は、WWIバルク生成と同じ問題を抱えています。プロセスモニタリングは実際にはより複雑で、標準のバッチで実行され "+
							"ている規制からのエラーメッセージは、システムログ経由でのみアクセス可能です。しかしレポートを生成するためには使用できません。<br><br>"+

							"Dynエキスパートツールは、私たちがすでに実装プロトタイプの経験に基づいて、あなたのエキスパートサーバープロセスの負担を制御することができ、 "+
							"オフラインのバックアップ時間とエキスパートサーバのダウンタイム中でも、信頼性の高いプロセスを保証します。また、エキスパート規制からのエラー "+
							"メッセージを明確に表現し、有益な構造に統合します。<br><br>"+

							"ご興味のある方は、メールにてお問い合わせください。 <a href='info@rimpido.com'>info@rimpido.com</a>.";
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

toolsMainHeader.innerHTML = "EHS Tools ";
toolsSubHeader1.innerHTML = "Phrasentool";
toolsSubHeader2.innerHTML = "供应商SDB /有害物质记录工具";
toolsSubHeader3.innerHTML = "DYN-WWI用于批量生成的动态控制和管理工具";
toolsSubHeader4.innerHTML = 'DYN-用于动态控制和管理SAP EH＆amp; S专家批量运行的专家工具';
toolsDesc1.innerHTML = "这也用于将Excel中的短语转换转化为EH＆amp; S importformat，或将导出的短语从EH＆amp; S Exportformat进入Excel";
toolsDesc2.innerHTML = " 可以记录和检查有害物质的所有基本数据。基于供应商SDB的系统。此外，它允许在一个对话/事务步骤中将供应商SDB...";
toolsDesc3.innerHTML = "这些可以在几分钟内进行处理，动态分配和监视空置WWI服务器。这允许在脱机数据备份...";
toolsDesc4.innerHTML = "允许您控制Expert-Server进程的工作负载。它确保即使在脱机备份时间和专家服务器停机期间也可以批量运行的可靠过程。此外...";


//Phrasetools
toolsModalHeader1.innerHTML = "Phrasetool";
toolsModalDesc1.innerHTML = "<a href='http://www.phrase-catalog.com/' target='_blank'>Phrasetool</a> 之外，这也用于将Excel中的短语转换转化为EH＆amp; S importformat，或将导出的短语从EH＆amp; S Exportformat进入Excel，rimpido正在开发其他工具：<br>";
toolsModalDesc2.innerHTML = "";

//Recording tool(no recording tool)
toolsModalHeader2.innerHTML = "供应商SDB /有害物质记录工具";
toolsModalSubHeader1.innerHTML = "";
toolsModalDesc3.innerHTML = "记录工具可以记录和检查有害物质的所有基本数据。基于供应商SDB的系统。此外，它允许在一个对话/事务步骤中将供应商SDB存储在SAP系统的文档管理系统中。因此，这个重要阶段显然更容易和更快。另外，与CG02，CG50和CG36VEN交易的复杂工作也不需要。";


toolsModalHeader6.innerHTML = "DYN-WWI用于批量生成的动态控制和管理工具";
toolsModalDesc7.innerHTML = " 如果您有大量数据，大量生成WWI报告是一个挑战。一方面WWI服务器是相互竞争的。因为至少在特殊SDB的rawreport应该快速生成的时候，在批量生成处理的时候，标准是被限制的。对于另一个，批量生成的持续时间和数据量会导致问题。因此，离线数据备份可以中止批量生成。如果发生这种情况，normaly唯一的选项是重新启动。如果大量生成原始报表需要超过一周的时间，这可能是一个很大的麻烦。"+
"<br><br> 我们可以根据现有的原型为您专门为您实施DYN-WWI，将批量生成分解成小包。这些可以在几分钟内进行处理，动态分配和监视空置WWI服务器。这允许在脱机数据备份，文档管理系统等溢出之后自动且准确地进行批量生成。因此，DYN-WWI允许执行批量生成并且无需出席。以此方式，EHS部门可以致力于日常业务。批量生成的过程可以通过屏幕对话框进行控制。";


toolsModalHeader7.innerHTML = "DYN-用于动态控制和管理SAP EH＆amp; S专家批量运行的专家工具";
toolsModalDesc8.innerHTML = "EH＆amp; S专家批量运行与第一次世代大战相同。事实上，过程监控更加复杂，因为标准中BATCH中运行的规则的错误消息只能通过系统日志访问。然而，这不能用于生成报告。<br><br>"+
"   根据已经实现的原型的体验，我们为您创建的Dyn-Expert-Tool允许您控制Expert-Server进程的工作负载。它确保即使在脱机备份时间和专家服务器停机期间也可以批量运行的可靠过程。此外，它将来自专家法规的错误信息合并到清晰表达和内容丰富的结构中 <br><br>"+
"如果您有兴趣，请通过电子邮件与我们联系： <a href='mailto:info@rimpido.com'>info@rimpido.com</a>.";

}