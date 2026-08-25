import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksSsylka extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ssylka';
  info: {
    description: '';
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0430';
    icon: 'cursor';
  };
  attributes: {
    link: Schema.Attribute.Text;
    main: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    name: Schema.Attribute.String;
  };
}

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
      'blocks.ssylka': BlocksSsylka;
      'skill-group.gruppa-navykov': SkillGroupGruppaNavykov;
    }
  }
}
