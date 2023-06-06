import React from "react"
const Contato = () =>{
  <section id="menu1" className="contato tab-pane fade pt-2 pt-md-5">
  <div className="text-center pt-4 pt-sm-1 mb-md-5">
    <h1>Entre em Contato</h1>
  </div>
  {/* <img className="float-sm-left col-1 col-md-3 pt-md-3" src="images/florpretaebranca.jpg "> */}
  <div className="row px-1">
    <div className="col-md-6">
      {/* <label for="exampleFormControlNome" class="form-label">Nome</label>
      <input name="nome" class="form-control" placeholder="Seu Nome" id="nomeid" required="required" type="text"> */}
    </div>
    <div className="mb-3 col-md-6">
      {/* <label for="exampleFormControlInput1" class="form-label" type="email" id="emailid">Email</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="seunome@exemplo.com" method="post"> */}
    </div>
    <div className="mb-3 col-md-12">
      {/* <label for="exampleFormControlTextarea1" class="form-label" method="post" id="mensagemid">Mensagem</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
    </div>
    <div className="d-grid gap-2 d-md-block text-center">
      {/* <button className="btn btn-outline-success col-md-6" type="button" onclick="EnviarForm();">Enviar</button> */}
    </div>
  </div>
</section>
}

export default Contato
