import { useState } from 'react';
import { cepService } from './services/cepService';
import { userService } from './services/userService';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { dias, meses, anos, estadosCivil, sexos } from './utils/selectOptions';

function App() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [dataNasc, setDataNasc] = useState({ dia: '', mes: '', ano: '' });
  const [estadoCivil, setEstadoCivil] = useState('');
  const [sexo, setSexo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [endNum, setEndNum] = useState();
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [cep, setCep] = useState();
  const [tel1, setTel1] = useState();
  const [tel2, setTel2] = useState();
  const [cel, setCel] = useState();
  const [contato, setContato] = useState('');
  const [email, setEmail] = useState('');
  const [rg, setRg] = useState();
  const [cpf, setCpf] = useState();
  const [veiculo, setVeiculo] = useState('');
  const [cnh, setCnh] = useState('');

  const getAddress = async () => {
    let endereco;

    try {
      endereco = await cepService.getAddress(cep);
      setEndereco(endereco.data.logradouro);
      setBairro(endereco.data.bairro);
      setCidade(endereco.data.localidade);
    } catch {
      alert('CEP inválido');
      setCep('');
      setEndereco('');
      setBairro('');
      setCidade('');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nome,
      jobTitle: cargo,
      birthDate: `${dataNasc.dia}-${dataNasc.mes}-${dataNasc.ano}`,
      maritalStatus: estadoCivil,
      gender: sexo,
      address: `${endereco}, ${endNum}`,
      district: bairro,
      city: cidade,
      cep: cep,
      telephone: tel1,
      telephone2: tel2,
      celphone: cel,
      contact: contato,
      email: email,
      rg: rg,
      cpf: cpf,
      hasCar: veiculo,
      driversLicence: cnh,
    };

    console.log(formData);

    userService.registerUser(formData);
  };

  return (
    <div className="App">
      <div className="container">
        <h4>DADOS PESSOAIS</h4>

        <hr />

        <form onSubmit={onSubmit}>
          <div className="row mt-4">
            <div className="col-md">
              <div className="form-group">
                <label htmlFor="nome">
                  Nome Completo <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col-md">
              <div className="form-group">
                <label htmlFor="cargo">Cargo Pretendido</label>
                <input
                  type="text"
                  className="form-control"
                  id="cargo"
                  value={cargo}
                  onChange={(e) => setCargo(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-sm">
              <div className="form-group">
                <label htmlFor="dia">
                  Data de Nascimento <span className="required">*</span>
                </label>
                <div id="data">
                  <div className="row">
                    <div className="col">
                      <select
                        name="dia"
                        id="dia"
                        className="form-select"
                        value={dataNasc.dia}
                        onChange={(e) =>
                          setDataNasc({ ...dataNasc, dia: e.target.value })
                        }
                        required
                      >
                        <option value=""></option>
                        {dias.map((dia) => (
                          <option key={dia.value} value={dia.value}>
                            {dia.text}
                          </option>
                        ))}
                      </select>
                      <small id="dayHelp" className="form-text text-muted">
                        Dia
                      </small>
                    </div>
                    <div className="col">
                      <select
                        name=""
                        id="mes"
                        className="form-select"
                        value={dataNasc.mes}
                        onChange={(e) =>
                          setDataNasc({ ...dataNasc, mes: e.target.value })
                        }
                        required
                      >
                        <option value=""></option>
                        {meses.map((mes) => (
                          <option key={mes.value} value={mes.value}>
                            {mes.text}
                          </option>
                        ))}
                      </select>
                      <small id="monthHelp" className="form-text text-muted">
                        Mês
                      </small>
                    </div>
                    <div className="col">
                      <select
                        name=""
                        id="ano"
                        className="form-select"
                        value={dataNasc.ano}
                        onChange={(e) =>
                          setDataNasc({ ...dataNasc, ano: e.target.value })
                        }
                        required
                      >
                        <option value=""></option>
                        {anos.map((ano) => (
                          <option key={ano.value} value={ano.value}>
                            {ano.text}
                          </option>
                        ))}
                      </select>
                      <small id="yearHelp" className="form-text text-muted">
                        Ano
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="estado-civil">Estado Civil</label>
                    <select
                      name="estado-civil"
                      id="estado-civil"
                      className="form-select"
                      value={estadoCivil}
                      onChange={(e) => setEstadoCivil(e.target.value)}
                    >
                      <option value=""></option>
                      {estadosCivil.map((el) => (
                        <option key={el.value} value={el.value}>
                          {el.text}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="form-group">
                    <label htmlFor="sexo">Sexo</label>
                    <select
                      name="sexo"
                      id="sexo"
                      className="form-select"
                      value={sexo}
                      onChange={(e) => setSexo(e.target.value)}
                    >
                      <option value=""></option>
                      {sexos.map((el) => (
                        <option key={el.value} value={el.value}>
                          {el.text}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md">
              <div className="form-group">
                <label htmlFor="cep">
                  CEP <span className="required">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="cep"
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="col-md relative">
              <button
                className="btn-sm btn-success btn-position"
                type="button"
                onClick={getAddress}
              >
                Consultar CEP
              </button>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <div className="form-group">
                <label htmlFor="endereco">
                  Endereço <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="endereco"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="endNum">
                  Número <span className="required">*</span>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="endNum"
                  value={endNum}
                  onChange={(e) => setEndNum(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label htmlFor="bairro">
                  Bairro <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bairro"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md">
              <div className="form-group">
                <label htmlFor="cidade">
                  Cidade <span className="required">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col-md">
              <div className="form-group">
                <label htmlFor="tel1">Telefone Fixo 1</label>
                <input
                  type="number"
                  className="form-control"
                  id="tel1"
                  value={tel1}
                  onChange={(e) => setTel1(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md">
              <div className="form-group">
                <label htmlFor="tel2">Telefone Fixo 2</label>
                <input
                  type="number"
                  className="form-control"
                  id="tel2"
                  value={tel2}
                  onChange={(e) => setTel2(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md">
              <div className="form-group">
                <label htmlFor="cel">Celular</label>
                <input
                  type="number"
                  className="form-control"
                  id="cel"
                  value={cel}
                  onChange={(e) => setCel(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md">
              <div className="form-group">
                <label htmlFor="contato">Contato</label>
                <input
                  type="text"
                  className="form-control"
                  id="contato"
                  value={contato}
                  onChange={(e) => setContato(e.target.value)}
                />
              </div>
            </div>

            <div className="col-md">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="row mt-5"></div>

          <h4>DOCUMENTOS</h4>

          <hr />

          <div className="row mt-4">
            <div className="col-md">
              <div className="row">
                <div className="col">
                  <label htmlFor="rg">
                    Identidade <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="rg"
                    value={rg}
                    onChange={(e) => setRg(e.target.value)}
                    required
                  />
                </div>

                <div className="col">
                  <label htmlFor="cpf">
                    CPF <span className="required">*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="cpf"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="row">
                <div className="col">
                  <label htmlFor="veiculo">Possui Veículo</label>
                  <select
                    className="form-select"
                    name="veiculo"
                    id="veiculo"
                    value={veiculo}
                    onChange={(e) => setVeiculo(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="S">Sim</option>
                    <option value="N">Não</option>
                  </select>
                </div>

                <div className="col">
                  <label htmlFor="cnh">Habilitação</label>
                  <select
                    className="form-select"
                    name="cnh"
                    id="cnh"
                    value={cnh}
                    onChange={(e) => setCnh(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 mb-5">
            <div className="col text-center">
              <button className="btn-lg btn-primary" type="submit">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
