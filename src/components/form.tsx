import { FormBar, FormInput, FormLabel, FormularioS } from "@/styles/formularioS";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import useJsonP from "use-jsonp";

export function Formulario() {
    const [cnpj, setCnpj] = useState("")
    const [dados, setDados] = useState({
        NOME: undefined,
        NUMERO: undefined,
        ["NOME FANTASIA"]: undefined,
        ["CNAE PRINCIPAL DESCRICAO"]: undefined,
        ["DATA ABERTURA"]: undefined,
        ["RAZAO SOCIAL"]: undefined,
        SETOR: undefined,
        STATUS: undefined,
    })

    function validarInput(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.value.length < 15) {
            setCnpj((e.target.value))
        }
    }

    async function validarCnpj() {
        const request = `https://api-publica.speedio.com.br/buscarcnpj?cnpj=${cnpj}`
        const response = await axios.get(request).then(res => res.data)
        console.log(response)
        setDados(response)
    }

    return <>
        <FormularioS>
            <h2>CNPJ TESTE</h2>
            <FormBar>
                <FormLabel >CNPJ</FormLabel>
                <FormInput type="text" pattern="\d*" maxLength={14} defaultValue={cnpj} onBlur={validarCnpj} onChange={(e: ChangeEvent<HTMLInputElement>) => validarInput(e)} />
            </FormBar>
            {dados?.["RAZAO SOCIAL"] && <FormBar>
                <FormLabel >Razão Social</FormLabel>
                <FormInput value={dados?.["RAZAO SOCIAL"]} />
            </FormBar>}
            {dados?.["NOME FANTASIA"] && < FormBar >
                <FormLabel >Nome Fantasia</FormLabel>
                <FormInput value={dados?.["NOME FANTASIA"]} />
            </FormBar>}
            {dados?.SETOR && <FormBar>
                <FormLabel >Setor</FormLabel>
                <FormInput value={dados?.SETOR} />
            </FormBar>}
            {dados?.["CNAE PRINCIPAL DESCRICAO"] && <FormBar>
                <FormLabel >Descrição</FormLabel>
                <FormInput value={dados?.["CNAE PRINCIPAL DESCRICAO"]} />
            </FormBar>}
            {dados?.["DATA ABERTURA"] && <FormBar>
                <FormLabel >Abertura</FormLabel>
                <FormInput value={dados?.["DATA ABERTURA"]} />
            </FormBar>}
            {dados?.STATUS && <FormBar>
                <FormLabel >Status</FormLabel>
                <FormInput value={dados?.STATUS} />
            </FormBar>}
        </FormularioS >
    </>
}
