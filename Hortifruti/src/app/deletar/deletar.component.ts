import { Component, OnInit } from '@angular/core';
import { Produtos } from '../model/produtos';
import { ProdutosService } from '../service/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletar',
  templateUrl: './deletar.component.html',
  styleUrls: ['./deletar.component.css']
})
export class DeletarComponent implements OnInit {

  produtos: Produtos = new Produtos
  delOk:boolean = false
  

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id: number = this.route.snapshot.params['id']
    this.findById(id)
  }


  findById(id: number) {
    this.produtosService.getByIdProduto(id).subscribe((resp: Produtos) => {
      this.produtos = resp
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    })
  }

  btnSim(){
    this.produtosService.deletePostagem(this.produtos.id).subscribe(()=>{
    this.delOk = true
    this.router.navigate(['/loja'])
    localStorage.setItem("dekOk", this.delOk.toString())
    })
  }  

  
  btnNao(){
    this.router.navigate(['/loja'])
  }
}


  


