import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTest3NewClass3LForm from './forms/i-i-s-test3-new-class3-l';
import IISTest3ГородLForm from './forms/i-i-s-test3-город-l';
import IISTest3зданиеLForm from './forms/i-i-s-test3-здание-l';
import IISTest3КомнатаLForm from './forms/i-i-s-test3-комната-l';
import IISTest3NewClass3EForm from './forms/i-i-s-test3-new-class3-e';
import IISTest3ГородEForm from './forms/i-i-s-test3-город-e';
import IISTest3зданиеEForm from './forms/i-i-s-test3-здание-e';
import IISTest3КомнатаEForm from './forms/i-i-s-test3-комната-e';
import IISTest3NewClass3Model from './models/i-i-s-test3-new-class3';
import IISTest3ГородModel from './models/i-i-s-test3-город';
import IISTest3зданиеModel from './models/i-i-s-test3-здание';
import IISTest3КомнатаModel from './models/i-i-s-test3-комната';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-test3-new-class3': IISTest3NewClass3Model,
    'i-i-s-test3-город': IISTest3ГородModel,
    'i-i-s-test3-здание': IISTest3зданиеModel,
    'i-i-s-test3-комната': IISTest3КомнатаModel
  },

  'application-name': 'Test3',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Test3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test3',
          title: 'Test3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        test3: {
          caption: 'Test3',
          title: 'Test3',
          'i-i-s-test3-new-class3-l': {
            caption: 'New class3',
            title: ''
          },
          'i-i-s-test3-город-l': {
            caption: 'Город',
            title: ''
          },
          'i-i-s-test3-здание-l': {
            caption: 'Здание',
            title: ''
          },
          'i-i-s-test3-комната-l': {
            caption: 'Комната',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-test3-new-class3-l': IISTest3NewClass3LForm,
    'i-i-s-test3-город-l': IISTest3ГородLForm,
    'i-i-s-test3-здание-l': IISTest3зданиеLForm,
    'i-i-s-test3-комната-l': IISTest3КомнатаLForm,
    'i-i-s-test3-new-class3-e': IISTest3NewClass3EForm,
    'i-i-s-test3-город-e': IISTest3ГородEForm,
    'i-i-s-test3-здание-e': IISTest3зданиеEForm,
    'i-i-s-test3-комната-e': IISTest3КомнатаEForm
  },

});

export default translations;
