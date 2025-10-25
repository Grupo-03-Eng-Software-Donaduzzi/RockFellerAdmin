import {defineField, defineType} from 'sanity'

export const metodoType = defineType({ //define Type para criar formulario e define field para os campos do formulario
  name: 'metodos', //como se fosse o nome da uma tabela do bd
  title: 'Métodos', //Titulo do cadastro
  type: 'document',
  fields: [
    defineField({
      name: 'icone',
      title: 'Ícone',
      type: 'image',
      description: 'Envie o ícone para o método.',
    }),
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      description: 'Digite o título.',
    }),
    defineField({
      name: 'descricao',
      title: 'Descrição',
      type: 'text',
      description: 'Digite a descrição do método.',
    })
  ],
})

