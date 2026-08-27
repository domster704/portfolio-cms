import type { Schema, Struct } from '@strapi/strapi';

export interface SkillGroupGruppaNavykov extends Struct.ComponentSchema {
  collectionName: 'components_skill_group_gruppa_navykov';
  info: {
    displayName: '\u0413\u0440\u0443\u043F\u043F\u0430 \u043D\u0430\u0432\u044B\u043A\u043E\u0432';
    icon: 'apps';
  };
  attributes: {
    skills: Schema.Attribute.JSON & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'skill-group.gruppa-navykov': SkillGroupGruppaNavykov;
    }
  }
}
