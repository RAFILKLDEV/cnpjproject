import { FormBar, FormInput, FormLabel, FormularioS } from "@/styles/formularioS";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import useJsonP from "use-jsonp";

export function Formulario() {
    const [cnpj, setCnpj] = useState<number>()
    const [dados, setDados] = useState({
        nome: undefined,
    })

    function validarInput(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.value.length < 15) {
            setCnpj(Number(e.target.value))
        }
    }

    async function validarCnpj() {

        // const jsonNow = useJsonP({
        //     url: "https://receitaws.com.br/v1/cnpj/13733990000119",
        //     id: "my",
        //     callback: (data) => console.log(data),
        //     callbackParam: "callback"
        // });

        // jsonNow()
        
        function teste(data: any) {
            console.log(data)
        }
        axios.get("https://receitaws.com.br/v1/cnpj/13733990000119?callback=teste")


    }

    return <>
        <FormularioS>
            <h2>CNPJ TESTE</h2>
            <FormBar>
                <FormLabel >CNPJ</FormLabel>
                <FormInput maxLength={14} defaultValue={cnpj} onBlur={validarCnpj} onChange={(e: ChangeEvent<HTMLInputElement>) => validarInput(e)} type="number" />
            </FormBar>
            {dados?.nome && <FormBar>
                <FormLabel >Nome</FormLabel>a
                <FormInput />
            </FormBar>}
            <FormBar>
                <FormLabel >Nome Fantasia</FormLabel>
                <FormInput />
            </FormBar>
            <FormBar>
                <FormLabel >Abertura</FormLabel>
                <FormInput />
            </FormBar>
            <FormBar>
                <FormLabel >Logradouro</FormLabel>
                <FormInput />
            </FormBar>
        </FormularioS>
    </>
}