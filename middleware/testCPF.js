/** Function explanation:
 *  https://www.devmedia.com.br/validar-cpf-com-javascript/23916
 */
exports.testCPF = async (req, res, next) => {
  const { cpf } = req.body;

  let Soma;
  let Resto;
  Soma = 0;
  if (cpf == '00000000000') {
    return res.status(400).json({
      status: 'fail',
      message: `${cpf} is an invalid CPF`
    });
  }

  for (i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(cpf.substring(9, 10))) {
    return res.status(400).json({
      status: 'fail',
      message: `${cpf} is an invalid CPF`
    });
  }

  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(cpf.substring(10, 11))) {
    return res.status(400).json({
      status: 'fail',
      message: `${cpf} is an invalid CPF`
    });
  }

  next();
};
