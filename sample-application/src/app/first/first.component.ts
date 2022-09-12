import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { elementAt } from 'rxjs';

interface scope{
  scopeName : string

}


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.less']
})


export class FirstComponent implements OnInit {
  Swagger : any = null;

  scopes: any;
    constructor(private http: HttpClient) { }

  
  goToLogin()
  {

    

   let  url  = 'https://login.eveonline.com/oauth/authorize?response_type=code&redirect_uri=http://localhost:4200/esi_callback&client_id=7f45c8124b2640beba3a6902df6832a2&scope=esi-characters.read_standings.v1'


   window.location.href = url;

  }


  printSwagger(){

this.scopes = this.Swagger.securityDefinitions.evesso.scopes;

    console.log( this.scopes   )
   let tmp =  this.scopes

tmp.lastIndexOf


   console.log( this.Swagger, "YOOOLOOOo" ,  tmp.lastIndexOf )

  }

  getSwagger()
  {
    let swaggerUrl = "https://esi.evetech.net/latest/swagger.json?datasource=tranquility"

    this.http.get<any>(swaggerUrl )
      .subscribe((data : any[] ) => {
          this.Swagger = data
          //data;


        //  const obj = JSON.parse(data)
          console.log(data)
      })
  }
    ngOnInit() {      
        this.getSwagger();
    }
}
