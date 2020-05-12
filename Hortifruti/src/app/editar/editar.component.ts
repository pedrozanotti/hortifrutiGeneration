import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../service/produtos.service';
import { Produtos } from '../model/produtos';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  produtos: Produtos = new Produtos



  constructor(private produtosService: ProdutosService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    var id = this.route.snapshot.params['id']
    this.findById(id)
  }

  findById(id: number) {
    this.produtosService.getByIdProduto(id).subscribe((resp: Produtos) => {
      this.produtos = resp

    })
  }

  salvar(){
    this.produtosService.putProduto(this.produtos).subscribe((resp: Produtos)=>{
    this.produtos = resp
    this.router.navigate(['/loja'])
    location.assign('/loja')
  })
}

cancelar(){
  this.router.navigate(['/loja'])
}
}

  
   
  







