import { createContext, ReactNode, useState, useContext } from "react";

// Estrutura dos dados compartilhados
interface MenuContextProps {
    isMenuOpen: boolean; // Indica se o menu está aberto
    toggleMenu: () => void; // Alterna o estado do menu
}

// Criação do contexto com valor padrão undefined
const MenuContext = createContext<MenuContextProps | undefined>(undefined);

// Propriedades do componente MenuProvider
interface MenuProviderProps {
    children: ReactNode; // Componentes filhos envolvidos pelo provider
}

// Provider para gerenciar o estado do menu
export const MenuProvider = ({ children }: MenuProviderProps) => {
    const [isMenuOpen, setMenuOpen] = useState(false); // Estado do menu

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev); 
    };

    return (
        <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
            {children}
        </MenuContext.Provider>
    );
};

// Hook para acessar o contexto do menu
export const useMenu = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenu deve ser usado dentro de um MenuProvider");
    }
    return context; 
};