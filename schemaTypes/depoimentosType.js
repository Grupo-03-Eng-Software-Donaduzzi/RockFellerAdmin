import { defineType, defineField } from 'sanity'

export const depoimentosType = defineType({
  name: 'depoimentos',
  title: 'Depoimentos',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      title: 'Nome',
      type: 'string',
      description: 'Digite o nome da pessoa que fez o depoimento.',
    }),
    defineField({
      name: 'mensagem',
      title: 'Mensagem',
      type: 'text',
      description: 'Digite a mensagem do depoimento.',
    }),
    defineField({
      name: 'nota',
      title: 'Nota',
      type: 'number',
      description: 'Insira a nota que foi dada pelo depoimento.',
    }),
  ],
})
