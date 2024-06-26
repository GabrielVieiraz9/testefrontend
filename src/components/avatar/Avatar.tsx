interface AvatarProps {
    foto?: string;
    size?: "small" | "big" | "extrabig"; // Adiciona a propriedade tamanho com opções de tamanho
    bordercolour?: "black" | "white";
  }
  
  const Avatar = ({ foto, size, bordercolour }: AvatarProps) => {
    const defaultImage = "https://www.digitary.net/wp-content/uploads/2021/07/Generic-Profile-Image.png";
  
    let sizeClass = ""; // Inicializa a classe de tamanho com vazio

    let colourBorder = ""; // Inicializa a classe de tamanho com vazio
  
    // Condicional para definir a classe de tamanho com base na propriedade 'tamanho'
    if (size === "small") {
        sizeClass = "h-9 w-9 "; // Tamanho pequeno
    } else if (size === "big") {
        sizeClass = "h-20 w-20 transition-all duration-300 hover:scale-110 hover:h-25 hover:w-25 hover:mb-1"; // Tamanho grande
    } else if (size === "extrabig") {
        sizeClass = "h-60 w-60"; // Tamanho extra grande
    } else {
        sizeClass = "h-11 w-11 "; // Tamanho padrão
    }

    // Condicional para definir a classe de tamanho com base na propriedade 'tamanho'
    if (bordercolour === "black") {
        colourBorder = "black";
    } else if (bordercolour === "white") {
        colourBorder = "white";
    } else {
        colourBorder = "";
    }
  
    return (
<img
  src={(foto !== undefined && foto !== "") ? foto : defaultImage}
  alt="Usuário"
  className={`rounded-full border-white ${sizeClass}`}
  style={{
    border: `3px solid ${colourBorder}`,
    borderRadius: "50%"
  }} 
/>
    );
  };
  
  export default Avatar;
