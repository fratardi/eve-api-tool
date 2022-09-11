import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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

  printSwagger(){

this.scopes = this.Swagger.securityDefinitions.evesso.scopes;

    console.log( this.scopes   )


   console.log( this.Swagger )

  }

  getSwagger()
  {
    let swaggerUrl = "https://esi.evetech.net/latest/swagger.json?datasource=tranquility"

    let  headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }



    this.http.get<any>(swaggerUrl )
      .subscribe(data => {
          this.Swagger = data
          //data;
        //  const obj = JSON.parse(data)
          console.log(data)
      })
     // window.location.href = 'http://www.cnn.com/';
  }

    ngOnInit() {      
        this.getSwagger();
    }
}
