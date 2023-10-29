import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.test3.caption'),
          title: i18n.t('forms.application.sitemap.test3.title'),
          children: [{
            link: 'i-i-s-test3-new-class3-l',
            caption: i18n.t('forms.application.sitemap.test3.i-i-s-test3-new-class3-l.caption'),
            title: i18n.t('forms.application.sitemap.test3.i-i-s-test3-new-class3-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-test3-город-l',
            caption: i18n.t('forms.application.sitemap.test3.i-i-s-test3-город-l.caption'),
            title: i18n.t('forms.application.sitemap.test3.i-i-s-test3-город-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-test3-здание-l',
            caption: i18n.t('forms.application.sitemap.test3.i-i-s-test3-здание-l.caption'),
            title: i18n.t('forms.application.sitemap.test3.i-i-s-test3-здание-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-test3-комната-l',
            caption: i18n.t('forms.application.sitemap.test3.i-i-s-test3-комната-l.caption'),
            title: i18n.t('forms.application.sitemap.test3.i-i-s-test3-комната-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})