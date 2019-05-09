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



var imprintMainHeader = document.getElementById('imprint-main-header');
var imprintSubHeader1 = document.getElementById('imprint-sub-header1');
var imprintSubHeader2 = document.getElementById('imprint-sub-header2');
var imprintSubHeader3 = document.getElementById('imprint-sub-header3');
var imprintSubHeader4 = document.getElementById('imprint-sub-header4');
var imprintSubHeader5 = document.getElementById('imprint-sub-header5');
var imprintDesc1 = document.getElementById('imprint-desc1');
var imprintDesc2 = document.getElementById('imprint-desc2');
var imprintDesc3 = document.getElementById('imprint-desc3');
var imprintDesc4 = document.getElementById('imprint-desc4');
var imprintDesc5 = document.getElementById('imprint-desc5');

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
	window.location="imprint.php";
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

	
imprintMainHeader.innerHTML = "Impressum";
imprintSubHeader1.innerHTML = "Kontakt";
imprintSubHeader2.innerHTML = "Inhaltlich Verantwortlich";
imprintSubHeader3.innerHTML = "Copyright und Urheberrecht";
imprintSubHeader4.innerHTML = "Haftungsausschluss"; 
imprintSubHeader5.innerHTML = "Links";
imprintDesc1.innerHTML = "rimpido GmbH<br>"+
				"Reiherstieg 40 <br>"+
				"21244 Buchholz in the North Heath <br>"+
				"Tel. +49 4181 - 13 86 456 <br>"+
				"E-Mail: <a href='mailto:info@rimpido.com'>info@rimpido.com</a><br>"+
				"Geschäftsführer: Dr. rer. nat. Jan H. Schuur"+
				" Eingetragen im Handelsregister des Amtsgerichts Tostedt unter HRB 202882"+
				" USt-Identnr.: DE276541114";

imprintDesc2.innerHTML = "Im Sinne geltender Rechtsvorschriften und Gesetze ist der Geschäftsführer Dr. Jan H. Schuur inhaltlich verantwortlich für die Inhalte dieser Webseite und weiterer Services der rimpido GmbH. Dies erstreckt sich nicht auf Fremdlinks (s.u.). ";
imprintDesc3.innerHTML = "Inhalte und Gestaltung dieser Seiten unterliegen dem Schutz des Urheberrechts und anderer Gesetze zum Schutz geistigen Eigentums. Die Nachrichten sind ausschließlich zur Persönlichen Information bestimmt. Jede weiter gehende Verwendung, insbesondere Speicherung in Datenbanken, Veröffentlichung, Vervielfältigung, jede Form gewerblicher Nutzung sowie die Weitergabe an Dritte - auch in Teilen oder in veränderter Form - ist ohne eine ausdrückliche Zustimmung des Autors nicht gestattet. Die Verwendung, Speicherung, Vervielfältigung und Weitergabe von Inhalten dieser Website kann nur mit dem Einverständnis des Autors bzw. des Rechteinhabers erfolgen.";
imprintDesc4.innerHTML = 'Die bereitgestellten Informationen auf diesen Webseiten wurden sorgfältig geprüft und werden in unregelmäßigen Abständen aktualisiert. Jedoch kann keine Garantie dafür übernommen werden, dass alle Angaben zu jeder Zeit vollständig richtig und in letzter Aktualität dargestellt werden. Es können auch alle Angaben auf unseren Seiten ohne vorherige Ankündigung geändert entfernt oder ergänzt werden. Dies gilt insbesondere für alle Verbindungen "Links" zu anderen Webseiten, auf die direkt oder indirekt verwiesen wird.';
imprintDesc5.innerHTML = "Mit dem Urteil vom 12. Mai 1998 hat das Landgericht Hamburg entschieden, dass man durch die Einbringung eines Links die Inhalte der gelinkten Seite ggf. mit zu verantworten hat. Dies kann - so das Landgericht - nur dadurch verhindert werden, dass man sich ausdrücklich von diesen Inhalten distanziert. Auf dieser Webseite befinden sich Links zu anderen Inhalten im Internet."+
"Für diese Links gilt: Wir betonen ausdrücklich, dass wir keinen Einfluss auf die Gestaltung und die Inhalte der gelinkten Seiten / Inhalte haben. Deshalb distanzieren wir uns hiermit ausdrücklich von allen eventuellen rechtswidrigen Inhalten aller gelinkten Seiten auf dieser Webseite. Diese Erklärung gilt für alle Seiten dieser Seite, auf denen Links oder Banner auf externe Inhalte verweisen.";

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
			"<img src='assets/icon/de-icon.png'>";

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



}