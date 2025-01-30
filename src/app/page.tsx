import React from 'react';
import Link from 'next/link'
const Home = () => {
  return (
    <div className="pt-20">
    {/* Seção Início */}
    <section
      id="inicio"
      className="h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/banner-inicio.png')" }}
    >
      {/* Camada de cor sobre a imagem */}
      <div
        className="absolute inset-0 bg-[#937666] opacity-75" // Cor #937666 com 75% de opacidade
      ></div>
  
      {/* Conteúdo sobreposto (texto e botão) */}
      <div className="text-center relative z-10 flex flex-col justify-center items-center h-full"> 
        <h1 className="text-5xl font-light text-white mb-4">Leve a excelência italiana em produtos profissionais para salões de beleza ao seu mercado.</h1>
        <p className="text-2xl font-light text-white mb-8">
        Com tradição, inovação e qualidade.
        </p>
        {/* Botão "Quero Ser um Distribuidor" */}
        <Link
          href="/contato"
          className="bg-white text-[#937666] font-semibold py-3 px-6 rounded-full hover:bg-opacity-90 transition duration-300"
        >
          Quero ser um distribuidor
        </Link>
      </div>
    </section>
  

      {/* Seção Linha */}
      <section id="linha" className="h-screen flex items-center justify-center bg-gray-200">
        <h2 className="text-4xl font-bold text-gray-800">Nossa Linha de Produtos</h2>
      </section>

      {/* Seção Onde Comprar */}
      <section id="onde-comprar" className="h-screen flex items-center justify-center bg-gray-300">
        <h2 className="text-4xl font-bold text-gray-800">Onde Comprar</h2>
      </section>
    </div>
  );
};

export default Home;