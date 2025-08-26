/**
 * Gyöngyvilág Custom Languages Module
 * Replaces Draw Steel languages with custom languages for the Gyöngyvilág setting
 */

// Try setup hook - fires after init but before ready
Hooks.once("setup", function() {
  console.log("Gyöngyvilág | Setup hook fired - replacing Draw Steel languages");
  
  // The languages object is non-writable, so we need to modify it in-place
  // First, clear all existing languages
  const languagesObj = CONFIG.DRAW_STEEL.languages;
  console.log("Gyöngyvilág | Original languages count:", Object.keys(languagesObj).length);
  
  // Delete all existing language properties
  for (const key in languagesObj) {
    delete languagesObj[key];
  }
  
  console.log("Gyöngyvilág | After clearing, languages count:", Object.keys(languagesObj).length);
  
  // Add our custom languages
  languagesObj.szakallszulott = {
    label: "Szakállszülött" 
  };
  languagesObj.fenyesszo = {
    label: "Fényes Szó" 
  };
  
  console.log("Gyöngyvilág | Custom languages added, final count:", Object.keys(languagesObj).length);
  console.log("Gyöngyvilág | Final languages:", Object.keys(languagesObj));
  
  // Verify ds.CONFIG.languages is the same object (it should be)
  console.log("Gyöngyvilág | ds.CONFIG.languages same object?", ds.CONFIG.languages === CONFIG.DRAW_STEEL.languages);
  console.log("Gyöngyvilág | ds.CONFIG.languages keys:", Object.keys(ds.CONFIG.languages));
});