
function pesquisar() {
    
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();

    if (!campoPesquisa) {
        section.className = "resultados-pesquisa";
        section.innerHTML = "<p>Busca vazia</p>";
        return;
    }

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados){
        
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
          resultados += `
            <div class="item-resultado">
              <h2>${dado.titulo}</h2>
              <p class="descricao-meta">
              ${dado.descricao}
              </p>
              <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
          `
      }
    
        
    }

    if (!resultados) {
        resultados = "<p>Informação não encontrada</p>";
    }
    
    section.className = "resultados-pesquisa";
    section.innerHTML = resultados;

}

