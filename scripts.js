//Seleciona a ul com a lista de clientes
const clientes = document.getElementById("listaClientes");
//Faz uma requisição na API externa para buscar os clientes
fetch("https://crudcrud.com/api/479a6cf5b0f8480b8edbb3282d6b3fd4/clientes")
    .then(resposta => resposta.json())//Converte o corpo de resposta em JSON
    .then((ListaDeClientes) => {
        ListaDeClientes.forEach(cliente => {
            //Cria um novo elemento de lista (<li>) para cada cliente
            const item = document.createElement("li");
            item.innerHTML = `Nome:  ${cliente.nome}<p>E-mail:  ${cliente.email} </p><button data-id= ${cliente._id}>x</button>`;
            clientes.appendChild(item);
    });
});
//Adiciona um ouvinte de evento Click no botão Cadastro
document.getElementById("btnCadastro").addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    //Faz uma requisição POST na API externa para adicionar um novo cliente
    fetch("https://crudcrud.com/api/479a6cf5b0f8480b8edbb3282d6b3fd4/clientes", {
        //Definimos como POST (Adicionar)
        method: "POST", 
        //Definimos o cabeçalho da requisição com tipo do conteúdo JSON
        headers: {
            "Content-Type": "application/json"
        },
        // Convertemos um objeto JS para uma string JSON e passamos no corpo
        body: JSON.stringify({ nome: nome , email: email})
    })
        .then(resposta => resposta.json())
        .then((clientes) => {
            // Cria um novo elemento de lista (<li>) para cada cliente
            const item = document.createElement("li");
            // Define o conteúdo HTML do item, incluindo nome e botão
            item.innerHTML = `${clientes.nome} ${clientes.email} <button data-id= ${clientes._id}>x</button>`;
            // Adiciona um novo item a lista de clientes no HTML
            clientes.appendChild(item);
        })

})
document.getElementById("listaClientes").addEventListener("click",function(event){
    if(event.target.tagName === "BUTTON") {
        const idCliente = event.target.getAttribute("data-id");
        fetch(`https://crudcrud.com/api/479a6cf5b0f8480b8edbb3282d6b3fd4/clientes/${idCliente}`,{
            method: "DELETE"
        })
        .then();
            event.target.parentElement.remove();
        

    }
})