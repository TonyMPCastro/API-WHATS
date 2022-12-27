
const venom = require('venom-bot');

const express = require('express'); // inclui a biblioteca express
const app = express(); //inicia o express
const port = 3000;// porta do serviço

const saudacoes = ['Boa madrugada','Oi, sumido','Olá, sumido', 'Bom dia', 'Boa tarde', 'Boa noite', 'Olá', 'Ola', 'ola', 'Hi', 'Oi', 'Como vai','Amigo','amigo','boa tarde','boa noite', 'oi','bom dia'];
//mostra o tempo da aplicação no console
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

venom
  .create({
    session: 'User', //name of session
    multidevice: true // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

  function start(client) {

    client.onMessage((message) => {
        if (saudacoes.includes(message.body) && message.isGroupMsg === false) {

          //  client.sendText(message.from, '🏷️✉️🎁 Identificamos que terminou o seu teste!🖥️📺\nMas não se preocupe temos planos especiais para você!\n'
          // +'Planos que vão te garantir a melhor grade de canais do Brasil 🇧🇷 !!\nEscolha agora a melhor opção para você:'
          // +'\n *M* -> *Mensal : R$ 29,90* 💵🪙💸'
          // +'\n *T* -> *Trimestral : R$ 59,90* 💵🪙💸'
          // +'\n *A*-> *Anual : R$ 119,90* 🪙💸'
          // +'\nAgora é só aproveitar! 🎉\n E turbinar sua Tv 🖥️📺🚀'
          // +'\n\nQual a melhor opção para você?')
          //   .then((result) => {
          //     console.log('Result: ', result); //return object success
          //   })
          //   .catch((erro) => {
          //     console.error('Error when sending: ', erro); //return object error
          //   });
          
          client
            .sendText(message.from, '🎉Bem vindo(a)!🎉  \nSou Antony!🤖 \nUm Robo pessoal, em treinamento!'+
            '\nPara melhor atende-lô pedirei que escolha uma das opções ou que digite de maneira breve e sucinta seu questionamento!'
            +'\n\nEscolha uma opção de *Assunto*:'
            +'\n*1* - Pessoal'
            +'\n*2* - Trabalho'
            +'\n*3* - Faculdade'
            +'\n*4* - Trabalho não Programado'
            +'\n*5* - Orçamento'
            +'\n*6* - Cobrança')
            .then((result) => {
              console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }


        
        if (message.body === '1' && message.isGroupMsg === false) {
          client
            .sendText(message.from, 'Se for muito importante, digite seu problema e espere a resposta. Se não espere sentado, que vai demorar responder')
            .then((result) => {
             console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }
   
        if (message.body === '2' && message.isGroupMsg === false) {
          client
            .sendText(message.from, '😭😭😭😭 Fale sua Solicitação!')
            .then((result) => {
             console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }
   
        if (message.body === '3' && message.isGroupMsg === false) {
          client
            .sendText(message.from, 'E mané, deu Ruim, por que sobre isso só no email: 📧 amp.castro@discente.ufma.br')
            .then((result) => {
             console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }
        
        
        if (message.body === '4' && message.isGroupMsg === false) {
          client
            .sendText(message.from, 'Tente a sorte, se tiver tempo vão lhe atender!')
            .then((result) => {
             console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }

        
        if (message.body === '5' && message.isGroupMsg === false) {
          client
            .sendText(message.from, '💵🪙💸💵🪙💸💵🪙💸💵🪙💸💵🪙💸\nDescreva sua solicitão pra ontem!')
            .then((result) => {
             console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }
        
         
        if (message.body === '6' && message.isGroupMsg === false) {
          client
            .sendText(message.from, '💵🪙💸💵🪙💸💵KKKKKKKKKKKKKKKKKKKKKKK 🪙💸💵🪙💸💵🪙💸\n Se deu mal, Conta ta no vermelho, devendo mais que o Brasil!🇧🇷🇧🇷')
            .then((result) => {
             console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }
        


        if ((message.body === 'M' || message.body === 'm') && message.isGroupMsg === false) {
          client
            .sendText(message.from, '🎉Oooooooba!🎉\nObrigado por escolher a melhor grade do Brasil!🇧🇷🇧🇷\n'
            +'Você escolheu o plano Mensal por apenas *💵🪙💸 R$ 29,90* 💵🪙💸\nSegue o link para pagamento: https://www.mercadopago.com.br/')
            .then((result) => {
             console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }

        if ((message.body === 'T' || message.body === 't') && message.isGroupMsg === false) {
          client
            .sendText(message.from, '🎉Oooooooba!🎉\nObrigado por escolher a melhor grade do Brasil!🇧🇷🇧🇷\n'
            +'Você escolheu o plano Trimestral por apenas *💵🪙💸 R$ 59,90* 💵🪙💸\nSegue o link para pagamento: https://www.mercadopago.com.br/')
            .then((result) => {
             console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }

        if ((message.body === 'A' || message.body === 'a') && message.isGroupMsg === false) {
          client
            .sendText(message.from, '🎉Oooooooba!🎉\nObrigado por escolher a melhor grade do Brasil!🇧🇷🇧🇷\n'
            +'Você escolheu o plano Anual por apenas *💵🪙💸 R$ 119,90* 💵🪙💸\nSegue o link para pagamento: https://www.mercadopago.com.br/')
            .then((result) => {
             console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }




        if (message.body === 'Não' && message.isGroupMsg === false) {
          client
            .sendText(message.from, 'Ohhhh!\nTchau!')
            .then((result) => {
             console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
              console.error('Error when sending: ', erro); //return object error
            });
        }
      });
    //retorna um Hello Word! pra quem acessar base
    app.get('/', (req, res) => {

        var to = "559885608036@c.us";
        var  body =  "teste de mensagem via API"; 
        var resulte = {'Server':'Hello Word!','Numero':to, 'Mensagem':body};
        var atte = {content: resulte};
      ste =  JSON.stringify(atte);
      client.sendText(to,body).then((result) => {
        console.log('Result: ', result); //return object success
      })
    res.end(ste);
  })


  app.post('/mensagem',async(req, res)=>{

    const {number,message} = req.body;
    try{

      client.sendText(number,message).then((result) => {
        console.log('Result: ', result); //return object success
      })
    return res.status(200).json({status: "Enviado Com sucesso"})

    }catch (error){
        console.error("error :",error)  
        res.status(500).json({status: "error",menssage:error})  
    }

    
})



app.get('/msm/:num',async(req, res)=>{


  var num = req.params.num+"@c.us";
    var msm = "🎉Bem vindo(a)!🎉\nOlá,❤️!";



if(req.params.num.length >= 12){

    client.sendText(num,msm).then((result) => {
    //  console.log('Result: ', result); //return object success
    })


    
// Send Messages with Buttons Reply
const buttons = [
  {
    "buttonText": {
      "displayText": "Mensal"
      }
    },
  {
    "buttonText": {
      "displayText": "Trimestral"
      }
    },
    {
      "buttonText": {
        "displayText": "Anual"
        }
      }

  ];
  
  await client.sendText(num, '🏷️✉️🎁 Identificamos que terminou o seu teste!🖥️📺\nMas não se preocupe temos planos especiais para você!\n'
+'Planos que vão te garantir a melhor grade de canais do Brasil 🇧🇷 !!\nEscolha agora a melhor opção para você:'
+'\n 💵🪙💸 *Mensal : R$ 29,90* 💵🪙💸'
+'\n 💵🪙💸*Trimestral : R$ 59,90* 💵🪙💸'
+'\n 💵🪙💸 *Anual : R$ 119,90* 🪙💸'
+'\nAgora é só aproveitar! 🎉\n E turbinar sua Tv 🖥️📺🚀'
+'\n\nQual a melhor opção para você?')
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });

    var resulte = {status: "Enviado Com sucesso",'Numero':num, 'Mensagem':msm};
    var atte = {content: resulte};
  ste =  JSON.stringify(atte);
res.end(ste);

}else (error)=>{
  console.error("error :",error)  
  var resulte = {status: "Error",'Numero':num, 'Mensagem':msm};
  var atte = {content: resulte};
ste =  JSON.stringify(atte);
res.end(ste); 
}
  
})


  app.listen(port, () => {
    //console.log(`Server running at http://localhost:${port}/`);
  });
  
  

  }