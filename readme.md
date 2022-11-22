# JavaScript - Programação Orientada a Objetos

Curso da Alura sobre orientação a objetos e seus conceitos de objetos

URL do curso -> [JavaScript - Programação Orientada a Objetos](https://cursos.alura.com.br/course/javascript-passos-programacao-orientada-objetos)

![JavaScript - Programação Orientada a Objetos](https://www.alura.com.br/assets/api/share/curso-javascript-passos-programacao-orientada-objetos.png)

***

## 01 - Funções e Protótipos &#x1F516;
* O que é a palavra-chave `this` e sua importância na manipulação de objetos com JavaScript, uma vez que o `this` representa o contexto em que determinada função ou método será executada, e como este contexto pode ser identificado e modificado utilizando os métodos `bind()`, `call()` e `apply()`.
* Como funciona a criação de objetos em JavaScript com o modelo de protótipo, que é a forma nativa do JavaScript trabalhar com o conceito de orientação a objetos conhecido como “herança”, quando objetos recebem propriedades e métodos de outros.
* Como acessar as propriedades `prototype` e `__proto__` e, através delas, identificar a cadeia de protótipos desde o nível mais baixo, normalmente um objeto do próprio tipo de dado, como `Object` ou `Function`.
* As duas formas (anteriores às classes) que o JavaScript utiliza para criação de objetos a partir de modelos: `Object.create()` e funções construtoras com `new`. sendo o primeiro mais indicado para se trabalhar com protótipos utilizando as melhores práticas e o segundo mais próximo à sintaxe de classes.

### 01 - OO com JavaScript
* Criar um objeto literal chamado `user`.
* Usar a palavra chave `this`.

### 02 - Entendendo o this
* O que significa o `this`.
* Usar a função `bind()` para determinar um contexto para a variável `this`.
* Diferença entre **declaração de função** e **arrow function**.
* Diferença entre os métodos `call()` e `apply()`.

### 03 - Herança de Protótipo
* Definir o **protótipo** de um objeto com base em outro objeto.

### 04 - Cadeia de Protótipo
* Consultar o protótipo através do `__proto__`.
* Diferenças entre os tipos de protótipos.

### 05 - Object.create() vs new
* Criar uma função construtora.
* Herdar todas as características de outro objeto com a função `call()`.
* Criar um objeto com `Object.create`.
* Verificar se o prototype é igual com a função `isPrototypeOf()`.
* O que são **factory functions**.

***

## 02 - Classes e Herança &#x1F516;
* O que são e como funcionam as classes, elementos essenciais para se trabalhar com orientação a objetos em grande parte das linguagens de programação voltadas para este paradigma. As classes fornecem um modelo para a criação de cópias (instâncias) de objetos que compartilham dos mesmos tipos de propriedades e métodos.
* O conceito de herança de classe, também importante para se trabalhar com orientação a objetos, como criar subclasses que herdam propriedades e métodos de uma superclasse e como reaproveitar estas propriedades e métodos da superclasse através da função `super()`.
* Como uma subclasse pode ter propriedades e métodos próprios, além dos recebidos da superclasse, e como declarar isso no código criando novos métodos.
* A praticar a sintaxe de classe com JavaScript, criando classes, subclasses, propriedades, construtores e métodos.

### 01 - Estrutura da Classe
* Declarar uma classe com a palavra chave `class`.
* Criar métodos de classe.

### 02 - Herança de Classe
* Herdar as características de uma classe com a palavra chave `extends`.
* Usar o construtor da **super classe** com a função `super()`.

### 03 - Adicionando Métodos
* Criar uma nova classe que extende `User`.
* O que são **métodos estáticos**.

***

## 03 - Encapsulamento &#x1F516;
* O conceito de *encapsulamento*, que é a ação (ou ações) de “esconder” atributos de uma classe, para evitar acesso indevido a atributos importantes ou dados sensíveis, ou que métodos sejam utilizados de forma errada;
* Como utilizar a sintaxe de atributos privados do JavaScript, através do prefixo `#`, para que a própria linguagem de programação faça a “segurança” da classe, impedindo o acesso externo a propriedades e métodos assinalados como privados com este prefixo;
* A criar métodos *assessors* para “expôr” e permitir acesso e modificação de propriedades de forma controlada e restrita, através do uso das funções `get` para retornar dados específicos e `set` para definir dados específicos.

### 01 - Atributos Privados
* Declarar **variáveis privadas** com `#` ou `_`.

### 02 - Métodos Privados
* Criar **métodos privados** nas classes.

### 03 - Getters
* Usar a palavra chave `get` para acessar a propriedade de um objeto.
* Chamar o **getter** da propriedade do objeto.

### 04 - Setters
* Atribuir valores para as propriedades de um objeto através do método `set`.