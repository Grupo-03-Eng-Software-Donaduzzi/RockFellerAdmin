import {defineField, defineType} from 'sanity'

export const tituloInstitucionalType  = defineType({
  name: 'infoInstitucional', 
  title: 'Informações Institucionais', 
  type: 'document', 
  
  fields: [
    
    defineField({
      name: 'historia', 
      title: 'História da Empresa', 
      type: 'text', 
      description: 'Escreva um texto sobre a fundação, o propósito e a trajetória da empresa.',
    }),

    
    defineField({
      name: 'missao', 
      title: 'Missão', 
      type: 'string', 
      description: 'Defina a missão principal da empresa em uma frase.',
    }),

   
    defineField({
      name: 'valores',
      title: 'Valores', 
      description: 'Adicione os valores e princípios da empresa.',
      type: 'array', 
      of: [
        {type: 'string'} 
      ], 
    }),
  ],
})

