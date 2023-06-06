import React from "react"

const NossosProdutos = () =>{
    <div>
        <section id="nossosprodutos" className="tab-pane active">
    <h3>Nossos Produtos</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div className="row row-cols-1 row-cols-md-4 g-4">
      <div className="card">
        {/* <img className="imagem3 card-img-top" src="images/buque.jpg" alt="Imagem de capa do card"> */}
        <div className="card-body">
          <h5 className="card-title">Buquê de Rosas</h5>
          <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
          <a href="#" className="btn btn-primary">Visitar</a>
        </div>
      </div>
      <div className="card">
        {/* <img className="card-img-top" src="images/CestadeCafédaManhã.jpg" alt="Imagem de capa do card"> */}
        <div className="card-body">
          <h5 className="card-title">Cesta para Café da Manhã</h5>
          <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
          <a href="#" className="btn btn-primary">Visitar</a>
        </div>
      </div>
      <div className="card">
        {/* <img className="card-img-top" src="images/BuquedeChocolates.jpg" alt="Imagem de capa do card"> */}
        <div className="card-body">
          <h5 className="card-title">Buquê de Chocolates</h5>
          <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
          <a href="#" className="btn btn-primary">Visitar</a>
        </div>
      </div>
      <div className="card">
        {/* <img className="card-img-top" src="images/TulipasAzuis.jpg" alt="Imagem de capa do card"> */}
        <div className="card-body">
          <h5 className="card-title">Buquê De Tulipas</h5>
          <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
          <a href="#" className="btn btn-primary">Visitar</a>
        </div>
      </div>
    </div> 
  </section> 
    </div>
    
}
export default NossosProdutos