<script>
window.onload = addTranslation;

function addTranslation () { 
  const translationDiv = window.parent.document.createElement("div");
  translationDiv.id = "google_translate_element";
  translationDiv.style.width = 100 + "%";
  window.parent.document.getElementsByTagName('body')[0].insertBefore(translationDiv, window.parent.document.body.firstChild);
  
  const translationFn = window.parent.document.createElement('script');
  translationFn.type = "text/javascript";
  translationFn.text = 'function googleTranslateElementInit() { new google.translate.TranslateElement( { pageLanguage: "en", includedLanguages: "ar,bn,zh-CN,zh-TW,en,fr,ht,ko,pl,ru,es,ur", layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: false }, "google_translate_element" ); }';
  window.parent.document.getElementsByTagName('head')[0].appendChild(translationFn);
  
  const translationSc = window.parent.document.createElement('script');
  translationSc.type = "text/javascript";
  translationSc.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  window.parent.document.getElementsByTagName('head')[0].appendChild(translationSc);
}
</script>
