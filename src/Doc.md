# Compartilhamento de Informações entre componentes

  ## Via propriedades
    - Quando nós queremos compartilhar informações entre componentes
      nós podemos usar as props para fazer isso.

    - Devemos passar o estado do componente "FILHO" para o seu
      componente "PAI".

    - No componente filho devemos passar como prop, uma função que vai        
      actualizar o valor do seu estado...


    * exemplo pratico:
    import { Input } from "./Input";

    export function App() {
      const [name, setName] = useState("")
    
      return (
        <>
          <h1>Seu nome é {name}</h1>
          <Input 
            value={name}
            onChange={(e) setName(e.target.value)}
          />
        </>   
      )
    }


  // Input.tsx

    interface InputProps {
      onChange: (e: ChangeEvent<HTMLInputElement>) => void,
      value: string,
    }
    
    export function Input({value, onChange}: InputProps){

      return (
        <input
          value={value}
          onChange={(e) => setName(e.target.value)}
        >
      )
    }

    * OBS: O tipo de parametro da função actulizadora deve ser do mesmo
      tipo (type) que o Componente FILHO vai receber ou seja ter. 

  ## Compartilhamento só para uso (Sem actulizar o valor)

    - Quando queremos apenas compartilhar sem actulizar o valor
      apenas devemos passar esses valores como propriedade no componente
      'FILHO' e quando ele ser chamado no componente "PAI", devemos passar
      os respectivos valores com base as props do Componente "FILHO",


      exemplo
      interface ProfileProps {
        name: string, 
        subject: string, 
        price: string,
      }

      export const Profile.RF<ProfileProps> = () => {
        return (
          <h1>Name</h1>
          <h1>Subject</h1>
          <h1>Price</h1>
        )
      }

    # Compartilhamento via Contexto (createContext e useContext)
      
      - Esse tipo de compartilhamento é feito de maneira global, 
      ou seja, todos os componentes podem ter acesso as informaçãoes
      guardadas no context... 

      exemplo.

      import { createContext, ReactNode, useContext, useState } from "react";

      interface ContextNameData {
        theme: string,
        updateTheme: (theme: string) => void, // func. para actulizar o valor
      }

      const ContextName = createContext<ContextNameData>(
        {} as ContextNameData)// para ter essa tipagem

      export function ContextProvider() {
        const [theme, setTheme] = useState('light');

        return (
          <ContextName.Provider = value{{ theme, setTheme }}>
            {children}
          </ContextName.Provider>
        )
      }