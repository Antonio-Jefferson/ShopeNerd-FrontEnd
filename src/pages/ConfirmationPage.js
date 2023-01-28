import React from 'react';
import styled from 'styled-components'

const itens = [{ name: 'iphone', valor: 1500 }, { name: 'iphone', valor: 1500 }, { name: 'iphone', valor: 1500 }, { name: 'iphone', valor: 1500 }, { name: 'iphone', valor: 1500 }]
export default function ConfirmationPage() {

  const [nome, setNome] = React.useState('')
  const [cidade, setCidade] = React.useState('')
  const [cep, setCep] = React.useState('')
  const [endereco, setEndereco] = React.useState('')
  const [numEndereco, setNumEndereco] = React.useState('')
  const [pagamento, setPagamento] = React.useState('')

  function FinalizarCompra(e) {
    e.preventDefault()
    console.log(pagamento, endereco)

  }

  return (
    <>
      <Header>
        <h1>ShopeNerd</h1>
      </Header>
      <Body>
        <Pedidos>
          <div className='container'>
            <div>
              {itens.map((item) =>
                <span>
                  <p>{item.name}</p>
                  <p>R$ {item.valor.toFixed(2)} </p>
                </span>

              )}

            </div>
            <span className='total'>
              <p>Total</p>
              <p>R$ 54646.00</p>
            </span>
          </div>
        </Pedidos>
        <Forms onSubmit={FinalizarCompra}>
          <h1>Preencha seus dados</h1>
          <input
            type="text"
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder="Nome completo"
            required>

          </input>
          <input
            className='inputCidade'
            type="text"
            value={cidade}
            onChange={e => setCidade(e.target.value)}
            placeholder="Cidade"
            required>

          </input>
          <input
            className='inputCep'
            type="text"
            value={cep}
            onChange={e => setCep(e.target.value)}
            placeholder="CEP"
            required>

          </input>

          <input
            className='inputEndereco'
            type="text"
            value={endereco}
            onChange={e => setEndereco(e.target.value)}
            placeholder="Endereço"
            required>

          </input>
          <input
            className='inputNumero'
            type="number"
            value={numEndereco}
            onChange={e => setNumEndereco(e.target.value)}
            placeholder="Número"
            required>

          </input>
          <h2>Forma de pagamento</h2>
          <div>

            <div>
              <label htmlFor="credito">Cartão de crédito</label>
              <input type="radio" id="credito" name="pagamento" value="credito" onChange={e => setPagamento(e.target.value)} />

            </div>
            <div>
              <label htmlFor="pix">Pix</label>
              <input type="radio" id="pix" name="pagamento" value="pix" onChange={e => setPagamento(e.target.value)} />

            </div>
            <div>
              <label htmlFor="boleto">Boleto</label>
              <input type="radio" id="boleto" name="pagamento" value="boleto" onChange={e => setPagamento(e.target.value)} />

            </div>
          </div>
          <button type="submit">Finalizar compra</button>
        </Forms>
      </Body>

    </>
  );
}



const Header = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 101px;
    background: #0F52BA;
    padding: 28px 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
      color: white;
      text-align: left;
      font-weight: 600;
      font-size: 40px;

    }
`

const Body = styled.div`
 height: 100vh;
 width: 100%;
 display: flex;
 justify-content: space-evenly;
 padding-top: 101px;
`

const Pedidos = styled.div`
  height: 458px;
  width: 450px;
  background-color: #E5E4E4;
  margin-top: 30px;
  p{
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0px;
  
  }
  span{
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      
    }
  .container{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div{
      padding: 20px;
      overflow: auto;
    }
  }
  .total{
    
    background-color: #C9C9C9;
    padding: 20px;
    margin-bottom: 0;
    
    p{
      font-weight: 700;
    }
  }
`

const Forms = styled.form`
  margin-top: 30px;

  max-width: 670px;
  input {
      width: 100%;
      height: 58px;
      padding: 16px;
      margin-bottom: 20px;
      font-size: 18px;
      background-color: #FFFFFF;
      border: 2px solid #d9d9d9;
      border-radius: 5px;
      ::placeholder{
          color: #858585;
      }
  }
  button {
      width: 100%;
      height: 58px;
      color: #FFFFFF;
      font-size: 30px;
      font-weight: 700;
      background-color: #0F52BA;
      border-radius: 5px;
      border: none;
      :hover{
          cursor: pointer;
      }
  }
  h1{
    font-size: 34px;
    font-weight: 700;
    line-height: 41px;
    letter-spacing: 0px;
    text-align: left;
    color: #0F52BA;

    margin-bottom: 15px;

  }

  h2{
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0px;
    text-align: left;
    color: #0F52BA;
    margin-bottom: 15px;

  }

  div{
    display: flex;
    justify-content: space-around;
    
    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      input{
        height: 25px;
        margin-bottom: 25px;
      }
      label{
        margin-bottom: 5px;
        color: #858585;
        font-weight: 600;
      }

    }
    h1{
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0px;
        text-align: left;
        color: #858585;

    }
  }

  .inputCidade{
    width: 53%;
    margin-right: 3%;
  }
  .inputCep{
    width: 44%;
  }
  .inputEndereco{
    width: 73%;
    margin-right: 2%;
  }
  .inputNumero{
    width: 25%;
  }

`