import {defineField, defineType} from 'sanity'

export const metodoType = defineType({ //define Type para criar formulario e define field para os campos do formulario
  name: 'metodo', //como se fosse o nome da uma tabela do bd
  title: 'Metodo', //Titulo do cadastro
  type: 'document',
  fields: [
    defineField({
      name: 'Icone',
      type: 'image',
    }),
    defineField({
      name: 'Titulo',
      type: 'string',
    }),
    defineField({
      name: 'Descricao',
      type: 'number',
    })
  ],
})

