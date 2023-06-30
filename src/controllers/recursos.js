
module.exports = {
    async raiz(req,res){
      return res.send('Respota da raiz');
    },
    async rota2(req,res){
        return res.send('Resposta da 2 raiz');
      },
      async rota3(req,res){
        return res.send('Resposta da 3 raiz');
      },
      async rota4(req,res){
        return res.send('Resposta da 4 raiz');
      },
      async rota5(req,res){
        return res.send('Resposta da 5 raiz');
      },
};
