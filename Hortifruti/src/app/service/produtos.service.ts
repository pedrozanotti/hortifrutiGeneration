import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produtos } from '../model/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  getAllProdutos(){
    return this.http.get('http://31.220.57.121:9080/produtos/')
}
  
postPostagem(postagem: Produtos) {
  return this.http.post('http://31.220.57.121:9080/produtos/', postagem)
}

putProduto(postagem: Produtos){
  return this.http.put('http://31.220.57.121:9080/produtos/', postagem)

}

getByIdProduto(id:number){
  return this.http.get(`http://31.220.57.121:9080/produtos/${id}`)
}
    
   
}
