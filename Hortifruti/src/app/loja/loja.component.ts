import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/produtos'

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  listaProdutos: Produtos []
  produtos: Produtos = new Produtos

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.findAllProdutos()
  }

  findAllProdutos(){
    this.produtosService.getAllProdutos().subscribe((resp: Produtos[])=>{
      this.listaProdutos=resp
    })
 }

 publicar(){
  this.produtosService.postPostagem(this.produtos).subscribe((resp: Produtos)=>{
    this.produtos = resp
    location.assign('/loja')
   })
}
    
    
 

}
