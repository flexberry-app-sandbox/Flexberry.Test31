import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Test3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Test3',
          title: 'Test3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
