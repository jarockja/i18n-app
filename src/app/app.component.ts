import { Component } from '@angular/core';
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  date = { value2: new Date().toDateString()};
  appName = { value: '\'my-i18n-App\''};
  languages = new Array<Language>();
  selectedLanguage: Language;
  translateService: TranslateService;
  availableLanguages: Map<string, Language> = new Map();

  constructor(translate: TranslateService) {
    this.translateService = translate;

    this.availableLanguages.set("de", new Language('de'));
    this.availableLanguages.set("en", new Language('en'));
    this.availableLanguages.forEach(language => this.languages.push(language));
    let lang = this.availableLanguages.get(translate.getBrowserLang());
    if (lang === undefined) {
      console.log("Language '" + translate.getBrowserLang() + "' not supported, using default!")
      this.selectedLanguage = this.availableLanguages.get('de');
    } else {
      this.selectedLanguage = lang;
    }

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('de');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(this.selectedLanguage.name);
  }

  changeLanguage(language: Language) {
    console.log('Changing language to: ' + language.name);
    this.translateService.use(language.name);
  }
}
class Language {
  name;
  constructor(name) {
    this.name = name;
  }
}
