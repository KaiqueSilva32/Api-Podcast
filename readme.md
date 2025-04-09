# API Podcast
---
Esta API é utilizada para gerenciar uma galeria virtual de podcasts, em que se pode adicionar dados, editá-los, ler e deletar, por meio de um CRUD.
 
## EndPoints
---
### - GET/podcasts
É o endpoint utilizado para listar todos os podcasts existentes no banco de dados.
**Parâmetros:** Nenhum.  
**Respostas:** Cod. 200 (OK!).
Obtendo essa resposta, será gerada a lista, como:
{
  "podcast": [
    {
      "_id": "661460b9f9a5c2e7a6d12345",
      "nome": "TechCast Brasil",
      "sobre": "Um podcast sobre tecnologia, inovação e startups no Brasil.",
      "episodios": [
        {
          "_id": "661460b9f9a5c2e7a6d54321",
          "convidado": "Maria Silva",
          "numeroEp": "1",
          "sobreConvidado": "Engenheira de Software e líder de comunidade.",
          audio: true,
          video: false,
        },
        {
          "_id": "661460b9f9a5c2e7a6d98765",
          "convidado": "João Pedro",
          "numeroEp": "2",
          "sobreConvidado": "Especialista em inteligência artificial."
          audio: true,
          video: false,
        }
      ],
      "__v": 0
    }
  ]
}
 
**Cod. 500 - ERRO INTERNO DO SERVIDOR**
Se for obtida essa resposta, ocorreu um erro interno no servidor, como falha de comunicação com o banco de dados.
Exemplo:
**Status:** 500 Internal Server Error.
**Body:** Sem nenhum conteúdo.
 
---
 
### - GET/podcasts/:id
É o endpoint utilizado para buscar um podcast específico no banco de dados a partir de seu "id".
**Parâmetros:** id do podcast    
**Respostas:**
Se positivo, terá uma resposta como:
{
  "podcast": {
    "_id": "6613acfd7a9cde6a519eee3d",
    "nome": "Tech Talks Brasil",
    "sobre": "Podcast sobre tecnologia e inovação no Brasil.",
    "episodios": [
      {
        "_id": "6613acfd7a9cde6a519eee3e",
        "convidado": "Ana Silva",
        "numeroEp": "1",
        "sobreConvidado": "Engenheira de Software e palestrante na área de IA."
        audio: true,
        video: false,
      },
      {
        "_id": "6613acfd7a9cde6a519eee3f",
        "convidado": "Carlos Oliveira",
        "numeroEp": "2",
        "sobreConvidado": "CEO de startup focada em cibersegurança."
        audio: true,
        video: false,
      }
    ]
  }
}
 
**Cod. 404 - NÃO ENCONTRADO**
Se for obtida essa resposta, ocorreu um erro de consulta a partir do id informado, certifique-se de que o id esteja correto.
Exemplo:
**Status:** 404 Not Found.
**Body:** Sem nenhum conteúdo.
 
**Cod. 400 - MÁ REQUISIÇÃO**
Se for obtida essa resposta, é porque o servidor nao foi capaz de compreender a requisição enviada., pode ser como alguma sintaxe incorreta, campos obrigatórios faltando, url incorreta, problema com o tipo do dado, entre outros.
Exemplo:
**Status:** 400 Bad Request.
**Body:** Sem nenhum conteúdo.
 
---
 
### - POST/podcasts
É o endpoint utilizado para cadastrar um novo podcast no banco de dados.
**Parâmetros:** Devem ser enviados no corpo da requisição, em formato JSON:
{
  "nome": "Nome do Podcast",
  "sobre": "Descrição do podcast",
  "episodios": [
    {
      "convidado": "Nome do convidado",
      "numeroEp": "1",
      "sobreConvidado": "Informações sobre o convidado"
      audio: true,
      video: false,
    }
  ]
}
 
**Respostas:**
Se positivo, terá uma resposta como:
**Status:** 201 - CREATED.
**Body:** Sem nenhum conteúdo.
Se não, pode ser:
**Cod. 500 - ERRO INTERNO DO SERVIDOR**
Se for obtida essa resposta, ocorreu um erro interno no servidor, como falha de comunicação com o banco de dados.
Exemplo:
**Status:** 500 Internal Server Error.
**Body:** Sem nenhum conteúdo.
 
---
 
### - PUT/podcasts
É o endpoint utilizado para atualizar um podcast existente a partir de seu "id".
**Parâmetros:**
1. Url: id do podcast
2. Na requisição (JSON):
{
  "nome": "Nome atualizado",
  "sobre": "Nova descrição do podcast",
  "episodios": [
    {
      "convidado": "Novo convidado",
      "numeroEp": "2",
      "sobreConvidado": "Nova descrição do convidado"
      audio: true,
      video: false,
    }
  ]
}
 
**Respostas:**
Se positivo, terá uma resposta como:
**Status:** 200 - OK
**Body:** Sem nenhum conteúdo.
Se não, pode ser:
**Cod. 400 - MÁ REQUISIÇÃO**
Se for obtida essa resposta, é porque o servidor nao foi capaz de compreender a requisição enviada., pode ser como alguma sintaxe incorreta, campos obrigatórios faltando, url incorreta, problema com o tipo do dado, entre outros.
Exemplo:
**Status:** 400 Bad Request.
**Body:** Sem nenhum conteúdo.
 
**Cod. 500 - ERRO INTERNO DO SERVIDOR**
Se for obtida essa resposta, ocorreu um erro interno no servidor, como falha de comunicação com o banco de dados.
Exemplo:
**Status:** 500 Internal Server Error.
**Body:** Sem nenhum conteúdo.
 
---
 
### - DELETE/podcasts:id
É o endpoint utilizado para deletar um podcast do banco de dados a partir do seu "id".
**Parâmetros:**
1. Url: id do podcast
**Respostas:**
Se positivo, terá uma resposta como:
**Status:** 204 - NO CONTENT
**Body:** Sem nenhum conteúdo.
Se não, pode ser:
**Cod. 400 - MÁ REQUISIÇÃO**
Se for obtida essa resposta, é porque o servidor nao foi capaz de compreender a requisição enviada., pode ser como alguma sintaxe incorreta, campos obrigatórios faltando, url incorreta, problema com o tipo do dado, entre outros.
Exemplo:
**Status:** 400 Bad Request.
**Body:** Sem nenhum conteúdo.
 
**Cod. 500 - ERRO INTERNO DO SERVIDOR**
Se for obtida essa resposta, ocorreu um erro interno no servidor, como falha de comunicação com o banco de dados.
Exemplo:
**Status:** 500 Internal Server Error.
**Body:** Sem nenhum conteúdo.
 