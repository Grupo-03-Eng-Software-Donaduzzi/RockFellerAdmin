import {defineField, defineType} from 'sanity'

export const planosTypes = defineType({ 
  name: 'planos', 
  title: 'Planos', 
  type: 'document',
  fields: [
    defineField({
      name: 'Nome',
      type: 'string',
    }),
    defineField({
      name: 'Valor',
      type: 'number',
    }),
    defineField({
      name: 'Descricao',
      type: 'string',
    }),
    defineField({
        name: 'Imagem',
        type: 'image'
    })
  ],
})