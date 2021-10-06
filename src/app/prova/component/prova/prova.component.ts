import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Estagiario, Device } from '../../models'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { mascaraCelular8Digitos, mascaraCelular9Digitos, mascaraData, dataFormarter, telefoneFormarter } from '../../Utilitarios'



 
@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent implements OnInit{

  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;
  displayedColumns: string[] = ['position', 'Nome', 'Email', 'Nascimento', 'Telefone'];
  ELEMENT_DATA: Estagiario[]=[{position: 1,},{position: 2},{position: 3},{position: 4},{position: 5}]
  dataSource: MatTableDataSource<Estagiario>
  aux: number = 0
  device: Device = new Device()
  plataforma: string
  menuOpen: boolean
  mascaraCelular = mascaraCelular8Digitos
  mascaraData = mascaraData

  provaform=this.FB.group({ 
    Nome: [null,Validators.required],
    Email: [null,Validators.required],
    Nascimento: [null,[Validators.required,Validators.minLength(8)]],
    Telefone: [null,[Validators.required,Validators.minLength(10)]]
  }
  )
  constructor(private FB:FormBuilder,
    private breakpointObserver: BreakpointObserver,
    ) { }
  
   ngOnInit() {
    this.dataSource = new MatTableDataSource<Estagiario>()
    this.dataSource.data=this.ELEMENT_DATA
    setTimeout(()=>{
      this.dataSource.paginator = this.paginator;
    })
    this.breakpointObserver.observe(['(max-width:500px)']).subscribe((state:BreakpointState)=>{
      if (state.matches){
      this.plataforma=this.device.MOBILE
      console.log(this.plataforma)
      }
      else if (!state.matches && this.plataforma !== this.device.DESKTOP){
        this.plataforma=this.device.TABLET
        console.log(this.plataforma)
      }
    }) 
    this.breakpointObserver.observe(['(min-width:1025px)']).subscribe((state:BreakpointState)=>{
      if (state.matches){
      this.plataforma=this.device.DESKTOP
      console.log(this.plataforma)
      }
      else if (!state.matches && this.plataforma !== this.device.MOBILE){
        this.plataforma=this.device.TABLET
        console.log(this.plataforma)
      }
    }) 
  }
  mudarMenu(isopen: boolean){
    this.menuOpen=isopen
    console.log(this.menuOpen)  }
  autoScroll(target: string){
    if(target==='Cadastro') {
      if (this.plataforma==='Desktop'){
      setTimeout(()=>{
        window.scrollTo(0,700)
      },100);}
      else if (this.plataforma==='Tablet'){
        setTimeout(()=>{
          window.scrollTo(0,350)
        },100);
      }
      else if (this.plataforma==='Mobile')
      setTimeout(()=>{
        window.scrollTo(0,550)
      },100);
    }
    else if (target==='Lista') {
      if (this.plataforma==='Desktop'){
        setTimeout(()=>{
          window.scrollTo(0,1400)
        },100);}
        else if (this.plataforma==='Tablet'){
          setTimeout(()=>{
            window.scrollTo(0,1050)
          },100);
        }
        else if (this.plataforma==='Mobile')
        setTimeout(()=>{
          window.scrollTo(0,1250)
        },100);
    }
    else if (target==='Sobre mim') {
      if (this.plataforma==='Desktop'){
        setTimeout(()=>{
          window.scrollTo(0,2100)
        },100);}
        else if (this.plataforma==='Tablet'){
          setTimeout(()=>{
            window.scrollTo(0,1750)
          },100);
        }
        else if (this.plataforma==='Mobile')
        setTimeout(()=>{
          window.scrollTo(0,1950)
        },100);
    }
    else if (target==='Header'){
      window.scrollTo(0,0)
    }
  }
  cadastarEstagiario(){
    if (this.provaform.valid){
      this.addEstagiario()
    }
  }
  addEstagiario(){
    const NovoEstagiario = new Estagiario()
    const formvalues = this.provaform.getRawValue()
    Object.keys(formvalues).forEach(key => {
      let value = formvalues[key]
      NovoEstagiario[key] = value
    })
    NovoEstagiario.position=this.ELEMENT_DATA.length+1
    if(NovoEstagiario.position<=10 && this.aux<5){
      NovoEstagiario.position=this.aux+1
      this.ELEMENT_DATA[this.aux]=NovoEstagiario
      this.aux++
    }
    else{this.ELEMENT_DATA.push(NovoEstagiario)}  
    this.dataSource = new MatTableDataSource<Estagiario>()
    this.dataSource.data = this.ELEMENT_DATA
    this.dataSource.paginator = this.paginator;
    console.log(NovoEstagiario)
  }
  setMask(){
    this.provaform.controls.Telefone.valueChanges.subscribe(value => {
      if(value && value.length>10){
        this.mascaraCelular=mascaraCelular9Digitos
      }
     else {
       this.mascaraCelular=mascaraCelular8Digitos
     }
    })
  }
  formatarData(data: string){
    return dataFormarter(data)
  }
  formatarTelefone(telefone: string){
    return telefoneFormarter(telefone)
  }
}
