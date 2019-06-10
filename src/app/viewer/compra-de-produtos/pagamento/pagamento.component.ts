import { Component, AfterViewChecked } from '@angular/core';


declare let paypal: any;

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})


export class PagamentoComponent implements AfterViewChecked {

  addScript: boolean = false;
  paypalLoad: boolean = true;

  totalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',

    client: {
      sandbox: 'AUEDVkrWlzl7mq2ThdFIz5kB2i-Wa5fZZ-qZ8uRPzkSYnFKfORWcx71V1vq2OwArTUD47LMTMAP8oyKE',
      production: '<your-production-key here>'
    },

    commit: true,
    payment: (data, actions) => {

      let a = actions.payment.create({
        payment: {
          transactions: [
            // ****** O valor fixo do pagamento vai vir aqui
            { amount: { total: this.totalAmount, currency: 'BRL' } }
          ]
        }
      });
      //console.log(a);
      return a;
    },


    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
        window.alert('Pagamento efetuado!');
        /*
        endereco_entrega = {
          'rua': payment.payer.payer_info.shipping_address.line1 ,
          'bairro': payment.payer.payer_info.shipping_address.line2,
          'cidade': payment.payer.payer_info.shipping_address.city,
          'estado': payment.payer.payer_info.shipping_address.state,
          'cep': payment.payer.payer_info.shipping_address.postal_code
        };
        */
        console.log(payment.payer.payer_info.shipping_address);
        // Ver parte do backend
      })
    }
  };


  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }


  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

}







/*
// export class PagamentoComponent implements OnInit, AfterViewChecked {
export class PagamentoComponent implements AfterViewChecked {

  addScript: boolean = false;

  paypalCarregando: boolean = true;    //paypalLoad: boolean = true;

  montanteFinal: number = 1;


  constructor() { }

  ngOnInit() {
  }


  paypalConfiguracao = {
    env: 'sandbox',

    // Códigos da conta sandbox do paypal
    client: {
      // Key
      sandbox: '<your-sandbox-key-here>',
      // Secret key
      production: '<your-production-key here>'
    },

    commit: true,

    pagamento: (data, actions) => {
      return actions.pagamento.create({
        pagamento: {
          transactions: [
            { montante: { total: this.montanteFinal, moeda: 'USD' } }
            // é possível alterar o tipo da moeda
            //{ amount: { total: this.montanteFinal, moeda: 'BRL' } }
          ]
        }
      });
    },

    onAuthorize: (data, actions) => {
      return actions.pagamento.execute().then((pagamento) => {
        // Faça alguma coisa quando o pagamento é feito com sucesso.
      })
    }
  };



  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfiguracao, '#botao-paypal-checkout');
        this.paypalCarregando = false;
      })
    }
  }



  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');
      //  <script src="https://www.paypalobjects.com/api/checkout.js"> </script>
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }



}
*/