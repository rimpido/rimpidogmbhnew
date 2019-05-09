var arrLang = {
	//English Translation
    'en' : {
      'home' : 'Home',
      'services' : 'Services',
      'mission' : 'Our Mission',
      'team' : 'Our Team',
      'testimonial' : 'Testimonial',
      'privacy' : 'Privacy policy',
      'currentLang' : 'ENG',
      'rimpido-intro' : 'The rimpido GmbH offers a worlwide SAP consulting for the SAP module Environment, Health & Safety (SAP EHS) for medium and large enterprises. We have many years of experience in the implementation and regular maintenance of SAP EHS systems.',

      //Services area
      'services-header' : 'Services',
      'services-list-1' : 'EHS Implementation',
      'services-list-2' : 'EHS Support',
      'services-list-3' : 'Phrase Library',
      'services-list-4' : 'Training',
      'services-list-5' : 'EH&S Tools',
      'services-list-6' : 'Chemistry Service',
      'services-list-7' : 'Substance Volume Tracking',
      'services-list-8' : 'EHS Manual',
      'services-list-9' : '38.3 Certification',

      //Our Mission area
      'mission-header' : 'Our Mission',
      'mission-desc' : 'To serve our customers to the best by delivering Affordable, Effective, and Innovative business solutions.',
      'mission1' : 'Provide top-notch yet affordable business solution',
      'mission2' : 'Mindful of ethics while being cost effective',
      'mission3' : 'Equal priority to all'



    },
    //For German Translation
    'de' : {
      'home' : 'Startseite',
      'services' : 'Dienstleistungen',
      'mission' : 'Mission',
      'team' : 'Unser Team',
      'testimonial' : 'Zeugnis',
      'privacy' : 'Datenschutz',
      'currentLang' : 'DE',
      'rimpido-intro': 'Die rimpido GmbH bietet weltweit SAP-Beratung für das SAP-Modul Environment, Health & Safety (SAP EHS) für mittelständische und große Unternehmen an. Wir verfügen über langjährige Erfahrungen bei der Implementierung und regelmäßigen Wartung von SAP-EHS-Systemen.',
      

      //Services area
      'services-header' : 'Dienstleistungen',
      'services-list-1' : 'EHS Implementierung',
      'services-list-2' : 'EHS Support',
      'services-list-3' : 'Phrasenkatalog',
      'services-list-4' : 'Schulung',
      'services-list-5' : 'EH&S Tools',
      'services-list-6' : 'Chemistry Service',
      'services-list-7' : 'Substanz Volumen  Verfolgung',
      'services-list-8' : 'EHS Handbuch',
      'services-list-9' : '38.3 Zertifizierung',

      //Our Mission area
      'mission-header' : 'Unsere Mission',
      'mission-desc' : 'Um unseren Kunden das Beste zu bieten, bieten wir erschwingliche, effektive und innovative Geschäftslösungen.',
      'mission1' : 'Provide top-notch yet affordable business solution',
      'mission2' : 'Mindful of ethics while being cost effective',
      'mission3' : 'Equal priority to all'
      
    },

    //French Translation
    'fr' : {
     

    },

    //Arabic Translation
    'ar' : {

    },

    //Spanish Translation
    'es' : {

    },

    //Chinese Translation
    'zh' : {

    },
    //Japanese Translation
    'ja' : {

    },

    

  };

  $(function(){
    $('.translate').click(function(){
      var lang = $(this).attr('id');
      $('.lang').each(function(index, element){
        $(this).text(arrLang[lang][$(this).attr('key')]);
      });
    });
  });
