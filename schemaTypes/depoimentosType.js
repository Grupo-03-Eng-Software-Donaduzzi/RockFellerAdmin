import { defineType, defineField } from 'sanity'

export const depoimentosType = defineType({
  name: 'depoimentos',
  title: 'depoimento',
  type: 'document',
  fields: [
    defineField({
      name: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'Mensagem',
      type: 'text'
    }),
    defineField({
      name: 'Nota',
      type: 'number',
    }),
  ],
})
