// Desafio disponível em https://www.hackerrank.com/challenges/js10-inheritance

class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

/*
 *  Write code that adds an 'area' method to the Rectangle class' prototype
 */
Rectangle.prototype.area = function () {
  return this.w * this.h;
};

/*
 * Create a Square class that inherits from Rectangle and implement its class constructor
 */
class Square extends Rectangle {
  constructor(w) {
    super(w, w);
    // A palavra-chave super é usada para acessar o objeto pai de um objeto, em outros casos,
    //  é usada para acessar a classe pai de uma classe.
  }
}
