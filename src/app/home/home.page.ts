import { Component } from '@angular/core';
import { range } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  peso : string
  altura : string
  opcao : string
  saida : string
  mensagem : string
  imagem : any = "assets/icon/favicon.png"

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'IMC',
      subHeader: this.saida,
      message: this.mensagem,
      buttons: ['FECHAR'],
    });

    await alert.present();
  }

    imc(){


      if(this.opcao == null){
        this.mensagem = "Selecione o Sexo"
    }


    else{
      var p = parseFloat(this.peso)
      var a = parseFloat(this.altura)
      var imc = p / a**2
      this.saida = imc.toFixed(1)

      if(this.opcao == "f"){
        if(imc <=19){
          this.mensagem = "ABAIXO DO PESO"
          this.imagem = "assets/icon/favicon.png"
        }
        else if(imc > 19 && imc <=27.3){
          this.mensagem = "PESO NORMAL"
          this.imagem = "assets/icon/favicon.png"
        }
        else{
          this.mensagem = "ACIMA DO PESO"
          this.imagem = "assets/icon/Alerta.png"
        }

      }else{
        if(imc <= 20.7){
          this.mensagem="ABAIXO DO PESO"
          this.imagem = "assets/icon/favicon.png"
        }
        else if(imc > 20.7 && imc <= 27.8){
          this.mensagem = "PESO NORMAL"
          this.imagem = "assets/icon/favicon.png"
        }
        else{
          this.mensagem = "ACIMA DO PESO"
          this.imagem = "assets/icon/Alerta.png"
        }

      }

  }
//this.presentAlert()
}

}