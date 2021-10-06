export const dataFormarter = (data: string)=>{
   if(data && data.length){
       return `${data.slice(0,2)}/${data.slice(2,4)}/${data.slice(4)}`
   }
}
export const telefoneFormarter = (telefone: string)=>{     
        if(telefone && telefone.length>10){
            return `(${telefone.slice(0,2)}) ${telefone.slice(2,7)}-${telefone.slice(7)}`
        }
        else if(telefone && telefone.length<=10){
            return `(${telefone.slice(0,2)}) ${telefone.slice(2,6)}-${telefone.slice(6)}`
        }
}